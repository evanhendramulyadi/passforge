<p align="center">
  <img src="img/logo-passforge.png" alt="PassForge Logo" width="100">
</p>

<h1 align="center">PassForge</h1>

<p align="center">
  <strong>A modern, cybersecurity-themed client-side password generator engineered for cryptographically secure, true-random password generation directly in your browser.</strong>
</p>

<p align="center">
  <a href="https://passforge-site.vercel.app" target="_blank"><strong>🌐 Live Demo: passforge-site.vercel.app</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Language-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=flat-square" alt="Tech Stack">
  <img src="https://img.shields.io/badge/Security-Web%20Crypto%20API-00b4d8?style=flat-square" alt="Security CSPRNG">
  <img src="https://img.shields.io/badge/Dependencies-Zero-success?style=flat-square" alt="Zero Dependencies">
  <img src="https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel" alt="Vercel Deployment">
  <img src="https://img.shields.io/badge/Copyright-All%20Rights%20Reserved-red?style=flat-square" alt="All Rights Reserved">
</p>

---

## 📌 Overview

**PassForge** is a high-performance, standalone, client-side web application designed to generate cryptographically robust passwords with uniform randomness. Embracing a refined dark cybersecurity SaaS aesthetic, PassForge pairs professional UI design with industry-standard cryptographic techniques.

Password generation takes place 100% in-memory within the client's browser. With zero server backends, zero external API queries, and zero tracking scripts, PassForge ensures total user privacy and complete protection against network interception.

---

## 🌐 Live Deployment

The application is deployed on Vercel and available globally:
- **Live URL**: [https://passforge-site.vercel.app](https://passforge-site.vercel.app)
- **Deployment Platform**: Vercel (Edge Network)
- **Build Configuration**: Zero build step required (Static HTML/CSS/JS)

---

## ✨ Key Features

### 🔐 Cryptographic Security
- **Hardware-Backed CSPRNG**: Leverages `window.crypto.getRandomValues()` instead of pseudo-random generators like `Math.random()`, sourcing high-entropy randomness directly from the operating system kernel.
- **Modulo Bias Elimination via Rejection Sampling**: Implements rejection sampling algorithm to eliminate statistical skew when mapping raw bytes to character ranges, ensuring true uniform distribution across all character sets.
- **Secure Fisher-Yates Shuffle**: The final character array is permuted using an in-place Fisher-Yates shuffle powered exclusively by the secure CSPRNG.
- **Guaranteed Category Inclusion**: Automatically guarantees that at least one character from each active character set (uppercase, lowercase, numbers, symbols) is included in the resulting password.
- **Zero Data Leakage**: No cookies, no `localStorage`, no remote analytics, and zero external network transmissions.

### ⚙️ User Customization & Controls
- **Configurable Password Length**: An interactive range slider spanning from **4** to **64** characters (default: 16 characters).
- **Granular Character Categories**:
  - **Uppercase**: Capital letters (`A–Z`)
  - **Lowercase**: Small letters (`a–z`)
  - **Numbers**: Decimal digits (`0–9`)
  - **Symbols**: Punctuation and special characters (`!@#$%^&*()_+-=[]{}|;:,.<>?/~```)
- **Safety Enforcement**: Automatically prevents disabling all character categories at once to avoid invalid states, alerting the user with a temporary warning notification.

### 🎨 Modern Interface & Accessibility
- **Real-Time Password Strength Meter**: Evaluates password strength dynamically based on length thresholds and character entropy across 4 levels (*Weak*, *Medium*, *Strong*, *Very Strong*) with smooth visual color transitions and animated progress feedback.
- **One-Click Clipboard Copy with Fallback**: Features quick copying with visual state transition, animated checkmark icon, and a responsive toast confirmation. Includes a seamless legacy fallback (`document.execCommand`) to maintain functionality across all browser contexts.
- **Keyboard Shortcut**: Pressing `Enter` while focused on the password output field instantly regenerates a new password.
- **Cybersecurity Glassmorphism Design**: High-contrast dark palette with backdrop blur effects, subtle circuit grid styling, and fully responsive layout optimized for mobile, tablet, and desktop viewports.
- **Screen Reader Accessible (A11y)**: Semantic HTML with ARIA live regions (`aria-live="polite"`), descriptive labels (`aria-label`), and range attributes (`aria-valuemin`, `aria-valuemax`, `aria-valuenow`).

---

## 🛠️ Tech Stack

- **HTML5**: Semantic W3C-compliant document structure and accessibility markup.
- **CSS3**: Modern layout architecture utilizing Flexbox, CSS Grid, Custom Properties (CSS variables), and glassmorphism filters.
- **JavaScript (ES6+)**: Modular code wrapped in an Immediately Invoked Function Expression (IIFE) running under strict mode (`"use strict"`), engineered with zero external libraries or dependencies.
- **Web Crypto API**: Native browser cryptographic interface providing cryptographically secure pseudo-random numbers.

---

## 📁 Project Structure

```
passforge/
├── img/
│   └── logo-passforge.png    # Brand badge logo and application favicon
├── index.html                # Main semantic HTML structure and markup
├── script.js                 # CSPRNG engine, shuffle logic, and UI interactions
├── style.css                 # Cybersecurity theme, component styles, and responsiveness
└── README.md                 # Project documentation and usage guidelines
```

---

## 💻 Getting Started

Because PassForge is built strictly using standard web technologies, no build pipeline, compiler, or package manager (`npm`, `yarn`, `pnpm`) is required.

### Prerequisites
A modern web browser supporting the Web Crypto API (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera, Brave, etc.).

### Local Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/evanhendramulyadi/passforge.git
cd passforge
```

#### 2. Run the Application

You can run PassForge using any of the following methods:

- **Direct File Opening**:
  Double-click `index.html` in your system file manager (Windows File Explorer, macOS Finder, or Linux file manager) to open it directly in your browser.

- **VS Code Live Server Extension**:
  Open the project directory in Visual Studio Code, right-click `index.html`, and select **Open with Live Server**.

- **Python HTTP Server**:
  ```bash
  # Python 3
  python -m http.server 3000
  ```
  Then navigate to `http://localhost:3000` in your web browser.

- **Node.js Serve (Optional)**:
  ```bash
  npx serve .
  ```

---

## 📖 How to Use

1. Open PassForge in your preferred browser.
2. Adjust the **Password Length** slider to your desired character count (between 4 and 64).
3. Toggle character sets (**Uppercase**, **Lowercase**, **Numbers**, **Symbols**) to match your specific requirements.
4. Click **Generate Password** or press `Enter` in the password field to produce a new password.
5. Check the **Password Strength** meter for an instant entropy assessment.
6. Click **Copy** to copy the generated password to your clipboard.

---

## 🛡️ Security Architecture

### Why Not `Math.random()`?
Standard JavaScript `Math.random()` implementations rely on non-cryptographic pseudo-random number generators (PRNGs) such as *xorshift128+*. These algorithms are optimized for speed and graphical simulations rather than cryptographic resilience. Given a sequence of outputs, an attacker can determine the internal PRNG state and predict subsequent values.

### The PassForge Implementation:
1. **Cryptographic Entropy**: PassForge retrieves random bytes directly from the host system's cryptographic random generator (`crypto.getRandomValues()`), drawing from `/dev/urandom` on Unix-like operating systems or `BCryptGenRandom` on Windows.
2. **Rejection Sampling (Modulo Bias Elimination)**:
   When mapping random 8-bit integers ($[0, 255]$) into an alphabet of size $N$, standard modulo operations (`byte % N`) cause smaller remainder values to appear with slightly higher frequency whenever $256$ is not evenly divisible by $N$. PassForge calculates the largest multiple of $N$ strictly less than or equal to 256 (`maxUsable`) and rejects (resamples) any byte outside this threshold, ensuring a mathematically proven uniform distribution.
3. **Cryptographic Fisher-Yates Shuffle**: All generated characters are shuffled via the Fisher-Yates algorithm, using the CSPRNG for index selections to prevent positional patterns.

---

## ⚙️ Environment & Configuration

- **Zero Configuration**: No `.env` files, build scripts, or secret tokens are needed.
- **Client-Side Execution**: All processing occurs strictly within the local browser context.
- **Privacy Assurance**: No secrets, passwords, or usage telemetry are logged or transmitted.

---

## 📄 Copyright & Terms of Use

© 2026 Evan. All Rights Reserved.

### Intellectual Property & Repository Guidelines
This project is an original creation by **Evan**.

This repository is maintained publicly for the purpose of transparency, portfolio display, technical study, and peer review of client-side cryptographic web development practices:

- **Review & Learning**: You are welcome to view, inspect, test, and learn from the source code and architectural patterns for individual study and research.
- **No Plagiarism or Unauthorized Rebranding**: Public visibility does not grant permission to duplicate the project, remove original attributions, rename or rebrand the software, and falsely claim authorship.
- **Usage & Redistribution**: Any reuse, adaptation, or derivative work must respect the creator's copyright and applicable terms. Re-implementing similar cryptographic concepts independently from scratch for educational purposes is welcomed and encouraged.

