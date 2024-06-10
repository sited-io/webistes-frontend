import { A } from "@solidjs/router";
import { ParentProps } from "solid-js";

import { SitedIoLogo } from "~/components/assets/SitedIoLogo";
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
