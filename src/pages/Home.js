import React from 'react'
import Headermain from '../components/Headermain'
import Slider from '../components/Slider'
import Explore from '../components/Explore'
import Footer from '../components/Footer'
import Image from '../components/Image'
import s1 from "../images/s1.webp";
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate= useNavigate();
  if(JSON.parse(localStorage.getItem("ebayuser"))===null){
    navigate("signin");
    }
  return (
    <section className='width'>
    <Headermain/>
    <Slider/>
    <Explore/>
   <div className='pb-16 pt-10'> <Image color={"lime-200"} src={s1} header={"Stay Fit, stay active!"} text={"Discover our must-have sports products"} /></div>
    <Footer/> 
    </section>
  )
}

export default Home