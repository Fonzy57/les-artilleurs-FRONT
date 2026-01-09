// ANGULAR
import { NgClass } from "@angular/common";
import { Component, computed, input, InputSignal, Signal } from "@angular/core";

export type AlertCardType = "info" | "warning" | "success" | "error";

type AlertCardStyle = {
  wrapper: string;
  iconColor: string;
  content: string;
  iconName: string;
};

const ALERT_CARD_STYLES: Record<AlertCardType, AlertCardStyle> = {
  info: {
    wrapper: "bg-info-50 border-info",
    iconColor: "text-info-600",
    content: "text-info-800",
    iconName: "pi pi-info-circle",
  },
  warning: {
    wrapper: "bg-warning-100 border-warning",
    iconColor: "text-warning-600",
    content: "text-warning-800",
    iconName: "pi pi-exclamation-triangle",
  },
  success: {
    wrapper: "bg-success-50 border-success",
    iconColor: "text-success-700",
    content: "text-success-800",
    iconName: "pi pi-check",
  },
  error: {
    wrapper: "bg-error-50 border-error",
    iconColor: "text-error-600",
    content: "text-error-800",
    iconName: "pi pi-times-circle",
  },
};

@Component({
  standalone: true,
  selector: "app-alert-card",
  imports: [NgClass],
  templateUrl: "./alert-card.html",
})
export class AlertCard {
  type: InputSignal<AlertCardType> = input<AlertCardType>("info");
  iconSize: InputSignal<string> = input<string>("1.5rem");
  containerClass: InputSignal<string> = input<string>("");
  widthFull: InputSignal<boolean> = input<boolean>(false);

  style: Signal<AlertCardStyle> = computed(
    () => ALERT_CARD_STYLES[this.type()],
  );
  wrapperWidth: Signal<"w-full" | "w-max"> = computed(() =>
    this.widthFull() ? "w-full" : "w-max",
  );
}
