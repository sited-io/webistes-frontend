import { toPlainMessage } from "@bufbuild/protobuf";
import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import { cache } from "@solidjs/router";
import _ from "lodash";

import { getDomainFromRequestOrWindow } from "~/lib/env";
import { WebsiteService } from "./sited_io/websites/v1/website_connect";
import { WebsiteResponse } from "./sited_io/websites/v1/website_pb";

const baseUrl = import.meta.env.VITE_SERIVCE_APIS_URL;

const client = createPromiseClient(
  WebsiteService,
  createGrpcWebTransport({ baseUrl })
);

const _fetchWebsite = cache(async (domain: string) => {
  "use server";
  const { website } = await client.getWebsite({ domain });
  if (_.isNil(website)) {
    throw new Error(`Could not fetch website by domain ${domain}`);
  }
  return toPlainMessage(website) as WebsiteResponse;
}, "_fetchWebsite");

export async function fetchWebsite(): Promise<WebsiteResponse> {
  "use server";
  const domain = getDomainFromRequestOrWindow();
  return _fetchWebsite(domain);
}
