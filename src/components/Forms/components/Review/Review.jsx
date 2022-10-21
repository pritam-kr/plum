import React from "react";
import * as Icons from "react-icons/fa";
import { ButtonNext } from "../../../ButtonNext/ButtonNext";

const Review = () => {
  const clickHandler = () => {};

  return (
    <>
      <div className="plans_wrapper review_wrapper">
        <div className="left_side">
          <header>
            <h1 className="headings">
              <p className="btn_back">
                <Icons.FaBackward />
              </p>
              Review and confirm payment
            </h1>
          </header>

          <div className="form_preview">
            <li className="lists">
              Plan <small> </small>
            </li>
            <li className="lists">
              Email <small> </small>
            </li>
            <li className="lists">
              Mobile <small> </small>
            </li>
            <li className="lists">
              Address line 001 <small> </small>
            </li>
            <li className="lists">
              Address line 002 <small> </small>
            </li>
            <li className="lists">
              Pincode <small></small>
            </li>
            <li className="lists">
              State <small> </small>
            </li>
          </div>
        </div>
      </div>

      <ButtonNext onClick={clickHandler} children={"Submit"}/>
    </>
  );
};

export { Review };
