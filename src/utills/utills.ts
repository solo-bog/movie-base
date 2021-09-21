import APIconfig from "../api/config";
import { Movie } from "../features/movies/types";
import { Person } from "../features/people/types";

export const parseMovie = (movie: any): Movie => ({
  id: movie.id,
  title: movie.title,
  poster: `${APIconfig.imagesURL}/w500${movie.poster_path}`,
  rating: movie.vote_average,
  year: new Date(movie?.release_date).getFullYear(),
});

export const parseTV = (tv: any): Movie => ({
  id: tv.id,
  title: tv.name,
  poster: tv.poster_path && `${APIconfig.imagesURL}/w500${tv.poster_path}`,
  rating: tv.vote_average,
  year: new Date(tv?.first_air_date).getFullYear(),
});

export const parsePerson = (person: any): Person => ({
  fullname: person.name,
  films: person.known_for
    .map((film: any) => film.title || film.name)
    .join(", "),
  image: `${APIconfig.imagesURL}/w500${person.profile_path}`,
});
