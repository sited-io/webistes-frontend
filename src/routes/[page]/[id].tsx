import { useParams } from "@solidjs/router";
import _ from "lodash";
import { createResource } from "solid-js";
import { pageService, websiteService } from "~/services/website";

export default function PageDetail() {
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
    },
  );

  return <>{page}</>;
}
