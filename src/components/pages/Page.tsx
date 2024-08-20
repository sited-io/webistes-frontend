import { Switch, Match } from "solid-js";
import {
  PageResponse,
  PageType,
} from "~/services/sited_io/websites/v1/page_pb";
import { ShopPage } from "./ShopPage";
import { StaticPage } from "./StaticPage";
import { WebsiteResponse } from "~/services/sited_io/websites/v1/website_pb";

type Props = {
  readonly website: WebsiteResponse;
  readonly page: PageResponse;
};

export function Page(props: Props) {
  return (
    <>
      <Switch>
        <Match when={props.page.pageType === PageType.STATIC}>
          <StaticPage website={props.website} page={props.page} />
        </Match>
        <Match when={props.page.pageType === PageType.SHOP}>
          <ShopPage website={props.website} page={props.page} />
        </Match>
      </Switch>
    </>
  );
}
