import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-dashboard-layout",
  imports: [RouterOutlet],
  templateUrl: "./dashboard-layout.html",
})
export class DashboardLayout {}
