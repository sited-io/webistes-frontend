import { A } from "@solidjs/router";

import styles from "./Footer.module.scss";

export function Footer() {
  function mainWebsiteDisplay() {
    const url = new URL(import.meta.env.VITE_MAIN_WEBSITE_URL);
    return url.host;
  }

  return (
    <div class={styles.Footer}>
      <p class={styles.PoweredBy}>
        website powered by:{" "}
        <A
          class={styles.MainLink}
          href={import.meta.env.VITE_MAIN_WEBSITE_URL}
          target="_blank"
        >
          {/* <SitedIoLogo class={styles.MainLogo} /> */}
          {mainWebsiteDisplay()}
        </A>
      </p>
    </div>
  );
}
