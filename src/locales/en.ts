import { TKEYS } from ".";

export const EN: typeof TKEYS = {
  lang: "en",
  common: {
    or: "or",
    more: "more",
    resume: "Resume",
    cancel: "Cancel",
  },
  form: {
    action: {
      Subscribe: "Subscribe",
      Buy: "Buy",
      Cancel: "Cancel",
      Back: "Back",
      "Confirm-Cancellation": "Confirm Cancellation?",
    },
  },
  user: {
    "sign-in": "Sign In",
    "sign-out": "Sign Out",
    register: "Register",
    settings: {
      title: "User Settings",
    },
  },
  price: {
    "decimal-point": ".",
    currency: {
      "0": "UNDEFINED",
      "1": "EUR",
    },
    "days-free": "{periodDays, plural, =1 {day} other {days}} free",
    "recurring-interval": {
      "0": `UNDEFINED`,
      "1": `{intervalCount, plural, =1 {day} other {days} }`,
      "2": `{intervalCount, plural, =1 {week} other {weeks} }`,
      "3": `{intervalCount, plural, =1 {month} other {months} }`,
      "4": `{intervalCount, plural, =1 {year} other {years} }`,
    },
  },
  offer: {
    "downloadable-content": "Downloadable Content",
    "downloadable-content-info":
      "In order to subscribe and access the files in this offer, you need to be signed in.",
    "currently-not-available": "Currently not available",
    "contact-shop": "Contact Shop",
  },
  subscription: {
    "already-subscribed": "Already subscribed",
    "no-subscriptions-yet": "No Subscriptions yet ...",
    "payed-until": "Payed until",
    "cancel-to": "Cancel at",
    "My-Subscriptions": "My Subscriptions",
    "subscription-to": "Subscription for",
    "included-files": "Included files",
    "subscription-configuration": "Subscription Configuration",
    "cancel-subscription": "Cancel Subscription",
    resume: "Resume Subscription",
  },
  media: {
    Inventory: "My Subscriptions",
    Download: "Download",
    "download-file": 'Download the file "{item}"',
    "Download-now": "Download now",
  },
};
