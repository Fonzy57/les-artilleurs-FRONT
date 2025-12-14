// ANGULAR
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

// CONFIG
import { navlinks } from "../../../../core/config/navigation";

@Component({
  standalone: true,
  selector: "app-navbar",
  imports: [RouterLink],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  navLinks = navlinks;
}
