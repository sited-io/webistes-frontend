import { PartialMessage, toPlainMessage } from "@bufbuild/protobuf";
import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";
import { cache } from "@solidjs/router";
import _ from "lodash";

import { getDomainFromRequestOrWindow } from "~/lib/env";
import { WebsiteService } from "./sited_io/websites/v1/website_connect";
import { WebsiteResponse } from "./sited_io/websites/v1/website_pb";
import { PageService } from "./sited_io/websites/v1/page_connect";
import { GetPageRequest, PageResponse } from "./sited_io/websites/v1/page_pb";
import { StaticPageService } from "./sited_io/websites/v1/static_page_connect";
import {
  GetStaticPageRequest,
  StaticPageResponse,
} from "./sited_io/websites/v1/static_page_pb";

const baseUrl = import.meta.env.VITE_SERIVCE_APIS_URL;

const websiteClient = createPromiseClient(
  WebsiteService,
  createGrpcWebTransport({ baseUrl }),
);

const _fetchWebsite = cache(async (domain: string) => {
  "use server";
  const { website } = await websiteClient.getWebsite({ domain });
  if (_.isNil(website)) {
    throw new Error(`Could not fetch website by domain ${domain}`);
  }
  return toPlainMessage(website) as WebsiteResponse;
}, "_fetchWebsite");

export const websiteService = {
  getWebiste: async () => {
    const domain = getDomainFromRequestOrWindow();
    return _fetchWebsite(domain);
  },
};

const pageClient = createPromiseClient(
  PageService,
  createGrpcWebTransport({ baseUrl }),
);

export const pageService = {
  getPage: async (request: PartialMessage<GetPageRequest>) => {
    const { page } = await pageClient.getPage(request);
    if (_.isNil(page)) {
      throw new Error("[pageService.getPage]: response was empty");
    }
    return toPlainMessage(page) as PageResponse;
  },
};

const staticPageClient = createPromiseClient(
  StaticPageService,
  createGrpcWebTransport({ baseUrl }),
);

export const staticPageService = {
  getStaticPage: async (request: PartialMessage<GetStaticPageRequest>) => {
    const { staticPage } = await staticPageClient.getStaticPage(request);
    console.log("STATIC PAGE", staticPage);
    if (_.isNil(staticPage)) {
      throw new Error("[staticPageService.getStaticPage]: response was empty");
    }
    return toPlainMessage(staticPage) as StaticPageResponse;
  },
};
