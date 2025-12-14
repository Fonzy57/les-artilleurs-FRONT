// ANGULAR
import { Component } from "@angular/core";
import { NgClass } from "@angular/common";

// CONFIG
import { artilleursConfig } from "../../../../core/config/app.config";
import { navlinks } from "../../../../core/config/navigation";
import { documentsUtil } from "../../../../core/config/documents";
import { socialsMedia } from "../../../../core/config/socials";

@Component({
  selector: "app-footer",
  imports: [NgClass],
  templateUrl: "./footer.html",
  styleUrl: "./footer.css",
})
export class Footer {
  currentYear = new Date().getFullYear();
  version = artilleursConfig.version;

  navLinks = navlinks;
  documents = documentsUtil;
  socials = socialsMedia;
}
