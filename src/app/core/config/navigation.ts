type navLink = { label: string; value: string; fragment: string };

export const navlinks: navLink[] = [
  {
    label: "Nous rejoindre",
    value: "nous-rejoindre",
    fragment: "registration",
  },
  { label: "L'association", value: "association", fragment: "history" },
  { label: "Calendrier", value: "calendrier", fragment: "calendar" },
  { label: "Nous aider", value: "nous-aider", fragment: "help" },
  { label: "Infos", value: "infos", fragment: "infos" },
  { label: "FAQ", value: "faq", fragment: "faq" },
  { label: "Contact", value: "contact", fragment: "contact" },
];
