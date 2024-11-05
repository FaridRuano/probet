import React from 'react'

const CheckBox = ({status, handler}) => {
  return (
    <div className='checkbox'>
        <div className={status?"check active":"check"} onClick={handler}/>
        <span>Acepto los <a href=''>términos y condiciones</a></span>
    </div>
  )
}

export default CheckBox