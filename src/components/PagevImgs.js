import React, { useRef, useState } from 'react'
import SideNav from './SideNav'
import { BsDatabaseFill, BsPlus } from 'react-icons/bs'
import axios from "axios"
const PageImgs = ({images}) => {
const show= (e)=>{
if(Number(e.target.childNodes.length)===4){
  e.target.childNodes[2].classList.remove("sm:hidden")
}
}

const hide= (e)=>{
  if(e.target.childNodes.length===4){
    e.target.childNodes[2].classList.add("sm:hidden")
  }
  }
  const Savetodb=(image)=>{
    const item={name:image.title,img:image.src,price:image.price,email:JSON.parse(localStorage.getItem("ebayuser")).email}
    axios.post("http://localhost/ebaybackend/AddToCart.php",item)
    .then((res)=>{res.data.status==200 && alert(res.data.message)})
   
    
  }
 

  return (
    <section className='flex'>
      <div className='w-full px-4'>
        <h6 className='font-bold sm:text-2xl'>Shop by Category</h6>
        <div
        className='w-full grid grid-cols-2 gap-10 sm:grid-cols-5 sm:gap-2 pt-6'>
        {
          images.map((image,i,images)=>{
            image.price= Math.floor(Math.random()*(850-9))
            return(
              <div
              onMouseOver={(e)=>show(e)}
              onMouseLeave={(e)=>hide(e)}
              key={i} 
              className={'flex flex-col relative items-center p-4 justify-center h-52'}>
                <img src={image.src} alt='brand' className='bg-white cursor-pointer sm:w-44 sm:h-40 h-full w-full mx-28'/>
              <a
               href='/' 
               className='text-xs sm:text-base text-center'>{image.title}</a>
             <div
              onClick={()=>Savetodb(image)}
             className={'flex items-center text-xs text-white bg-orange-600 sm:px-4  rounded-full absolute bottom-10 sm:bottom-16 animate-pulse atc cursor-pointer sm:hidden'}>add to cart <BsPlus size={"1.3rem"}/></div>
             <div className='absolute top-4 right-6 bg-orange-600 text-white p-1 text-xs rounded-full'>{image.price}$</div>
              </div>
            
            )
          })
        }
        </div>
      </div>
    </section>
  )
}


export default PageImgs
