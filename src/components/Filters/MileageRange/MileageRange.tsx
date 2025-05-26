import { type ChangeEvent } from "react";
import s from "../MileageRange/MileageRange.module.css";

interface MileageRangeProps {
  from: string;
  to: string;
  onFromChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onToChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const mileageValues = ["3000", "3500", "4000", "4500", "5000", "5500", "6000"];

const MileageRange = ({
  from,
  to,
  onFromChange,
  onToChange,
}: MileageRangeProps) => {
  return (
    <div className={s.wrapper}>
      <label className={s.label}>Car mileage / km</label>
      <div className={s.rangeBox}>
        <select value={from} onChange={onFromChange} className={s.selectLeft}>
          <option value="">From</option>
          {mileageValues.map((val) => (
            <option key={`from-${val}`} value={val}>
              From {Number(val).toLocaleString()}
            </option>
          ))}
        </select>

        <div className={s.divider} />

        <select value={to} onChange={onToChange} className={s.selectRight}>
          <option value="">To</option>
          {mileageValues.map((val) => (
            <option key={`to-${val}`} value={val}>
              To {Number(val).toLocaleString()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MileageRange;
