import { ToastService } from "@shared/ui/toast/toast.service";

type RequestMode = "post" | "put";

export function showToastServerError(toast: ToastService) {
  toast.error(
    "Erreur serveur",
    "Une erreur inattendue s'est produite. Réessaie plus tard.",
    { sticky: true },
  );
}

export function showToastUnauthorizedError(
  toast: ToastService,
  mode: RequestMode = "post",
) {
  const word = mode === "post" ? "ajouter" : "modifier";
  toast.error(
    "Accès refusé",
    `Tu n'as pas les droits pour ${word} un élément.`,
    { sticky: true },
  );
}

export function showToastBadRequestError(
  toast: ToastService,
  mode: RequestMode = "post",
) {
  const title =
    mode === "post" ? "Ajout impossible" : "Modification impossible";

  toast.error(
    title,
    "Les données envoyées sont invalides. Vérifie les champs du formulaire.",
    { sticky: true },
  );
}
