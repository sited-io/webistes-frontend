import { useNavigate } from "@solidjs/router";
import _ from "lodash";
import { ParentProps, Show, Suspense, createResource } from "solid-js";

import { TKEYS } from "~/locales";
import { fetchSession, signIn, signOut } from "~/services/auth";
import { websiteService } from "~/services/website";
import { Font } from "../content";
import { MdButton } from "../form/MdButton";
import { Section } from "../layout/Section";
import { indexPath } from "~/routes";

export function AuthGuard(props: ParentProps) {
  const navigate = useNavigate();

  const [website] = createResource(websiteService.getWebiste);
  const [session] = createResource(fetchSession);

  async function handleSignIn() {
    const clientId = website()?.clientId;
    const redirectTo = location.href;
    if (!_.isNil(clientId) && !_.isNil(redirectTo)) {
      const signInUrl = await signIn(clientId, redirectTo);
      if (!_.isNil(signInUrl)) {
        location.href = signInUrl.toString();
      } else {
        const signOutUrl = await signOut();
        if (!_.isNil(signOutUrl)) {
          location.href = signOutUrl.toString();
        } else {
          navigate(indexPath);
        }
      }
    }
  }

  return (
    <>
      <Suspense>
        <Show
          when={session()?.isAuthenticated}
          fallback={
            <Section centered padded>
              <MdButton type="filled" onClick={handleSignIn}>
                <Font type="body" key={TKEYS.user["sign-in"]} />
              </MdButton>
            </Section>
          }
        >
          {props.children}
        </Show>
      </Suspense>
    </>
  );
}
