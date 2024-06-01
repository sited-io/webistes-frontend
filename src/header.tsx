import { A } from "@solidjs/router";
import _ from "lodash";
import {
  ParentProps,
  Show,
  createEffect,
  createResource,
  createSignal,
  onMount,
} from "solid-js";

import styles from "./header.module.scss";
import { fetchWebsite } from "./services/website";
import { MdIconButton } from "./components/assets/MdIconButton";
import { MdButton } from "./components/assets/MdButton";
import { Font } from "./components/content/Font";
import { TKEYS } from "./locales";

export function Header(props: ParentProps) {
  const [website] = createResource(fetchWebsite);

  const [showHeaderShadow, setShowHeaderShadow] = createSignal(false);
  const [showNavigationSlider, setShowNavigationSlider] = createSignal(false);

  function handleHeaderShadow() {
    if (!_.isNil(window)) {
      if (window.scrollY === 0) setShowHeaderShadow(false);
      else setShowHeaderShadow(true);
    }
  }

  function handleOpenNavigationSlider() {
    setShowNavigationSlider(true);
  }

  onMount(() => {
    window.addEventListener("scroll", handleHeaderShadow);
  });

  return (
    <>
      <div
        class={styles.Header}
        classList={{ [styles.HeaderShadow]: showHeaderShadow() }}
      >
        <div class={styles.HeaderLeft}>
          <div class={styles.MenuIconContainer}>
            <MdIconButton
              class={styles.MenuIcon}
              icon="menu"
              onClick={handleOpenNavigationSlider}
            />
          </div>

          <A class={styles.MainLink} href="/">
            <Show
              when={!_.isEmpty(website()?.customization?.logoImageLightUrl)}
              fallback={website()?.name}
            >
              <img
                class={styles.Logo}
                src={website()?.customization?.logoImageLightUrl}
                alt={website()?.name + " logo"}
              />
            </Show>
          </A>
        </div>

        <div class={styles.HeaderRight}>
          <MdButton type="filled" square href="/sign-in">
            <Font type="body" key={TKEYS.user["sign-in"]} />
          </MdButton>
        </div>
      </div>
    </>
  );
}
