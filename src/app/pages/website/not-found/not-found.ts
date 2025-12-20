// ANGULAR
import { Component } from "@angular/core";

// COMPONENTS
import { ButtonComponent } from "@shared/ui/button/button";

@Component({
  standalone: true,
  selector: "app-not-found",
  imports: [ButtonComponent],
  templateUrl: "./not-found.html",
})
export class NotFound {}
