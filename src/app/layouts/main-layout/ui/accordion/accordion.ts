// ANGULAR
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

// TYPES
type AccordionItem = {
  id: number;
  title: string;
  descriptions: string[];
  imageUrl: string;
  category: string;
  isOpen: boolean;
};

@Component({
  selector: "app-horizontal-accordion",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./accordion.html",
  styleUrls: ["./accordion.css"],
})
export class HorizontalAccordionComponent {
  items: AccordionItem[] = [
    {
      id: 1,
      title: "LE FOOTBALL AMÉRICAIN EST À METZ",
      descriptions: [
        "Sport de contact complet, à la fois physique et tactique, le football américain est un jeu de gagne terrain avant tout.",
        "Chaque équipe dispose de 11 joueurs sur le terrain. Une équipe comprend une formation d’attaque (11 joueurs), une formation de défense (11 joueurs).",
        "L’équipe en possession de la balle, doit la faire progresser jusqu’à la zone d´en-but adverse (end zone). L’équipe de défense doit empêcher cette progression en plaquant le porteur de balle.",
      ],
      imageUrl: "/images/website/accordion/joueur-football-americain.png",
      category: "foot us seniors",
      isOpen: true,
    },
    {
      id: 2,
      title: "LE FOOTBALL AMÉRICAIN EST À METZ",
      descriptions: [
        "Sport de contact complet, à la fois physique et tactique, le football américain est un jeu de gagne terrain avant tout.",
        "Chaque équipe dispose de 11 joueurs sur le terrain. Une équipe comprend une formation d’attaque (11 joueurs), une formation de défense (11 joueurs).",
        "L’équipe en possession de la balle, doit la faire progresser jusqu’à la zone d´en-but adverse (end zone). L’équipe de défense doit empêcher cette progression en plaquant le porteur de balle.",
      ],
      imageUrl: "/images/website/accordion/joueur-football-americain-u20.png",
      category: "U20 - U17",
      isOpen: false,
    },
    {
      id: 3,
      title: "LE FOOTBALL AMÉRICAIN EST À METZ",
      descriptions: [
        "Sport de contact complet, à la fois physique et tactique, le football américain est un jeu de gagne terrain avant tout.",
        "Chaque équipe dispose de 11 joueurs sur le terrain. Une équipe comprend une formation d’attaque (11 joueurs), une formation de défense (11 joueurs).",
        "L’équipe en possession de la balle, doit la faire progresser jusqu’à la zone d´en-but adverse (end zone). L’équipe de défense doit empêcher cette progression en plaquant le porteur de balle.",
      ],
      imageUrl: "/images/website/accordion/joueur-flag.png",
      category: "FLAG FOOTBALL",
      isOpen: false,
    },
  ];

  toggleItem(selectedId: number): void {
    // Ne rien faire si l'item cliqué est déjà ouvert
    const clickedItem = this.items.find((item) => item.id === selectedId);
    if (clickedItem?.isOpen) {
      return;
    }

    // Ouvrir l'item cliqué et fermer les autres
    this.items = this.items.map((item) => ({
      ...item,
      isOpen: item.id === selectedId,
    }));
  }
}
