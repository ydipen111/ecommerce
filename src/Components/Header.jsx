import React, { useState } from 'react'
import { IoMenuOutline, IoCloseOutline  } from "react-icons/io5";

export default function Header() {
  const [toggle, setToggle]=useState(false)
  return <> 
  {/* <div className='bg-[#22d3ee] '> */}
    <div className='max-w-100% bg-[#22d3ee] py-15px items-center flex justify-between border-2 mx-auto'>
    
    <div className='text-3xl'>
        WsCubeTech
    </div>
    { toggle ?
    <IoMenuOutline  onClick={()=>setToggle(!toggle)} className='text-white text-2xl font-bold md:hidden block'/>
     :
    <IoCloseOutline onClick={()=>setToggle(!toggle)}  className='text-white text-2xl  font-bold md:hidden block'/>
}
    <ul className=' text-white md:flex hidden gap-10'>
    <li>Home</li>
    <li>Services</li>
    <li>Company</li>
    <li>Resources</li>
    <li>About </li>    
    </ul>   
    {/* //responsive */}
    <ul className=' text-white w-full screen h-screen md:hidden fixed bg-black left-[-100%] top-[39px]'>
    <li className='p-5 text-left'>Home</li>
    <li className='p-5 text-left'>Services</li>
    <li className='p-5 text-left'>Company</li>
    <li className='p-5 text-left'>Resources</li>
    <li className='p-5 text-left'>About </li>    
    </ul>   
    

    </div>   

    {/* </div> */}
    </>
}
