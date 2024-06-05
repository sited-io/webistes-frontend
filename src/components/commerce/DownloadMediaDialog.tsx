import { Trans } from "@mbarzda/solid-i18next";
import { A } from "@solidjs/router";
import { Suspense, createResource } from "solid-js";

import { TKEYS } from "../../locales";
import { Font } from "../content";
import { MdDialog } from "../layout/MdDialog";
import styles from "./DownloadMediaDialog.module.scss";
import { MediaResponse } from "~/services/peoplesmarkets/media/v1/media_pb";
import { MdButton } from "../form/MdButton";
import { mediaService } from "~/services/media";
import { ContentLoading } from "../content/ContentLoading";

type Props = {
  show: boolean;
  media: MediaResponse | undefined;
  onClose: () => void;
};

export function DownloadMediaDialog(props: Props) {
  function getMediaDownloadLink() {
    if (props.show) {
      return props.media;
    }
  }

  const [mediaDownloadUrl] = createResource(
    getMediaDownloadLink,
    async (media) => mediaService.downloadMedia({ mediaId: media.mediaId })
  );

  return (
    <>
      <MdDialog open={props.show} onClose={props.onClose}>
        <div slot="headline">
          <Font
            type="title"
            key={TKEYS.media["download-file"]}
            options={{
              item: props.media?.name,
            }}
          />
        </div>

        <div slot="content" />

        <div slot="actions">
          <MdButton onClick={props.onClose}>
            <Trans key={TKEYS.form.action.Cancel} />
          </MdButton>

          <Suspense fallback={<ContentLoading />}>
            <MdButton onClick={props.onClose} href={mediaDownloadUrl() || ""}>
              <Trans key={TKEYS.media["Download-now"]} />
            </MdButton>
          </Suspense>
        </div>
      </MdDialog>
    </>
  );
}
