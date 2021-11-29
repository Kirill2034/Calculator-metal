import React from "react";
import "./Chip.css";
import cn from "classnames";

const Chip = ({ title, selected, onClick }) => {
  return (
    <button className={cn("Chip", { selected })} onClick={onClick}>
      {title}
    </button>
  );
};

export default Chip;
