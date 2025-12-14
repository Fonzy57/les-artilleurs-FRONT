type socialsMedia = {
  name: string;
  label: string;
  icon: string;
  url: string;
};

/* TODO DEMANDER A ERIC LES LIENS DES DIFFERENTS RESEAUX */
export const socialsMedia: socialsMedia[] = [
  {
    name: "facebook",
    label: "Facebook",
    icon: "pi pi-facebook",
    url: "https://www.facebook.com/artillleurs",
  },
  {
    name: "instagram",
    label: "Instagram",
    icon: "pi pi-instagram",
    url: "https://www.instagram.com/les_artilleurs/",
  },
  {
    name: "discord",
    label: "Discord",
    icon: "pi pi-discord",
    url: "#",
  },
  { name: "tiktok", label: "TikTok", icon: "pi pi-tiktok", url: "#" },
  { name: "mail", label: "Mail", icon: "pi pi-envelope", url: "#" },
  { name: "whatsapp", label: "Whatsapp", icon: "pi pi-whatsapp", url: "#" },
];
