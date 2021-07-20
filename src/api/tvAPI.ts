import { makeGetRequest } from "./makeRequest";

export const getPopularTV = (page = 1) =>
  makeGetRequest("/tv/popular", `page=${page}`);

export const getAiringTodayTV = (page = 1) =>
  makeGetRequest("/tv/airing_today", `page=${page}`);

export const getOnTV = (page = 1) =>
  makeGetRequest("/tv/on_the_air", `page=${page}`);

export const getTopRatedTV = (page = 1) =>
  makeGetRequest("/tv/top_rated", `page=${page}`);
