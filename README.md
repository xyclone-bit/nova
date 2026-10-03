# AETHERIA | Horizon Model 01 — Optical Neural Acoustic Sanctuary

[![GitHub Pages Deployment](https://img.shields.io/badge/deployment-GitHub%20Pages-gold.svg)](https://your-username.github.io/future-project-landing/)
[![Status](https://img.shields.io/badge/status-production--ready-10b981.svg)]()
[![Stack](https://img.shields.io/badge/stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-38bdf8.svg)]()
[![No Dependencies](https://img.shields.io/badge/dependencies-zero-d4af37.svg)]()

> A premier single-page landing website crafted for **Aetheria Labs**, a fictional luxury technology startup engineering solid-state neuro-acoustic sanctuaries and ambient cognitive hardware.

---

## 1. Project Overview

**Repository Name:** `future-project-landing`  
**Repository Link:** `https://github.com/your-username/future-project-landing`  
**Live Website Link:** `https://your-username.github.io/future-project-landing/`

**Aetheria Horizon Model 01** demonstrates how cutting-edge front-end design principles—rich dark aesthetics, glassmorphism, responsive CSS Grid and Flexbox layouts, interactive 3D CSS rendering, HTML5 Canvas waveform synthesis, and robust accessible vanilla JavaScript—can be united without third-party frameworks, external CSS libraries, or external stock photos.

---

## 2. Fictional Startup Concept

* **Company:** **Aetheria Labs AG** (Neuchâtel & Geneva, Switzerland)
* **Flagship Product:** **Horizon Model 01 (Founder's Monolith)**
* **Mission:** Harmonizing cognitive resonance and architectural silence through non-invasive solid-state neuro-acoustics.
* **The Problem:** Modern high-performing individuals, architects, and technologists are besieged by sensory clutter, conversational distraction, and intrusive wearables.
* **The Solution:** A desktop monolith cold-milled from a 14kg ingot of aerospace-grade titanium and synthetic optical sapphire. It projects an omnidirectional acoustic inverse-wave field (0.04ms latency) that cancels noise within a 4.5-meter radius, while multi-spectral photonic sensors read ambient biometrics to tune focus-enhancing isochronic frequencies (Alpha 10.5Hz, Gamma 40Hz, Delta 2.5Hz).
* **Guiding Ethos:** 100% hardware air-gapped autonomy—zero microphones stored, zero cloud transmissions, zero subscriptions.

---

## 3. Key Website Features & Interactive Capabilities

* **Pure CSS 3D Monolith Centerpiece:** A realistic, multi-layered geometric rendering of the titanium device with metallic sheen sweeps, concentric orbital pulse rings, and interactive cursor-driven 3D parallax tilt.
* **Interactive Harmonic Resonance Modes:** Switch between *Deep Flow*, *Circadian Rest*, *Neural Uplink*, and *Total Null* to observe dynamic live parameter readouts and real-time wave updates.
* **Live HTML5 Canvas Waveform Engine:** High-performance, retina-scaled canvas visualizer illustrating real-time harmonic oscillations and an interactive ambient noise cancellation simulator.
* **Interactive Schematic Explorer:** Four-stratum exploded architectural selector revealing engineering specifications (Sapphire Crown, Photonic Lattice, Tensor Enclave, Planar Transducers).
* **Scroll-Triggered Animated Counters:** IntersectionObserver-driven metric animations calculating bio-latency (0.04ms), acoustic null (99.8%), power reserve (140h), and global allocation cap (500 units).
* **Accessible FAQ Accordion:** ARIA-compliant (`aria-expanded`, `aria-controls`), single-open collapsible accordion with smooth CSS height transitions.
* **Interactive Client-Side Reservation Flow:** Real-time form validation for private allocation requests with instant error feedback, followed by a luxury modal confirmation dialog generating an official commission docket number (`ATH-XXXX-T1`).
* **Adaptive Responsive Navigation:** Desktop blur navigation with active section highlighting, paired with a full-screen mobile slide-in drawer and accessible keyboard controls.
* **Zero External Imagery:** Every visual asset is rendered procedurally via CSS gradients, 3D transforms, HTML5 Canvas, and bespoke inline SVGs.

---

## 4. Technologies Used

* **HTML5:** Semantic architecture (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<canvas>`), structured meta tags, OpenGraph previews, and ARIA attributes for accessibility.
* **CSS3:**
  * CSS Custom Properties (Design Tokens for colors, elevation, radii, typography, transitions)
  * CSS Grid & Flexible Box Module (Flexbox)
  * 3D Transforms (`perspective`, `rotateX`, `rotateY`, `transform-style: preserve-3d`)
  * Glassmorphism (`backdrop-filter: blur()`, semi-transparent HSL/RGBA layers)
  * Micro-animations & procedural sheen sweeps (`@keyframes`)
  * Fluid typography using `clamp()`
  * Responsive media queries (Desktop, Tablet, Mobile)
  * Accessibility support (`prefers-reduced-motion: reduce`)
* **Vanilla JavaScript (ES6+):**
  * IntersectionObserver API (scroll-reveal transitions, animated counters, active nav highlight)
  * HTML5 2D Canvas API with `requestAnimationFrame` loop
  * Smooth mouse-tracking 3D tilt geometry
  * Real-time DOM manipulation and input regex validation
  * Focus management and modal keyboard trap (ESC key handling)

---

## 5. Project Structure

```
future-project-landing/
├── index.html          # Semantic HTML5 single-page application structure
├── css/
│   └── style.css       # Design tokens, responsive layouts, 3D CSS render, and animations
├── js/
│   └── script.js       # Vanilla JS interactivity, canvas engine, counters, and validation
└── README.md           # Documentation, Git commands, and deployment guide
```

---

## 6. Local Development & Running the Project

Because the project uses purely native web technologies with zero dependencies, you do not need to install any packages (`npm`, `yarn`, etc.).

### Option A: Direct Browser Execution
Double-click `index.html` or drag it directly into Google Chrome, Mozilla Firefox, Safari, or Microsoft Edge.

### Option B: Local HTTP Server (Recommended)
Running through a local web server ensures optimal performance for Canvas animations and security policies:

**Using Python 3:**
```bash
# Navigate to the project root directory
cd future-project-landing

# Start a lightweight local HTTP server
python -m http.server 8000
```
Open `http://localhost:8000` in your browser.

**Using Node.js (npx serve):**
```bash
npx serve .
```

**Using VS Code Live Server:**
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 7. Git & GitHub Repository Setup

Follow these exact terminal commands to initialize the repository, create descriptive commits, connect to GitHub, and push your code:

### Step 1: Initialize Git Repository
```bash
cd future-project-landing
git init
```

### Step 2: Stage & Create Meaningful Commits
```bash
# 1. Initial project scaffolding
git add index.html
git commit -m "Initial project structure and semantic HTML5 foundation"

# 2. Add complete luxury stylesheet
git add css/style.css
git commit -m "Create responsive luxury styling, 3D CSS monolith, and design tokens"

# 3. Add vanilla JavaScript logic
git add js/script.js
git commit -m "Add interactive JavaScript functionality, canvas visualizer, and form validation"

# 4. Add comprehensive project documentation
git add README.md
git commit -m "Add project documentation, architecture details, and deployment guide"
```

### Step 3: Connect Local Repository to GitHub
*(Replace `your-username` with your actual GitHub username)*

```bash
# Rename branch to main
git branch -M main

# Link to your remote GitHub repository
git remote add origin https://github.com/your-username/future-project-landing.git

# Push to GitHub
git push -u origin main
```

---

## 8. GitHub Pages Deployment Instructions

To publish the website live via GitHub Pages:

1. Navigate to your repository on GitHub: `https://github.com/your-username/future-project-landing`
2. Click on the **Settings** tab located at the top right of the repository.
3. In the left-hand navigation sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   * **Source**: Select `Deploy from a branch`
   * **Branch**: Select `main` from the dropdown
   * **Folder**: Keep `/(root)` selected
5. Click **Save**.
6. Wait 1–2 minutes for the GitHub Pages workflow to build.
7. Refresh the page; your live URL will be displayed in the green banner:  
   `https://your-username.github.io/future-project-landing/`

---

## 9. Quality Verification Checklist

* [x] **Semantic HTML5:** Descriptive landmarks, heading hierarchy (`h1` down to `h4`), structured table.
* [x] **Pure CSS & Visual Luxury:** Modern dark aesthetic, custom glassmorphism, responsive grid & flexbox.
* [x] **No External Imagery:** Monolith visual, icons, and textures rendered via pure CSS, inline SVG, and Canvas.
* [x] **Vanilla JavaScript:** Zero console errors, fully responsive event handling, and memory leak prevention.
* [x] **Cross-Device Usability:** Tested across Mobile (320px–480px), Tablet (768px–1024px), and 4K Ultra-wide Displays.
* [x] **Accessible:** ARIA attributes, semantic form inputs, labeled landmarks, and `prefers-reduced-motion` compliance.

---

## 10. License & Credits

Created by **Aetheria Labs Engineering**. Designed for forward-thinking spatial technologists. Released under the MIT License.
