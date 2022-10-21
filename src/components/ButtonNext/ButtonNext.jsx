import React from 'react'
import "./ButtonNext.css"

const ButtonNext = ({disabled, onClick}) => {
  return (
    <div className='next_button_wrapper'>
        <button disabled={disabled} className='btns btn-next' onClick={onClick}>Next</button>
    </div>
  )
}

export    {ButtonNext}