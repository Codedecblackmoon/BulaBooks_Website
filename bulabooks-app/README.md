# BulaBooks – Unlock Every Child’s Reading Journey

BulaBooks is a **multilingual, gamified reading app** designed for South African learners in Grades 3–7.  
It helps children build literacy skills through **stories, games, and speech practice**, while giving parents and teachers **powerful tools** to track and support learning.

This repository contains the **full responsive web app** (React + Tailwind), including:
- **Public Landing Website** (Home, Features, Impact, Roadmap, Contact)
- **Student Portal** – gamified learning hub
- **Parent Portal** – monitoring & support
- **Teacher Portal** – classroom management & progress tracking

---

## Features

### Role-Based Portals
- **Student Portal**: stories, gamified challenges, speech feedback, progress tracker, leaderboard.
- **Parent Portal**: child’s reading reports, goal setting, SMS updates, resources.
- **Teacher Portal**: class dashboards, assignments, reports, curriculum alignment, parent communication.

### Public Website
- Hero section with tagline & CTAs
- Features grid (stories, games, multilingual, offline, tracking)
- Impact stats & testimonials
- Roadmap & future expansion
- Download page with App Store/Play Store links
- About Us & Contact form

### 🛠️ Tech Stack
- **Frontend:** React, Tailwind CSS
- **Routing:** React Router
- **State Management:** Context API / Redux (TBD)
- **Authentication:** Role-based login (Student/Parent/Teacher)
- **Deployment:** Vercel / Netlify

---

## Project Structure

```
/src
  /components        # Shared UI components (Navbar, Footer, Cards, etc.)
  /pages
    /public          # Public-facing site pages (Home, Features, Roadmap, Contact, etc.)
    /auth            # Login/Signup pages
    /student         # Student portal (Dashboard, Library, Games, Progress)
    /parent          # Parent portal (Dashboard, Reports, Resources)
    /teacher         # Teacher portal (Dashboard, ClassReports, Assignments)
  /assets            # Images, icons, logos
  /utils             # Helpers, constants, config
```

---

## Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/yourusername/bulabooks.git
   cd bulabooks
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:5173
   ```

---

## Authentication Flow

- Unified login/signup page.
- Redirects based on role:
  - **Student** → `/student/dashboard`
  - **Parent** → `/parent/dashboard`
  - **Teacher** → `/teacher/dashboard`

---

## Roadmap

- [x] Public landing site
- [x] Student portal MVP
- [x] Parent portal MVP
- [x] Teacher portal MVP
- [ ] Admin dashboard (future)
- [ ] AI Tutor integration (future)
- [ ] AR/VR storybooks (future)

---

## Contribution

Contributions are welcome!

1. Fork the repo
2. Create a feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit changes & push:
   ```bash
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```
4. Submit a pull request

---

## License

This project is licensed under the **MIT License**.

---

## Acknowledgements

BulaBooks is inspired by the mission to **improve literacy in South Africa** by blending:

- Culture
- Language
- Technology
- Play