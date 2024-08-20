import _ from "lodash";
import { createResource } from "solid-js";

import { ResourceBoundary } from "~/components/layout/ResourceBoundary";
import { Page } from "~/components/pages/Page";
import { buildUrl } from "~/lib/env";
import { pageService, websiteService } from "~/services/website";

export const indexPath = "/";
export const indexUrl = () => buildUrl(indexPath);

export default function Index() {
  const [website] = createResource(websiteService.getWebiste);

  const [page] = createResource(
    () => website()?.websiteId,
    async (websiteId: string) => {
      if (!_.isNil(websiteId)) {
        return pageService.getPage({
          websiteId,
          path: "/",
        });
      }
    }
  );

  return (
    <>
      <ResourceBoundary resource={website}>
        <ResourceBoundary resource={page}>
          <Page website={website()!} page={page()!} />
        </ResourceBoundary>
      </ResourceBoundary>
    </>
  );
}
