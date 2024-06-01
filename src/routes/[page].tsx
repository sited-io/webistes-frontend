import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";

import { fetchWebsite } from "~/services/website";

export default function Index() {
  const [website] = createResource(fetchWebsite);

  const { page } = useParams();

  return (
    <main>
      <Title>
        {website()?.name} | {page}
      </Title>

      <p>
        {website()?.name} | {page}
      </p>
    </main>
  );
}
