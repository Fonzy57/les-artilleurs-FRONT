// ANGULAR
import { Component } from "@angular/core";

// SECTIONS
import { Hero } from "@layouts/main-layout/ui/sections/hero/hero";
import { Category } from "@layouts/main-layout/ui/sections/category/category";
import { Registration } from "@layouts/main-layout/ui/sections/registration/registration";
import { History } from "@layouts/main-layout/ui/sections/history/history";

@Component({
  standalone: true,
  selector: "app-home",
  imports: [Hero, Category, Registration, History],
  templateUrl: "./home.html",
})
export class Home {}
