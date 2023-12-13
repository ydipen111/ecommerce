import React from 'react'
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#22d3ee]  w-full py-[90px] font-bold'>
        <div className='max-w-[1240px] my-[50px] mx-auto text center '>
             <div className='text-xl md:text-3xl md:p-[24px] font-bold'>Let's learn together</div>
             <h1 className='text-white text-5xl md:text-[80px] font-bold '>Grow with us</h1>
             <div className='text-4xl md:text-[50px] text-white py-[20px]'>
             <Typed
                    strings={['Web development','Digital Markeing','Ethical Hacking']}
                    typeSpeed={100}
                    loop={true}
                    backSpeed={50}
                />
              </div>
        </div>
    </div>
  )
}
