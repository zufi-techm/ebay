import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Button = () => {
  return (
    <button className='flex items-center gap-2 border h-10 w-32 pl-1 btn font-bold'>Shop Now <BsArrowRight size={"1.5rem"}/></button>
  )
}

export default Button