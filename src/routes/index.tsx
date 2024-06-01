import { Title } from "@solidjs/meta";
import { createResource } from "solid-js";

import { fetchWebsite } from "~/services/website";

export default function Index() {
  const [website] = createResource(fetchWebsite);

  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <p>Fetched: {website()?.name}</p>
    </main>
  );
}
