import React from 'react'
import "./FormPreview.css"
import * as Icons from "react-icons/bi";
import { useFormContext } from '../../context/FormContext';

const FormPreview = () => {

  const {formData} = useFormContext()


  return (
    <div className='form_preview'>
        <header className='sub-heading'>Form Preview</header>
        <li className='lists'>Email <small>{!formData.email ? "-" : formData.email}</small></li>
        <li className='lists'>Mobile <small>{!formData.mobile ? "-" : formData.mobile}</small></li>
        <li className='lists'>Address line 001 <small>{!formData.address1 ? "-" : formData.address1} </small></li>
        <li className='lists'>Address line 002 <small>{!formData.address2 ? "-" : formData.address2} </small></li>
        <li className='lists'>Pincode <small>{!formData.pincode ? "-" : formData.pincode}</small></li>
        <li className='lists'>State <small>{!formData.state ? "-" : formData.state} </small></li>
    </div>
  )
}

export { FormPreview}