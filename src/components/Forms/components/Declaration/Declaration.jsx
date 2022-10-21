import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { ButtonNext } from "../../../ButtonNext/ButtonNext";
import { FormPreview } from "../../../FormPreview/FormPreview";
import "./Declaration.css";

const Declaration = () => {
  const [check, setCheck] = useState({
    checkOne: null,
    checkTwo: null,
    checkThree: null,
    checkFour: null,
  });
  const [error, setError] = useState("");

  function checkboxValidation() {
    if (
      !check.checkOne ||
      !check.checkTwo ||
      !check.checkThree ||
      !check.checkFour
    ) {
      setError("Please check all checkbox.");
    } else {
      setError("");
      console.log("Next step");
    }
  }

  const nextHandler = () => {
    checkboxValidation();
  };

  return (
    <>
      <div className="plans_wrapper declaration_wrapper">
        <div className="left_side">
          <header>
            <h1 className="headings">
              <p className="btn_back">
                <Icons.FaBackward />
              </p>
              Declaration
            </h1>
          </header>

          <div className="conditions">
            <p className="">
              {" "}
              <input
                type="checkbox"
                onChange={(event) =>
                  setCheck((prev) => ({
                    ...prev,
                    checkOne: event.target.checked,
                  }))
                }
              />
              I hereby declare that none of the proposed members are habitual
              consumers of alcohol, tobacco, gutka or any recreational drugs.
            </p>

            <p>
              <input
                type="checkbox"
                onChange={(event) =>
                  setCheck((prev) => ({
                    ...prev,
                    checkTwo: event.target.checked,
                  }))
                }
              />
              I hereby declare that all proposed members are in good health and
              entirely free from any mental pf physical impairements or
              deformities, disease/condition.
            </p>

            <p>
              <input
                type="checkbox"
                onChange={(event) =>
                  setCheck((prev) => ({
                    ...prev,
                    checkThree: event.target.checked,
                  }))
                }
              />
              I have understood that there is 30 days waiting period for all
              diseases and 2 years on named ailments. (list of named ailements
            </p>

            <p>
              <input
                type="checkbox"
                onChange={(event) =>
                  setCheck((prev) => ({
                    ...prev,
                    checkFour: event.target.checked,
                  }))
                }
              />
              I understand that this policy doesn't cover Pre-existing diseases.
            </p>
          </div>

          <p className="error">{error}</p>
        </div>

        <div className="right_side">
          <FormPreview />
        </div>
      </div>

      <ButtonNext onClick={nextHandler} children={"Next"} />
    </>
  );
};

export { Declaration };
