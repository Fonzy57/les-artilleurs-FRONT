import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterLink } from "@angular/router";

type ButtonTarget = "_self" | "_blank";
type ButtonType = "button" | "submit";

@Component({
  selector: "app-button",
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: "./button.html",
})
export class ButtonComponent {
  @Input() disabled = false;
  @Input() routerLink?: string | any[];
  @Input() href?: string;
  @Input() target: ButtonTarget = "_self";
  @Input() type: ButtonType = "button";

  @Output() clicked = new EventEmitter<MouseEvent>();

  /* TODO FAIRE UN GHOST BUTTON AVEC UN SWITCH POUR CHOISIR LA COULEUR */
  readonly buttonStyle =
    "bg-main active:ring-main-300 disabled:bg-main/50 disabled:hover:bg-main/50 cursor-pointer rounded-lg px-3 py-2 text-base font-medium text-white shadow-md transition-all duration-300 ease-out hover:bg-[#322053] active:ring-2 disabled:cursor-not-allowed disabled:active:ring-0";

  get isRouterLink(): boolean {
    return (
      this.routerLink !== undefined &&
      this.routerLink !== null &&
      this.routerLink !== ""
    );
  }

  get isHrefLink(): boolean {
    return !!this.href;
  }

  get rel(): string | null {
    return this.target === "_blank" ? "noopener noreferrer" : null;
  }

  handleClick(event: MouseEvent) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (this.isHrefLink || this.isRouterLink) return;

    this.clicked.emit(event);
  }
}
