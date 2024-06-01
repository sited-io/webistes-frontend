import { toPlainMessage } from "@bufbuild/protobuf";
import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import _ from "lodash";

import { getDomainFromRequestOrWindow } from "~/lib/env";
import { ShopService } from "./peoplesmarkets/commerce/v1/shop_connect";
import { ShopResponse } from "./peoplesmarkets/commerce/v1/shop_pb";

const baseUrl = import.meta.env.VITE_SERIVCE_APIS_URL;

const client = createPromiseClient(
  ShopService,
  createGrpcWebTransport({ baseUrl })
);

export async function fetchWebsite(): Promise<ShopResponse> {
  const domain = getDomainFromRequestOrWindow();
  const res = await client.getShop({ domain, extended: true });
  if (_.isNil(res.shop)) {
    throw new Error(`Could not fetch website by domain ${domain}`);
  }
  return toPlainMessage(res.shop) as ShopResponse;
}
