// ANGULAR
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

// COMPONENTS
import { Navbar } from "./ui/navbar/navbar";

@Component({
  standalone: true,
  selector: "app-main-layout",
  imports: [RouterOutlet, Navbar],
  templateUrl: "./main-layout.html",
})
export class MainLayout {}
