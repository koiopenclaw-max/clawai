const SUPABASE_URL = "https://mtxyibzekucxvwxlysbx.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10eHlpYnpla3VjeHZ3eGx5c2J4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQwMDQ3MjgsImV4cCI6MjA4OTU4MDcyOH0.cZX230IvZLtjHQ1kP9zpENa5CDSmZwNPx3Cp8QVWepc";

const translations = window.CLAWAI_TRANSLATIONS || {};
const form = document.getElementById("leadForm");
const formStatus = document.getElementById("formStatus");
const planSelect = document.getElementById("planSelect");
const langToggle = document.getElementById("langToggle");
const faqButtons = document.querySelectorAll(".faq-question");
const planButtons = document.querySelectorAll("[data-plan]");

let currentLanguage = "bg";
let supabaseClient = null;

function getInitialLanguage() {
  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash === "en" || hash === "bg") {
    return hash;
  }
  return "bg";
}

function translatePage(language) {
  const dictionary = translations[language];
  if (!dictionary) {
    return;
  }

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = dictionary["meta.title"];

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag) {
    descriptionTag.setAttribute("content", dictionary["meta.description"]);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    const value = dictionary[key];
    if (!value) {
      return;
    }
    node.textContent = value;
  });

  document.querySelectorAll("[data-lang-label]").forEach((node) => {
    node.classList.toggle("active", node.getAttribute("data-lang-label") === language);
  });

  window.history.replaceState(null, "", `#${language}`);
}

function initLanguageToggle() {
  translatePage(getInitialLanguage());

  langToggle?.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "bg" ? "en" : "bg";
    translatePage(nextLanguage);
  });

  window.addEventListener("hashchange", () => {
    const nextLanguage = getInitialLanguage();
    if (nextLanguage !== currentLanguage) {
      translatePage(nextLanguage);
    }
  });
}

function initFaqAccordion() {
  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const answer = item?.querySelector(".faq-answer");
      const expanded = button.getAttribute("aria-expanded") === "true";

      faqButtons.forEach((otherButton) => {
        const otherItem = otherButton.closest(".faq-item");
        const otherAnswer = otherItem?.querySelector(".faq-answer");
        otherButton.setAttribute("aria-expanded", "false");
        if (otherAnswer) {
          otherAnswer.style.maxHeight = "0px";
        }
      });

      if (!expanded && answer) {
        button.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

function initPlanSelection() {
  planButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.getAttribute("data-plan");
      if (plan && planSelect) {
        planSelect.value = plan;
      }
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#bg" || targetId === "#en") {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function getStatusCopy(key) {
  return translations[currentLanguage]?.[key] || "";
}

function setFormStatus(type, key) {
  if (!formStatus) {
    return;
  }
  formStatus.className = `form-status ${type}`;
  formStatus.textContent = getStatusCopy(key);
}

function getSupabaseClient() {
  const isPlaceholder = SUPABASE_URL.includes("YOUR_") || SUPABASE_ANON_KEY.includes("YOUR_");
  if (isPlaceholder || !window.supabase?.createClient) {
    return null;
  }

  if (!supabaseClient) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }

  return supabaseClient;
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const submitButton = form?.querySelector('button[type="submit"]');
  if (!form || !submitButton) {
    return;
  }

  setFormStatus("", "contact.loading");
  submitButton.disabled = true;

  const payload = {
    full_name: form.name.value.trim(),
    email: form.email.value.trim(),
    company_name: form.phone.value.trim() || null,
    interested_plan: form.plan.value.toLowerCase(),
    notes: form.message.value.trim(),
    language: currentLanguage,
    source: 'landing_page'
  };

  const client = getSupabaseClient();

  try {
    if (!client) {
      setFormStatus("success", "contact.demo");
      return;
    }

    const { error } = await client.from("contact_requests").insert([payload]);

    if (error) {
      throw error;
    }

    form.reset();
    setFormStatus("success", "contact.success");
  } catch (error) {
    setFormStatus("error", "contact.error");
  } finally {
    submitButton.disabled = false;
  }
}

function initForm() {
  form?.addEventListener("submit", handleFormSubmit);
}

initLanguageToggle();
initFaqAccordion();
initPlanSelection();
initForm();
initSmoothScroll();
