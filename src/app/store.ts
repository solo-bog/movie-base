import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// eslint-disable-next-line import/no-cycle
import moviesReducer from "../features/movies/moviesSlice";
// eslint-disable-next-line import/no-cycle
import counterReducer from "../features/counter/counterSlice";
// eslint-disable-next-line import/no-cycle
import tvReducer from "../features/tv/tvSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
    tv: tvReducer,
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
