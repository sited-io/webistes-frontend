import { Trans } from "@mbarzda/solid-i18next";
import { createSignal } from "solid-js";

import { TKEYS } from "../../locales";
import styles from "./MediaListItem.module.scss";
import { MediaResponse } from "~/services/sited_io/media/v1/media_pb";
import { MdButton } from "../form/MdButton";
import { DownloadMediaDialog } from "./DownloadMediaDialog";
import { Font } from "../content";

type Props = {
  media: () => MediaResponse;
};

export function MediaListItem(props: Props) {
  const [showDownloadMediaDialog, setShowDownloadMediaDialog] =
    createSignal(false);

  function handleStartDownloadMedia() {
    setShowDownloadMediaDialog(true);
  }

  function handleCloseDownloadMediaDialog() {
    setShowDownloadMediaDialog(false);
  }

  return (
    <>
      <div class={styles.MediaListItem}>
        <p>{props.media().name}</p>
        <MdButton onClick={handleStartDownloadMedia}>
          <Font type="body" key={TKEYS.media.Download} />
        </MdButton>
      </div>

      <DownloadMediaDialog
        show={showDownloadMediaDialog()}
        media={props.media()}
        onClose={handleCloseDownloadMediaDialog}
      />
    </>
  );
}
