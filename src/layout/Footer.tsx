import { ParentProps } from "solid-js";

import styles from "./Footer.module.scss";

export function Footer(props: ParentProps) {
  function mainWebsiteDisplay() {
    const url = new URL(import.meta.env.VITE_MAIN_WEBSITE_URL);
    return url.host;
  }

  return (
    <div class={styles.Footer}>
      <p class={styles.PoweredBy}>
        website powered by:{" "}
        <a
          class={styles.MainLink}
          href={import.meta.env.VITE_MAIN_WEBSITE_URL}
          target="_blank"
        >
          {mainWebsiteDisplay()}
        </a>
      </p>
    </div>
  );
}
