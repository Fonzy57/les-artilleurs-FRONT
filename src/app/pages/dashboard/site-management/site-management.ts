// ANGULAR
import { Component } from "@angular/core";

// PRIME NG
import { TabsModule } from "primeng/tabs";

// TAB COMPONENTS
import { ClubInfosManagement } from "./club-infos/club-infos";
import { FaqManagement } from "./faq/faq";
import { InfosManagement } from "./infos/infos";

@Component({
  selector: "app-dashboard-site-management",
  imports: [TabsModule, ClubInfosManagement, FaqManagement, InfosManagement],
  templateUrl: "./site-management.html",
})
export class SiteManagement {}
