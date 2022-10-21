import React, { createContext, useContext, useReducer, useState } from "react";
import * as Icons from "react-icons/bi";

const FormContext = createContext();

const insourancePlan = [
  {
    id: 1,
    price: 600,
    title: "Self",
    planType: { name: "One", feature: "Individual" },
  },
  {
    id: 2,
    price: 1200,
    title: "Parents",
    planType: { name: "Pro", feature: "Individual" },
  },
  {
    id: 3,
    price: 1800,
    title: "Self + Parent",
    planType: { name: "Plus", feature: "Individual + Individual" },
  },
  {
    id: 4,
    price: 2400,
    title: "Self + Spouse + Kids",
    planType: { name: "Max", feature: "Floater + Individual" },
  },
];

export const FormContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    mobile: "",
    address1: "",
    address2: "",
    pincode: "",
    state: "",
    plansInfo: {},
  });

  const currentPlanInfo = {
    userName: formData.email.split("@")[0],
    selectedPlan: formData.plansInfo,
  };

  const [steps, setSteps] = useState(0);

  return (
    <FormContext.Provider
      value={{
        insourancePlan,
        setError,
        error,
        setFormData,
        formData,
        currentPlanInfo,
        steps,
        setSteps,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
