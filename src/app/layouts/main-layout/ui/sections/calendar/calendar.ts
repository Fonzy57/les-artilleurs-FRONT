// ANGULAR
import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

type CategoryName = "seniors" | "u20" | "u17" | "flag";

type Match = {
  place: "domicile" | "extérieur";
  day: number;
  month: string;
  year: number;
  team: string;
  type: string;
  scoreMyTeam?: number;
  scoreOtherTeam?: number;
};

@Component({
  standalone: true,
  selector: "app-website-calendar",
  imports: [NgClass],
  templateUrl: "./calendar.html",
})
export class Calendar {
  currentYear = new Date().getFullYear();
  activeCategory: CategoryName = "seniors";

  licenceCategories: { id: number; name: CategoryName; label: string }[] = [
    { id: 1, name: "seniors", label: "Seniors" },
    { id: 2, name: "u20", label: "U20" },
    { id: 3, name: "u17", label: "U17" },
    { id: 4, name: "flag", label: "Flag 17+" },
  ];

  seniorCalendar: Match[] = [
    {
      place: "domicile",
      day: 15,
      month: "oct",
      year: 2023,
      team: "Tigres",
      type: "Amical",
      scoreMyTeam: 21,
      scoreOtherTeam: 7,
    },
    {
      place: "domicile",
      day: 21,
      month: "oct",
      year: 2023,
      team: "Reims",
      type: "Compétition",
    },
    {
      place: "extérieur",
      day: 31,
      month: "nov",
      year: 2023,
      team: "Souffel",
      type: "Amical",
    },
    {
      place: "domicile",
      day: 15,
      month: "fev",
      year: 2024,
      team: "Tigres",
      type: "Compétition",
    },
    {
      place: "domicile",
      day: 15,
      month: "avr",
      year: 2024,
      team: "le Géant",
      type: "Amical",
    },
    {
      place: "domicile",
      day: 15,
      month: "juin",
      year: 2024,
      team: "Wildcats",
      type: "Compétition",
    },
    {
      place: "domicile",
      day: 15,
      month: "juil",
      year: 2024,
      team: "Patriots",
      type: "Amical",
    },
    {
      place: "domicile",
      day: 15,
      month: "aout",
      year: 2024,
      team: "Falcons",
      type: "Compétition",
    },
  ];

  u20Calendar: Match[] = [
    {
      place: "extérieur",
      day: 17,
      month: "oct",
      year: 2023,
      team: "Bisons",
      type: "Amical",
      scoreMyTeam: 0,
      scoreOtherTeam: 14,
    },
    {
      place: "domicile",
      day: 21,
      month: "oct",
      year: 2023,
      team: "Reims",
      type: "Compétition",
    },
    {
      place: "extérieur",
      day: 31,
      month: "nov",
      year: 2023,
      team: "Souffel",
      type: "Amical",
    },
    {
      place: "domicile",
      day: 15,
      month: "fev",
      year: 2024,
      team: "Tigres",
      type: "Compétition",
    },
  ];

  private calendars: Record<CategoryName, Match[]> = {
    seniors: this.seniorCalendar,
    u20: this.u20Calendar,
    u17: [],
    flag: [],
  };

  get activeCalendar(): Match[] {
    return this.calendars[this.activeCategory] ?? [];
  }

  setActiveCategory(name: CategoryName) {
    this.activeCategory = name;
  }
}
