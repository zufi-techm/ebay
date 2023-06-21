import React from 'react'
import Header from '../components/Header'
import PageImgs from '../components/PagevImgs'
import SideNav from '../components/SideNav'
import Image from "../components/Image"
import es1 from "../images/es1.webp"
import e1 from "../images/e1.webp"
import e2 from "../images/e2.webp"
import e3 from "../images/e3.webp"
import e4 from "../images/e4.webp"
import e5 from "../images/e5.webp"
import e6 from "../images/e6.webp"
import e7 from "../images/e7.webp"
import e8 from "../images/e8.webp"
import e9 from "../images/e9.webp"
import e10 from "../images/e10.webp"
import e11 from "../images/e11.webp"
import e12 from "../images/e12.webp"
import e13 from "../images/e13.webp"
import es2 from "../images/es2.png"
import e14 from "../images/e14.webp"
import e15 from "../images/e15.webp"
import Footer from '../components/Footer'
 const Electronics = () => {
  return (
    <section className='overflow-x-hidden width'>
<Header PageName={"Electronics"}/>
<div>
    <img src={es2} alt="electronics" className='hidden sm:block mr-4 md:mr-0 w-full'/>
</div>
<div className='flex px-4 pb-6'>
    <div className='w-1/4'><SideNav
    links={[
        'Top Electronics',
        'Cell phones',
        'computers',
        'Tv,video',
        'camera & Photos',
        'video game',
        'home suiveillance',
        'portable audio',
        'apple',
        'car electronics'
    ]}
    /></div>

    <div className='sm:w-3/4   flex flex-col pr-10'>
        <PageImgs images={[
        {
            src:e1,
            title:"Top Eletronics Deals",
        },
        {
            src:e2,
            title:"Cell phones",
        },
        {
            src:e3,
            title:"Computers"
        },
        {
            src:e4,
            title:"TV , video"
        },
        {
            src:e5,
            title:"Camera & Photos"
        },
        {
            src:e6,
            title:"Video game"
        },
        {
            src:e7,
            title:"Home suiveillance"
        },
        {
            src:e8,
            title:"Portable Audio"
        },
        {
            src:e9,
            title:"Apple"
        },
        {
            src:e10,
            title:"Car electronics"
        }
    ]}/>
    <div className='my-3 mr-3'><Image color={"teal-500"} src={es1} header={"Take out the old"} text={"Put the new"}/></div>
    <PageImgs images={[
        {
            src:e11,
            title:"computers"
        },
        {
            src:e12,
            title:"Cell phones"
        },
        {
            src:e13,
            title:"drones"
        },
        {
            src:e14,
            title:"oraimo"
        },
        {
            src:e15,
            title:"Cpu"
        },
     
    ]}/>
    </div>
</div>
<Footer/>
    </section>
  )
}

export default Electronics