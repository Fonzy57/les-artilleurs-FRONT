// ANGULAR
import { Component } from "@angular/core";

// SECTIONS
import { Hero } from "@layouts/main-layout/ui/sections/hero/hero";
import { Category } from "@layouts/main-layout/ui/sections/category/category";
import { Registration } from "@layouts/main-layout/ui/sections/registration/registration";

@Component({
  standalone: true,
  selector: "app-home",
  imports: [Hero, Category, Registration],
  templateUrl: "./home.html",
})
export class Home {}
