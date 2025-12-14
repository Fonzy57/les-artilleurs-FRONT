// ANGULAR
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

// COMPONENTS
import { Navbar } from "./ui/navbar/navbar";
import { Footer } from "./ui/footer/footer";

@Component({
  standalone: true,
  selector: "app-main-layout",
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: "./main-layout.html",
})
export class MainLayout {}
