# Saiteja Athmakuri — Developer Portfolio

<div align="center">

[![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://saitejaathmakuri.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

<br/>

**A high-performance, minimalist developer portfolio crafted with Angular 21, Tailwind CSS, Canvas particle animations, and an embedded conversational AI Assistant.**

[Explore Live Demo](https://saitejaathmakuri.vercel.app) • [Report Bug](https://github.com/SAITEJA-012/saiteja-portfolio/issues) • [Connect on LinkedIn](https://linkedin.com/in/saitejaathmakuri/)

</div>

---

## 📌 Overview

This repository houses the personal portfolio of **Saiteja Athmakuri**, an enterprise Database Developer at ShipConsole and Full-Stack Software Engineer based in Hyderabad, India. 

Designed with an editorial monochrome & warm gold aesthetic inspired by Linear and Vercel craftsmanship, the application highlights enterprise database migrations, peer-reviewed AI research (ICMDRI), backend architectures, and production projects.

---

## ✨ Key Features

- **⚡ Modern Angular 21 Standalone Architecture**: Built completely without `NgModule` overhead, featuring signal-ready modular components and optimal tree-shaking.
- **🎨 Editorial Monochrome & Gold Design System**:
  - Smooth light/dark theme toggle with persistent state.
  - Tailored typography pairing: **Inter** for clean editorial reading and **JetBrains Mono** for terminal elements, tags, and timestamps.
- **🤖 Built-in Conversational AI Assistant**:
  - Direct answers for skills (PL/SQL, Java, AWS, Spring Boot), career timeline, and projects.
  - **Serverless Email Dispatch**: Visitors can send an email directly to `saitejaa.connect@gmail.com` via FormSubmit API with automated reply-to headers.
  - Multi-line textarea auto-expansion (`Shift+Enter` for new lines, `Enter` to send).
  - Single-click chat history clearing (`Clear Chat` trash button & text command).
- **🌌 Interactive Canvas Visual Effects**:
  - Real-time twinkling star field background rendered with HTML5 Canvas 2D.
  - Golden comet dust particle cursor trail with dynamic velocity physics.
- **🔍 Quick Search & Command Palette**: Instant fuzzy search across projects, technical skills, and career milestones with keyboard navigation (`ESC` to exit).
- **📜 Staggered Scroll-Reveal Animations**: IntersectionObserver-driven bottom-to-top fluid entrance animations.
- **📄 Instant Resume Integration**: One-click direct download and viewing for Saiteja's official software engineering CV.

---

## 🛠️ Tech Stack & Foundations

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Angular 21](https://angular.dev/) | Standalone components, routing, reactive forms, DOM manipulation |
| **Language** | [TypeScript 5.9](https://www.typescriptlang.org/) | Strict typing, robust interfaces, and modern ES features |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) | Utility-first responsive design, custom palettes, dark mode |
| **Icons** | [PrimeIcons 7](https://primeng.org/) | Vector icons for UI actions, theme toggles, and socials |
| **Graphics** | HTML5 Canvas 2D API | High-performance particle physics & star background |
| **Backend/Email** | [FormSubmit AJAX API](https://formsubmit.co/) | Serverless form handling directly from the AI chat popover |
| **Deployment** | [Vercel](https://vercel.com/) | Edge network hosting with SPA route rewrites (`vercel.json`) |

---

## 📂 Repository Structure

```text
saiteja-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── about/            # Tech stack, foundation skills, academic & research
│   │   │   ├── ai-assistant/     # Interactive AI knowledge engine & email dispatch
│   │   │   ├── contact/          # Contact info, copy-to-clipboard, socials & resume
│   │   │   ├── custom-cursor/    # Canvas golden comet cursor trail effect
│   │   │   ├── experience/       # Career timeline (ShipConsole, QSpiders)
│   │   │   ├── hero/             # Headline, bio, quick CTAs, and impact stats
│   │   │   ├── projects/         # Featured production projects & metric tags
│   │   │   └── star-field/       # Interactive background star canvas animation
│   │   └── app.component.ts      # Shell navigation, search modal, and theme provider
│   ├── assets/                   # Icons, logos, and Saiteja_Database_Developer.pdf
│   ├── index.html                # HTML5 entry with Google Fonts preconnections
│   ├── main.ts                   # Angular application bootstrapper
│   └── styles.scss               # Global design tokens, scrollbars, and keyframes
├── angular.json                  # Angular CLI workspace build configurations
├── tailwind.config.js            # Custom color palettes, font families & theme config
├── vercel.json                   # Vercel deployment & SPA routing rewrite rules
└── package.json                  # Dependencies, scripts, and package metadata
```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (`v18.19.0` or higher recommended)
- [npm](https://www.npmjs.com/) (`v9.0.0` or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SAITEJA-012/saiteja-portfolio.git
   cd saiteja-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm start
   ```
   Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready artifacts will be stored in `dist/example-app/browser/`.

---

## ☁️ Deployment

The project is pre-configured for automated continuous deployment on **Vercel** via [`vercel.json`](./vercel.json):

```json
{
  "outputDirectory": "dist/example-app/browser",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Every push to the `main` branch automatically triggers an optimized production build on Vercel.

---

## 📬 Contact & Connect

- **Live Portfolio:** [saitejaathmakuri.vercel.app](https://saitejaathmakuri.vercel.app)
- **Author:** Saiteja Athmakuri
- **Email:** [saitejaa.connect@gmail.com](mailto:saitejaa.connect@gmail.com)
- **LinkedIn:** [linkedin.com/in/saitejaathmakuri](https://linkedin.com/in/saitejaathmakuri/)
- **GitHub:** [@SAITEJA-012](https://github.com/SAITEJA-012)
- **Location:** Hyderabad, India (IST)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use it as inspiration for your own portfolio.
