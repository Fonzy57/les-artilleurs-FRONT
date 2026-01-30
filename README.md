# 🏈 Les Artilleurs Frontend

Frontend application for the **Les Artilleurs** American Football club platform.

This repository contains the **client-side** code for:
- a **public showcase website** (club presentation, information, contact/join details)
- a **private staff dashboard** used to manage content and (later) club data

---

## 📌 Project Context

**Les Artilleurs Frontend** is a personal project built for an American football club.

It aims to deliver:
- a modern, responsive **public website**
- a secure **role-based dashboard** for the club president and staff
- a maintainable front architecture aligned with a real production workflow

---

## 🎯 Main Objectives

- Provide a clear and professional **public club website**
- Offer a private dashboard for staff with:
  - content management features (news, FAQ, club information)
  - future club management data (members, players, matches, seasons, etc.)
- Implement a scalable front architecture:
  - shared UI components
  - typed models
  - clear separation between pages and data access services
- Prepare a secure authentication flow:
  - access token + refresh token (in progress)
  - route guards / interceptors (planned)

---

## 🛠️ Tech Stack

- **Angular 21.0.4**
- **Tailwind CSS v4.1**
- **PrimeNG** + **PrimeIcons**
- PrimeUIX themes (`@primeuix/themes`) with **custom theme adjustments** to match the provided club branding
- **RxJS**
- Formatting:
  - **Prettier**
  - `prettier-plugin-tailwindcss`

---

## ✨ UI & UX

- Skeleton loaders during data fetches
- Error handling implemented per feature/data source
- Reusable UI layer for consistent design across:
  - the public website
  - the private dashboard

---

## 📁 Project Structure

The project is organized for clarity and scalability:

```
src/app
├── core
├── data-access
├── pages
│   ├── auth
│   ├── dashboard
│   └── website
├── layouts
│   ├── auth-layout
│   ├── dashboard-layout
│   └── main-layout
└── shared
    ├── models
    ├── ui
    ├── utils
    └── validators
```

### Key conventions
- `pages/` contains route-level features (website, dashboard, auth)
- `data-access/` contains services responsible for API communication
- `shared/` contains reusable components, typed models, helpers and validators
- `layouts/` centralizes layout composition for public pages and dashboard pages

---

## ✅ Features Status

### Implemented
- Public website (subject to design feedback / upcoming layout adjustments)
- Dashboard content management (CRUD):
  - News
  - FAQ
  - Club information
- Data loading UX:
  - skeleton loaders
  - error handling per data source

### In Progress
- Authentication integration:
  - access token + refresh token
- Route protection:
  - guards
  - role-based access (planned)

### Planned
- Website redesign updates (once final UI mockups are validated)
- Extended dashboard features for club operations:
  - member management
  - player management
  - match calendar
  - season management
  - data-driven dashboard views
- Docker support for frontend (planned)

---

## 🔐 Authentication (Planned / In Progress)

The frontend will connect to the backend using:
- **JWT access token**
- **refresh token** (in progress)

Planned technical approach:
- `HttpInterceptor` to attach the access token to API requests
- refresh flow on 401 responses (when applicable)
- `Route Guards` to protect dashboard routes
- role-based routing / UI restrictions

---

## 🚀 Getting Started

### Prerequisites
- Node.js (recommended: modern LTS)
- npm (project uses `npm@11.1.0`)

### Install dependencies
```bash
npm install
```

### Run in development
```bash
npm run start
```

Then open:
- http://localhost:4200

### Build for production
```bash
npm run build
```

---

## 🔀 Branching Strategy

- **`develop`** → active development branch (most up-to-date)
- **`main`** → production-ready code only

Until the project is deployed in production, **`develop` is the reference branch**.

---

## 🔗 Related Repositories

- **Backend repository**:  
  👉 [Les Artilleurs - API](https://github.com/Fonzy57/les-artilleurs-API)

---

## 📄 Project Status

🚧 **In progress**

This project is actively developed and serves as:
- a real-world front architecture showcase
- a technical portfolio piece for recruiters
- a foundation for a production-ready club platform

---

## ⚠️ License & Usage

This project is provided for **educational and demonstration purposes only**.

- ❌ Commercial use is not allowed
- ❌ Copying or reusing the code without permission is prohibited
- ✅ Viewing and learning from the code is allowed

---

## 👤 Author

Developed by **Stéphane**  
Full Stack Developer  

---

© 2026 Stéphane. All rights reserved.  
Unauthorized copying, modification, distribution, or use of this project or its source code is strictly prohibited.
