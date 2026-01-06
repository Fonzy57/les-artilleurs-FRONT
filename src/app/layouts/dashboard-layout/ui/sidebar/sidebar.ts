// ANGULAR
import { Component } from "@angular/core";

// COMPONENTS
import { DashboardNavItem } from "../nav-item/nav-item";

type DasboardNavItem = {
  name: string;
  label: string;
  icon: string;
  url: string;
};

@Component({
  selector: "app-dashboard-sidebar",
  imports: [DashboardNavItem],
  templateUrl: "./sidebar.html",
  standalone: true,
})
export class DashboardSidebar {
  /* TODO CHANGER LES ICONES */
  navItems: DasboardNavItem[] = [
    {
      name: "dashboard",
      label: "Dasboard",
      icon: "pi pi-home",
      url: "/dashboard",
    },
    {
      name: "liencies",
      label: "Licenciés",
      icon: "pi pi-users",
      url: "/dashboard/licencies",
    },
    {
      name: "matchs",
      label: "Matchs",
      icon: "pi pi-calendar",
      url: "/dashboard/matchs",
    },
    /* {
      name: "comptabilite",
      label: "Comptabilité",
      icon: "pi pi-euro",
      url: "/comptabilite",
    }, */
    {
      /* TODO SUR CETTE PAGE FAIRE DES TABS AVEC /
        - INFOS sous hero (4 maximum)
        - CALENDRIER (seniors, u20, u17, flag)
        - Infos du club (horaire, jour d'entrainement, adresse selon catégorie)
        - FAQ (question + réponse)
      */
      name: "gestion-site",
      label: "Gestion du site",
      icon: "pi pi-globe",
      url: "/dashboard/gestion-du-site",
    },
  ];
}
