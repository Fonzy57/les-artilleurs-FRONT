import { Component } from "@angular/core";
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
      url: "/licencies",
    },
    {
      name: "matchs",
      label: "Matchs",
      icon: "pi pi-calendar",
      url: "/matchs",
    },
    {
      name: "comptabilite",
      label: "Comptabilité",
      icon: "pi pi-euro",
      url: "/comptabilite",
    },
  ];
}
