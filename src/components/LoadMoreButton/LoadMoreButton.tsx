import React from "react";
import s from "./LoadMoreButton.module.css";

interface Props {
  visible: boolean;
  onClick: () => void;
}

const LoadMoreButton: React.FC<Props> = ({ visible, onClick }) => {
  if (!visible) return null;

  return (
    <div className={s.wrapper}>
      <button onClick={onClick} className={s.button}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreButton;
