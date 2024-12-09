// import type { APIEvent } from "@solidjs/start/server";
import _ from "lodash";

import { getDomainFromRequestOrWindow } from "~/lib/env";
import { WebsiteResponse } from "~/services/sited_io/websites/v1/website_pb";
import { websiteService } from "~/services/website";

function buildUrl(domain: string, path: string): string {
  return `https://${domain}${path}`;
}

function buildSitemapTxt(website: WebsiteResponse): string {
  const sites = [];
  for (const page of website.pages) {
    sites.push(buildUrl(getDomainFromRequestOrWindow(), page.path));
  }
  return sites.join("\n");
}

export async function GET() {
  try {
    const website = await websiteService.getWebiste();
    if (!_.isNil(website)) {
      return new Response(buildSitemapTxt(website), {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }
  } catch {
    return new Response("Website not found", {
      status: 404,
    });
  }
  return new Response("Website not found", {
    status: 404,
  });
}
