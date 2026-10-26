<p align="center">
  <img src="img/logo-passforge.png" alt="PassForge Logo" width="100">
</p>

<h1 align="left">PassForge</h1>

PassForge is a sleek, cybersecurity-themed client-side password generator web application designed to create cryptographically secure, randomized passwords instantly in your browser.

## 🌐 Live Demo

Experience the live application here:  
👉 **[PassForge](https://passforge-site.vercel.app/)**

## ✨ Key Features

- **CSPRNG Security**: Generates passwords using `crypto.getRandomValues()` with hardware-backed entropy from the operating system kernel.
- **Rejection Sampling**: Eliminates modulo bias to guarantee mathematically uniform character distribution across selected character sets.
- **Fisher-Yates Shuffle**: Performs an in-place cryptographic shuffle to prevent predictable positional patterns.
- **Guaranteed Category Inclusion**: Ensures at least one character from each active character type (Uppercase, Lowercase, Numbers, Symbols) is always included.
- **Password Strength Evaluation**: Evaluates entropy in real-time across four tiers (Weak, Medium, Strong, Very Strong) with dynamic visual progress.
- **One-Click Clipboard Copy**: Copies passwords instantly with an animated status indicator and an automatic fallback mechanism.
- **Customizable Length & Rules**: Adjustable length from 4 to 64 characters with automatic validation preventing all options from being unchecked.
- **Zero Data Leakage**: Completely client-side execution with no backend, no storage, no cookies, and no network transmission.

## 🛠️ Tech Stack

- **HTML5**: Semantic document structure and accessible ARIA attributes.
- **CSS3**: Modern responsive layout with CSS Grid, Flexbox, custom properties, and glassmorphism styling.
- **JavaScript (ES6+)**: Pure vanilla JavaScript utilizing the Web Crypto API, encapsulated in strict mode with zero external dependencies.
- **Hosting**: [Vercel](https://vercel.com)

## 💻 Local Setup Instructions

No build tools or external dependencies are required.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/evanhendramulyadi/passforge.git
   cd passforge
   ```

2. **Run the application**:
   - Open `index.html` directly in any modern web browser, **or**
   - Serve it using a lightweight local development server:
     ```bash
     # Using Python
     python -m http.server 3000
     ```
     Then open `http://localhost:3000` in your browser.

## 📄 Copyright & Ownership

© 2026–Present Evan Hendra Mulyadi. All Rights Reserved.

This project is an original work created by **Evan Hendra Mulyadi**.

This repository is publicly accessible solely for viewing, studying, and reviewing the source code. Public access does **not** grant permission to copy the entire project, rebrand or rename it, remove attribution, or claim it as your own creation. Re-use or distribution without explicit permission from the author is strictly prohibited.
