import { makeGetRequest } from "./makeRequest";

export const getPopularPeople = (page = 1) =>
  makeGetRequest(`/person/popular`, `page=${page}`);

export const getMovieDetails = (page = 1, personId: number) =>
  makeGetRequest(`/person/${personId}`);
