// ANGULAR
import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";

// PRIME NG
import { TableModule } from "primeng/table";

// SERVICE
import { FaqAdminService } from "app/data-access/admin/faq/faq-admin.service";

// COMPONENTS
import {
  ActionIconButton,
  ActionIconButtonType,
} from "@layouts/dashboard-layout/ui/action-icon-button/action-icon-button";

@Component({
  standalone: true,
  selector: "app-management-faq",
  imports: [TableModule, CommonModule, ActionIconButton],
  templateUrl: "./faq.html",
})
export class FaqManagement implements OnInit {
  readonly faqService = inject(FaqAdminService);

  ngOnInit(): void {
    this.faqService.loadFaqItems();
  }

  onEdit(id: number) {
    console.log("je clique sur MODIFIER un élément avec l'id : " + id);
  }

  onDelete(id: number) {
    console.log("je clique sur SUPPRIMER un élément avec l'id : " + id);
  }

  onView(id: number) {
    console.log("je clique sur VOIR un élément avec l'id : " + id);
  }
}
