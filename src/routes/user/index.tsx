import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import _ from "lodash";
import { For, Show, Suspense, createResource } from "solid-js";

import { MdIcon } from "~/components/assets/MdIcon";
import { Font } from "~/components/content";
import { Card } from "~/components/content/Card";
import { ContentLoading } from "~/components/content/ContentLoading";
import { MdButton } from "~/components/form/MdButton";
import { Section } from "~/components/layout/Section";
import { AuthGuard } from "~/components/user/AuthGuard";
import { toLocaleDate } from "~/lib/datetime";
import { buildUrl } from "~/lib/env";
import { TKEYS } from "~/locales";
import { fetchSession, signOut } from "~/services/auth";
import { offerService, shopService } from "~/services/commerce";
import { mediaSubscriptionService } from "~/services/media";
import { OfferResponse } from "~/services/sited_io/commerce/v1/offer_pb";
import { websiteService } from "~/services/website";
import styles from "./index.module.scss";
import { userSubscriptionPath } from "./subscriptions/[subscriptionId]";
import { indexPath } from "..";

export const userIndexPath = "/user";
export const userIndexUrl = () => buildUrl(userIndexPath);

export default function UserIndex() {
  const navigate = useNavigate();
  const [trans] = useTransContext();

  const [session] = createResource(fetchSession);
  const [website] = createResource(websiteService.getWebiste);
  const [shop] = createResource(
    () => website()?.websiteId,
    async (websiteId: string) => shopService.getShop({ websiteId })
  );

  const [mediaSubscriptions, { refetch }] = createResource(
    () => [shop()?.shopId, session()?.isAuthenticated] as const,
    async ([shopId, isAuthenticated]) => {
      if (isAuthenticated) {
        return mediaSubscriptionService.listMediaSubscriptions({
          shopId,
          isAccessible: true,
        });
      }
    }
  );

  const [offers] = createResource(
    () => mediaSubscriptions(),
    async (mediaSubscriptions) => {
      const _offers: Record<string, OfferResponse> = {};
      for (const mediaSubscription of mediaSubscriptions) {
        const offer = await offerService.getOffer({
          offerId: mediaSubscription.offerId,
        });
        _offers[offer.offerId] = offer;
      }
      return _offers;
    }
  );

  async function handleSignOut() {
    const signOutUrl = await signOut();
    if (!_.isNil(signOutUrl)) {
      location.href = signOutUrl.toString();
    } else {
      navigate(indexPath);
    }
  }

  return (
    <AuthGuard>
      <Title>{website()?.name} | User</Title>

      <Section>
        <div class={styles.TitleContainer}>
          <span class={styles.Title}>
            <Trans key={TKEYS.subscription["My-Subscriptions"]} />:
          </span>

          <MdIcon icon="refresh" onClick={refetch} />
        </div>
      </Section>

      <Suspense fallback={<ContentLoading page />}>
        <Section flat>
          <div class={styles.Cards}>
            <For
              each={mediaSubscriptions()}
              fallback={
                <Trans key={TKEYS.subscription["no-subscriptions-yet"]} />
              }
            >
              {(mediaSubscription) => {
                return (
                  <Card>
                    <span class={styles.Label}>
                      {offers()?.[mediaSubscription.offerId].name}
                    </span>

                    <div>
                      <p class="font-body">
                        <Trans key={TKEYS.subscription["payed-until"]} />:{" "}
                        {toLocaleDate(
                          Number(mediaSubscription.payedUntil),
                          trans(TKEYS.lang)
                        )}
                      </p>
                      <Show when={!_.isNil(mediaSubscription?.cancelAt)}>
                        <p class="font-body">
                          <Trans key={TKEYS.subscription["cancel-to"]} />:{" "}
                          {toLocaleDate(
                            Number(mediaSubscription?.cancelAt),
                            trans(TKEYS.lang)
                          )}
                        </p>
                      </Show>
                    </div>

                    <div class={styles.Actions}>
                      <MdButton
                        type="outlined"
                        href={userSubscriptionPath(
                          mediaSubscription.mediaSubscriptionId
                        )}
                      >
                        <Trans key={TKEYS.common.more} />
                      </MdButton>
                    </div>
                  </Card>
                );
              }}
            </For>
          </div>
        </Section>
      </Suspense>

      <Section>
        <div class={styles.TitleContainer}>
          <span class={styles.Title}>
            <Trans key={TKEYS.user.settings.title} />:
          </span>
        </div>
      </Section>

      <Section flat centered>
        <MdButton type="filled" square onClick={handleSignOut}>
          <Font type="body" key={TKEYS.user["sign-out"]} />
        </MdButton>
      </Section>
    </AuthGuard>
  );
}
