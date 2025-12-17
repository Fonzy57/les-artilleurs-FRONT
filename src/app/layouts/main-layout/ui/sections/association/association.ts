// ANGULAR
import { Component } from "@angular/core";

// COMPONENTS
import { ButtonComponent } from "@shared/ui/button/button";

type infoContent = {
  text: string;
  imageUrl: string;
};

@Component({
  selector: "app-website-association",
  imports: [ButtonComponent],
  templateUrl: "./association.html",
})
export class Association {
  infos: infoContent[] = [
    {
      text: "Au football américain, il y a besoin d’au minimum 5 arbitres pour qu’une rencontre ait lieu. Seul l’arbitre principal est dépêché par la Fédération ou la Ligue. Ce sont aux clubs d’apporter les autres. Nous recrutons chaque année des arbitres pour officier sur nos matchs, formation prise en compte par le club !",
      imageUrl: "/images/website/arbitre.png",
    },
    {
      text: "Les jours de match (mais aussi aux entrainements), nous avons besoin de plusieurs personnes pour nous aider sur la touche: chaîneurs, assistants de matchs, responsable matériel et logistique. Soyez au plus prêt des matchs et participez directement à nos victoires !",
      imageUrl: "/images/website/chaineur.png",
    },
    {
      text: "Assistants coach, coach de position, encadrants sportifs bénévoles... si vous aimez le football américain et avez la fibre pédagogique, n’hésitez pas à venir aider les coachs de nos différentes sections. Formation via la fédération, prise en charge par le club.",
      imageUrl: "/images/website/coach.png",
    },
  ];
}
