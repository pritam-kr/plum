import React, { useState } from "react";
import { ButtonNext } from "../../../ButtonNext/ButtonNext";
import * as Icons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import { FormPreview } from "../../../FormPreview/FormPreview";
import "./Amount.css";
import { useFormContext } from "../../../../context/FormContext";

const Amount = () => {
  const [range, setRange] = useState(100000);
  const [check, setCheck] = useState(null);
  const [error, setError] = useState("");

  const nextHandler = () => {
    if (!check) {
      setError("Please check the checkbox.");
    } else {
      setError("");
      console.log("next step");
    }
  };

  return (
    <>
      <div className="plans_wrapper amount_wrapper">
        <div className="left_side">
          <header>
            <h1 className="headings">
              <p className="btn_back">
                <Icons.FaBackward />
              </p>
              Select your deductible amount
            </h1>
            <p className="sub-heading">
              Select the deductible amount for the policy (or policies) below.
              (what is a deductible?)
            </p>
          </header>

          <div className="plans_details">
            <p className="sub-heading bold">Self (Individual)</p>
            <li className="plan_lists plan_list_header amount_header">
              <span>
                <BiIcons.BiUserCircle className="icons" />
              </span>
              <span className="username">Jhon Doe</span>
            </li>
          </div>

          <div className="basic_details slider_details">
            <p className="sub-heading">
              Sum insured of ₹20,00,000 with a deductible of
              <b> {!range ? "?" : "INR" + range}</b>
            </p>

            <div className="slider_wrapper">
              <input
                type="range"
                min="100000"
                value={range}
                max="500000"
                step="100000"
                className="input"
                onChange={(event) => setRange(event.target.value)}
              />
            </div>

            <div className="declar">
              <p className="">
                {" "}
                <input
                  type="checkbox"
                  onChange={(event) => setCheck(event.target.checked)}
                />
                I understand that this insurance will not be utilized until
                ₹3,00,000 (deductible) is exhausted.
              </p>
              <p className="error">{error}</p>
            </div>
          </div>
        </div>
        <div className="right_side">
          <FormPreview />
        </div>
      </div>
      <ButtonNext onClick={nextHandler} children={"Next"} />
    </>
  );
};

export { Amount };
