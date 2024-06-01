import { MetaProvider } from "@solidjs/meta";
import { ParentProps, Suspense } from "solid-js";

import { Header } from "./header";
import { Footer } from "./footer";
import styles from "./layout.module.scss";

export function Layout(props: ParentProps) {
  return (
    <MetaProvider>
      <Suspense>
        <Header />
        <main class={styles.Main}>
          <div class={styles.Content}>{props.children}</div>
        </main>
        <Footer />
      </Suspense>
    </MetaProvider>
  );
}
