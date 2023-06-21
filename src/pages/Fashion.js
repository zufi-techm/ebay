import React from 'react'
import Header from '../components/Header'
import PageImgs from '../components/PagevImgs'
import SideNav from '../components/SideNav'
import Image from "../components/Image"
import fs1 from "../images/fs1.png"
import f1 from "../images/f1.webp"
import f2 from "../images/f2.webp"
import f3 from "../images/f3.webp"
import f4 from "../images/f4.webp"
import f5 from "../images/f5.webp"
import f6 from "../images/f6.webp"
import f7 from "../images/f7.webp"
import f8 from "../images/f8.webp"
import f9 from "../images/f9.webp"
import f10 from "../images/f10.webp"
import Footer from '../components/Footer'
 const Fashion= () => {
  return (
    <section className='width overflow-x-hidden'>
<Header PageName={"Fashion & Beauty"}/>
<div>
    <img src={fs1} alt="fashion and beauty" className=' hidden sm:block md:mr-0 w-full'/>
</div>
<div className='flex px-4 pb-6'>
    <div className='w-1/4 text-white'><SideNav
    links={[
      ''
    ]}
    /></div>

    <div className='sm:w-3/4   flex flex-col pr-10'>
        <PageImgs images={[
        {
            src:f1,
            title:"Men's clothing"
        },
        {
            src:f2,
            title:"Men's shoe"
        },
        {
            src:f3,
            title:"Men's accessories"
        },
        {
            src:f4,
            title:"watches"
        },
        {
            src:f5,
            title:"kids"
        },
        {
            src:f6,
            title:"women's clothing"
        },
        {
            src:f7,
            title:"Women;s shoe"
        },
        {
            src:f8,
            title:"Women's Accessories"
        },
        {
            src:f9,
            title:"Handbags"
        },
        {
            src:f10,
            title:"Jewelry"
        }
    ]}/>
    </div>
</div>
<Footer/>
    </section>
  )
}

export default Fashion