import {
  makeDeleteRequest,
  makeGetRequest,
  makePostRequest,
} from "./makeRequest";

export const createRequestToken = () =>
  makeGetRequest("/authentication/token/new");

export const loginWithPayloads = (
  requestToken: string,
  username: string,
  password: string
) =>
  makePostRequest("/authentication/token/validate_with_login", {
    username,
    password,
    requestToken,
  });

export const createSession = (requestToken: string) =>
  makePostRequest("/authentication/token/validate_with_login", {
    requestToken,
  });

export const deleteSession = (sessionId: string) =>
  makeDeleteRequest("/authentication/session", { session_id: sessionId });

export const createGuestSession = () =>
  makeGetRequest("/authentication/guest_session/new");
