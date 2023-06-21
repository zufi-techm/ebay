import React, { useEffect, useState } from 'react'
import {BsChevronDown, BsBell,BsCart, BsSearch, BsChevronRight} from "react-icons/bs"
import logo from "../images/logo.png"
import axios, { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
const Header = ({PageName}) => {
    const navigate= useNavigate()
    const [num,Setnum]= useState(0);
    if(JSON.parse(localStorage.getItem("ebayuser"))===null){
    return;
    }else{
     const loggedUser={email: JSON.parse(localStorage.getItem('ebayuser')).email}   
        axios.post("http://localhost/ebaybackend/Cartitems.php",loggedUser)
        .then(r=>{
            if(AxiosError){
return;
            }
            Setnum(r.data.number)
        })
       

    }
    
  
 
   
  return (
    <section>
<nav className='h-6 py-4  text-sm w-full flex nshw   justify-between items-center'>
    <div className='sm:flex items-center gap-8 hidden'>
        <a href='signin' className='flex ml-4 text-blue-600'>Hi Sign in or <p className='ml-1'>register</p></a>
        <a href='' className='hidden sm:block'>Daily Deals</a>
        <a href='' className='hidden sm:blo
        '>Help & Contact</a>
    </div>
    <div className='flex items-center mr-8 sm:w-1/4 w-full justify-around sm:justify-between'>
        <a href='' >Ship to</a>
        <a href=''>Sell</a>
        <a href='' className='sm:flex hidden items-center'>Watchlist <BsChevronDown/></a>
        <a href='' className='sm:flex hidden items-center'>My eBay <BsChevronDown/></a>
        <a href=''> <BsBell size={"1.2rem"}/></a>
        <div className='flex  h-12 pt-6'> 
        <p className='absolute bg-red-600  text-white px-1 top-0  text-center rounded-full'>{num}</p> 
        <a href='cart' className='font-bold'><BsCart size={"1.2rem"}/></a>
        </div>
      
    </div>
</nav>
<nav className='h-20 flex items-center'>
    <div className='mr-4'>
        <img src={logo} alt='ebay logo' className='sm:h-16 h-6 sm:ml-4'/>
    </div>
    <div className='sm:flex  break text-sm sh items-center justify-center hidden '>Shop by category <BsChevronDown size={"1.5rem"}/></div>
    <div className='sm:w-4/5 mr-4 sm:mr-0 sm:border-none  border-2 border-black flex items-center justify-start ml-2 sm:h-11 h-6 '>
        <div className='w-3/4 flex h-full sm:border-2 border-black'>
            <input type='text' placeholder='Search anything...' className=' pl-4 text-sm sm:text-normal outline-none sm:w-3/4  w-4/5'/>
            <div className='hidden sm:flex items-center border-l-2  pl-7 text-sm'>All categories <BsChevronDown/></div>
        </div>
        <button className='h-full sm:hidden text-white font-semibold bg-blue-500 w-1/4 border-l border-black pl-6'><BsSearch size={"0.5rem"}/></button>
        <button className='h-full ml-2 hidden sm:block text-white font-semibold bg-blue-500   w-1/5'>Search</button>
    </div>
    <a href='' className='mr-8 w-16 hidden sm:block'>Advanced</a>
</nav>
<nav className='h-6 text-sm py-4 pl-4 flex   items-center'>
<a href='/' className='text-gray-400 underline'>eBay</a>
<div><BsChevronRight size={"0.7rem"} color='black'/></div>
<div className=' capitalize'>{PageName}</div>
</nav>
    </section>
  )
}

export default Header