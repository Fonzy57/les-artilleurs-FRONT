// ANGULAR
import { Component } from "@angular/core";

// PRIME NG
import { Skeleton } from "primeng/skeleton";

@Component({
  selector: "app-faq-website-skeleton",
  imports: [Skeleton],
  templateUrl: "./faq-website-skeleton.html",
})
export class FaqWebsiteSkeleton {
  readonly numberOfRows = 6;

  readonly rows = Array.from({ length: this.numberOfRows });
}
