import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import _ from "lodash";
import { createResource } from "solid-js";

import { MdButton } from "~/components/form/MdButton";
import { Font } from "~/components/content/Font";
import { Section } from "~/components/layout/Section";
import { TKEYS } from "~/locales";
import { signOut } from "~/services/auth";

import { websiteService } from "~/services/website";
import { AuthGuard } from "~/components/user/AuthGuard";
import { indexPath } from "..";

export default function Settings() {
  const navigate = useNavigate();

  const [website] = createResource(websiteService.getWebiste);

  async function handleSignOut() {
    const signOutUrl = await signOut();
    if (!_.isNil(signOutUrl)) {
      location.href = signOutUrl.toString();
    } else {
      navigate(indexPath);
    }
  }

  return (
    <AuthGuard>
      <Title>{website()?.name} | User Settings</Title>

      <Section>
        <MdButton type="filled" square onClick={handleSignOut}>
          <Font type="body" key={TKEYS.user["sign-out"]} />
        </MdButton>
      </Section>
    </AuthGuard>
  );
}
