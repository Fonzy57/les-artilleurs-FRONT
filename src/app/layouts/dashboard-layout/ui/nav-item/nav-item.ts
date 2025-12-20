import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-dashboard-nav-item",
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: "./nav-item.html",
  standalone: true,
})
export class DashboardNavItem {
  @Input() label: string = "";
  @Input() url: string = "";
  @Input() iconName: string = "";
}
