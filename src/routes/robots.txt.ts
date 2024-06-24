import type { APIEvent } from "@solidjs/start/server";
import _ from "lodash";

import { websiteService } from "~/services/website";

function buildRobotsTxt(domain: string): string {
  const lines = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /user/*",
    `Sitemap: https://${domain}/sitemap.txt`,
  ];
  return lines.join("\n");
}

export async function GET(event: APIEvent) {
  try {
    const website = await websiteService.getWebiste();
    if (!_.isNil(website)) {
      return buildRobotsTxt(new URL(event.request.url).host.toString());
    }
  } catch (_) {
    return new Response("Website not found", { status: 404 });
  }
  return new Response("Website not found", { status: 404 });
}
