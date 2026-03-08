# Dinesh Kumar M — Personal Portfolio

A single-page personal portfolio website for **Dinesh Kumar M**, showcasing profile, education, skills, projects, and contact details. Built with HTML, CSS, and vanilla JavaScript.

**Live:** [https://mdkdinesh2503.github.io/mdk](https://mdkdinesh2503.github.io/mdk)

---

## Project structure

```
mdk/
├── index.html          # Single-page app (HTML + embedded CSS + JS)
├── images/             # Static assets
│   ├── Header_logo.png
│   ├── Title_logo.png
│   ├── Title_hand.png
│   ├── Dinesh_Profile.jpg
│   └── Works/
│       ├── Works_1.jpg  # Student Management System
│       ├── Works_2.jpg # Ecommerce Website
│       └── Works_3.jpg # Travel Agency
└── README.md
```

---

## Sections

| Section       | ID          | Description |
|--------------|-------------|-------------|
| **Home**     | `#home_1`   | Intro, profile image, tagline, “Explore More” CTA |
| **About**    | `#about_2`  | Name, qualification, contact, age (computed), DOB, location; Profile Image & Download CV buttons |
| **Education**| `#education_3` | SSLC, HSC, B.E (CSE) with years, school/college, place, grades |
| **Skills**   | `#skills_4` | **Technical:** HTML, CSS, JavaScript, Java, Angular, MySQL, Node.js. **Tools:** GitHub, Eclipse IDE, VS Code, MySQL Workbench, Git, Oracle SQL Developer, Figma. Icons + labels with border; hover: background & text color change |
| **Works**    | `#works_5`  | Project cards: Student Management System, Ecommerce Website, Travel Agency (image, title, View/Code links). “View More” links to projects page |
| **Contact**  | `#contact_7`| Phone, email, address (with map popup), contact form (Formspree), embedded Google Map |
| **Footer**   | —           | Logo, short note, social links (Facebook, Instagram, LinkedIn, WhatsApp, GitHub), Quick Links, Contact info, copyright |

---

## Tech stack

- **HTML5** — Semantics, meta tags, accessibility (e.g. `aria-label`)
- **CSS3** — Custom properties (colors, borders, shadows), Flexbox/Grid, responsive breakpoints (e.g. 1350px, 1120px, 800px, 500px)
- **JavaScript** — No framework; age calculation, visibility-based title/favicon, scroll-spy nav, mobile menu, map popup, basic protection (Ctrl key, context menu)
- **Font Awesome 5** — Icons for nav, skills, contact, footer, buttons
- **AOS (Animate On Scroll)** — Scroll animations (script loaded; optional: uncomment AOS CSS in `<head>` for full effect)
- **Formspree** — Contact form submission
- **Google Maps** — Embed + “open in new window” link for address

---

## Features

- **Sticky header** — Header gets a sticky class on scroll
- **Scroll-spy navigation** — Active nav item follows visible section (Intersection Observer)
- **Mobile menu** — Hamburger toggles nav bar on small screens
- **Skills hover** — Skill/tool cards: border kept, background and text color change on hover
- **Title / favicon on tab visibility** — Normal title and favicon when tab is visible; “C O M E ~ B A C K” and alternate favicon when tab is hidden
- **Contact form** — Name, email, phone, message; submits to Formspree
- **Location** — `popuplocation()` opens Google Maps in a new window

---

## Running locally

1. Clone or download the repo.
2. Open `index.html` in a browser, or serve the folder with any static server, e.g.:

   ```bash
   # Python
   python -m http.server 8000

   # Node (npx)
   npx serve .
   ```

3. Visit `http://localhost:8000` (or the port your server uses).

No build step or dependencies are required; only the Font Awesome and AOS CDN links in `index.html` need internet access.

---

## Assets and links

- **Profile image (home):** `https://mdkdinesh2503.netlify.app/profile/mdk.jpg`
- **Resume:** `https://mdkdinesh2503.netlify.app/resume/Dinesh_Resume.pdf`
- **Projects:** [https://mdkdinesh2503.github.io/projects](https://mdkdinesh2503.github.io/projects)
- **Works demos:** SMS-V1, Ecom-V1, Travel-V1 (GitHub Pages); repo links in Works section

---

## Customization

- **Colors / theme:** Edit CSS custom properties in `:root` (e.g. `--brown`, `--white`, `--light-brown`, `--main-color`).
- **Content:** Replace text, links, and images in `index.html` and in `images/`.
- **Contact form:** Create a Formspree form and update the `action` URL in the contact `<form>`.
- **Map:** Replace the Google Maps embed and `popuplocation()` URL with your own location.

---

## License and credits

© Copyrights and design — **Dinesh Kumar M**

Quote in footer: *“Anyone who has never made a mistake has never tried anything new.”*
