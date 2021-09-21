import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import moviesReducer from "../features/movies/moviesSlice";
// eslint-disable-next-line import/no-cycle
import tvReducer from "../features/tv/tvSlice";
// eslint-disable-next-line import/no-cycle
import peopleReducer from "../features/people/peopleSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    tv: tvReducer,
    people: peopleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
