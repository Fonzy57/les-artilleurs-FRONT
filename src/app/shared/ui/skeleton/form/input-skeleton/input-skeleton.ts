// ANGULAR
import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

// PRIME NG
import { Skeleton } from "primeng/skeleton";

type HintPosition = "start" | "end";

@Component({
  standalone: true,
  selector: "app-input-skeleton",
  imports: [Skeleton, NgClass],
  templateUrl: "./input-skeleton.html",
})
export class InputSkeleton {
  label = input<boolean>(true);
  hint = input<boolean>(false);
  hintPosition = input<HintPosition>("start");
  labelWidth = input<string>("20%");
  hintWidth = input<string>("33%");
}
