import { JSX } from "solid-js";

import { MdIconButton } from "~/components/form/MdIconButton";
import { clickOutside } from "~/directives/click-outside";
import styles from "./NavigationSlider.module.scss";
import { MdIcon } from "~/components/assets/MdIcon";
import { getSlots } from "~/components/layout/Slot";

false && clickOutside;

type Props = {
  readonly children?: JSX.Element | undefined;
  readonly show: boolean;
  readonly onClose: () => void;
};

export function NavigationSlider(props: Props) {
  const slots = getSlots(props.children);

  return (
    <>
      <div
        class={styles.NavigationSlider}
        classList={{ [styles.SlideIn]: props.show }}
        use:clickOutside={props.onClose}
      >
        <div class={styles.Menu}>
          <MdIconButton onClick={props.onClose}>
            <MdIcon icon="close" />
          </MdIconButton>
        </div>

        <div class={styles.Border} />

        <div class={styles.Links}>{slots.links}</div>

        <div class={styles.Actions}>{slots.actions}</div>
      </div>
    </>
  );
}
