import { type ChangeEvent } from "react";
import s from "../PriceSelect/PriceSelect.module.css";

interface PriceSelectProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const prices = ["30", "40", "50", "60", "70", "80"];

const PriceSelect = ({ value, onChange }: PriceSelectProps) => {
  return (
    <div className={s.wrapper}>
      <label htmlFor="price" className={s.label}>
        Price / 1 hour
      </label>
      <select
        id="price"
        name="price"
        value={value}
        onChange={onChange}
        className={s.select}
      >
        <option value="">Choose a price</option>
        {prices.map((price) => (
          <option key={price} value={price}>
            To ${price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceSelect;
