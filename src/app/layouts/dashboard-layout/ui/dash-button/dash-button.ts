// ANGULAR
import { Component, input, output } from "@angular/core";

// PRIME NG
import { ButtonModule } from "primeng/button";

// TYPES
export type DashButtonSeverity = "primary" | "secondary" | "danger";
export type DashButtonIconPos = "left" | "right";
export type DashbuttonType = "button" | "submit" | "reset";

@Component({
  standalone: true,
  selector: "app-dash-button",
  imports: [ButtonModule],
  templateUrl: "./dash-button.html",
})
export class DashButton {
  severity = input<DashButtonSeverity>("primary");
  type = input<DashbuttonType>("button");
  label = input.required<string>();
  size = input<"small" | "large" | undefined>(undefined);
  icon = input<string | undefined>(undefined);
  iconPos = input<DashButtonIconPos>("left");
  loading = input<boolean>(false);
  disabled = input<boolean>(false);

  readonly raised = true;

  clicked = output<void>();

  handleClick(): void {
    if (this.disabled() || this.loading()) return;
    this.clicked.emit();
  }
}
