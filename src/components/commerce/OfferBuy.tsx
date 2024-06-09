import { Trans } from "@mbarzda/solid-i18next";
import _ from "lodash";
import {
  Show,
  Suspense,
  createEffect,
  createResource,
  createSignal,
} from "solid-js";

import { indexUrl } from "~/routes";
import { userIndexPath } from "~/routes/user";
import { SignInPrompt, fetchSession, signIn } from "~/services/auth";
import { mediaSubscriptionService } from "~/services/media";
import { stripeService } from "~/services/payment";
import {
  OfferResponse,
  OfferType,
} from "~/services/peoplesmarkets/commerce/v1/offer_pb";
import { PriceType } from "~/services/peoplesmarkets/commerce/v1/price_pb";
import { fetchWebsite } from "~/services/website";
import { TKEYS } from "../../locales";
import { MdButton } from "../form/MdButton";
import { Font } from "../content";
import { ContentLoading } from "../content/ContentLoading";
import styles from "./OfferBuy.module.scss";

type ActionState =
  | "already-subscribed"
  | "loading"
  | "contact-email"
  | "no-payment-method"
  | "login"
  | "subscribe"
  | "buy";
type Props = {
  readonly offer: () => OfferResponse;
};

export function OfferBuy(props: Props) {
  const [website] = createResource(fetchWebsite);
  const [session] = createResource(fetchSession);

  const [actionState, setActionState] = createSignal("loading");

  const [mediaSubscription] = createResource(
    () =>
      [props.offer().offerId, session()?.isAuthenticated] as [string, boolean],
    async ([offerId, isAuthenticated]) => {
      if (isAuthenticated) {
        try {
          const res = await mediaSubscriptionService.getMediaSubscription({
            offerId,
          });
          return res;
        } catch (_) {}
      }
    }
  );

  const [stripeAccount] = createResource(
    () => website()?.shopId,
    async (shopId) => {
      let stripeAccount = {
        shopId,
        enabled: false,
      };
      try {
        stripeAccount = await stripeService.getAccount({ shopId });
      } catch (err) {
        return stripeAccount;
      }
      return stripeAccount;
    }
  );

  createEffect(() => {
    const subscription = mediaSubscription();
    if (
      !_.isNil(subscription) &&
      subscription.payedUntil > new Date().getTime() / 1000
    ) {
      return setActionState("already-subscribed");
    }

    if (stripeAccount.loading) {
      return setActionState("loading");
    }

    if (!stripeAccount()?.enabled) {
      if (!_.isEmpty(website()?.contactEmailAddress)) {
        return setActionState("contact-email");
      }
      return setActionState("no-payment-method");
    }

    if (
      props.offer()?.price?.priceType === PriceType.RECURRING &&
      props.offer()?.type === OfferType.DIGITAL &&
      !session()?.isAuthenticated
    ) {
      return setActionState("login");
    }

    if (props.offer()?.price?.priceType === PriceType.RECURRING) {
      return setActionState("subscribe");
    }

    return setActionState("buy");
  });

  function contactEmailAddress() {
    const shop = website();
    if (!_.isNil(shop?.contactEmailAddress)) {
      return shop.contactEmailAddress;
    }
    return "";
  }

  async function handleSignIn(prompt?: SignInPrompt) {
    const clientId = website()?.clientId;
    const redirectTo = location.href;
    if (!_.isNil(clientId) && !_.isNil(redirectTo)) {
      const signInUrl = await signIn(clientId, redirectTo, prompt);
      if (!_.isNil(signInUrl)) {
        location.href = signInUrl.toString();
      }
    }
  }

  async function handleCheckout() {
    const offerId = props.offer()?.offerId;
    const shopSlug = props.offer()?.shopSlug;

    if (!_.isNil(offerId) && !_.isNil(shopSlug)) {
      const link = await stripeService.createCheckoutSession({
        offerId,
        cancelUrl: location.href,
        successUrl: indexUrl.toString(),
      });

      window.location.href = link;
    }
  }

  return (
    <div class={styles.OfferBuy}>
      <Show when={!_.isNil(props.offer()?.price)}>
        <Show when={actionState() === "login"}>
          <div>
            <Font type="label" key={TKEYS.offer["downloadable-content"]} />
            <Font type="body" key={TKEYS.offer["downloadable-content-info"]} />
          </div>

          <div class={styles.Actions}>
            <Suspense>
              <MdButton
                type="outlined"
                square
                wide
                onClick={() => handleSignIn()}
              >
                <Trans key={TKEYS.user["sign-in"]} />
              </MdButton>
              <Font type="label" key={TKEYS.common.or} />
              <MdButton
                type="outlined"
                square
                wide
                onClick={() => handleSignIn("create")}
              >
                <Trans key={TKEYS.user.register} />
              </MdButton>
            </Suspense>
          </div>
        </Show>

        <Show when={actionState() === "no-payment-method"}>
          <MdButton type="filled" wide square disabled>
            <Trans key={TKEYS.offer["currently-not-available"]} />
          </MdButton>
        </Show>

        <Show when={actionState() === "subscribe"}>
          <MdButton type="filled" wide square onClick={handleCheckout}>
            <Trans key={TKEYS.form.action.Subscribe} />
          </MdButton>
        </Show>

        <Show when={actionState() === "contact-email"}>
          <MdButton
            type="filled"
            square
            wide
            href={"mailto:" + contactEmailAddress()}
          >
            <Trans key={TKEYS.offer["contact-shop"]} />
          </MdButton>
        </Show>

        <Show when={actionState() === "buy"}>
          <MdButton type="filled" square wide onClick={handleCheckout}>
            <Trans key={TKEYS.form.action.Buy} />
          </MdButton>
        </Show>

        <Show when={actionState() === "loading"}>
          <div class={styles.Loading}>
            <ContentLoading />
          </div>
        </Show>

        <Show when={actionState() === "already-subscribed"}>
          <Font type="label" key={TKEYS.subscription["already-subscribed"]} />
          <MdButton type="filled" wide href={userIndexPath}>
            <Trans key={TKEYS.media.Inventory} />
          </MdButton>
        </Show>
      </Show>
    </div>
  );
}
