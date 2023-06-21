import React from 'react'
import { BsFacebook, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='border-t-2  pt-20'>
<section className='sm:flex grid grid-cols-2 gap-5  items-start justify-between px-10'>
<div className='text-sm sm:tex-xl text-gray-700'>
    <h6 className='font-bold'>Buy</h6>
    <p>Registration</p>
    <p>eBay Money Back Guarantee</p>
    <p>Bidding & buying help</p>
    <p>Stores</p>
</div>

<div className='text-sm sm:tex-xl text-gray-700'>
    <h6 className='font-bold'>Sell</h6>
    <p>Start selling</p>
    <p>Learn to sell</p>
    <p>Affiliates</p>
</div>

<div className='text-sm sm:tex-xl text-gray-700'>
    <h6 className='font-bold'>Stay connected</h6>
    <p>eBay's Blogs</p>
    <p className='flex items-center  mr-6 gap-1'><BsFacebook/>Facebook</p>
    <p className='flex items-center mr-6 gap-1'><BsTwitter/>Twitter</p>
</div>

<div className='text-sm sm:tex-xl text-gray-700'>
    <h6 className='font-bold'>Tools & apps</h6>
    <p>Developers</p>
    <p>Security center</p>
    <p>Slite map</p>
</div>

<div className='text-sm sm:tex-xl text-gray-700'>
    <h6 className='font-bold'>About eBAy</h6>
    <p>Company info</p>
    <p>News</p>
    <p>Investors</p>
    <p>Careers</p>
    <p>Government relations</p>
    <p>Advertise with us</p>
    <p>Policies</p>
    <p>Verified Rights owner (VeRO) program</p>
</div>


</section>

<div className='cpy sm:text-center m-2 sm:px-10  my-2 w-3/4'>
Copyright © 1995-2023 eBay Inc. All Rights Reserved. Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, Your Privacy Choices and AdChoice
</div>
    </footer>
  )
}

export default Footer