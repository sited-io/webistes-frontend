import { A, useNavigate } from "@solidjs/router";
import _ from "lodash";
import {
  ParentProps,
  Show,
  createResource,
  createSignal,
  onMount,
} from "solid-js";

import { MdButton } from "./components/assets/MdButton";
import { MdIconButton } from "./components/assets/MdIconButton";
import { Font } from "./components/content/Font";
import styles from "./header.module.scss";
import { TKEYS } from "./locales";
import { fetchSession, refreshSession, signIn, signOut } from "./services/auth";
import { fetchWebsite } from "./services/website";

export function Header(props: ParentProps) {
  const navigate = useNavigate();

  const [website] = createResource(fetchWebsite);
  const [session, sessionActions] = createResource(fetchSession);

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

  onMount(async () => {
    window.addEventListener("scroll", handleHeaderShadow);
  });

  async function handleSignIn() {
    const clientId = website()?.clientId;
    const redirectTo = location.href;
    if (!_.isNil(clientId) && !_.isNil(redirectTo)) {
      const signInUrl = await signIn(clientId, redirectTo);
      if (!_.isNil(signInUrl)) {
        location.href = signInUrl.toString();
      } else {
        await handleSignOut();
      }
    }
  }

  async function handleSignOut() {
    const signOutUrl = await signOut();
    if (!_.isNil(signOutUrl)) {
      location.href = signOutUrl.toString();
    } else {
      navigate("/");
    }
  }

  async function handleRefreshSession() {
    await refreshSession();
  }

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
          <Show
            when={session()?.accessTokens?.accessToken}
            fallback={
              <MdButton type="filled" square onClick={handleSignIn}>
                <Font type="body" key={TKEYS.user["sign-in"]} />
              </MdButton>
            }
          >
            <MdButton type="filled" square onClick={handleSignOut}>
              <Font type="body" key={TKEYS.user["sign-out"]} />
            </MdButton>
            <MdButton type="filled" square onClick={handleRefreshSession}>
              refresh session
            </MdButton>
          </Show>
        </div>
      </div>
    </>
  );
}
