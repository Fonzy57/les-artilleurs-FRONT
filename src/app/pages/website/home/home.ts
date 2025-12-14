// ANGULAR
import { Component } from "@angular/core";

// SECTIONS
import { Hero } from "@layouts/main-layout/ui/sections/hero/hero";
import { Category } from "@layouts/main-layout/ui/sections/category/category";

@Component({
  standalone: true,
  selector: "app-home",
  imports: [Hero, Category],
  templateUrl: "./home.html",
})
export class Home {}
