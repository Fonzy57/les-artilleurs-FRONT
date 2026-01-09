// ANGULAR
import { Component, computed, input } from "@angular/core";

// PRIME NG
import { Skeleton } from "primeng/skeleton";

type ButtonSkeletonSize = "normal" | "small";

@Component({
  standalone: true,
  selector: "app-button-skeleton",
  imports: [Skeleton],
  templateUrl: "./button-skeleton.html",
})
export class ButtonSkeleton {
  size = input<ButtonSkeletonSize>("normal");
  width = input<string>("5.625rem");
  buttonHeight = computed(() => {
    return this.size() === "normal" ? "2.625rem" : "2.188rem";
  });
}
