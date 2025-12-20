import { Component } from "@angular/core";
import { ButtonComponent } from "@shared/ui/button/button";

@Component({
  standalone: true,
  selector: "app-website-club",
  imports: [ButtonComponent],
  templateUrl: "./club.html",
})
export class Club {}
