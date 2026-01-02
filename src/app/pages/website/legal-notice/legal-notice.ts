// ANGULAR
import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

// CONFIG
import { artilleursConfig } from "@core/config/app.config";

@Component({
  standalone: true,
  selector: "app-website-legal-notice",
  imports: [NgClass],
  templateUrl: "./legal-notice.html",
})
export class LegalNotice {
  containerStyle = "mx-auto px-5 md:w-[800px] lg:w-[1000px] xl:w-[1200px]";
  titleStyle =
    "text-main border-b-secondary w-full border-b-2 text-xl font-semibold tracking-wide sm:w-max md:text-2xl lg:text-3xl";
  strongStyle = "text-main font-bold";

  contact = artilleursConfig.mail;
}
