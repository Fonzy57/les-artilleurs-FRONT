import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-main-layout",
  imports: [RouterOutlet],
  templateUrl: "./main-layout.html",
})
export class MainLayout {}
