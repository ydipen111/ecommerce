import React from 'react'
import { IoMenuOutline, IoCloseOutline  } from "react-icons/io5";

export default function Header() {
  return <> 
  {/* <div className='bg-[#22d3ee] '> */}
    <div className='max-w-100% bg-[#22d3ee] py-15px items-center flex justify-between border-2 mx-auto'>
    
    <div className='text-3xl'>
        WsCubeTech
    </div>
    <IoMenuOutline className='text-white text-2xl font-bold md:hidden block'/>
     
    <IoCloseOutline className='text-white text-2xl  font-bold md:hidden block'/>
   
    <ul className=' text-white md:hidden gap-10'>
    <li>Home</li>
    <li>Services</li>
    <li>Company</li>
    <li>Resources</li>
    <li>About </li>    
    </ul>   
    {/* //responsive */}
    <ul className=' text-white md:hidden fixed bg-black left-0 top-[122px]'>
    <li>Home</li>
    <li>Services</li>
    <li>Company</li>
    <li>Resources</li>
    <li>About </li>    
    </ul>   
    

    </div>   

    {/* </div> */}
    </>
}
