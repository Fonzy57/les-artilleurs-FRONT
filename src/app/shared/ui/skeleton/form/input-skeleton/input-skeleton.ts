// ANGULAR
import { NgClass } from "@angular/common";
import { Component, computed, input } from "@angular/core";

// PRIME NG
import { Skeleton } from "primeng/skeleton";

type InputHintPosition = "start" | "end";
type InputSkeletonType = "input" | "textarea";

@Component({
  standalone: true,
  selector: "app-input-skeleton",
  imports: [Skeleton, NgClass],
  templateUrl: "./input-skeleton.html",
})
export class InputSkeleton {
  type = input<InputSkeletonType>("input");
  label = input<boolean>(true);
  hint = input<boolean>(false);
  hintPosition = input<InputHintPosition>("start");
  labelWidth = input<string>("20%");
  hintWidth = input<string>("33%");

  readonly skeletonHeight = computed(() => {
    return this.type() === "textarea" ? "8.625rem" : "2.625rem";
  });
}
