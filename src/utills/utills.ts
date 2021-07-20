import APIconfig from "../api/config";

export const parseMovie = (movie: any) => ({
  id: movie.id,
  title: movie.title,
  poster: `${APIconfig.imagesURL}/w500${movie.poster_path}`,
  rating: movie.vote_average,
  year: parseInt(movie?.release_date?.slice(0, 4), 10),
});

export const parseTV = (movie: any) => ({
  id: movie.id,
  title: movie.title,
  poster: `${APIconfig.imagesURL}/w500${movie.poster_path}`,
  rating: movie.vote_average,
  year: parseInt(movie?.release_date.slice(0, 4), 10),
});
