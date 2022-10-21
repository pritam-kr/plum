import React, { useState } from "react";
import * as Icons from "react-icons/fa";
import { useFormContext } from "../../../../context/FormContext";
import { ButtonNext } from "../../../ButtonNext/ButtonNext";

const Review = () => {

 const {setPage, formData} =  useFormContext()
 const {plansInfo :{planType} } = formData
 const [text, setText] = useState("")

 const clickHandler = () => {
  setText(`Congratulations!! ${formData.email.split("@")[0]}`)
 };


  return (
    <>
      <div className="plans_wrapper review_wrapper">
        <div className="left_side">
          <header>
            <h1 className="headings">
              <p className="btn_back">
                <Icons.FaBackward onClick={() => setPage(page => page -1)}/>
              </p>
              {!text ? "Review and confirm payment" : text}
            
            </h1>
          </header>

          <div className="form_preview">
            <li className="lists">
              Plan <small> {!planType.name ? "-" : `${planType.name} | ${planType.feature}`} </small>
            </li>
            <li className='lists'>Email <small>{!formData.email ? "-" : formData.email}</small></li>
        <li className='lists'>Mobile <small>{!formData.mobile ? "-" : formData.mobile}</small></li>
        <li className='lists'>Address line 001 <small>{!formData.address1 ? "-" : formData.address1} </small></li>
        <li className='lists'>Address line 002 <small>{!formData.address2 ? "-" : formData.address2} </small></li>
        <li className='lists'>Pincode <small>{!formData.pincode ? "-" : formData.pincode}</small></li>
        <li className='lists'>State <small>{!formData.state ? "-" : formData.state} </small></li>
          </div>
        </div>
      </div>

      <ButtonNext onClick={clickHandler} children={"Submit"}/>
    </>
  );
};

export { Review };
