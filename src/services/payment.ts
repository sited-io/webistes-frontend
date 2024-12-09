import { PartialMessage, toPlainMessage } from "@bufbuild/protobuf";
import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import _ from "lodash";

import { withAuthHeader } from "./auth";
import { StripeService } from "./sited_io/payment/v1/stripe_connect";
import {
  CreateCheckoutSessionRequest,
  GetAccountRequest,
  StripeAccount,
} from "./sited_io/payment/v1/stripe_pb";

const baseUrl = import.meta.env.VITE_SERIVCE_APIS_URL;

const stripeClient = createPromiseClient(
  StripeService,
  createGrpcWebTransport({ baseUrl }),
);

export const stripeService = {
  async getAccount(request: PartialMessage<GetAccountRequest>) {
    "use server";
    const headers = await withAuthHeader();
    const { account } = await stripeClient.getAccount(request, { headers });
    if (_.isNil(account)) {
      throw new Error("[stripeClient.getAccount]: response was empty");
    }
    return toPlainMessage(account) as StripeAccount;
  },
  async createCheckoutSession(
    request: PartialMessage<CreateCheckoutSessionRequest>,
  ) {
    "use server";
    const headers = await withAuthHeader();
    const { link } = await stripeClient.createCheckoutSession(request, {
      headers,
    });
    if (_.isNil(link)) {
      throw new Error(
        "[stripeClient.createCheckoutSession]: response was empty",
      );
    }
    return link;
  },
};
