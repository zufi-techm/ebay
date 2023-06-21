import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

import i1 from "../images/1s.webp"
import i2 from "../images/2.webp"
import i3 from "../images/3.webp"
import i4 from "../images/4.webp"
import i5 from "../images/5.webp"
import i6 from "../images/6.webp"
import i7 from "../images/7.webp"
import i8 from "../images/8.webp"
import i9 from "../images/9.webp"
import i10 from "../images/10.webp"
import i11 from "../images/11.webp"
import i12 from "../images/12.webp"
import i13 from "../images/13.webp"
import i14 from "../images/14.webp"
import i15 from "../images/15.webp"
import i16 from "../images/16.webp"
import i17 from "../images/17.webp"
import i18 from "../images/18.webp"
import i19 from "../images/19.webp"
import i20 from "../images/20.webp"


const Explore = () => {
  return (
    <>
    <div className='mt-16'>
        <div className='flex gap-7 items-center mt-5'>
            <h6 className='sm:text-2xl text-sm font-bold ml-1 sm:ml-10'>Explore Popular Categories</h6>
            <a href='' className='flex items-center font-semibold sm:text-xl text-sm border-l-2 border-gray-300 pl-4'>See all <BsArrowRight/></a>
        </div>
        <div className='grid gap-5 place-content-center content-center  sm:gap-0 sm:grid-flow-col grid-cols-2 sm:grid-cols-7  px-4 mt-14'>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i1} alt='brand' className='h-24 sm:h-32  content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Sneakers</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i2} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Korean beauty</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i3} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Wristmatches</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i4} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Fishing</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i5} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Collectibles</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i6} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Smartphones</p>
            </a>
            <a href='' className='sm:flex hidden flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i7} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Sell</p>
            </a>
        </div>
    </div>

    <div className='mt-16'>
        <div className='flex gap-7 items-center'>
            <h6 className='sm:text-2xl text-sm font-bold ml-1 sm:ml-10'>Explore Popular Categories</h6>
            <a href='' className='flex items-center  font-semibold sm:text-xl text-sm border-l-2 border-gray-300 pl-4'>See all <BsArrowRight/></a>
        </div>
        <div className='grid sm:grid-flow-col grid-cols-2 sm:grid-cols-7  px-4 mt-14'>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i8} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Sneakers</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i9} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Korean beauty</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i10} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Wristmatches</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i11} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Fishing</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i12} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Collectibles</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i13} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Smartphones</p>
            </a>
            <a href='' className='hidden sm:flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i14} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32 rounded-full'/>
                <p>Sell</p>
            </a>
        </div>
    </div>


    <div className='mt-16'>
        <div className='flex gap-7 items-center'>
            <h6 className='sm:text-2xl text-sm font-bold ml-1 sm:ml-10'>Daily deals</h6>
            <a href='' className='flex items-center font-semibold sm:text-xl text-sm border-l-2 border-gray-300 pl-4'>See all <BsArrowRight/></a>
        </div>
        <div className='grid overflow-hidden sm:grid-flow-col grid-cols-2 sm:grid-cols-7  px-4 mt-14 place-content-between'>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i15} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32'/>
                <p className='text-sm font-bold'>$30.0</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i16} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32'/>
                <p className='text-sm font-bold'>$100.0</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i17} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32'/>
                <p className='text-sm font-bold'>$10.0</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i18} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32'/>
                <p className='text-sm font-bold'>$20.0</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i19} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32'/>
                <p className='text-sm font-bold'>$40.0</p>
            </a>
            <a href='' className='flex flex-col items-center hover:underline text-sm sm:text-normal  gap-3'>
                <img src={i20} alt='brand' className='h-24 sm:h-32 content-center hover:border-2 border-gray-300 w-24 sm:w-32'/>
                <p className='text-sm font-bold'>$200.0</p>
            </a>
           
        </div>
    </div>

    </>
  )
}

export default Explore