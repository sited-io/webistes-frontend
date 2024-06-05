import { Trans } from "@mbarzda/solid-i18next";
import { TKEYS } from "~/locales";
import { Font } from "../content";
import { MdDialog } from "../layout/MdDialog";
import { MdButton } from "../form/MdButton";

type Props = {
  readonly show: boolean;
  readonly onConfirmation: () => void;
  readonly onClose: () => void;
};

export function CancelConfirmationDialog(props: Props) {
  return (
    <>
      <MdDialog open={props.show} onClose={props.onClose}>
        <div slot="headline">
          <Font type="title" key={TKEYS.form.action["Confirm-Cancellation"]} />
        </div>

        <div slot="content" />

        <div slot="actions">
          <MdButton onClick={props.onClose}>
            <Trans key={TKEYS.form.action.Back} />
          </MdButton>

          <MdButton onClick={props.onConfirmation}>
            <Trans key={TKEYS.common.cancel} />
          </MdButton>
        </div>
      </MdDialog>
    </>
  );
}
