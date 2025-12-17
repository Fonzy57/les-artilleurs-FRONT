// ANGULAR
import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

// COMPONENTS
import { AppToastComponent } from "@shared/ui/toast/toast";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, AppToastComponent],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  standalone: true,
})
export class App {
  /* TODO REVOIR ICI SI JE LAISSE CA */
  protected readonly title = signal("les-artilleurs-FRONT");
}
