export const regx =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  

export function formValidation(formData, setError, setPage) {
    if (Object.values(formData.plansInfo).length === 0) {
      setError((prev) => ({ ...prev, planInfo: "Please select your plan" }));
    } else {
      setError((prev) => ({ ...prev, planInfo: "" }));
    }

    if (
      formData.email === "" ||
      formData.email === " " ||
      !regx.test(formData.email)
    ) {
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
      setPage((page) => page + 1);
    }
  }
