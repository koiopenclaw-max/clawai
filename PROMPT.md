# ClawAI Landing Page — Visual Redesign + New Copy

## CRITICAL: DO NOT TOUCH
- `js/checkout.js` — Stripe integration, working
- `js/main.js` — Supabase integration, form handling, FAQ accordion, plan selection, smooth scroll — ALL WORKING
- The `#leadForm` form HTML structure (field names, IDs, Supabase field mapping)
- The `#success-page` section  
- The `<script>` tags at bottom of index.html
- The Supabase URL and anon key in main.js
- The `#clawsourcingFields` conditional display logic
- Privacy.html, terms.html

## WHAT TO CHANGE

### Files to modify:
1. `index.html` — new sections, updated copy, new HTML structure
2. `css/style.css` — redesigned styles, new section styles, award-level design
3. `js/i18n.js` — ALL new translation keys (both `bg` and `en` objects)

---

## 1. HERO SECTION — New copy + updated chat panel

Update the existing hero section content (keep the HTML structure similar):

**Eyebrow:** 
- BG: `Вашият бизнес заслужава AI, който не спи`
- EN: `Your business deserves AI that never clocks out`

**H1:**
- BG: `Наемете Първия Си AI Служител`
- EN: `Hire Your First AI Employee`

**Subtitle:**
- BG: `Не чатбот. Не поредния plugin. Истински AI служител — обучен за вашия бизнес, свързан с каналите ви, на работа 24/7.`
- EN: `Not a chatbot. Not another plugin. A real AI employee — trained on your business, connected to your channels, working 24/7.`

**CTA primary:** `Вижте плановете` / `See Plans` → href="#pricing"
**CTA secondary:** `Как работи` / `How It Works` → href="#how-it-works"

**Trust badges:** `Production-ready за 3 дни` · `24/7` · `Без lock-in`  
EN: `Production-ready in 3 days` · `24/7` · `Zero lock-in`

**Chat panel (shorter messages):**
- Chat1 BG: `Кога мога да вляза за консултация?` / EN: `When can I come in for a consultation?`
- Chat2 BG: `Утре в 10:00 или 14:30. Да резервирам?` / EN: `Tomorrow at 10:00 AM or 2:30 PM. Want me to book it?`
- Chat3 BG: `Готово. Изпратих потвърждение на клиента.` / EN: `Done. Sent confirmation to the client.`

---

## 2. "WHAT IS CLAWAI" SECTION (#about) — New copy

**Eyebrow:** `Какво е ClawAI?` / `What is ClawAI?`
**H2:** `AI служител, не AI играчка` / `An AI employee, not an AI toy`
**Subtitle:** `ClawAI не е чатбот с fancy интерфейс. Това е AI, който разбира вашия бизнес, действа самостоятелно и се подобрява всеки месец.` / EN: `ClawAI isn't a chatbot with a fancy interface. It's an AI that understands your business, acts independently, and gets better every month.`

**Feature Cards (keep 4-card grid, update text):**

Card 1:
- BG title: `Говори с клиентите ви` / EN: `Talks to your customers`
- BG text: `WhatsApp, Telegram, Viber, Messenger, имейл — навсякъде, където са вашите клиенти. Без почивни дни, без болнични.` / EN: `WhatsApp, Telegram, Viber, Messenger, email — wherever your customers are. No days off, no sick leave.`

Card 2:
- BG title: `Знае какво знаете вие` / EN: `Knows what you know`
- BG text: `Обучен с вашия сайт, ценоразпис, вътрешни правила и ЧЗВ. Отговаря правилно от ден първи.` / EN: `Trained on your website, pricing, internal rules, and FAQs. Accurate answers from day one.`

Card 3:
- BG title: `Действа, не само отговаря` / EN: `Acts, doesn't just answer`
- BG text: `Записва часове, изпраща потвърждения, организира задачи — прави неща, не само ги обещава.` / EN: `Books appointments, sends confirmations, organizes tasks — does things, doesn't just promise them.`

Card 4:
- BG title: `Вашият сървър. Вашите данни.` / EN: `Your server. Your data.`
- BG text: `Изолирана инстанция, достъпна само за вас. Данните ви не минават през споделена система.` / EN: `An isolated instance accessible only to you. Your data never passes through a shared system.`

---

## 3. "HOW IT WORKS" SECTION (#how-it-works) — New copy

**H2:** `Три стъпки. Три дни. Готов служител.` / `Three steps. Three days. A working employee.`

Step 1: `Казвате ни какво ви трябва` / `Tell us what you need`  
Text: `Какви канали, какви задачи, каква информация — 30 минути разговор.` / `Which channels, which tasks, what information — a 30-minute conversation.`

Step 2: `Ние го изграждаме` / `We build it`  
Text: `Настройваме, обучаваме и тестваме. Вие не пипате нищо техническо.` / `We set up, train, and test. You don't touch anything technical.`

Step 3: `AI-ят работи за вас` / `Your AI goes to work`  
Text: `На линия е. Отговаря на клиенти, организира заявки, учи от всеки ден.` / `It's live. Answering customers, organizing requests, learning every day.`

---

## 4. ★ NEW SECTION: "The Math" (#comparison) — INSERT AFTER #how-it-works, BEFORE #pricing

**Dark elevated background section. CSS grid comparison — NOT an HTML `<table>`.**

**Eyebrow:** `Защо AI служител?` / `Why an AI employee?`
**H2:** `Математиката е безмилостна` / `The math is brutal`
**Subtitle:** `Реално сравнение. Без звездички.` / `A real comparison. No asterisks.`

**Comparison grid (2 columns: "Човек" vs "AI служител"):**

| Row | Човек / Human | AI / AI Employee |
|-----|---------------|------------------|
| Заплата / Salary | €800–1,500/мес / €800–1,500/mo | €28–550/мес / €28–550/mo |
| Работно време / Hours | 8ч/ден, 5 дни / 8h/day, 5 days | 24/7/365 |
| Болнични / Sick days | ✓ Да / ✓ Yes | Няма / None |
| Обучение / Training | Обучаваш месеци. Един ден не идва. / Train for months. One day they don't show up. | Обучаваш веднъж. Винаги е тук. / Train once. Always here. |
| Мащабиране / Scaling | Нов човек / New hire | Едно натискане / One click |
| Канали / Channels | 1–2 | 20+ едновременно / 20+ simultaneously |

**Bottom line (bold, centered):**
- BG: `AI служителят ви струва по-малко от стажант. Работи повече от екип.`
- EN: `Your AI employee costs less than an intern. Works harder than a team.`

**CSS design notes:**
- Use CSS grid, 3 columns: label | human | AI
- Human column: neutral/slightly red tint background
- AI column: subtle green tint background  
- Each row has subtle border-bottom separator
- On mobile (≤768px): stack vertically — each comparison item becomes a card with "Human vs AI" side by side
- Animate rows with staggered scroll reveal (IntersectionObserver)

---

## 5. ★ NEW SECTION: "Three Ways" (#why-clawsourcing) — INSERT AFTER #comparison, BEFORE pricing cards

**Eyebrow:** `Три начина да ползвате AI` / `Three ways to use AI`
**H2:** `Само единият наистина работи` / `Only one actually works`

**3 column cards:**

**Option 1: DIY / Направи си сам**
- ✓ Пълен контрол / Full control
- ✗ Вие конфигурирате / You configure everything  
- ✗ Вие дебъгвате / You debug everything
- ✗ Никога не се подобрява само / Never improves on its own
- ✗ Седмици до production / Weeks to production
- Bottom: `Чудесно, ако сте програмист с безкрайно време.` / `Great if you're a developer with infinite time.`

**Option 2: "Managed" хостинг / "Managed" hosting**
- ✓ Някой друг го инсталира / Someone else installs it
- ✓ Базова конфигурация / Basic setup included
- ✗ Generic, не за вашия бизнес / Not built for your business
- ✗ "Поддръжка" = държи го живо / "Maintenance" = keeps the lights on
- ✗ Трудната работа пак е ваша / The hard part is still on you
- Bottom: `Сървър с помощни колелца. Вие сте пак пилотът.` / `A server with training wheels. You're still the pilot.`

**Option 3: Clawsourcing ★ (HIGHLIGHTED — gold border, slight glow)**
- ✓ Custom-built за вашите процеси / for your exact workflows
- ✓ Ние правим всичко: setup, хостинг, поддръжка / We handle everything
- ✓ Активно подобряваме всеки месец / Actively improved monthly
- ✓ Production-quality от ден първи / from day one
- ✓ Zero lock-in
- Bottom: `Вие получавате служителя. Ние правим всичко останало.` / `You get the employee. We do everything else.`

**CSS design:**
- 3 equal columns on desktop, stack on mobile
- Option 3 has: gold border (`var(--gold)`), subtle gold glow shadow, slightly elevated (translateY(-8px))
- ✓ items: green color (#4ade80)
- ✗ items: red/muted color (#f87171 or var(--muted))
- Bottom text: italic, muted

---

## 6. PRICING SECTION (#pricing) — Updated copy

Keep existing 2-card layout (`pricing-two`). Update translations only:

**Section heading:**
- BG eyebrow: `Цени` (keep)
- BG H2: `Изберете нивото на обслужване` (keep)
- BG subtitle: `От лек старт до пълна многоканална AI инфраструктура.` (keep)

**Starter card — keep all features, keep `#starterCheckoutBtn` id and button element type**

**Clawsourcing card — add one new feature:**
- Add as last feature before CTA: `Cross-client learning — вашият AI се подобрява от опита с всички клиенти` / `Cross-client learning — your AI improves from experience across all clients`
- Keep `data-plan="Clawsourcing"` on the CTA link

**Pricing note update:**
- BG: `LLM API се заплаща от вас, обикновено €5-30/мес. Без дългосрочен договор.`
- EN: `LLM API paid by you, typically €5-30/month. No long-term contract.`

---

## 7. FAQ — Add 2 new questions (Q8, Q9)

Add AFTER existing Q7:

**Q8:**
- BG Q: `Каква е разликата между Starter и Clawsourcing?`
- BG A: `Starter е self-service AI асистент с базова конфигурация. Clawsourcing е AI служител, изграден специално за вашите процеси, с екип, който го подобрява всеки месец.`
- EN Q: `What's the difference between Starter and Clawsourcing?`
- EN A: `Starter is a self-service AI assistant with basic config. Clawsourcing is an AI employee built specifically for your workflows, with a team that improves it every month.`

**Q9:**
- BG Q: `Работи ли с български език?`
- BG A: `Да. ClawAI работи на всеки език — включително български, английски и над 50 други. Отговаря на клиентите ви на езика, на който те пишат.`
- EN Q: `Does it work in languages other than English?`
- EN A: `Yes. ClawAI works in any language — including Bulgarian, English, and 50+ others. It responds to your customers in whatever language they use.`

---

## 8. META + FOOTER — Updated copy

**Meta description:**
- BG: `Наемете първия си AI служител. ClawAI — 24/7 бизнес асистент, обучен за вашите процеси. От €28/мес.`
- EN: `Hire your first AI employee. ClawAI — a 24/7 business assistant trained on your workflows. From €28/month.`

**Footer copy:**
- BG: `AI служители за бизнеси, които искат повече от чатбот.`
- EN: `AI employees for businesses that want more than a chatbot.`

---

## 9. CONTACT FORM — NO CHANGES to form structure

Keep all field names, IDs, the `#leadForm` id, `#planSelect`, `#clawsourcingFields`, `#formStatus`, button type="submit".

Update ONLY the section heading copy:
- Keep existing i18n keys for all form labels — they're fine

---

## DESIGN UPGRADES (CSS)

Apply these award-level improvements to the overall design:

### A. Scroll Reveal Animations
Add IntersectionObserver-based reveals. Each section's content fades up when scrolled into view.
```css
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal-on-scroll.revealed {
  opacity: 1;
  transform: translateY(0);
}
```
Add `reveal-on-scroll` class to: section headings, feature cards (staggered), step cards (staggered), comparison rows (staggered), pricing cards, FAQ items.

IntersectionObserver JS at end of main.js (APPEND, don't replace existing code):
```javascript
// Scroll reveal
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = entry.target.dataset.delay || '0s';
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
})();
```

**IMPORTANT:** Content must be visible even without JS. Use this CSS:
```css
@media (prefers-reduced-motion: reduce) {
  .reveal-on-scroll { opacity: 1; transform: none; }
}
```

### B. Hero Load Animation
Stagger hero elements on page load:
```css
.hero .eyebrow { animation: fadeSlideUp 0.6s ease-out 0.1s both; }
.hero h1 { animation: fadeSlideUp 0.8s ease-out 0.3s both; }
.hero .hero-text { animation: fadeSlideUp 0.6s ease-out 0.5s both; }
.hero .hero-actions { animation: fadeSlideUp 0.6s ease-out 0.7s both; }
.hero .trust-badges { animation: fadeSlideUp 0.6s ease-out 0.9s both; }
.hero-card { animation: fadeSlideUp 0.8s ease-out 0.6s both; }

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### C. Button Hover Enhancement
```css
.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 44px rgba(212, 168, 67, 0.28);
}
```

### D. Feature Card Hover
```css
.feature-card {
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
}
.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}
```

### E. Nav Link for new sections
Add to nav: `Сравнение` / `Compare` → href="#comparison" (between Pricing and FAQ links)

### F. Grain Texture
Keep existing grain overlay from body::before if present, or add:
```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  z-index: 9999;
}
```

---

## i18n.js — COMPLETE NEW KEYS TO ADD

Add ALL of these to BOTH `bg` and `en` objects in `window.CLAWAI_TRANSLATIONS`. Keep ALL existing keys.

New keys needed:
```
nav.compare
hero.eyebrow, hero.title, hero.subtitle (UPDATE existing values)
hero.cta, hero.secondary (UPDATE)
hero.badge1, hero.badge2, hero.badge3 (UPDATE)
hero.chat1, hero.chat2, hero.chat3 (UPDATE)
about.title, about.subtitle (UPDATE)
about.feature1Title, about.feature1Text (UPDATE)
about.feature2Title, about.feature2Text (UPDATE)
about.feature3Title, about.feature3Text (UPDATE)
about.feature4Title, about.feature4Text (UPDATE)
steps.title (UPDATE)
steps.step1Title, steps.step1Text (UPDATE)
steps.step2Title, steps.step2Text (UPDATE)
steps.step3Title, steps.step3Text (UPDATE)
comparison.eyebrow (NEW)
comparison.title (NEW)
comparison.subtitle (NEW)
comparison.colHuman (NEW)
comparison.colAI (NEW)
comparison.row1Label, comparison.row1Human, comparison.row1AI (NEW)
comparison.row2Label, comparison.row2Human, comparison.row2AI (NEW)
comparison.row3Label, comparison.row3Human, comparison.row3AI (NEW)
comparison.row4Label, comparison.row4Human, comparison.row4AI (NEW)
comparison.row5Label, comparison.row5Human, comparison.row5AI (NEW)
comparison.row6Label, comparison.row6Human, comparison.row6AI (NEW)
comparison.bottomLine (NEW)
threeways.eyebrow (NEW)
threeways.title (NEW)
threeways.diy.title (NEW)
threeways.diy.pro1 (NEW)
threeways.diy.con1, threeways.diy.con2, threeways.diy.con3, threeways.diy.con4 (NEW)
threeways.diy.bottom (NEW)
threeways.managed.title (NEW)
threeways.managed.pro1, threeways.managed.pro2 (NEW)
threeways.managed.con1, threeways.managed.con2, threeways.managed.con3 (NEW)
threeways.managed.bottom (NEW)
threeways.clawsourcing.title (NEW)
threeways.clawsourcing.pro1 through pro5 (NEW)
threeways.clawsourcing.bottom (NEW)
pricing.clawsourcing.f9 (NEW — cross-client learning)
pricing.note (UPDATE)
faq.q8q, faq.q8a (NEW)
faq.q9q, faq.q9a (NEW)
meta.title, meta.description (UPDATE)
footer.copy (UPDATE)
```

Use the EXACT copy from the sections above for both bg and en values.

---

## RESPONSIVE BREAKPOINTS

- **Desktop (>1080px):** Full grid layouts, 4-column features, 3-column steps/three-ways
- **Tablet (721-1080px):** 2-column features, single-column grids, comparison stacks
- **Mobile (≤720px):** Single column everything, comparison becomes card-style

---

## FINAL CHECKLIST

- [ ] All existing functionality preserved (form submit, FAQ accordion, language toggle, plan selection, Stripe checkout, smooth scroll)
- [ ] `#starterCheckoutBtn` button ID preserved
- [ ] `data-plan="Clawsourcing"` preserved on Clawsourcing CTA
- [ ] All i18n keys work in both BG and EN
- [ ] New nav link for Compare/Сравнение
- [ ] 2 new HTML sections (#comparison, #why-clawsourcing) added in correct order
- [ ] 2 new FAQ items (Q8, Q9) added
- [ ] Scroll reveal animations work and respect prefers-reduced-motion
- [ ] Hero load animation sequence
- [ ] Mobile responsive on all new sections
- [ ] No hardcoded BG-only text — everything uses data-i18n

When completely finished, run this command to notify me:
openclaw system event --text "Done: ClawAI landing page redesign with new copy, 2 new sections (comparison + three ways), award-level animations, all i18n keys updated" --mode now
