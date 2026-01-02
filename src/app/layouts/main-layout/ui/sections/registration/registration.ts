// ANGULAR
import { Component } from "@angular/core";

// COMPONENTS
import { ButtonComponent } from "@shared/ui/button/button";

type RegistrationType = {
  id: number;
  title: string;
  content: string;
  link?: string;
  button?: string;
};

@Component({
  standalone: true,
  selector: "app-website-registration",
  imports: [ButtonComponent],
  templateUrl: "./registration.html",
})
export class Registration {
  registrationSteps: RegistrationType[] = [
    {
      id: 1,
      title: "Je viens tester",
      content:
        "Avant de remplir votre licence, venez donc tester nos différentes disciplines, vous avez le droit à 4 entrainements offerts pris en charge par le club. Une tenue de sport classique suffit, nous vous prêtons le reste du matériel !",
    },
    {
      id: 2,
      title: "Je télécharge le dossier de licence",
      content:
        "Une fois décidé.e, téléchargez simplement le dossier de licence pour la saison en cours. Il y a notamment la demande de licence, une fiche de renseignement, etc",
      link: "#",
      button: "Télécharger",
    },
    {
      id: 3,
      title: "Je complète tous les documents",
      content:
        "N’oubliez pas de prendre rendez-vous avec votre médecin pour faire un certificat médical et de bien compléter TOUS les documents demandés, sinon on ne pourra pas valider la licence !",
    },
    {
      id: 4,
      title: "Je règle la cotisation annuelle",
      content:
        "Directement en ligne depuis la plateforme HELLOASSO, vous pouvez payer notamment en 3 mensualités si besoin ! ",
      link: "#",
      button: "Payer en Ligne",
    },
  ];
}
