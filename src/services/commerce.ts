import { PartialMessage, toPlainMessage } from "@bufbuild/protobuf";
import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import _ from "lodash";

import { OfferService } from "./sited_io/commerce/v1/offer_connect";
import {
  GetOfferRequest,
  ListOffersRequest,
  OfferResponse,
} from "./sited_io/commerce/v1/offer_pb";
import { ShopService } from "./sited_io/commerce/v1/shop_connect";
import { GetShopRequest, ShopResponse } from "./sited_io/commerce/v1/shop_pb";

const baseUrl = import.meta.env.VITE_SERIVCE_APIS_URL;

const shopClient = createPromiseClient(
  ShopService,
  createGrpcWebTransport({ baseUrl }),
);

export const shopService = {
  async getShop(request: PartialMessage<GetShopRequest>) {
    try {
      const { shop } = await shopClient.getShop(request);
      if (!_.isNil(shop)) {
        return toPlainMessage(shop) as ShopResponse;
      }
    } catch (err) {
      console.error(err);
    }
  },
};

const offerClient = createPromiseClient(
  OfferService,
  createGrpcWebTransport({ baseUrl }),
);

export const offerService = {
  async getOffer(request: PartialMessage<GetOfferRequest>) {
    const { offer } = await offerClient.getOffer(request);
    if (_.isNil(offer)) {
      throw new Error("[offerService.getOffer]: response was empty");
    }
    return toPlainMessage(offer) as OfferResponse;
  },
  async listOffers(request: PartialMessage<ListOffersRequest>) {
    const { offers } = await offerClient.listOffers(request);
    if (_.isNil(offers)) {
      throw new Error(`Could not fetch offers`);
    }
    return offers.map((o) => toPlainMessage(o)) as OfferResponse[];
  },
};
