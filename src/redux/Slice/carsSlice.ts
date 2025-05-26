import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { fetchCarsAPI } from "../../services/api";


export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}


interface CarsState {
  items: Car[];
  isLoading: boolean;
  error: string | null;
  page: number;
  totalCars: number;
  totalPages: number;
}

const initialState: CarsState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  totalCars: 0,
  totalPages: 0,
};

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (params: Record<string, string>) => {
    return await fetchCarsAPI(params);
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    resetCars(state) {
      state.items = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const existingIds = new Set(state.items.map((car) => car.id));
        const newCars = action.payload.cars.filter(
          (car: Car) => !existingIds.has(car.id)
        );

        if (action.payload.page === 1) {
          state.items = newCars;
        } else {
          state.items = [...state.items, ...newCars];
        }

        state.page = action.payload.page;
        state.totalCars = action.payload.totalCars;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export const { resetCars } = carsSlice.actions;
export default carsSlice.reducer;
