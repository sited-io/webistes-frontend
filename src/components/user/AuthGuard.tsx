import { useNavigate } from "@solidjs/router";
import _ from "lodash";
import { ParentProps, Show, Suspense, createResource } from "solid-js";

import { TKEYS } from "~/locales";
import { fetchSession, signIn, signOut } from "~/services/auth";
import { fetchWebsite } from "~/services/website";
import { Font } from "../content";
import { MdButton } from "../form/MdButton";

export function AuthGuard(props: ParentProps) {
  const navigate = useNavigate();

  const [website] = createResource(fetchWebsite);
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
          navigate("/");
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
            <>
              <MdButton type="filled" onClick={handleSignIn}>
                <Font type="body" key={TKEYS.user["sign-in"]} />
              </MdButton>
            </>
          }
        >
          {props.children}
        </Show>
      </Suspense>
    </>
  );
}
