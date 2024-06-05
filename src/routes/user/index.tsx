import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import _ from "lodash";
import { For, Show, Suspense, createResource } from "solid-js";

import { MdButton } from "~/components/form/MdButton";
import { Font } from "~/components/content";
import { Section } from "~/components/layout/Section";
import { buildUrl } from "~/lib/env";
import { TKEYS } from "~/locales";
import { fetchSession, signOut } from "~/services/auth";
import { mediaSubscriptionService } from "~/services/media";
import { fetchWebsite } from "~/services/website";
import styles from "./index.module.scss";
import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import { userSubscriptionPath } from "./subscriptions/[subscriptionId]";
import { toLocaleDate } from "~/lib/datetime";
import { ContentLoading } from "~/components/content/ContentLoading";
import { MdIcon } from "~/components/assets/MdIcon";
import { Card } from "~/components/content/Card";
import { offerService } from "~/services/commerce";
import { OfferResponse } from "~/services/peoplesmarkets/commerce/v1/offer_pb";

export const userIndexPath = "/user";
export const userIndexUrl = () => buildUrl(userIndexPath);

export default function UserIndex() {
  const navigate = useNavigate();
  const [trans] = useTransContext();

  const [website] = createResource(fetchWebsite);

  const [mediaSubscriptions, { refetch }] = createResource(
    () => website()?.shopId,
    async (shopId) =>
      mediaSubscriptionService.listMediaSubscriptions({
        shopId,
        isAccessible: true,
      })
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
      navigate("/");
    }
  }

  return (
    <>
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
            <Show
              when={!_.isEmpty(mediaSubscriptions())}
              fallback={
                <Trans key={TKEYS.subscription["no-subscriptions-yet"]} />
              }
            >
              <For each={mediaSubscriptions()}>
                {(mediaSubscription) => {
                  return (
                    <Card>
                      <span class={styles.Label}>
                        {offers()?.[mediaSubscription.offerId].name}
                      </span>

                      <div class={styles.Details}>
                        <span class={styles.Detail}>
                          <Trans key={TKEYS.subscription["payed-until"]} />:{" "}
                          {toLocaleDate(
                            Number(mediaSubscription.payedUntil),
                            trans(TKEYS.lang)
                          )}
                        </span>
                        <Show when={!_.isNil(mediaSubscription?.cancelAt)}>
                          <Font
                            type="body"
                            danger
                            inline
                            key={TKEYS.subscription["cancel-to"]}
                          />
                          <Font type="body" danger inline>
                            :{" "}
                            {toLocaleDate(
                              Number(mediaSubscription?.cancelAt),
                              trans(TKEYS.lang)
                            )}
                          </Font>
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
            </Show>
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
    </>
  );
}
