import React, { useState } from 'react'
import logo from "../images/logo.png"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const [username,Setusername]=useState("")
    const [email,SetEmail]=useState("")
    const [password,SetPassword]=useState("")


const [message,Setmessage]=useState("");
const [success,Setsuccess]=useState(false);
const navigate= useNavigate()
const save= (e)=>{
    e.preventDefault();
   const user={
    name:username,
    email:email,
    password:password
   }
   axios.post("http://localhost/ebaybackend/Signup.php",user)
   .then(res=>{
    if(Number(res.data.status)===200){
        Setsuccess(true)
        localStorage.setItem('ebayuser',JSON.stringify(user));
        setTimeout(()=>{
            navigate("/")
        },2000)
    }else{
        Setsuccess(false);
    }
    Setmessage(res.data.message);
   })
}
  return (
    <section className='width'>
    <nav className='h-20 flex items-center justify-between'>
        <div className='mr-4'>
            <img src={logo} alt='ebay logo' className='sm:h-24 h-8 mt-10 sm:ml-4'/>
        </div>
       
        <a href='' className='mr-8   text-xs hidden sm:block text-blue-600'>Tell us what you think</a>
    </nav>
<div className='mt-10'>
<div className='flex items-center justify-center flex-col mb-3'>
    <h6 className='font-bold sm:text-4xl'>Hello</h6>
    <p className='flex items-center gap-1'>Signup to ebay or <a href='' className='text-blue-700 underline'>Login</a></p>
</div>
<p className={success ? "w-full text-center blue":"w-full text-center red"}>{message}</p>
<div className='flex flex-col items-center justify-center'>
<input
onChange={(e)=>{Setusername(e.target.value)}}
 type='text'
 placeholder='Username'
 className={' sm:h-10 sm:w-96 m-2 px-4 rounded-md int w-1/2'}
 />

 <input
 onChange={(e)=>{SetEmail(e.target.value)}}
 type='email'
 placeholder='Email'
 className=' sm:h-10 sm:w-96 m-2 px-4 rounded-md int w-1/2'
 />

<input
onChange={(e)=>{SetPassword(e.target.value)}}
 type='password'
 placeholder='Password'
 className=' sm:h-10 sm:w-96 m-2 px-4 rounded-md int w-1/2'
 />
 <input
 onClick={save}
 type='submit'
 value={"Continue"}
 className=' sm:h-10 sm:w-96 m-2 px-4 rounded-full sm:font-bold bg-blue-700  text-blue-100 w-1/2'
 />
</div>
<div className='flex relative items-center justify-center mt-6 flex-col'>
    <div className='line bg-gray-400 sm:w-96 w-1/2'></div>
    <p className='bg-white w-4 absolute '>or</p>
</div>
<div className='flex flex-col items-center justify-center mt-6'>
<a href='' className=' sm:h-10 sm:w-96 m-2 px-4 rounded-full sm:font-bold text-center text-sm  sm:text-base p-2 sm:pt-2 bg-blue-900  text-blue-100 w-1/2'>Signin with Facebook</a>
<a href='' className=' sm:h-10 sm:w-96 m-2 px-4 rounded-full sm:font-bold text-center text-sm  sm:text-base  p-2 sm:pt-2 border  w-1/2'>Signin with Google</a>
<a href='' className=' sm:h-10 sm:w-96 m-2 px-4 rounded-full sm:font-bold text-center text-sm  sm:text-base  p-2 sm:pt-2 border  w-1/2'>Signin with apple</a>
</div>
</div>
<div className='mt-6 text-center text-xs sm:text-xl'>ebay copyright c 2023</div>
        </section>
    )
}

export default Signup