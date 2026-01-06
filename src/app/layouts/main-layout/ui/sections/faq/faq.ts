// ANGULAR
import { Component, inject, OnInit } from "@angular/core";

// SERVICE
import { FaqService } from "app/data-access/public/faq/faq.service";

// PRIME NG
import { AccordionModule } from "primeng/accordion";

// COMPONENTS
import { FaqWebsiteSkeleton } from "@shared/ui/skeleton/faq-website-skeleton/faq-website-skeleton";

@Component({
  standalone: true,
  selector: "app-website-faq",
  imports: [AccordionModule, FaqWebsiteSkeleton],
  templateUrl: "./faq.html",
})
export class Faq implements OnInit {
  readonly faqService = inject(FaqService);

  ngOnInit(): void {
    this.faqService.loadFaqItems();
  }
}
