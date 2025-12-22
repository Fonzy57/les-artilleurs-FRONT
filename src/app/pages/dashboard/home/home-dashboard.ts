// ANGULAR
import { Component } from "@angular/core";

// COMPONENTS
import { DashboardCardInfo } from "@layouts/dashboard-layout/ui/card-info/card-info";

type ContentItem = {
  name?: string;
  label?: string;
  value: string | number;
};

type CardContent = ContentItem | ContentItem[];

type CardInfo = {
  title: string;
  content: CardContent;
};

@Component({
  standalone: true,
  selector: "app-home-dashboard",
  imports: [DashboardCardInfo],
  templateUrl: "./home-dashboard.html",
})
export class HomeDashboard {
  /* TODO LES INFOS VONT VENIR DE LA BASE DE DONNEES */
  cardInfos: CardInfo[] = [
    {
      title: "Nombre de licences",
      content: { name: "licences", label: "Licences", value: "77" },
    },
    {
      title: "Nombre de licences par catégorie",
      /* TODO VOIR COMMENT RECUPERER LES CATEGORIES QUI SERONT EN BDD ET LA VALEUR */
      content: [
        { name: "foot-us", label: "Senior", value: 38 },
        { name: "u20-u17", label: "U20 - U17", value: 17 },
        { name: "flag", label: "Flag", value: 21 },
      ],
    },
    {
      title: "Licences en attente de paiement",
      content: { value: "5" },
    },
    {
      title: "Prochain match SENIORS",
      content: { value: "21 octobre 2026" },
    },
    {
      title: "Prochain match U20 - U17",
      content: { value: "17 mars 2026" },
    },
    {
      title: "Prochain match FLAG",
      content: { value: "20 avril 2026" },
    },
    {
      title: "Comptabilité",
      content: { value: "+350€" },
    },
  ];

  isContentArray(content: CardContent): content is ContentItem[] {
    return Array.isArray(content);
  }
}
