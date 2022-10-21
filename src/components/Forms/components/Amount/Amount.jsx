import React from "react";
import { ButtonNext } from "../../../ButtonNext/ButtonNext";
import * as Icons from "react-icons/bi";
import { FormPreview } from "../../../FormPreview/FormPreview";
import "./Amount.css"
import { useFormContext } from "../../../../context/FormContext";


const Amount = () => {

    const {formData} = useFormContext()

    console.log(formData)

  return (
    <>
      <div className="plans_wrapper amount_wrapper">
        <div className="left_side">
          <header>
            <h1 className="headings">Select your deductible amount</h1>
            <p className="sub-heading">
              Select the deductible amount for the policy (or policies) below.
              (what is a deductible?)
            </p>
          </header>

          <div className="plans_details">
            <p className="sub-heading bold">Self (Individual)</p>
            <li className="plan_lists plan_list_header amount_header">
              <span>
                <Icons.BiUserCircle className="icons"/>
              </span>
              <span className="username">Jhon Doe</span>
            </li>
          </div>
        </div>
        <div className="right_side">
            <FormPreview />
        </div>
      </div>
      <ButtonNext />
    </>
  );
};

export { Amount };
