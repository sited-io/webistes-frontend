import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";

import { websiteService } from "~/services/website";

export default function Index() {
  const [website] = createResource(websiteService.getWebiste);

  const { page } = useParams();

  return (
    <>
      <Title>
        {website()?.name} | {page}
      </Title>

      <p>
        {website()?.name} | {page}
      </p>
    </>
  );
}
