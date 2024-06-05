import { JSX } from "solid-js";

import styles from "./Card.module.scss";

type Props = {
  children?: JSX.Element;
};

export function Card(props: Props) {
  return <div class={styles.Card}>{props.children}</div>;
}
