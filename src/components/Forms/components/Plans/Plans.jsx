import React, { useState } from "react";
import { useFormContext } from "../../../../context/FormContext";
import "./Plans.css";
import * as Icons from "react-icons/bi";
import { FormPreview } from "../../../FormPreview/FormPreview";
import { ButtonNext } from "../../../ButtonNext/ButtonNext";
import { formValidation } from "../../../../utils";

const Plans = () => {
  const {
    insourancePlan,
    error,
    setError,
    formData,
    setFormData,
    setPage,
  } = useFormContext();

  const [showPlan, setShowPlan] = useState(false);
 
  const nextHandler = () => {
    formValidation(formData, setError, setPage);
  };

  const choosePlanHandler = (plan) => {
    setShowPlan(false);
    setFormData((prev) => ({ ...prev, plansInfo: plan }));
  };

  return (
    <>
      <div className="plans_wrapper">
        <div className="left_side">
          <header>
            <h1 className="headings">Choose your plan</h1>
            <p className="sub-heading">
              Hello Anisha, Increase yours and your family's health insurance
              cover by ₹20 lakhs with Super top-up!
            </p>
          </header>

          <div className="plan_form">
            <div className="plans_details">
              <p className="sub-heading bold">Plan Details</p>
              <li
                className="plan_lists plan_list_header"
                onClick={() => setShowPlan(!showPlan)}
              >
                {!formData.plansInfo.title
                  ? "Select Your Plan"
                  : formData.plansInfo.title}
                <span>
                  <Icons.BiArrowToBottom />
                </span>
              </li>
              <p className="error">{error?.planInfo}</p>

              {showPlan && (
                <div className="plans_modal">
                  {insourancePlan.map((plan) => (
                    <li
                      className="plan_lists"
                      onClick={() => choosePlanHandler(plan)}
                    >
                      {plan.title}{" "}
                      <sapn>
                        <b>INR {plan.price}</b>
                      </sapn>
                    </li>
                  ))}
                </div>
              )}
            </div>
            <div className="basic_details">
              <div className="form_row">
                <div>
                  <label className="label">Personal emial address</label>
                  <p className="error">{error?.email}</p>
                  <input
                    value={formData.email}
                    className="input"
                    placeholder="Enter"
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: event.target.value.trim(),
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="label">Mobile</label>
                  <p className="error">{error?.mobile}</p>
                  <input
                    value={formData.mobile}
                    className="input"
                    placeholder="Enter"
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        mobile: event.target.value.trim(),
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="label">Address line 01</label>
                  <p className="error">{error?.address1}</p>
                  <input
                    value={formData.address1}
                    className="input"
                    placeholder="Enter"
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        address1: event.target.value.trim(),
                      }))
                    }
                  />
                </div>
              </div>
              <div className="form_row">
                <div>
                  <label className="label">Address line 02</label>
                  <p className="error">{error?.address2}</p>
                  <input
                    value={formData.address2}
                    className="input"
                    placeholder="Enter"
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        address2: event.target.value.trim(),
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="label">Pincode</label>
                  <p className="error">{error?.pincode}</p>
                  <input
                    value={formData.pincode}
                    className="input"
                    placeholder="Enter"
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        pincode: event.target.value.trim(),
                      }))
                    }
                  />
                </div>
                <div>
                  <label className="label">State</label>
                  <p className="error">{error?.state}</p>
                  <input
                    value={formData.state}
                    className="input"
                    placeholder="Enter"
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        state: event.target.value.trim(),
                      }))
                    }
                  />
                </div>
              </div>
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

export { Plans };
