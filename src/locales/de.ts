import { TKEYS } from ".";
import { EN } from "./en";

export const DE: typeof TKEYS = {
  lang: "de",
  common: {
    or: "oder",
    more: "mehr",
    resume: "Fortsetzen",
    cancel: "Kündigen",
  },
  form: {
    action: {
      Subscribe: "Abonnieren",
      Buy: "Kaufen",
      Cancel: "Abbrechen",
      Back: "Zurück",
      "Confirm-Cancellation": "Wirklich kündigen?",
    },
  },
  user: {
    "sign-in": "Einloggen",
    "sign-out": "Logout",
    register: "Registrieren",
    settings: {
      title: "Benutzereinstellungen",
    },
  },
  price: {
    "decimal-point": ",",
    currency: EN.price.currency,
    "days-free": "{periodDays, plural, =1 {Tag} other {Tage}} kostenlos",
    "recurring-interval": {
      "0": EN.price["recurring-interval"][0],
      "1": `{intervalCount, plural, =1 {Tag} other {Tage} }`,
      "2": `{intervalCount, plural, =1 {Woche} other {Wochen} }`,
      "3": `{intervalCount, plural, =1 {Monat} other {Monate} }`,
      "4": `{intervalCount, plural, =1 {Jahr} other {Jahre} }`,
    },
  },
  offer: {
    "downloadable-content": "Downloadbarer Inhalt",
    "downloadable-content-info":
      "Um das Angebot zu abonnieren musst du angemeldet sein, um anschließend auf die enthaltenen Dateien zugreifen zu können.",
    "currently-not-available": "Derzeit nicht verfügbar",
    "contact-shop": "Shop kontaktieren",
  },
  subscription: {
    "already-subscribed": "Bereits abonniert",
    "no-subscriptions-yet": "Bisher keine Abonnements ...",
    "payed-until": "Bezahlt bis",
    "cancel-to": "Gekündigt zum",
    "My-Subscriptions": "Meine Abonnements",
    "subscription-to": "Abo für",
    "included-files": "Enhaltene Dateien",
    "subscription-configuration": "Abonnement Einstellungen",
    "cancel-subscription": "Abonnement kündigen",
    resume: "Abonnement fortsetzen",
  },
  media: {
    Inventory: "Meine Abos",
    Download: "Download",
    "download-file": 'Datei "{item}" herunterladen',
    "Download-now": "Jetzt herrunterladen",
  },
};
