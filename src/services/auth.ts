import type { APIEvent } from "@solidjs/start/server";
import axios from "axios";
import _ from "lodash";
import { getQuery, useSession } from "vinxi/http";

import { buildUrl } from "~/lib/env";
import { hashCodeVerifier } from "~/lib/string-manipulation";
import { indexPath } from "~/routes";

export type Session = {
  isAuthenticated?: boolean;
  userLogin?: UserLogin;
  accessTokens?: AccessTokens;
};

type UserLogin = {
  clientId: string;
  codeVerifier: string;
  redirectUri: string;
  redirectTo: string;
};

type AccessTokens = {
  accessToken: string;
  expiresAt: number;
  refreshToken: string;
  state?: string | undefined;
};

type AccessTokenResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  id_token: string;
  state?: string;
};

const emptySession: Session = {
  isAuthenticated: false,
  accessTokens: undefined,
  userLogin: undefined,
};

function buildSignInCallbackUrl() {
  return buildUrl("/user/sign-in-callback").toString();
}

function buildSignOutCallbackUrl() {
  return buildUrl("/").toString();
}

export async function getSession() {
  "use server";
  return useSession<Session>({
    password: process.env.SESSION_SECRET!,
  });
}

export async function withAuthHeader() {
  "use server";
  const session = await getSession();
  const accessToken = session?.data?.accessTokens?.accessToken;
  if (!_.isNil(accessToken) && !_.isEmpty(accessToken)) {
    return {
      Authorization: `Bearer ${accessToken}`,
    };
  }
}

export type SignInPrompt = "create" | "select_account" | "login" | undefined;

export async function signIn(
  clientId: string,
  redirectTo: string,
  prompt?: SignInPrompt,
): Promise<URL | undefined> {
  "use server";
  try {
    const session = await getSession();

    const codeVerifier = crypto.randomUUID();
    const codeChallenge = await hashCodeVerifier(codeVerifier);
    const redirectUri = buildSignInCallbackUrl();

    const requestUri = new URL(`${process.env.OAUTH_URL}/oauth/v2/authorize`);
    requestUri.searchParams.set("client_id", clientId);

    requestUri.searchParams.set("redirect_uri", redirectUri);

    const scope = `openid email profile offline_access urn:zitadel:iam:org:project:id:zitadel:aud urn:zitadel:iam:user:metadata urn:zitadel:iam:org:id:${process.env.OAUTH_ORG_ID}`;

    requestUri.searchParams.set("scope", scope);
    requestUri.searchParams.set("response_type", "code");
    requestUri.searchParams.set("code_challenge", codeChallenge);
    requestUri.searchParams.set("code_challenge_method", "S256");
    if (!_.isNil(prompt) && !_.isEmpty(prompt)) {
      requestUri.searchParams.set("prompt", prompt);
    }

    await session.update(
      () =>
        ({
          isAuthenticated: false,
          userLogin: {
            clientId,
            codeVerifier,
            redirectUri,
            redirectTo,
          },
        }) as Session,
    );

    return requestUri;
  } catch (err) {
    console.error(`[signIn]: ${err}`);
  }
}

export async function signInCallback(event: APIEvent) {
  "use server";
  try {
    const session = await getSession();
    const sessionData: Session = session.data;
    if (_.isNil(sessionData.userLogin)) {
      throw new Error("Could not find UserLogin on session cookie");
    }

    const { clientId, codeVerifier, redirectUri, redirectTo } =
      sessionData.userLogin;
    const { code } = getQuery(event.nativeEvent);

    if (_.isNil(code)) {
      return new Response("Could not get code from query", { status: 500 });
    }

    const body = new URLSearchParams();
    body.set("grant_type", "authorization_code");
    body.set("code", code.toString()!);
    body.set("client_id", clientId);
    body.set("redirect_uri", redirectUri);
    body.set("code_verifier", codeVerifier);

    const accessTokenResponse: AccessTokenResponse = (
      await axios.post(`${process.env.OAUTH_URL}/oauth/v2/token`, body)
    ).data;

    const expiresAt = new Date();
    expiresAt.setSeconds(
      expiresAt.getSeconds() + accessTokenResponse.expires_in,
    );

    await session.update(
      () =>
        ({
          isAuthenticated: true,
          accessTokens: {
            accessToken: accessTokenResponse.access_token,
            expiresAt: expiresAt.getTime(),
            refreshToken: accessTokenResponse.refresh_token,
          },
        }) as Session,
    );
    return redirectResponse(redirectTo);
  } catch (err) {
    console.error(`[signInCallback]: ${err}`);

    return redirectResponse(indexPath);
  }
}

export async function fetchSession(): Promise<Session | undefined> {
  "use server";
  let sessionData: Session | undefined = undefined;
  try {
    const session = await getSession();
    sessionData = session.data;
    if (session.data.isAuthenticated) {
      const expiresAt = session.data.accessTokens?.expiresAt || 0;
      if (expiresAt < new Date().getTime()) {
        sessionData = await refreshSession();
      }
    }
  } catch (err) {
    console.error(`[fetchSession]: ${err}`);
  }
  return sessionData;
}

export async function refreshSession() {
  "use server";
  const session = await getSession();

  try {
    const sessionData: Session = session.data;
    if (_.isNil(sessionData.accessTokens) || _.isNil(sessionData.userLogin)) {
      throw new Error(
        "Could not find AccessTokens or UserLogin on session cookie",
      );
    }
    const { refreshToken } = sessionData.accessTokens;
    const { clientId } = sessionData.userLogin;

    const body = new URLSearchParams();
    body.set("grant_type", "refresh_token");
    body.set("refresh_token", refreshToken);
    body.set("redirect_uri", buildSignInCallbackUrl());
    body.set("client_id", clientId);

    const scope = `openid email profile offline_access urn:zitadel:iam:org:project:id:zitadel:aud urn:zitadel:iam:user:metadata urn:zitadel:iam:org:id:${process.env.OAUTH_ORG_ID}`;
    body.set("scope", scope);

    const accessTokenResponse: AccessTokenResponse = (
      await axios.post(`${process.env.OAUTH_URL}/oauth/v2/token`, body)
    ).data;

    const expiresAt = new Date();
    expiresAt.setSeconds(
      expiresAt.getSeconds() + accessTokenResponse.expires_in,
    );

    const newSessionData = {
      isAuthenticated: true,
      accessTokens: {
        accessToken: accessTokenResponse.access_token,
        expiresAt: expiresAt.getTime(),
        refreshToken: accessTokenResponse.refresh_token,
      },
    } as Session;

    await session.update(() => newSessionData);
    return newSessionData;
  } catch (err) {
    console.error(`[refreshSession]: ${err}`);
    await session.update(() => emptySession);
    return emptySession;
  }
}

export async function signOut() {
  "use server";
  try {
    const session = await getSession();

    const clientId = session.data?.userLogin?.clientId;
    if (_.isNil(clientId)) {
      console.log("no clientId");
      return;
    }

    const requestUri = new URL(`${process.env.OAUTH_URL}/oidc/v1/end_session`);

    requestUri.searchParams.set(
      "post_logout_redirect_uri",
      buildSignOutCallbackUrl(),
    );
    requestUri.searchParams.set("client_id", clientId);

    await session.update(() => emptySession);

    return requestUri;
  } catch (err) {
    console.error(`[signOut]: ${err}`);
  }
}

function redirectResponse(location: string) {
  return new Response("Redirect", {
    status: 302,
    headers: {
      location,
    },
  });
}
