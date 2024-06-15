import _ from "lodash";
import { Show } from "solid-js";
import { Font, Multiline } from "../content";
import { Section } from "../layout/Section";
import { OfferBuy } from "./OfferBuy";
import styles from "./OfferDetail.module.scss";
import { OfferPrice } from "./OfferPrice";
import { OfferResponse } from "~/services/sited_io/commerce/v1/offer_pb";
import { OfferImages } from "./OfferImages";

type Props = {
  readonly offer: () => OfferResponse;
};

export function OfferDetail(props: Props) {
  return (
    <>
      <div class={styles.OfferDetailView}>
        <Section class={styles.Images}>
          <Show when={!_.isEmpty(props.offer()?.images)}>
            <OfferImages offer={props.offer} />
          </Show>
        </Section>

        <Section class={styles.Summary} padded>
          <div>
            <Font type="title">{props.offer()?.name}</Font>

            <OfferPrice class={styles.Price} offer={props.offer} />

            <Show when={!_.isEmpty(props.offer()?.description)}>
              <Font type="body">
                <Multiline text={props.offer()?.description} />
              </Font>
            </Show>
          </div>

          <div>
            <OfferBuy offer={props.offer} />
          </div>
        </Section>
      </div>
    </>
  );
}
