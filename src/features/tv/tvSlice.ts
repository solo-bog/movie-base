import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-cycle
import { RootState } from "../../app/store";
import { Movie } from "../movies/types";
import { parseTV } from "../../utills/utills";
import {
  getAiringTodayTV,
  getOnTV,
  getPopularTV,
  getTopRatedTV,
} from "../../api/tvAPI";

export interface TVState {
  popular: Movie[];
  onTV: Movie[];
  airingToday: Movie[];
  topRated: Movie[];
  loading: boolean;
}

const initialState: TVState = {
  popular: [],
  onTV: [],
  airingToday: [],
  topRated: [],
  loading: false,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchData = createAsyncThunk("tv/fetchData", async () => {
  const response = await Promise.all([
    getPopularTV(),
    getOnTV(),
    getAiringTodayTV(),
    getTopRatedTV(),
  ]);
  // The value we return becomes the `fulfilled` action payload
  return response;
});

export const tvSlice = createSlice({
  name: "tv",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPopular: (state, action: PayloadAction<Movie[]>) => {
      state.popular = action.payload;
    },
    setOnTV: (state, action: PayloadAction<Movie[]>) => {
      state.onTV = action.payload;
    },
    setAiringToday: (state, action: PayloadAction<Movie[]>) => {
      state.airingToday = action.payload;
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
        state.popular = action.payload[0].results.map(parseTV);
        state.onTV = action.payload[1].results.map(parseTV);
        state.airingToday = action.payload[2].results.map(parseTV);
        state.topRated = action.payload[3].results.map(parseTV);
      });
  },
});

export const selectPopular = (state: RootState): Movie[] => state.tv.popular;
export const selectOnTV = (state: RootState): Movie[] => state.tv.onTV;
export const selectAiringToday = (state: RootState): Movie[] =>
  state.tv.airingToday;
export const selectTopRated = (state: RootState): Movie[] => state.tv.topRated;
export const selectLoading = (state: RootState): boolean => state.tv.loading;

export default tvSlice.reducer;
