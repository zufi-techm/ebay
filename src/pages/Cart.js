import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import axios from 'axios';
import Footer from "../components/Footer"
import PageImgs from '../components/PagevImgs';
import FlutterPay from '../pages/FlutterPay'
const Cart = () => {
  const [num,Setnum]= useState(0);
  const [rows,setRows]=useState([])
  let sum= 0;
  const loggedUser={email: JSON.parse(localStorage.getItem('ebayuser')).email}
  useEffect(()=>{
    axios.post("http://localhost/ebaybackend/Cartitems.php",loggedUser)
    .then(r=>{
      setRows(r.data.rows)
        Setnum(r.data.number)
})
  },[])
      

if(num==0){
  return(<section className='width'>
   <Header PageName={"cart"}/>
   <div className='h-96 mt-10 flex flex-col items-center justify-center'>
    <h6 className='font-bold animate-bounce'>No items in cart</h6>
    <div className='w-full flex justify-center'>
      <a href='signin' className='w-1/5 text-center pt-2 rounded-full m-4 h-10 border-2 border-blue-700 text-blue-700'>Signin</a>
      <a href='/' className='w-1/4  h-10 text-center pt-2 rounded-full m-4 bg-blue-700 text-white'>Start shopping</a>
    </div>
   </div>
   <Footer/>
  </section>)
}else{
  return (
    <section>
      <Header PageName={"cart"}/>
      <div className='flex px-4 flex-col sm:flex-row'>
      <div className='w-full sm:w-3/4  flex gap-4 relative'>
        {
          rows.map((row,i,rows)=>{
           
             
            sum +=row.price;
          
            
            return(
              <div key={i} className='w-20 h-32 text-xs'>
               <img src={row.image} className='w-1/2'/>
               <div>{row.name}</div>
               <div>{row.price}$</div>
              </div>
            )
          })
        }
      </div>
     
<div className='bg-blue-600 text-blue-700 w-full sm:w-1/4 sm:h-96 h-40 mt-6 font-bold flex items-center justify-center flex-col'>
<div className='font-bold text-white'>total ={sum}$</div>
  <FlutterPay price={sum} email={JSON.parse(localStorage.getItem("ebayuser")).email}/>
<div/>
</div>
      </div>
     
      <Footer/>
    </section>
  )
}

}

export default Cart