// ANGULAR
import { Routes } from "@angular/router";

// LAYOUTS
import { MainLayout } from "./layouts/main-layout/main-layout";
import { AuthLayout } from "./layouts/auth-layout/auth-layout";
import { DashboardLayout } from "./layouts/dashboard-layout/dashboard-layout";

// PAGES
// Website
import { Home } from "./pages/website/home/home";
import { LegalNotice } from "@pages/website/legal-notice/legal-notice";
import { PrivacyPolicy } from "@pages/website/privacy-policy/privacy-policy";
// Auth
import { Login } from "./pages/auth/login/login";
// Dashboard
import { HomeDashboard } from "./pages/dashboard/home/home-dashboard";

/* TODO METTRE LES GUARDS QUAND ILS SERONT EN PLACE */
export const routes: Routes = [
  /* ------------------- */
  /* --- PUBLIC SITE --- */
  /* ------------------- */
  {
    path: "",
    component: MainLayout,
    children: [
      { path: "", component: Home },
      { path: "mentions-legales", component: LegalNotice },
      { path: "politique-de-confidentialite", component: PrivacyPolicy },
    ],
  },

  /* -------------------- */
  /* --- AUTH (login) --- */
  /* -------------------- */
  {
    path: "auth",
    component: AuthLayout,
    children: [
      { path: "login", component: Login },
      { path: "", pathMatch: "full", redirectTo: "login" },
    ],
  },

  /* ----------------- */
  /* --- DASHBOARD --- */
  /* ----------------- */
  {
    path: "dashboard",
    component: DashboardLayout,
    children: [{ path: "", component: HomeDashboard }],
  },

  /* TODO VOIR PLUS TARD POUR LES REDIRECTIONS */
  { path: "**", redirectTo: "" },
];
