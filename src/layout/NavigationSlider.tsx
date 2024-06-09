import { JSX } from "solid-js";

import { MdIconButton } from "~/components/form/MdIconButton";
import { clickOutside } from "~/directives/click-outside";
import styles from "./NavigationSlider.module.scss";

false && clickOutside;

type Props = {
  readonly children?: JSX.Element | undefined;
  readonly show: boolean;
  readonly onClose: () => void;
};

export function NavigationSlider(props: Props) {
  return (
    <>
      <div
        class={styles.NavigationSlider}
        classList={{ [styles.SlideIn]: props.show }}
        use:clickOutside={props.onClose}
      >
        <div class={styles.Menu}>
          <MdIconButton icon="close" onClick={props.onClose} />
        </div>

        <div class={styles.Border} />

        <div class={styles.Links}>{props.children}</div>
      </div>
    </>
  );
}
