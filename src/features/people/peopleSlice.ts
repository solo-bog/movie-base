import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-cycle
import { RootState } from "../../app/store";

import { getPopularPeople } from "../../api";
import { PeoplePage, Person } from "./types";
import { parsePerson } from "../../utills/utills";

export interface PeopleState {
  popular: Person[];
  loading: boolean;
  totalPages: number;
}

const initialState: PeopleState = {
  popular: [],
  loading: false,
  totalPages: 0,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fetchData = createAsyncThunk(
  "people/fetchData",
  async (page: number) => {
    const response = await getPopularPeople(page);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPopular: (state, action: PayloadAction<Person[]>) => {
      state.popular = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.popular = action.payload.results.map(parsePerson);
        state.totalPages = action.payload.total_pages;
      });
  },
});
export const { setPopular } = peopleSlice.actions;

export const selectPopular = (state: RootState): PeoplePage => ({
  popularPeople: state.people.popular,
  totalPages: state.people.totalPages,
  isLoading: state.people.loading,
});

export const selectLoading = (state: RootState): boolean =>
  state.movies.loading;

export default peopleSlice.reducer;
