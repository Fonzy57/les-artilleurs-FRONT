// ANGULAR
import { Component, input, output } from "@angular/core";

// PRIME NG
import { ButtonModule } from "primeng/button";

// TYPES
export type DashSeverity = "primary" | "secondary" | "danger";
export type DashIconPos = "left" | "right";

@Component({
  standalone: true,
  selector: "app-dash-button",
  imports: [ButtonModule],
  templateUrl: "./dash-button.html",
})
export class DashButton {
  severity = input<DashSeverity>("primary");
  label = input.required<string>();
  icon = input<string | undefined>(undefined);
  iconPos = input<DashIconPos>("left");
  loading = input<boolean>(false);
  disabled = input<boolean>(false);

  readonly raised = true;

  clicked = output<void>();

  handleClick(): void {
    if (this.disabled() || this.loading()) return;
    this.clicked.emit();
  }
}
