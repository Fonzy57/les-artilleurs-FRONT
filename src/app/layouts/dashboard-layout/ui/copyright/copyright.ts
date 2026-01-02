// ANGULAR
import { Component } from "@angular/core";

// CONFIG
import { artilleursConfig } from "@core/config/app.config";

@Component({
  standalone: true,
  selector: "app-dashboard-copyright",
  imports: [],
  templateUrl: "./copyright.html",
})
export class DashboardCopyright {
  currentYear: number = new Date().getFullYear();
  version: string = artilleursConfig.version;
}
