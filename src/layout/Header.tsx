import { A, useMatch, useNavigate } from "@solidjs/router";
import _ from "lodash";
import { For, Show, createResource, createSignal, onMount } from "solid-js";

import { indexPath } from "~/routes";
import { WebsiteResponse } from "~/services/sited_io/websites/v1/website_pb";
import { Font } from "../components/content/Font";
import { MdButton } from "../components/form/MdButton";
import { MdIconButton } from "../components/form/MdIconButton";
import { TKEYS } from "../locales";
import { userIndexPath } from "../routes/user";
import { fetchSession, signIn, signOut } from "../services/auth";
import styles from "./Header.module.scss";
import { NavigationSlider } from "./NavigationSlider";
import { NavigationSliderItem } from "./NavigationSliderItem";
import { MdIcon } from "~/components/assets/MdIcon";
import { PageType } from "~/services/sited_io/websites/v1/page_pb";

type Props = {
  website: WebsiteResponse;
};

export function Header(props: Props) {
  const navigate = useNavigate();

  const [session] = createResource(fetchSession);

  const [showHeaderShadow, setShowHeaderShadow] = createSignal(false);
  const [showNavigationSlider, setShowNavigationSlider] = createSignal(false);

  onMount(async () => {
    window.addEventListener("scroll", handleHeaderShadow);
  });

  function showSignIn() {
    return _.find(props.website.pages, { pageType: PageType.SHOP });
  }

  function handleHeaderShadow() {
    if (!_.isNil(window)) {
      if (window.scrollY === 0) setShowHeaderShadow(false);
      else setShowHeaderShadow(true);
    }
  }

  function handleToggleNavigationSlider() {
    setShowNavigationSlider(!showNavigationSlider());
  }

  function handleCloseNavigationSlider() {
    setShowNavigationSlider(false);
  }

  function handleNavigate(path: string) {
    handleCloseNavigationSlider();
    navigate(path);
  }

  async function handleSignIn() {
    handleCloseNavigationSlider();

    const clientId = props.website.clientId;
    const redirectTo = location.href;
    if (!_.isNil(clientId) && !_.isNil(redirectTo)) {
      const signInUrl = await signIn(clientId, redirectTo);
      if (!_.isNil(signInUrl)) {
        location.href = signInUrl.toString();
      } else {
        const signOutUrl = await signOut();
        if (!_.isNil(signOutUrl)) {
          location.href = signOutUrl.toString();
        } else {
          navigate(indexPath);
        }
      }
    }
  }

  return (
    <>
      <div
        class={styles.Header}
        classList={{ [styles.HeaderShadow]: showHeaderShadow() }}
      >
        <div class={styles.HeaderLeft}>
          <MdIconButton
            class={styles.MenuIcon}
            onClick={handleToggleNavigationSlider}
          >
            <MdIcon icon="menu" />
          </MdIconButton>

          <A class={styles.MainLink} href={indexPath}>
            <Show
              when={!_.isEmpty(props.website.customization?.logoImageUrl)}
              fallback={props.website.name}
            >
              <img
                class={styles.Logo}
                src={props.website.customization?.logoImageUrl}
                alt={props.website.name + " logo"}
              />
            </Show>
          </A>
        </div>

        <div class={styles.HeaderRight}>
          <div class={styles.Links}>
            <For each={props.website.pages}>
              {(page) => (
                <A
                  class={styles.Link}
                  classList={{
                    [styles.LinkActive]: Boolean(useMatch(() => page.path)()),
                  }}
                  href={page.path}
                >
                  {page.title}
                </A>
              )}
            </For>
          </div>

          <Show when={showSignIn()}>
            <Show
              when={session()?.isAuthenticated}
              fallback={
                <MdButton type="filled" square small onClick={handleSignIn}>
                  <Font type="body" key={TKEYS.user["sign-in"]} />
                </MdButton>
              }
            >
              <MdIconButton href={userIndexPath}>
                <MdIcon icon="account_circle" />
              </MdIconButton>
            </Show>
          </Show>
        </div>
      </div>

      <NavigationSlider
        show={showNavigationSlider()}
        onClose={handleCloseNavigationSlider}
      >
        <For each={props.website.pages}>
          {(page) => (
            <NavigationSliderItem
              type="body"
              active={Boolean(useMatch(() => page.path)())}
              icon="home"
              label={page.title}
              onClick={() => handleNavigate(page.path)}
            />
          )}
        </For>

        <Show when={showSignIn()}>
          <NavigationSliderItem
            type="body"
            active={Boolean(useMatch(() => userIndexPath)())}
            icon="account_circle"
            label="Profile"
            onClick={() => handleNavigate(userIndexPath)}
          />
        </Show>
      </NavigationSlider>
    </>
  );
}
