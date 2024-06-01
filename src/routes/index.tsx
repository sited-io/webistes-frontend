import { Title } from "@solidjs/meta";
import { createEffect, createResource } from "solid-js";
import { fetchSession } from "~/services/auth";

import { fetchWebsite } from "~/services/website";

export default function Index() {
  const [website] = createResource(fetchWebsite);
  const [session] = createResource(fetchSession);

  return (
    <>
      <Title>{website()?.name}</Title>

      <h1>Hello world!</h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <p>Fetched: {website()?.name}</p>
      {JSON.stringify(session(), null, 2)}
    </>
  );
}
