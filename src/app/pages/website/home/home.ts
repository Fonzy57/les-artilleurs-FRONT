import { Component } from "@angular/core";
import { ButtonComponent } from "../../../shared/ui/button/button";

@Component({
  standalone: true,
  selector: "app-home",
  imports: [ButtonComponent],
  templateUrl: "./home.html",
})
export class Home {
  test() {
    console.log("Je clique sur le bouton");
  }
}
