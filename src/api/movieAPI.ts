import { makeGetRequest } from "./makeRequest";

export const getPopularMovies = (page = 1) =>
  makeGetRequest(`/movie/popular`, `page=${page}`);

export const getNowPlayingMovies = (page = 1) =>
  makeGetRequest(`/movie/now_playing`, `page=${page}`);

export const getUpcomingMovies = (page = 1) =>
  makeGetRequest(`/movie/upcoming`, `page=${page}`);

export const getTopRatedMovies = (page = 1) =>
  makeGetRequest(`/movie/top_rated`, `page=${page}`);
