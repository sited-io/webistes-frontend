import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import _ from "lodash";
import { createResource } from "solid-js";

import { MdButton } from "~/components/form/MdButton";
import { Font } from "~/components/content/Font";
import { Section } from "~/components/layout/Section";
import { TKEYS } from "~/locales";
import { signOut } from "~/services/auth";

import { fetchWebsite } from "~/services/website";

export default function Settings() {
  const navigate = useNavigate();

  const [website] = createResource(fetchWebsite);

  async function handleSignOut() {
    const signOutUrl = await signOut();
    if (!_.isNil(signOutUrl)) {
      location.href = signOutUrl.toString();
    } else {
      navigate("/");
    }
  }

  return (
    <>
      <Title>{website()?.name} | User Settings</Title>

      <Section>
        <MdButton type="filled" square onClick={handleSignOut}>
          <Font type="body" key={TKEYS.user["sign-out"]} />
        </MdButton>
      </Section>
    </>
  );
}
