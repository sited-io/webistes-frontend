import { Title } from "@solidjs/meta";
import { For, Show, createResource } from "solid-js";

import { WebsiteResponse } from "~/services/sited_io/websites/v1/website_pb";
import { OfferDetail } from "../commerce/OfferDetail";
import { Border } from "../layout/Border";
import { offerService, shopService } from "~/services/commerce";
import { PageResponse } from "~/services/sited_io/websites/v1/page_pb";

type Props = {
  website: () => WebsiteResponse | undefined;
  page: () => PageResponse | undefined;
};

export function ShopPage(props: Props) {
  const [shop] = createResource(
    () => props.website()?.websiteId,
    async (websiteId: string) => shopService.getShop({ websiteId })
  );
  const [offers] = createResource(
    () => shop()?.shopId,
    async (shopId: string) => offerService.listOffers({ shopId })
  );

  function isLastItem(index: number) {
    return index + 1 === offers()?.length;
  }

  return (
    <>
      <Title>
        {props.website()?.name}
        {props.page()?.title ? " | " + props.page()?.title : ""}
      </Title>

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
