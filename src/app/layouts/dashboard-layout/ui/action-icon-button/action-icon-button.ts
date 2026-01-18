// ANGULAR
import { NgClass } from "@angular/common";
import { Component, computed, input, InputSignal, output } from "@angular/core";

export type ActionIconButtonType = "edit" | "delete" | "view";

type ActionIconButtonStyle = {
  color: string;
  iconName: string;
};

const ACTION_ICON_BUTTON_STYLES: Record<
  ActionIconButtonType,
  ActionIconButtonStyle
> = {
  edit: {
    color: "text-info hover:border-info active:bg-info disabled:text-info/40",
    iconName: "pi pi-pencil",
  },
  delete: {
    color:
      "text-error hover:border-error active:bg-error disabled:text-error/40",
    iconName: "pi pi-trash",
  },
  view: {
    color:
      "text-black hover:border-black active:bg-black disabled:text-black/40",
    iconName: "pi pi-eye",
  },
};

@Component({
  standalone: true,
  selector: "app-action-icon-button",
  imports: [NgClass],
  templateUrl: "./action-icon-button.html",
})
export class ActionIconButton {
  type: InputSignal<ActionIconButtonType> = input<ActionIconButtonType>("edit");
  disabled: InputSignal<boolean> = input<boolean>(false);
  ariaLabel = input<string>("");
  size = input<string>("1rem");

  style = computed(() => ACTION_ICON_BUTTON_STYLES[this.type()]);

  clicked = output<void>();

  onClick(): void {
    if (this.disabled()) return;
    this.clicked.emit();
  }
}
