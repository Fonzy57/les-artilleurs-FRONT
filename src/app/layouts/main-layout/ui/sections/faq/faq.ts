// ANGULAR
import { Component } from "@angular/core";

// PRIME NG
import { AccordionModule } from "primeng/accordion";

type faqContent = {
  title: string;
  content: string;
};

@Component({
  standalone: true,
  selector: "app-website-faq",
  imports: [AccordionModule],
  templateUrl: "./faq.html",
})
export class Faq {
  /* TODO VOIR SI ON MET CA DANS L'API, COMME CA L'ADMIN GERE LES TITRES ET CONTENU */
  faqQuestions: faqContent[] = [
    {
      title: "à partir de quel âge puis-je prendre une licence ?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate pariatur eaque quos totam commodi, saepe quas accusamus inventore consequuntur explicabo corporis enim. Quia necessitatibus rem ad eum in cupiditate?",
    },
    {
      title: "Combien coûte la licence ?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate pariatur eaque quos totam commodi, saepe quas accusamus inventore consequuntur explicabo corporis enim. Quia necessitatibus rem ad eum in cupiditate?",
    },
    {
      title: "De quels équipements j’ai besoin ?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate pariatur eaque quos totam commodi, saepe quas accusamus inventore consequuntur explicabo corporis enim. Quia necessitatibus rem ad eum in cupiditate?",
    },
    {
      title: "à partir de quel âge puis-je prendre une licence ?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate pariatur eaque quos totam commodi, saepe quas accusamus inventore consequuntur explicabo corporis enim. Quia necessitatibus rem ad eum in cupiditate?",
    },
    {
      title: "Y’a-t-il une date limite pour s’inscrire ?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate pariatur eaque quos totam commodi, saepe quas accusamus inventore consequuntur explicabo corporis enim. Quia necessitatibus rem ad eum in cupiditate?",
    },
    {
      title: "Quel type de gabarit pour intégrer l’équipe ?",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate pariatur eaque quos totam commodi, saepe quas accusamus inventore consequuntur explicabo corporis enim. Quia necessitatibus rem ad eum in cupiditate?",
    },
  ];
}
