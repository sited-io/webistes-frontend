import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import _ from "lodash";
import { createResource } from "solid-js";

import { MdButton } from "~/components/assets/MdButton";
import { Font } from "~/components/content/Font";
import { TKEYS } from "~/locales";
import { signOut } from "~/services/auth";

import { fetchWebsite } from "~/services/website";

export default function Index() {
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

      <MdButton type="filled" square onClick={handleSignOut}>
        <Font type="body" key={TKEYS.user["sign-out"]} />
      </MdButton>
    </>
  );
}
