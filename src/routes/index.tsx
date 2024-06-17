import { Title } from "@solidjs/meta";
import { For, Show, createResource } from "solid-js";

import { OfferDetail } from "~/components/commerce/OfferDetail";
import { Border } from "~/components/layout/Border";
import { buildUrl } from "~/lib/env";
import { offerService, shopService } from "~/services/commerce";
import {
  PageResponse,
  PageType,
} from "~/services/sited_io/websites/v1/page_pb";
import { websiteService, pageService } from "~/services/website";

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
  const [content] = createResource(
    () => page(),
    async (page: PageResponse) => {
      if (page.pageType === PageType.SHOP) {
        return shopService.getShop({ shopId: page.contentId });
      }
    }
  );

  const [offers] = createResource(
    () => content()?.shopId,
    async (shopId: string) => offerService.listOffers({ shopId })
  );

  function isLastItem(index: number) {
    return index + 1 === offers()?.length;
  }

  return (
    <>
      <Title>{website()?.name}</Title>

      <For each={offers()}>
        {(offer, index) => (
          <div data-index={index()}>
            <OfferDetail offer={() => offer} />

            <Show when={!isLastItem(index())}>
              <Border />
            </Show>
          </div>
        )}
      </For>
    </>
  );
}
