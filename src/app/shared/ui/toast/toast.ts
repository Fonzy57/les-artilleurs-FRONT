// ANGULAR
import { Component } from "@angular/core";

// PRIME NG
import { Toast } from "primeng/toast";

// TYPES
import { ToastPosition } from "./toast.types";

@Component({
  selector: "app-toast",
  standalone: true,
  imports: [Toast],
  templateUrl: "./toast.html",
})
export class AppToastComponent {
  positions: ToastPosition[] = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
    "center",
  ];

  keyFor(pos: ToastPosition) {
    return `toast:${pos}`;
  }
}
