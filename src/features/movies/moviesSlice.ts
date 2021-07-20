import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-cycle
import { RootState } from "../../app/store";

import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../../api/movieAPI";
import { Movie } from "./types";
import { parseMovie } from "../../utills/utills";

export interface MoviesState {
  popular: Movie[];
  nowPlaying: Movie[];
  upcoming: Movie[];
  topRated: Movie[];
  loading: boolean;
}

const initialState: MoviesState = {
  popular: [],
  nowPlaying: [],
  upcoming: [],
  topRated: [],
  loading: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchData = createAsyncThunk("movies/fetchData", async () => {
  const response = await Promise.all([
    getPopularMovies(),
    getNowPlayingMovies(),
    getUpcomingMovies(),
    getTopRatedMovies(),
  ]);
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPopular: (state, action: PayloadAction<Movie[]>) => {
      state.popular = action.payload;
    },
    setNowPlaying: (state, action: PayloadAction<Movie[]>) => {
      state.nowPlaying = action.payload;
    },
    setUpcoming: (state, action: PayloadAction<Movie[]>) => {
      state.upcoming = action.payload;
    },
    setTopRated: (state, action: PayloadAction<Movie[]>) => {
      state.topRated = action.payload;
    },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload[0].results.map(parseMovie);
        state.nowPlaying = action.payload[1].results.map(parseMovie);
        state.upcoming = action.payload[2].results.map(parseMovie);
        state.topRated = action.payload[3].results.map(parseMovie);
      });
  },
});
export const { setPopular, setNowPlaying, setTopRated, setUpcoming } =
  moviesSlice.actions;

export const selectPopular = (state: RootState): Movie[] =>
  state.movies.popular;
export const selectNowPlaying = (state: RootState): Movie[] =>
  state.movies.nowPlaying;
export const selectUpcomig = (state: RootState): Movie[] =>
  state.movies.upcoming;
export const selectTopRated = (state: RootState): Movie[] =>
  state.movies.topRated;
export const selectLoading = (state: RootState): boolean =>
  state.movies.loading;

export default moviesSlice.reducer;
