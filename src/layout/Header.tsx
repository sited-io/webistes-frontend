import { A, useMatch, useNavigate } from "@solidjs/router";
import _ from "lodash";
import { For, Show, createResource, createSignal, onMount } from "solid-js";

import { MdIcon } from "~/components/assets/MdIcon";
import { Slot } from "~/components/layout/Slot";
import { indexPath } from "~/routes";
import { WebsiteResponse } from "~/services/sited_io/websites/v1/website_pb";
import { MdIconButton } from "../components/form/MdIconButton";
import { userIndexPath } from "../routes/user";
import { fetchSession } from "../services/auth";
import styles from "./Header.module.scss";
import { NavigationSlider } from "./NavigationSlider";
import { NavigationSliderItem } from "./NavigationSliderItem";

type Props = {
  website: WebsiteResponse;
};

export function Header(props: Props) {
  const navigate = useNavigate();

  createResource(fetchSession);

  const [showHeaderShadow, setShowHeaderShadow] = createSignal(false);
  const [showNavigationSlider, setShowNavigationSlider] = createSignal(false);

  onMount(async () => {
    window.addEventListener("scroll", handleHeaderShadow);
  });

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
        </div>
      </div>

      <NavigationSlider
        show={showNavigationSlider()}
        onClose={handleCloseNavigationSlider}
      >
        <Slot name="links">
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
        </Slot>

        <Slot name="actions">
          <NavigationSliderItem
            type="body"
            active={Boolean(useMatch(() => userIndexPath)())}
            icon="account_circle"
            label="Profile"
            onClick={() => handleNavigate(userIndexPath)}
          />
        </Slot>
      </NavigationSlider>
    </>
  );
}
