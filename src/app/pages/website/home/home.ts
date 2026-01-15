// ANGULAR
import { Component } from "@angular/core";

// SECTIONS
import { Hero } from "@layouts/main-layout/ui/sections/hero/hero";
import { InfoBlock } from "@layouts/main-layout/ui/sections/info-block/info-block";
import { Category } from "@layouts/main-layout/ui/sections/category/category";
import { Registration } from "@layouts/main-layout/ui/sections/registration/registration";
import { History } from "@layouts/main-layout/ui/sections/history/history";
import { Calendar } from "@layouts/main-layout/ui/sections/calendar/calendar";
import { Club } from "@layouts/main-layout/ui/sections/club/club";
import { Association } from "@layouts/main-layout/ui/sections/association/association";
import { Infos } from "@layouts/main-layout/ui/sections/infos/infos";
import { Faq } from "@layouts/main-layout/ui/sections/faq/faq";
import { Contact } from "@layouts/main-layout/ui/sections/contact/contact";

@Component({
  standalone: true,
  selector: "app-home",
  imports: [
    Hero,
    InfoBlock,
    Category,
    Registration,
    History,
    Calendar,
    Club,
    Association,
    Infos,
    Faq,
    Contact,
  ],
  templateUrl: "./home.html",
})
export class Home {}
