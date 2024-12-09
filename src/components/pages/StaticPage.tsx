import { Title } from "@solidjs/meta";
import { createResource } from "solid-js";
import { PageResponse } from "~/services/sited_io/websites/v1/page_pb";
import { WebsiteResponse } from "~/services/sited_io/websites/v1/website_pb";
import { staticPageService } from "~/services/website";
import { ResourceBoundary } from "../layout/ResourceBoundary";
import { StaticPageV1 } from "./static-page/templates/v1/StaticPageV1";

type Props = {
  readonly website: WebsiteResponse;
  readonly page: PageResponse;
};

export function StaticPage(props: Props) {
  const [staticPage] = createResource(
    () => props.page.pageId,
    async (pageId: bigint) => staticPageService.getStaticPage({ pageId }),
  );

  return (
    <>
      <Title>
        {props.website.name}
        {props.page.title ? " | " + props.page.title : ""}
      </Title>

      <ResourceBoundary resource={staticPage}>
        <StaticPageV1 staticPage={staticPage()!} />
      </ResourceBoundary>
    </>
  );
}
