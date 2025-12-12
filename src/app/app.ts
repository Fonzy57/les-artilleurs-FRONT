import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  standalone: true,
})
export class App {
  /* TODO REVOIR ICI SI JE LAISSE CA */
  protected readonly title = signal("les-artilleurs-FRONT");
}
