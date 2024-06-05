import { Trans, useTransContext } from "@mbarzda/solid-i18next";
import { useNavigate, useParams } from "@solidjs/router";
import _ from "lodash";
import {
  For,
  Show,
  Suspense,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";
import { Font } from "~/components/content";
import { ContentLoading } from "~/components/content/ContentLoading";
import { Section } from "~/components/layout/Section";
import { toLocaleDate } from "~/lib/datetime";
import { buildUrl } from "~/lib/env";
import { TKEYS } from "~/locales";
import styles from "./[subscriptionId].module.scss";
import { offerService } from "~/services/commerce";
import { mediaService, mediaSubscriptionService } from "~/services/media";
import {
  MediaFilterField,
  MediaOrderByField,
} from "~/services/peoplesmarkets/media/v1/media_pb";
import { Direction } from "~/services/peoplesmarkets/ordering/v1/ordering_pb";
import { MediaList } from "~/components/commerce/MediaList";
import { MdButton } from "~/components/form/MdButton";
import { CancelConfirmationDialog } from "~/components/commerce/CancelConfirmationDialog";
import { ResumeConfirmationDialog } from "~/components/commerce/ResumeConfirmationDialog";
import { userIndexPath } from "..";
import { Pagination } from "~/components/navigation/Pagination";
import { PartialMessage } from "@bufbuild/protobuf";
import { PaginationRequest } from "~/services/peoplesmarkets/pagination/v1/pagination_pb";
import { MdList } from "~/components/content/MdList";
import { MdListItem } from "~/components/content/MdListItem";
import { MediaListItem } from "~/components/commerce/MediaListItem";

export const userSubscriptionPath = (subscriptionId: string) =>
  `/user/subscriptions/${subscriptionId}`;
export const userSubscriptionUrl = (subscriptionId: string) =>
  buildUrl(userSubscriptionPath(subscriptionId));

export default function UserSubscription() {
  const { subscriptionId } = useParams();

  const navigate = useNavigate();
  const [trans] = useTransContext();

  const [showCancelConfirmation, setShowCancelConfirmation] =
    createSignal(false);
  const [showResumeConfirmation, setShowResumeConfirmation] =
    createSignal(false);
  const [pagination, setPagination] = createSignal<
    PartialMessage<PaginationRequest>
  >({ page: 1, size: 10 });

  const [mediaSubscription] = createResource(
    () => subscriptionId,
    async (mediaSubscriptionId: string) =>
      mediaSubscriptionService.getMediaSubscription({ mediaSubscriptionId })
  );

  const [offer] = createResource(
    () => mediaSubscription()?.offerId,
    async (offerId: string) =>
      offerService.getOffer({
        offerId,
      })
  );

  const [files] = createResource(
    () => [mediaSubscription()?.offerId, pagination()] as const,
    async ([offerId, pagination]) =>
      mediaService.listAccessible({
        pagination,
        filter: {
          field: MediaFilterField.OFFER_ID,
          query: offerId,
        },
        orderBy: {
          field: MediaOrderByField.ORDERING,
          direction: Direction.ASC,
        },
      })
  );

  async function handleConfirmCancelSubscription() {
    handleCloseCancelSubscription();
    const mediaSubscriptionId = mediaSubscription()?.mediaSubscriptionId;
    if (!_.isNil(mediaSubscriptionId)) {
      await mediaSubscriptionService.cancel({
        mediaSubscriptionId,
      });
      if (!_.isNil(offer())) {
        navigate(userIndexPath);
      }
    }
  }

  async function handleConfirmResumeSubscription() {
    handleCloseResumeSubscription();
    const mediaSubscriptionId = mediaSubscription()?.mediaSubscriptionId;
    if (!_.isNil(mediaSubscriptionId)) {
      await mediaSubscriptionService.resume({ mediaSubscriptionId });
      if (!_.isNil(offer())) {
        navigate(userIndexPath);
      }
    }
  }

  function handleCancelSubscription() {
    setShowCancelConfirmation(true);
  }

  function handleCloseCancelSubscription() {
    setShowCancelConfirmation(false);
  }

  function handleResumeSubscription() {
    setShowResumeConfirmation(true);
  }

  function handleCloseResumeSubscription() {
    setShowResumeConfirmation(false);
  }

  async function handlePagination(next: PartialMessage<PaginationRequest>) {
    setPagination(next);
  }

  return (
    <>
      <Suspense fallback={<ContentLoading page />}>
        <Section>
          <div class={styles.SubscriptionDetail}>
            <Font
              type="title"
              inline
              key={TKEYS.subscription["subscription-to"]}
            />{" "}
            <Font type="title" inline strong>
              {offer()?.name}
            </Font>
            <Show when={!_.isNil(mediaSubscription()?.payedUntil)}>
              <span class={styles.Detail}>
                <Trans key={TKEYS.subscription["payed-until"]} />:{" "}
                {toLocaleDate(
                  Number(mediaSubscription()?.payedUntil),
                  trans(TKEYS.lang)
                )}
              </span>
            </Show>
            <Show when={!_.isNil(mediaSubscription()?.cancelAt)}>
              <Font
                type="body"
                danger
                inline
                key={TKEYS.subscription["cancel-to"]}
              />
              <Font type="body" danger inline>
                :{" "}
                {toLocaleDate(
                  Number(mediaSubscription()?.cancelAt),
                  trans(TKEYS.lang)
                )}
              </Font>
            </Show>
          </div>
        </Section>

        <Section bordered>
          <div class={styles.SectionHeader}>
            <span class={styles.Label}>
              <Trans key={TKEYS.subscription["included-files"]} />
            </span>
          </div>

          <Suspense fallback={<ContentLoading />}>
            <MdList>
              <For each={files()?.medias}>
                {(media) => (
                  <MdListItem>
                    <MediaListItem media={() => media} />
                  </MdListItem>
                )}
              </For>
            </MdList>

            <Show
              when={
                files()?.pagination?.totalElements! > files()?.pagination?.size!
              }
            >
              <Section centered flat>
                <Pagination
                  pagination={() => files()?.pagination}
                  onValue={handlePagination}
                />
              </Section>
            </Show>
          </Suspense>
        </Section>

        <Section bordered>
          <div class={styles.SectionHeader}>
            <span class={styles.Label}>
              <Trans key={TKEYS.subscription["subscription-configuration"]} />
            </span>
          </div>

          <div class={styles.Action}>
            <Show
              when={_.isNil(mediaSubscription()?.cancelAt)}
              fallback={
                <>
                  <Font type="body" key={TKEYS.subscription.resume} />

                  <MdButton onClick={handleResumeSubscription}>
                    <Trans key={TKEYS.common.resume} />
                  </MdButton>
                </>
              }
            >
              <Font
                type="body"
                key={TKEYS.subscription["cancel-subscription"]}
              />

              <MdButton onClick={handleCancelSubscription}>
                <Trans key={TKEYS.common.cancel} />
              </MdButton>
            </Show>
          </div>
        </Section>

        <CancelConfirmationDialog
          show={showCancelConfirmation()}
          onConfirmation={handleConfirmCancelSubscription}
          onClose={handleCloseCancelSubscription}
        />

        <ResumeConfirmationDialog
          show={showResumeConfirmation()}
          onConfirmation={handleConfirmResumeSubscription}
          onClose={handleCloseResumeSubscription}
        />
      </Suspense>
    </>
  );
}
