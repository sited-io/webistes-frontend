import { PartialMessage, toPlainMessage } from "@bufbuild/protobuf";
import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import _ from "lodash";

import { OfferService } from "./peoplesmarkets/commerce/v1/offer_connect";
import {
  GetOfferRequest,
  ListOffersRequest,
  OfferResponse,
} from "./peoplesmarkets/commerce/v1/offer_pb";

const baseUrl = import.meta.env.VITE_SERIVCE_APIS_URL;

const client = createPromiseClient(
  OfferService,
  createGrpcWebTransport({ baseUrl })
);

export const offerService = {
  getOffer: async (request: PartialMessage<GetOfferRequest>) => {
    "use server";
    const { offer } = await client.getOffer(request);
    if (_.isNil(offer)) {
      throw new Error("[offerService.getOffer]: response was empty");
    }
    return toPlainMessage(offer) as OfferResponse;
  },
  listOffers: async (request: PartialMessage<ListOffersRequest>) => {
    "use server";
    const { offers } = await client.listOffers(request);
    if (_.isNil(offers)) {
      throw new Error(`Could not fetch offers`);
    }
    return offers.map((o) => toPlainMessage(o)) as OfferResponse[];
  },
};
