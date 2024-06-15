import { Link, MetaProvider } from "@solidjs/meta";
import {
  ParentProps,
  Show,
  Suspense,
  createEffect,
  createResource,
} from "solid-js";
import {
  applyTheme,
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import _ from "lodash";

import { ShopResponse } from "~/services/sited_io/commerce/v1/shop_pb";
import { fetchWebsite } from "../services/website";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./Layout.module.scss";

export function Layout(props: ParentProps) {
  const [website] = createResource<ShopResponse>(fetchWebsite);

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
        {/* TODO: allow custom icon */}
        <Link rel="icon" href="/favicon.ico" />

        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&family=Noto+Sans:wght@300;400;500;600"
        />

        <Show when={website()}>
          <Header website={website()!} />
        </Show>

        <main class={styles.Main}>
          <div class={styles.Content}>{props.children}</div>
        </main>

        <Footer />
      </Suspense>
    </MetaProvider>
  );
}
