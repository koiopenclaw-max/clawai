# ClawAI Landing Page — Build Brief

## What to Build
A single-page bilingual (EN/BG) landing page for "ClawAI" — an AI assistant service for businesses.
Deploy target: GitHub Pages (static HTML/CSS/JS only, no build step needed).

## Brand
- **Name:** ClawAI
- **Tagline EN:** "AI That Works For Your Business"
- **Tagline BG:** "AI, Който Работи За Вашия Бизнес"
- **Colors:** Black (#0A0A0A primary bg), Gold (#D4A843 accents), Red (#C41E3A highlights), White (#F5F5F5 text)
- **Aesthetic:** Premium, bold, dark luxury. Think Japanese luxury meets tech power. NOT generic SaaS pastel.
- **Logo:** Text-based "ClawAI" with a subtle claw mark or koi fish accent (CSS/SVG only)

## Language Toggle
- EN/BG toggle button in navbar (top right)
- Default: BG (Bulgarian audience primary)
- All content duplicated in both languages using data attributes or JS toggle
- URL hash: #en / #bg

## Sections (in order)

### 1. Hero
- Big bold headline + tagline
- Animated background (subtle particle/grid effect or gradient animation — CSS only)
- CTA button: "Започнете сега" / "Get Started" → scrolls to contact form
- Trust badges: "20+ канала", "24/7", "Пълна изолация"

### 2. What is ClawAI?
- 3-4 feature cards explaining what the AI assistant does:
  - Отговаря на клиенти 24/7 (WhatsApp, Telegram, Viber, Facebook, etc.)
  - Организира задачи и информация автоматично
  - Знае вашия бизнес — обучен с вашите данни
  - Пълна сигурност — изолирана инстанция само за вас
- Icons: use inline SVG or emoji

### 3. How It Works
- 3 steps with numbers:
  1. Свържете се с нас → Обсъждаме нуждите ви
  2. Настройваме → Инсталираме и конфигурираме за вас
  3. Работи за вас → AI асистентът поема от тук

### 4. Pricing
Three plan cards side by side (Business highlighted as "Популярен"):

**Starter**
- 49 лв/мес
- 199 лв еднократна настройка
- 1 комуникационен канал
- AI асистент 24/7
- Базова персонализация
- Email поддръжка
- CTA: "Изберете Starter"

**Business** (highlighted/recommended)
- 99 лв/мес
- 499 лв еднократна настройка
- До 3 канала (WhatsApp + Telegram + Facebook и др.)
- AI асистент 24/7
- Пълна персонализация
- Knowledge base от вашия сайт
- Приоритетна поддръжка
- CTA: "Изберете Business"

**Premium**
- 199 лв/мес
- 999 лв еднократна настройка
- Всички канали (20+)
- AI асистент 24/7
- Custom интеграции
- Dedicated support
- Multi-agent setup
- API достъп
- CTA: "Изберете Premium"

Note: клиентът плаща отделно за LLM API (~5-30 лв/мес) — mention this as small footnote.

### 5. FAQ
Accordion-style FAQ:
- Какво е AI асистент? / What is an AI assistant?
- Колко време отнема настройката? / How long does setup take? → 1-3 работни дни
- Трябва ли технически познания? / Do I need technical knowledge? → Не, ние правим всичко
- Какви канали се поддържат? / What channels are supported? → WhatsApp, Telegram, Viber, Facebook Messenger, Instagram, Email, SMS, Discord, уеб чат и 15+ други
- Мога ли да сменя плана? / Can I change my plan? → Да, по всяко време
- Какво е LLM API? → Услугата за AI мозъка. Вие избирате доставчик (OpenAI, Anthropic и др.) и плащате директно на тях. Обикновено $5-30/мес.
- Данните ми сигурни ли са? / Is my data secure? → Да, всеки клиент има изолиран сървър. Данните ви никога не се споделят.

### 6. Contact Form (Supabase)
- Name, Email, Phone (optional), Message, Selected Plan (dropdown)
- Submit → saves to Supabase table "leads"
- Show success message after submit
- Supabase config: use placeholder values that can be replaced later:
  ```js
  const SUPABASE_URL = 'YOUR_SUPABASE_URL';
  const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';
  ```

### 7. Footer
- ClawAI logo
- Links: Privacy Policy, Terms of Service (placeholder pages)
- "Powered by OpenClaw" with link to openclaw.ai
- Social links placeholders
- © 2026 ClawAI

## Technical Requirements
- **Pure HTML + CSS + JS** (no framework, no build step)
- Single `index.html` file (or index.html + style.css + script.js)
- Supabase JS SDK via CDN: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2`
- Google Fonts for typography (pick something bold + premium, NOT Inter/Roboto)
- Mobile responsive (looks great on phone)
- Smooth scroll, subtle animations (CSS transitions/keyframes)
- SEO meta tags (title, description, OG tags)
- Favicon: simple claw SVG

## File Structure
```
index.html
css/style.css
js/main.js
js/i18n.js (language translations)
img/ (if needed for SVG assets)
```

## DO NOT
- Use any build tools (webpack, vite, etc.)
- Use React, Vue, or any framework
- Use generic fonts (Inter, Roboto, Arial)
- Make it look like every other SaaS landing page
- Use purple gradients or pastel colors
