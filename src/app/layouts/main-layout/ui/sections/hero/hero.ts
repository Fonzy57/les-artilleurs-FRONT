// ANGULAR
import { Component } from "@angular/core";

// COMPONENTS
import { ButtonComponent } from "@shared/ui/button/button";

@Component({
  standalone: true,
  selector: "app-website-hero",
  imports: [ButtonComponent],
  templateUrl: "./hero.html",
})
export class Hero {}
