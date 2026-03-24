// Stripe Checkout integration for Starter plan
// No secrets here — checkout session is created server-side

const CHECKOUT_API = "https://clawai-stripe.vercel.app/api/create-checkout";

(function initCheckout() {
  const btn = document.getElementById("starterCheckoutBtn");
  if (!btn) return;

  // Show success banner if returning from Stripe
  if (window.location.hash === "#success") {
    showSuccessBanner();
  }

  btn.addEventListener("click", async () => {
    // Collect email from the contact form if filled, or prompt
    const emailInput = document.querySelector('#leadForm input[name="email"], #leadForm input[type="email"]');
    let email = emailInput?.value?.trim() || "";

    if (!email) {
      email = prompt(
        document.documentElement.lang === "bg"
          ? "Въведете вашия имейл за плащане:"
          : "Enter your email for payment:"
      );
      if (!email) return;
    }

    btn.disabled = true;
    const originalText = btn.textContent;
    btn.textContent = document.documentElement.lang === "bg" ? "Зареждане..." : "Loading...";

    try {
      // First save contact request to Supabase to get ID
      const contactId = await createContactRequest(email);

      const resp = await fetch(CHECKOUT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contactRequestId: contactId }),
      });

      const data = await resp.json();

      if (!resp.ok || !data.url) {
        throw new Error(data.error || "Checkout failed");
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      alert(
        document.documentElement.lang === "bg"
          ? "Грешка при плащане. Моля, опитайте отново."
          : "Payment error. Please try again."
      );
      console.error("Checkout error:", err);
    } finally {
      btn.disabled = false;
      btn.textContent = originalText;
    }
  });
})();

async function createContactRequest(email) {
  const SUPABASE_URL = "https://mtxyibzekucxvwxlysbx.supabase.co";
  const SUPABASE_ANON_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10eHlpYnpla3VjeHZ3eGx5c2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMDQ3MjgsImV4cCI6MjA4OTU4MDcyOH0.cZX230IvZLtjHQ1kP9zpENa5CDSmZwNPx3Cp8QVWepc";

  // Check if there's already a contact_request for this email
  const client = window.supabase?.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  if (!client) {
    return "direct-checkout-" + Date.now();
  }

  // Try to find existing request
  const { data: existing } = await client
    .from("contact_requests")
    .select("id")
    .eq("email", email)
    .eq("interested_plan", "starter")
    .order("created_at", { ascending: false })
    .limit(1);

  if (existing?.length > 0) {
    return existing[0].id;
  }

  // Create new contact request
  const { data, error } = await client.from("contact_requests").insert([
    {
      email,
      full_name: email.split("@")[0],
      interested_plan: "starter",
      notes: "Direct checkout from pricing button",
      language: document.documentElement.lang || "bg",
      source: "checkout_button",
    },
  ]).select("id");

  if (error || !data?.length) {
    return "checkout-" + Date.now();
  }

  return data[0].id;
}

function showSuccessBanner() {
  const banner = document.createElement("div");
  banner.style.cssText =
    "position:fixed;top:0;left:0;right:0;z-index:9999;background:linear-gradient(135deg,#059669,#10b981);color:white;text-align:center;padding:16px 20px;font-family:inherit;font-size:1.05rem;font-weight:600;box-shadow:0 4px 20px rgba(0,0,0,0.15);";
  banner.textContent =
    document.documentElement.lang === "en"
      ? "✅ Payment successful! We'll set up your AI assistant within 24 hours."
      : "✅ Плащането е успешно! Ще настроим вашия AI асистент до 24 часа.";

  const close = document.createElement("button");
  close.textContent = "✕";
  close.style.cssText =
    "position:absolute;right:16px;top:50%;transform:translateY(-50%);background:none;border:none;color:white;font-size:1.2rem;cursor:pointer;padding:4px 8px;";
  close.addEventListener("click", () => banner.remove());
  banner.style.position = "fixed";
  banner.appendChild(close);

  document.body.prependChild
    ? document.body.prepend(banner)
    : document.body.insertBefore(banner, document.body.firstChild);

  // Clean up URL hash
  history.replaceState(null, "", window.location.pathname);

  // Auto-remove after 10s
  setTimeout(() => banner.remove(), 10000);
}
