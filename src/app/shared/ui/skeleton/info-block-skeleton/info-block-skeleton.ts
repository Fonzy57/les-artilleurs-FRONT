import { Component, computed, inject, signal } from "@angular/core";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Skeleton } from "primeng/skeleton";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  standalone: true,
  selector: "app-info-block-skeleton",
  imports: [Skeleton],
  templateUrl: "./info-block-skeleton.html",
  host: {
    class: "w-full lg:w-full",
  },
})
export class InfoBlockSkeleton {
  private breakpointObserver = inject(BreakpointObserver);

  readonly numberOfInfos = 4;
  readonly items = Array.from({ length: this.numberOfInfos });

  readonly isLargeScreen = signal(false);
  readonly skeletonHeight = computed(() =>
    this.isLargeScreen() ? "3.75rem" : "2.5rem",
  );

  constructor() {
    this.breakpointObserver
      .observe("(min-width: 1440px)")
      .pipe(takeUntilDestroyed())
      .subscribe((result) => {
        this.isLargeScreen.set(result.matches);
      });
  }
}
