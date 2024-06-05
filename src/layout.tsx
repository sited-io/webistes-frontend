import { Link, MetaProvider } from "@solidjs/meta";
import { ParentProps, Suspense, createEffect, createResource } from "solid-js";

import { Header } from "./header";
import { Footer } from "./footer";
import styles from "./layout.module.scss";
import { fetchWebsite } from "./services/website";
import _ from "lodash";
import {
  applyTheme,
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";

export function Layout(props: ParentProps) {
  const [website] = createResource(fetchWebsite);

  function isDarkTheme() {
    return false;
  }

  createEffect(() => {
    const primaryColor = website()?.customization?.primaryColor;
    if (!_.isNil(primaryColor)) {
      const customTheme = themeFromSourceColor(argbFromHex(primaryColor), [
        // { name: "custom-1", value: argbFromHex(primaryColor), blend: true },
      ]);
      applyTheme(customTheme, {
        target: document.body,
        dark: isDarkTheme(),
      });
    }
  });

  return (
    <MetaProvider>
      <Suspense>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="anonymous"
        />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300..600&family=Roboto:wght@300..600&display=swap"
        />

        <Header />
        <main class={styles.Main}>
          <div class={styles.Content}>{props.children}</div>
        </main>
        <Footer />
      </Suspense>
    </MetaProvider>
  );
}
