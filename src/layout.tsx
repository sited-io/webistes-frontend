import { Link, MetaProvider } from "@solidjs/meta";
import { ParentProps, Suspense } from "solid-js";

import { Header } from "./header";
import { Footer } from "./footer";
import styles from "./layout.module.scss";

export function Layout(props: ParentProps) {
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
