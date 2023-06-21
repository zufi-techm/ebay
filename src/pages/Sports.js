import React from 'react'
import Header from '../components/Header'
import PageImgs from '../components/PagevImgs'
import SideNav from '../components/SideNav'
import Image from "../components/Image"
import ss1 from "../images/ss1.png"
import ss2 from "../images/ss2.webp"
import s1 from "../images/s11.webp"
import s2 from "../images/s12.webp"
import s3 from "../images/s3.webp"
import s4 from "../images/s4.webp"
import s5 from "../images/s5.webp"
import s6 from "../images/s6.webp"
import s7 from "../images/s7.webp"
import s8 from "../images/s8.webp"
import s9 from "../images/s9.webp"
import s10 from "../images/s10.webp"
import Footer from '../components/Footer'
 const Sports = () => {
  return (
    <section className='width overflow-x-hidden'>
<Header PageName={"Sporting Goods"}/>
<div>
    <img src={ss1} alt="car parts" className=' hidden sm:block mr-4 md:mr-0 w-full'/>
</div>
<div className='flex px-4'>
    <div className='w-1/4'><SideNav
    links={[
       ''
    ]}
    /></div>


<div className='sm:w-3/4   flex flex-col pr-10'>
        <div className='my-3  w-full mr-4 '>
            <Image color={'gray-400'} src={ss2} header={"Your Gym, Right at Home"} text={"Hit your fitness goals from the comfort of your home"}/>
            </div>
   
     <PageImgs images={[
        {
            src:s1,
            title:"Sports"
        },
        {
            src:s2,
            title:"Sports"
        },
        {
            src:s3,
            title:"Sports"
        },
        {
            src:s4,
            title:"Sports"
        },
        {
            src:s5,
            title:"Sports"
        },
        {
            src:s6,
            title:"Sports"
        },
        {
            src:s7,
            title:"Sports"
        },
        {
            src:s8,
            title:"Sports"
        },
        {
            src:s9,
            title:"Sports"
        },
        {
            src:s10,
            title:"Sports"
        }
    ]}/>
</div>
       
</div>
<div className='mt-10'><Footer/></div>

    </section>
  )
}

export default Sports