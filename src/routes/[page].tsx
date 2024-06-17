import { useParams } from "@solidjs/router";
import { Match, Switch, createResource } from "solid-js";

import { ShopPage } from "~/components/pages/ShopPage";
import { StaticPage } from "~/components/pages/StaticPage";
import { PageType } from "~/services/sited_io/websites/v1/page_pb";
import { pageService, websiteService } from "~/services/website";

export default function Index() {
  const [website] = createResource(websiteService.getWebiste);

  const params = useParams();

  const [page] = createResource(
    () => [website()?.websiteId, params?.page] as const,
    async ([websiteId, pathParam]) =>
      pageService.getPage({
        websiteId,
        path: "/" + pathParam,
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
