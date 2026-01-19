// ANGULAR
import { Component } from "@angular/core";

// PRIMENG
import { Divider } from "primeng/divider";

// COMPONENTS
import { InputSkeleton } from "@shared/ui/skeleton/form/input-skeleton/input-skeleton";
import { ButtonSkeleton } from "@shared/ui/skeleton/button-skeleton/button-skeleton";

@Component({
  standalone: true,
  selector: "app-club-form-skeleton",
  imports: [InputSkeleton, ButtonSkeleton, Divider],
  templateUrl: "./club-form-skeleton.html",
})
export class ClubFormSkeleton {}
