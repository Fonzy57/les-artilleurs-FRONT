// ANGULAR
import { Component } from "@angular/core";

// PRIME NG
import { TabsModule } from "primeng/tabs";

// TAB COMPONENTS
import { ClubInfosManagement } from "./club-infos/club-infos";
import { FaqManagement } from "./faq/faq";
import { InfosManagement } from "./infos/infos";

// COMPONENTS
import { AlertCard } from "@shared/ui/alert-card/alert-card";

@Component({
  selector: "app-dashboard-site-management",
  imports: [
    TabsModule,
    ClubInfosManagement,
    FaqManagement,
    InfosManagement,
    AlertCard,
  ],
  templateUrl: "./site-management.html",
})
export class SiteManagement {}
