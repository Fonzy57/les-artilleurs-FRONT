// ANGULAR
import { Component, DOCUMENT, inject, Renderer2 } from "@angular/core";
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
  private renderer = inject(Renderer2);
  private document = inject(DOCUMENT);

  isOpen = false;
  // Avoid transition on component mount
  hasInteracted = false;
  navLinks = navlinks;
  isMobile = window.matchMedia("(max-width: 767px)").matches;

  private mq = window.matchMedia("(max-width: 767px)");

  ngOnInit() {
    this.mq.addEventListener("change", (e) => {
      this.isMobile = e.matches;

      if (!this.isMobile) {
        this.isOpen = false;
        this.hasInteracted = false;
        this.renderer.removeClass(this.document.body, "no-scroll-mobile");
      }
    });
  }

  ngOnDestroy() {
    this.renderer.removeClass(this.document.body, "no-scroll-mobile");
  }

  toggleMenu(): void {
    this.hasInteracted = true;
    this.isOpen = !this.isOpen;

    const body = this.document.body;
    if (this.isOpen) {
      this.renderer.addClass(body, "no-scroll-mobile");
    } else {
      this.renderer.removeClass(body, "no-scroll-mobile");
    }
  }

  closeMenu(): void {
    this.isOpen = false;
    this.renderer.removeClass(this.document.body, "no-scroll-mobile");
  }
}
