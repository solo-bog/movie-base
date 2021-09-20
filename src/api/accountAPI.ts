import { makeGetRequest, makePostRequest } from "./makeRequest";

export const getDetails = (sessionID: string) =>
  makeGetRequest("/account", `session_id=${sessionID}`);

export const getFavoriteMovies = (
  sessionID: string,
  accountID: number,
  page: number
) =>
  makeGetRequest(
    `/account/${accountID}/favorite/movies`,
    `session_id=${sessionID}&page=${page}`
  );

export const getFavoriteTvShows = (
  sessionID: string,
  accountID: number,
  page: number
) =>
  makeGetRequest(
    `/account/${accountID}/favorite/tv`,
    `session_id=${sessionID}&page=${page}`
  );

export const getMovieWatchlist = (
  sessionID: string,
  accountID: number,
  page: number
) =>
  makeGetRequest(
    `/account/${accountID}/watchlist/movies`,
    `session_id=${sessionID}&page=${page}`
  );

export const getTVShowsWatchlist = (
  sessionID: string,
  accountID: number,
  page: number
) =>
  makeGetRequest(
    `/account/${accountID}/watchlist/tv`,
    `session_id=${sessionID}&page=${page}`
  );

type Media = {
  media_type: "movie" | "tv";
  media_id: number;
  watchlist: boolean;
};

export const markAsFavorite = (
  sessionID: string,
  accountID: number,
  media: Media
) =>
  makePostRequest(
    `/account/${accountID}/favorite`,
    media,
    `session_id=${sessionID}`
  );

export const addToWathlist = (
  sessionID: string,
  accountID: number,
  media: Media
) =>
  makePostRequest(
    `/account/${accountID}/watchlist`,
    media,
    `session_id=${sessionID}`
  );
