import { Title } from "@solidjs/meta";
import { PageResponse } from "~/services/sited_io/websites/v1/page_pb";
import { WebsiteResponse } from "~/services/sited_io/websites/v1/website_pb";

type Props = {
  website: () => WebsiteResponse | undefined;
  page: () => PageResponse | undefined;
};

export function StaticPage(props: Props) {
  return (
    <>
      <Title>
        {props.website()?.name}
        {props.page()?.title ? " | " + props.page()?.title : ""}
      </Title>

      <h3>Static page</h3>
    </>
  );
}
