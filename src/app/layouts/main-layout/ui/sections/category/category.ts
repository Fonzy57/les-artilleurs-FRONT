// ANGULAR
import { Component } from "@angular/core";

// COMPONENTS
import { HorizontalAccordionComponent } from "../../accordion/accordion";

type infoContent = {
  text: string;
  span: string;
};

@Component({
  selector: "app-website-category",
  imports: [HorizontalAccordionComponent],
  templateUrl: "./category.html",
})
export class Category {
  /* TODO CECI VIENDRA DE LA BASE DE DONNEES */
  infos: infoContent[] = [
    {
      text: "Reprise des entraînements pour la saison 2023-2024 dès",
      span: "le lundi 14 août !",
    },
    {
      text: "Reprise des entraînements pour la saison 2023-2024 dès",
      span: "le lundi 14 août !",
    },
    {
      text: "Reprise des entraînements pour la saison 2023-2024 dès",
      span: "le lundi 14 août !",
    },
    {
      text: "AG au clubhouse",
      span: "le lundi 14 août !",
    },
  ];
}
