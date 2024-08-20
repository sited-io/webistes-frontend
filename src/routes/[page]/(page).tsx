import { useParams } from "@solidjs/router";
import _ from "lodash";
import { createResource } from "solid-js";

import { ResourceBoundary } from "~/components/layout/ResourceBoundary";
import { Page } from "~/components/pages/Page";
import { pageService, websiteService } from "~/services/website";

export default function Index() {
  const [website] = createResource(websiteService.getWebiste);
  const params = useParams();

  const [page] = createResource(
    () => [website()?.websiteId, params?.page] as const,
    async ([websiteId, pathParam]) => {
      if (!_.isNil(websiteId)) {
        return pageService.getPage({
          websiteId,
          path: "/" + pathParam,
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
