// ANGULAR
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";

// CONFIG
import { navlinks } from "@core/config/navigation";

@Component({
  standalone: true,
  selector: "app-navbar",
  imports: [RouterLink, NgClass],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  isOpen = false;
  // Avoid transition on component mount
  hasInteracted = false;
  navLinks = navlinks;

  /* TODO AJOUTER LE CLICK QUE LES ANCRES */

  /* TODO IL FAUDRA VOIR SI ON PEUT SCROLL SUR MOBILE QUAND LE MENU EST OUVERT, SI C'EST LE CAS ENLEVER LE SCROLL */
  toggleMenu(): void {
    this.hasInteracted = true;
    this.isOpen = !this.isOpen;

    console.log("open ", this.isOpen);

    // Toggle the 'no-scroll-mobile' class on the <body> element to prevent background scrolling
    /* const body = this.document.body;
    if (this.isOpen) {
      this.renderer.addClass(body, 'no-scroll-mobile');
    } else {
      this.renderer.removeClass(body, 'no-scroll-mobile');
    } */
  }

  closeMenu(): void {
    this.isOpen = false;
    /* this.renderer.removeClass(this.document.body, 'no-scroll-mobile'); */
  }
}
