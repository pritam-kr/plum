import React from "react";
import "./ButtonNext.css";

const ButtonNext = ({ disabled, onClick, children }) => {
  
  

  return (
    <div className="next_button_wrapper">
      <button disabled={disabled} className="btns btn-next" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export { ButtonNext };
