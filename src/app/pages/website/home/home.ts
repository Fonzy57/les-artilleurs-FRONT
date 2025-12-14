// ANGULAR
import { Component } from "@angular/core";

// SECTIONS
import { Hero } from "@layouts/main-layout/ui/sections/hero/hero";

@Component({
  standalone: true,
  selector: "app-home",
  imports: [Hero],
  templateUrl: "./home.html",
})
export class Home {}
