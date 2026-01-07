import { Component, computed, input } from "@angular/core";

// PRIME NG
import { TableModule } from "primeng/table";
import { SkeletonModule } from "primeng/skeleton";
import { CommonModule } from "@angular/common";

@Component({
  standalone: true,
  selector: "app-table-skeleton",
  imports: [TableModule, SkeletonModule, CommonModule],
  templateUrl: "./table-skeleton.html",
})
export class TableSkeleton {
  headers = input<string[]>([]);
  rows = input<number>(8);
  minWidth = input<string>("50rem");

  readonly rowPlaceholders = computed(() => {
    const count = Math.max(0, this.rows());
    return Array.from({ length: count }, (_, i) => ({ id: i }));
  });
}
