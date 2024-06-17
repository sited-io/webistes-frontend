import { Match, Switch, createResource } from "solid-js";

import { ShopPage } from "~/components/pages/ShopPage";
import { StaticPage } from "~/components/pages/StaticPage";
import { buildUrl } from "~/lib/env";
import { PageType } from "~/services/sited_io/websites/v1/page_pb";
import { pageService, websiteService } from "~/services/website";

export const indexPath = "/";
export const indexUrl = () => buildUrl(indexPath);

export default function Index() {
  const [website] = createResource(websiteService.getWebiste);

  const [page] = createResource(
    () => website()?.websiteId,
    async (websiteId: string) =>
      pageService.getPage({
        websiteId,
        path: "/",
      })
  );

  return (
    <>
      <Switch>
        <Match when={page()?.pageType === PageType.STATIC}>
          <StaticPage website={website} page={page} />
        </Match>
        <Match when={page()?.pageType === PageType.SHOP}>
          <ShopPage website={website} page={page} />
        </Match>
      </Switch>
    </>
  );
}
