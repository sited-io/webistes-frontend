import "@material/web/icon/icon";
import "@material/web/iconbutton/icon-button";

import { ComponentProps, splitProps } from "solid-js";

type Props = ComponentProps<"button"> & {
  readonly icon: string;
  readonly href?: string;
  readonly slot?: string | undefined;
};

export function MdIconButton(props: Props) {
  const [local, others] = splitProps(props, ["icon", "slot"]);

  return (
    <md-icon-button {...others} href={others.href}>
      <md-icon slot={local.slot}>{local.icon}</md-icon>
    </md-icon-button>
  );
}

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "md-icon": Omit<Props, "icon">;
      "md-icon-button": Omit<Props, "icon">;
    }
  }
}
