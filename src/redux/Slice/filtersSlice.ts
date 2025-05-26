import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Filters {
  brand?: string;
  rentalPrice?: string;
  mileageFrom?: string;
  mileageTo?: string;
}

const savedFilters = localStorage.getItem("filters");
const initialState: Filters = savedFilters ? JSON.parse(savedFilters) : {};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Filters>) {
      const newState = { ...state, ...action.payload };
      localStorage.setItem("filters", JSON.stringify(newState));

      return newState;
    },
    resetFilters() {
      localStorage.removeItem("filters");
      return {};
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

