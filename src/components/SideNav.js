import React from 'react'

const SideNav = ({links}) => {
  return (
    <div className='w-full h-full px-2 hidden sm:block'>
    <h6 className='font-semibold'>Shop by Category</h6>
    <div className='flex flex-col pt-4 mt-2 text-md text-neutral-800 capitalize'>
    {
        links.map((link,i,links)=>{
          return(
            <a key={i} className='m-2 hover:underline'>
             {link}
            </a>
          )
        })
      }
    </div>
    </div>
  )
}

export default SideNav