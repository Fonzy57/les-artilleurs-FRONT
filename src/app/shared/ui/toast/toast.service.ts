import { Injectable, inject } from "@angular/core";
import { MessageService } from "primeng/api";
import { ToastPosition } from "./toast.types";

export type AppToastSeverity = "success" | "info" | "warn" | "error";

export interface AppToastOptions {
  position?: ToastPosition;
  sticky?: boolean;
  life?: number;
  key?: string;
}

@Injectable({ providedIn: "root" })
export class ToastService {
  private readonly messageService = inject(MessageService);

  private add(
    severity: AppToastSeverity,
    summary: string,
    detail?: string,
    options?: AppToastOptions,
  ) {
    const position = options?.position ?? "bottom-center";
    const sticky = options?.sticky ?? false;

    this.messageService.add({
      key: `toast:${position}`,
      severity,
      summary,
      detail,
      sticky,
      life: sticky ? undefined : (options?.life ?? 3000),
    });
  }

  success(title: string, message?: string, options?: AppToastOptions) {
    this.add("success", title, message, options);
  }
  info(title: string, message?: string, options?: AppToastOptions) {
    this.add("info", title, message, options);
  }
  warn(title: string, message?: string, options?: AppToastOptions) {
    this.add("warn", title, message, options);
  }
  error(title: string, message?: string, options?: AppToastOptions) {
    this.add("error", title, message, options);
  }

  clear(position?: ToastPosition) {
    if (!position) {
      this.messageService.clear(); // tout
      return;
    }
    this.messageService.clear(`toast:${position}`);
  }
}
