import axios from "axios";

export const carsApi = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

export const fetchCarsAPI = async (params: Record<string, string | number>) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value.toString());
  });

  const response = await carsApi.get(`/cars?${searchParams.toString()}`);
  return response.data;
};
