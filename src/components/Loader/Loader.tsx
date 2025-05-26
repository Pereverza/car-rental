import { type FC } from "react";
import s from "./Loader.module.css";

const Loader: FC = () => {
  return (
    <div className={s.loaderWrapper}>
      <div className={s.spinner}></div>
    </div>
  );
};

export default Loader;
