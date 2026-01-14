// ANGULAR
import { Component, computed, inject, OnInit } from "@angular/core";
import { NgClass } from "@angular/common";

// SERVICE
import { InfoBlockService } from "app/data-access/public/info-block/info-block.service";

// COMPONENTS
import { HorizontalAccordionComponent } from "../../accordion/accordion";

// UTILS
import { InfoBlockChunk, markdownParser } from "@shared/utils/markdown-parser";

// MODELS
import { InfoBlockPublic } from "@shared/models/info-block.model";

type InfoBlockPublicParsed = InfoBlockPublic & {
  chunks: InfoBlockChunk[];
};

type TextContent = {
  id: number;
  title: string;
  descriptions: string[];
  imageUrl: string;
};

@Component({
  standalone: true,
  selector: "app-website-category",
  imports: [HorizontalAccordionComponent, NgClass],
  templateUrl: "./category.html",
})
export class Category implements OnInit {
  readonly infoBlockService = inject(InfoBlockService);

  ngOnInit(): void {
    this.infoBlockService.loadInfoBlocks();
  }

  parsedInfoBlocks = computed<InfoBlockPublicParsed[]>(() => {
    const blocks = this.infoBlockService.infoBlocks();

    return blocks.map((block) => ({
      ...block,
      chunks: markdownParser(block.content),
    }));
  });

  textContent: TextContent[] = [
    {
      id: 1,
      title: "LE FOOTBALL AMÉRICAIN EST À METZ",
      descriptions: [
        "Sport de contact complet, à la fois physique et tactique, le football américain est un jeu de gagne terrain avant tout.",
        "Chaque équipe dispose de 11 joueurs sur le terrain. Une équipe comprend une formation d’attaque (11 joueurs), une formation de défense (11 joueurs).",
        "L’équipe en possession de la balle, doit la faire progresser jusqu’à la zone d´en-but adverse (end zone). L’équipe de défense doit empêcher cette progression en plaquant le porteur de balle.",
      ],
      imageUrl: "/images/website/accordion/joueur-football-americain.png",
    },
    {
      id: 2,
      title: "LE FOOTBALL AMÉRICAIN POUR LES U20 – U17",
      descriptions: [
        "Destiné aux jeunes joueurs de 17 à 20 ans, le football américain U20–U17 permet de découvrir ou d’approfondir la pratique de ce sport exigeant dans un cadre structuré et formateur. Il combine apprentissage technique, développement physique et esprit d’équipe.",
        "Les entraînements sont adaptés à l’âge et au niveau des joueurs, avec un accent mis sur les fondamentaux : placements, schémas de jeu, lecture des actions et sécurité. Chaque joueur apprend à évoluer à son poste tout en comprenant les rôles des autres positions.",
        "Encadrés par des coachs qualifiés, les jeunes participent à des compétitions officielles tout au long de la saison. L’objectif est de progresser collectivement, de gagner en confiance et de préparer une éventuelle transition vers le football senior.",
      ],
      imageUrl: "/images/website/accordion/joueur-football-americain-u20.png",
    },
    {
      id: 3,
      title: "LE FLAG FOOTBALL, UNE AUTRE FAÇON DE JOUER",
      descriptions: [
        "Le flag football est une version sans contact du football américain, accessible à tous. Il privilégie la vitesse, l’agilité et la stratégie, tout en conservant l’essence du jeu : avancer sur le terrain et marquer des points.",
        "Chaque joueur porte une ceinture équipée de flags que l’adversaire doit attraper pour stopper l’action, remplaçant ainsi le plaquage. Cette pratique réduit considérablement les risques de blessures, tout en offrant un jeu dynamique et technique.",
        "Ouvert aux hommes et aux femmes, le flag football est idéal pour débuter le football américain ou pour continuer à jouer dans une ambiance conviviale et compétitive. Les équipes participent à des tournois et championnats, dans un esprit fair-play et inclusif.",
      ],
      imageUrl: "/images/website/accordion/joueur-flag.png",
    },
  ];
}
