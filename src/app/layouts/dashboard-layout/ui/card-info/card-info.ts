import { Component, Input } from "@angular/core";

@Component({
  standalone: true,
  selector: "app-dashboard-card-info",
  imports: [],
  templateUrl: "./card-info.html",
})
export class DashboardCardInfo {
  @Input() title!: string;
}
