import React from 'react'
import Header from '../components/Header'
import PageImgs from '../components/PagevImgs'
import SideNav from '../components/SideNav'
import Image from "../components/Image"
import ms1 from "../images/ms1.png"
import ms2 from "../images/ms2.webp"
import m1 from "../images/m1.webp"
import m2 from "../images/m2.webp"
import m3 from "../images/m3.webp"
import m4 from "../images/m4.webp"
import m5 from "../images/m5.webp"
import m6 from "../images/m6.webp"
import m7 from "../images/m7.webp"
import m8 from "../images/m8.webp"
import m9 from "../images/m9.webp"
import m10 from "../images/m10.webp"
import Footer from '../components/Footer'
 const Motors = () => {
  return (
    <section className='overflow-x-hidden width'>
<Header PageName={"Car parts"}/>
<div>
    <img src={ms1} alt="car parts" className=' hidden sm:block mr-4 md:mr-0 w-full'/>
</div>
<div className='flex px-4'>
    <div className='w-1/4'><SideNav
    links={[
        'eBay motors',
        'Aviation Parts',
        'Manuals & Literature',
        'Racing Parts',
        'Truck',
        'Motorcycle',
        'Bicycle parts',
        'Boats parts',
        'Ship parts',
    ]}
    /></div>


<div className='sm:w-3/4   flex flex-col pr-10'>
        <div className='my-3  w-full mr-4'>
            <Image color={"blue-500"} src={ms2} header={"Parts Accessories"} text={"from Asia"}/>
            </div>
   
     <PageImgs images={[
        {
            src:m1,
            title:"Motors parts"
        },
        {
            src:m2,
            title:"Motors parts"
        },
        {
            src:m3,
            title:"Motors parts"
        },
        {
            src:m4,
            title:"Motors parts"
        },
        {
            src:m5,
            title:"Motors parts"
        },
        {
            src:m6,
            title:"Motors parts"
        },
        {
            src:m7,
            title:"Motors parts"
        },
        {
            src:m8,
            title:"Motors parts"
        },
        {
            src:m9,
            title:"Motors parts"
        },
        {
            src:m10,
            title:"Motors parts"
        }
    ]}/>
</div>
       
</div>
<div className='mt-10'><Footer/></div>

    </section>
  )
}

export default Motors