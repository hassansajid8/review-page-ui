import React from 'react'

const Checkbox = ({ title }:any) => {
  return (
    <label className='praise inline-block mx-1 my-2 text-sm'>
        <input type="checkbox" name="" id="" className='hidden'/>
        <span>{title}</span>
    </label>
  )
}

export default Checkbox