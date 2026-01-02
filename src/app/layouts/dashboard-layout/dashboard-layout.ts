// ANGULAR
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

// COMPONENTS
import { DashboardSidebar } from "./ui/sidebar/sidebar";
import { DashboardCopyright } from "./ui/copyright/copyright";

@Component({
  standalone: true,
  selector: "app-dashboard-layout",
  imports: [RouterOutlet, DashboardSidebar, DashboardCopyright],
  templateUrl: "./dashboard-layout.html",
})
export class DashboardLayout {}
