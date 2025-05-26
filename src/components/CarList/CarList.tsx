import CarCard from "../CarCard/CarCard";
import type { Car } from "../../redux/Slice/carsSlice";

interface Props {
  cars: Car[];
}

const CarList = ({ cars }: Props) => {
  return (
    <>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </>
  );
};

export default CarList;
