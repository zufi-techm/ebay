import React, { useEffect, useRef, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Button from './Button'
import s1 from "../images/s1.webp"
import s2 from "../images/s2.webp"
import { useTime } from 'framer-motion'





const Slider = () => {
    const [Show, SetShow]= useState(false)
const slides=[
    {
       src:"/static/media/s1.3bf4319a64d939d836c1.webp",
        header:"Stay Fit, Stay active!",
        text:"Discover our must-have sports product"
    },
    {
        src:"/static/media/s2.d1f0b5c69eb621eebcb4.webp",
         header:"There's always time for playtime",
         text:"Shop the selection of toys & hobbies for all ages!"
     }
    ]
const [count,SetCount]= useState(0)



const Prev=()=>{
SetCount(c=>c-1);
if(count<=0){
    SetCount(Number(slides.length-1));
}
}
const Next=()=>{
    SetCount(c=>c+1); 
    if(count>=Number(slides.length-1)){
        SetCount(0);
    } 
}
const show=()=>{
    SetShow(c=>true)
}
const hide=()=>{
    SetShow(c=>false)
}



  return (
    <div 
    onMouseOver={show}
    onMouseOut={hide}
    className='h-80 hidden relative sm:flex'>
         <div className=' h-80  flex flex-col items-baseline justify-between py-8 pl-14 pr-2 bg-lime-300 sll'>
        <h1 className='text-3xl font-bold shd'>{slides[count].header}</h1>
        <p className='break text-xl w-64'>{slides[count].text}</p>
    <div>
        <Button/>
    </div>
    </div>
        <img
        src={slides[count].src}  alt='slider' className='bg-blue-600 h-full w-3/4'/>
    <div className={Show?  'absolute bottom-1/2 w-full flex justify-between px-4':"hidden"}>
        <button 
        onClick={Prev}
        className='h-8 z-50 w-8  bg-gray-300 shadow-sm pr-2 shadow-black rounded-full'><BsChevronLeft size={"1.5rem"}/></button>
        <button 
        onClick={Next}
        className='h-8 w-8 z-50 bg-gray-300 shadow-sm shadow-black rounded-full pl-2'><BsChevronRight size={"1.5rem"}/></button>
    </div>
   
    </div>
  )
}

export default Slider