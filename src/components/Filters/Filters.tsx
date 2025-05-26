import { useState } from "react";
import BrandSelect from "../Filters/BrandSelect/BrandSelect";
import PriceSelect from "../Filters/PriceSelect/PriceSelect";
import MileageRange from "../Filters/MileageRange/MileageRange";
import s from "../Filters/Filters.module.css";

interface FiltersProps {
  onFilter: (filters: {
    brand?: string;
    rentalPrice?: string;
    mileageFrom?: string;
    mileageTo?: string;
  }) => void;
  brands: string[];
}

const Filters = ({ onFilter, brands }: FiltersProps) => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ brand, rentalPrice: price, mileageFrom, mileageTo });
  };

  return (
    <form className={s.filters} onSubmit={handleSubmit}>
      <BrandSelect
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        brands={brands}
      />
      <PriceSelect value={price} onChange={(e) => setPrice(e.target.value)} />
      <MileageRange
        from={mileageFrom}
        to={mileageTo}
        onFromChange={(e) => setMileageFrom(e.target.value)}
        onToChange={(e) => setMileageTo(e.target.value)}
      />
      <button type="submit" className={s.button}>
        Search
      </button>
    </form>
  );
};

export default Filters;
