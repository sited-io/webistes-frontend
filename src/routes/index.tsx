import { Title } from "@solidjs/meta";
import { For, Show, createResource } from "solid-js";

import { OfferDetail } from "~/components/commerce/OfferDetail";
import { Border } from "~/components/layout/Border";
import { buildUrl } from "~/lib/env";
import { offerService } from "~/services/commerce";
import { fetchWebsite } from "~/services/website";

export const indexPath = "/";
export const indexUrl = () => buildUrl(indexPath);

export default function Index() {
  const [website] = createResource(fetchWebsite);
  const [offers] = createResource(
    () => website()?.websiteId,
    async (websiteId: string) => offerService.listOffers({ shopId: websiteId })
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
