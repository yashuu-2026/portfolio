# Yashaswini V N – Personal Portfolio Website

A modern, colorful, aesthetic, and responsive personal portfolio website designed and developed for **Yashaswini V N** (Student & Aspiring Software Developer).

Built with **React 19**, **Vite**, **TypeScript**, **Tailwind CSS**, **Three.js**, **Framer Motion**, and **Lucide Icons**.

---

## 🎨 Design & Pastel Palette

The portfolio features a custom pastel aesthetic with rounded cards, soft multi-layered shadows, glassmorphism blur effects, and deep plum typography for high readability:

| Color Name | Hex Code | Purpose |
|---|---|---|
| **Lavender Purple** | `#B69CFF` | Primary brand accent & highlights |
| **Soft Pink** | `#F5B8D2` | Secondary accent & gradients |
| **Mint Green** | `#B8E5E1` | Interactive elements & status pills |
| **Cream** | `#FFF0C9` | Warm ambient accents & cards |
| **Deep Plum** | `#29243A` | High-contrast body & heading typography |
| **Light Canvas** | `#FBF9FE` | Soft ambient pastel background |

---

## ✨ Features & Sections

1. **Navigation Bar**
   - Custom **YV** monogram badge with glowing hover effects.
   - Sticky glassmorphic backdrop with smooth scroll spy highlighting active sections.
   - Responsive mobile drawer navigation with animated transitions.

2. **Hero Section**
   - Personal greeting: *"Hi, I'm Yashaswini V N!"*
   - Subtitle: *"Student | Aspiring Software Developer"*.
   - **Interactive 3D Three.js Canvas**: Floating pastel geometric shapes (torus, icosahedron, torus knot, and spheres) that smoothly tilt and track mouse movements.
   - Quick badges for the 4 core programming languages: Python, C, C++, and Java.
   - Two CTA buttons: **Explore My Work** and **Contact Me**.

3. **About Me**
   - Two-column layout with a stylized profile card and personal story narrative.
   - Highlights her passion for computer science, problem-solving journey, and career goals.
   - 4 competency cards: *Problem Solver*, *Continuous Learner*, *Strong Fundamentals*, and *Creative Builder*.

4. **Technical Skills**
   - 4 cards dedicated to **Python**, **C**, **C++**, and **Java** with custom vector icons and pastel accents.
   - Focused on practical strengths and concepts (**no fake skill percentages**).
   - Additional foundational skills: *Data Structures & Algorithms*, *Object-Oriented Programming (OOP)*, *Git & GitHub*, *Clean Code*, etc.

5. **Projects Section**
   - 3 modern project showcase cards formatted as **editable templates**.
   - Includes screenshot mockup placeholders, technology tags, and GitHub / Live Demo action links.
   - Transparent disclosure that these are placeholders ready to be updated with real projects.

6. **Education Section**
   - Clean vertical timeline connecting academic milestones:
     - Bachelor of Engineering / Technology in Computer Science (Currently Pursuing)
     - Pre-University / 12th Standard
     - Secondary Education / 10th Standard
   - Editable slots for college name, course, scores, and academic achievements.

7. **Contact Section**
   - Interactive contact form with real-time field validation, error states, and submission feedback with celebratory confetti.
   - Direct contact info cards:
     - Email address with a one-click **Copy to Clipboard** button.
     - Direct links to **GitHub** and **LinkedIn**.
     - Location and availability badge.

8. **Footer**
   - YV monogram logo, copyright notice, quick navigation, social links, and an animated **Back-to-Top** button.

---

## 🛠️ How to Customize Your Portfolio

All personal data, projects, educational records, and links are organized inside a single TypeScript file:

👉 [`src/data/portfolioData.ts`](file:///c:/Users/sahan/OneDrive/Desktop/Portfolio/src/data/portfolioData.ts)

### 1. Update Personal Details & Social Links
Open `src/data/portfolioData.ts` and edit the `personal` object:
- `name`: Your full name
- `email`: Your email address
- `github`: Your GitHub profile URL
- `linkedin`: Your LinkedIn profile URL
- `location`: Your city and state

### 2. Add Your Real Projects
In `src/data/portfolioData.ts`, update the `projects` array with your actual projects:
- Replace `title` and `description` with your project summary.
- Update `technologies` array with the libraries/tools used.
- Set `githubUrl` to your repository link and `liveDemoUrl` to the deployed link.

### 3. Update Education Information
In `src/data/portfolioData.ts`, update the `education` array:
- Replace `institution` with your university/college and school names.
- Update `gradeOrScore` with your CGPA or marks percentage.
- Add your specific coursework and extracurricular accomplishments in `highlights`.

---

## 🚀 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deploying Online

You can easily deploy this website for free on:
- **Vercel**: Import your GitHub repository, choose Vite framework preset, and click Deploy.
- **Netlify**: Connect your GitHub repo, set build command to `npm run build` and publish directory to `dist`.
- **GitHub Pages**: Run `npm run build` and deploy the `dist/` folder using `gh-pages`.
