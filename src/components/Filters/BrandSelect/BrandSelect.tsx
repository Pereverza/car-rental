import React from "react";
import styles from "../BrandSelect/BrandSelect.module.css";

interface Props {
  value: string;
  brands: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const BrandSelect: React.FC<Props> = ({ value, brands, onChange }) => (
  <div className={styles.selectGroup}>
    <label className={styles.label}>Car brand</label>
    <select value={value} onChange={onChange} className={styles.select}>
      <option value="">Choose a brand</option>
      {brands.map((b) => (
        <option key={b} value={b}>
          {b}
        </option>
      ))}
    </select>
  </div>
);

export default BrandSelect;
