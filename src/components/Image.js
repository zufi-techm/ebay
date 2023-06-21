import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Button from './Button'
import s1 from "../images/s1.webp"
import s2 from "../images/s2.webp"
import { color } from 'framer-motion'





const Image = ({src,text,header,color}) => {

  return (
    <div className='h-80 hidden relative sm:flex'>
         <div className={` h-80  flex flex-col items-baseline justify-between py-8 pl-14 pr-2 bg-${color}`}>
        <h1 className='text-3xl font-bold shd'>{header}</h1>
        <p className='break text-xl w-64'>{text}</p>
    <div>
        <Button/>
    </div>
    </div>
        <img src={src} alt='slider' className={`bg-blue-600 h-full w-3/4`}/>
   
    </div>
  )
}

export default Image