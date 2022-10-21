import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ page }) => {
  const getWidth = () => {
    switch (page) {
      case 0:
        return 25;

      case 1:
        return 50;

      case 2:
        return 75;

      case 3:
        return 100;

      default:
        return 0;
    }
  };

  return (
    <div
      className="progress_bar"
      style={{ width: `${getWidth()}%`, height: "8px", background: "red" }}
    ></div>
  );
};

export { ProgressBar };
