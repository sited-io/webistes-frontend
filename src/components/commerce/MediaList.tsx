import { For } from "solid-js";

import styles from "./MediaList.module.scss";
import { MediaListItem } from "./MediaListItem";
import { MediaResponse } from "~/services/sited_io/media/v1/media_pb";

type Props = {
  medias: () => MediaResponse[] | undefined;
};

export function MediaList(props: Props) {
  return (
    <div class={styles.MediaList}>
      <For each={props.medias()}>
        {(media) => <MediaListItem media={() => media} />}
      </For>
    </div>
  );
}
