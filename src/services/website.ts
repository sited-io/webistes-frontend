import { toPlainMessage } from "@bufbuild/protobuf";
import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import _ from "lodash";

import { getDomainFromRequestOrWindow } from "~/lib/env";
import { ShopService } from "./peoplesmarkets/commerce/v1/shop_connect";
import { ShopResponse } from "./peoplesmarkets/commerce/v1/shop_pb";
import { cache } from "@solidjs/router";

const baseUrl = import.meta.env.VITE_SERIVCE_APIS_URL;

const client = createPromiseClient(
  ShopService,
  createGrpcWebTransport({ baseUrl })
);

const _fetchWebsite = cache(async (domain: string) => {
  "use server";
  const { shop } = await client.getShop({ domain, extended: true });
  if (_.isNil(shop)) {
    throw new Error(`Could not fetch website by domain ${domain}`);
  }
  return toPlainMessage(shop) as ShopResponse;
}, "_fetchWebsite");

export async function fetchWebsite(): Promise<ShopResponse> {
  "use server";
  const domain = getDomainFromRequestOrWindow();
  return _fetchWebsite(domain);
}
