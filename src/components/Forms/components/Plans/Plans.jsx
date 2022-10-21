import React, { useState } from "react";
import { useFormContext } from "../../../../context/FormContext";
import "./Plans.css";
import * as Icons from "react-icons/bi";
import { FormPreview } from "../../../FormPreview/FormPreview";
import { ButtonNext } from "../../../ButtonNext/ButtonNext";

const Plans = () => {
  const {
    state: { insourancePlan }, error, setError, formData, setFormData
  } = useFormContext();

  
  const [showPlan, setShowPlan] = useState(false);
  

  function formValidation(formData) {
    if (Object.values(formData.plansInfo).length === 0) {
      setError((prev) => ({ ...prev, planInfo: "Please select your plan" }));
    } else {
      setError((prev) => ({ ...prev, planInfo: "" }));
    }

    if (formData.email === "" || formData.email === " ") {
      setError((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else {
      setError((prev) => ({ ...prev, email: "" }));
    }

    if (formData.mobile === "" || formData.mobile === " ") {
      setError((prev) => ({
        ...prev,
        mobile: "Please enter a valid mobile number",
      }));
    } else {
      setError((prev) => ({ ...prev, mobile: "" }));
    }

    if (formData.address1 === "" || formData.address1 === " ") {
      setError((prev) => ({
        ...prev,
        address1: "Please enter a valid address1",
      }));
    } else {
      setError((prev) => ({ ...prev, address1: "" }));
    }

    if (formData.address2 === "" || formData.address2 === " ") {
      setError((prev) => ({
        ...prev,
        address2: "Please enter a valid address2",
      }));
    } else {
      setError((prev) => ({ ...prev, address2: "" }));
    }

    if (formData.pincode === "" || formData.pincode === " ") {
      setError((prev) => ({
        ...prev,
        pincode: "Please enter a valid pincode",
      }));
    } else {
      setError((prev) => ({ ...prev, pincode: "" }));
    }

    if (formData.state === "" || formData.state === " ") {
      setError((prev) => ({ ...prev, state: "Please enter a valid state" }));
    } else {
      setError((prev) => ({ ...prev, state: "" }));
    }

    if (
      Object.values(formData.plansInfo).length !== 0 &&
      formData.email &&
      formData.mobile &&
      formData.address1 &&
      formData.address2 &&
      formData.pincode &&
      formData.state
    ) {
      console.log("ok")
    }
  }

  const nextHandler = () => {
    formValidation(formData);
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
                {" "}
                Select Your Plan{" "}
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
      <ButtonNext disaled={false} onClick={nextHandler} />
    </>
  );
};

export { Plans };
