import React from 'react'
import "./FormPreview.css"
import * as Icons from "react-icons/bi";

const FormPreview = () => {
  return (
    <div className='form_preview'>
        <header className='sub-heading'>Form Preview</header>
        <li className='lists'>Personal email address <span><Icons.BiSpaceBar className='icons' /></span></li>
        <li className='lists'>Mobile <span><Icons.BiSpaceBar className='icons' /> </span></li>
        <li className='lists'>Address line 001 <span><Icons.BiSpaceBar className='icons' /> </span></li>
        <li className='lists'>Address line 002 <span><Icons.BiSpaceBar className='icons' /> </span></li>
        <li className='lists'>Pincode <span><Icons.BiSpaceBar className='icons' /> </span></li>
        <li className='lists'>State <span><Icons.BiSpaceBar className='icons' /> </span></li>
    </div>
  )
}

export { FormPreview}