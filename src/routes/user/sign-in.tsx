import { Title } from "@solidjs/meta";
import { useParams } from "@solidjs/router";
import { createResource } from "solid-js";

import { fetchWebsite } from "~/services/website";

export default function Index() {
  const [website] = createResource(fetchWebsite);

  return (
    <main>
      <Title>{website()?.name} | User Sign In</Title>

      <p>{website()?.name} | User Sign In</p>
    </main>
  );
}
