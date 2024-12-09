import { Trans } from "@mbarzda/solid-i18next";
import { Suspense, createResource } from "solid-js";

import { mediaService } from "~/services/media";
import { MediaResponse } from "~/services/sited_io/media/v1/media_pb";
import { TKEYS } from "../../locales";
import { Font } from "../content";
import { ContentLoading } from "../content/ContentLoading";
import { MdButton } from "../form/MdButton";
import { MdDialog } from "../layout/MdDialog";

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
    async (media) => mediaService.downloadMedia({ mediaId: media.mediaId }),
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
