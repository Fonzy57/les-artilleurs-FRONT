// ANGULAR
import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";

// PRIME NG
import { TableModule } from "primeng/table";
import { ConfirmDialog } from "primeng/confirmdialog";

// SERVICE
import { FaqAdminService } from "app/data-access/admin/faq/faq-admin.service";

// COMPONENTS
import { ActionIconButton } from "@layouts/dashboard-layout/ui/action-icon-button/action-icon-button";
import { TableSkeleton } from "@shared/ui/skeleton/table-skeleton/table-skeleton";
import { AlertCard } from "@shared/ui/alert-card/alert-card";
import { ButtonComponent } from "@shared/ui/button/button";

@Component({
  standalone: true,
  selector: "app-management-faq",
  imports: [
    TableModule,
    CommonModule,
    ActionIconButton,
    ConfirmDialog,
    TableSkeleton,
    AlertCard,
    ButtonComponent,
  ],
  templateUrl: "./faq.html",
})
export class FaqManagement implements OnInit {
  readonly faqService = inject(FaqAdminService);

  ngOnInit(): void {
    this.faqService.loadFaqItems();
  }

  onEdit(id: number) {
    /* TODO OUVRIR UNE MODAL POUR FAIRE LA MODIFICATION */
    console.log("je clique sur MODIFIER un élément avec l'id : " + id);
  }

  onDelete(id: number) {
    /* TODO MODAL DE VALIDATION POUR LA SUPPRESION AVEC MESSAGE CLAIR */
    console.log("je clique sur SUPPRIMER un élément avec l'id : " + id);
  }
}
