import {
  applyTheme,
  argbFromHex,
  themeFromSourceColor,
} from "@material/material-color-utilities";
import { Link, MetaProvider } from "@solidjs/meta";
import {
  ParentProps,
  Show,
  Suspense,
  createEffect,
  createResource,
} from "solid-js";

import { WebsiteResponse } from "~/services/sited_io/websites/v1/website_pb";
import { websiteService } from "../services/website";
import { Footer } from "./Footer";
import { Header } from "./Header";
import styles from "./Layout.module.scss";

const DEFAULT_PRIMARY_COLOR = "#410002";

export function Layout(props: ParentProps) {
  const [website] = createResource<WebsiteResponse>(websiteService.getWebiste);

  function isDarkTheme() {
    return false;
  }

  createEffect(() => {
    const primaryColor =
      website()?.customization?.primaryColor || DEFAULT_PRIMARY_COLOR;
    const customTheme = themeFromSourceColor(argbFromHex(primaryColor), [
      // { name: "custom-1", value: argbFromHex("#ff0000"), blend: true },
    ]);
    applyTheme(customTheme, {
      target: document.body,
      dark: isDarkTheme(),
    });
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

        <Suspense>
          <main class={styles.Main}>
            <div class={styles.Content}>{props.children}</div>
          </main>
        </Suspense>

        <Footer />
      </Suspense>
    </MetaProvider>
  );
}
