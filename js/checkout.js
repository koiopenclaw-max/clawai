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
  // Hide all regular sections, show success page
  const successPage = document.getElementById("success-page");
  if (successPage) {
    // Hide everything except header, footer, and success page
    document.querySelectorAll("main > section").forEach((s) => {
      if (s.id !== "success-page") s.style.display = "none";
    });
    successPage.style.display = "flex";
    
    // Scroll to top
    window.scrollTo(0, 0);
  }

  // Clean up URL hash
  history.replaceState(null, "", window.location.pathname);
}
