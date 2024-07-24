import { useParams } from "@solidjs/router";
import _ from "lodash";
import { createResource } from "solid-js";
import {
  PageResponse,
  PageType,
} from "~/services/sited_io/websites/v1/page_pb";
import { websiteService, pageService } from "~/services/website";

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
    }
  );

  const [pageDetail] = createResource(
    () => page(),
    async (page: PageResponse) => {
      if (page.pageType === PageType.SHOP) {
        console.log("SHOP");
      }
    }
  );

  return <></>;
}
