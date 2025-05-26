import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../redux/Slice/carsSlice";
import filtersReducer from "../redux/Slice/filtersSlice";
import favoritesReducer from "../redux/Slice/favoritesSlice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
