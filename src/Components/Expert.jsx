import React from 'react'
import OIP from '../assets/OIP.jpeg'

export default function Expert() {
  return (
    <div className='max-w-1240px w-auto my-[50px] mx-[50px]  md:grid grid-cols-2'>
      <div className=' col-span-1 w-[120%] text-center'>
        <img className='h-[' src={OIP} alt="" />
      </div>

      <div className=' my-[30px] mx-[30px] col span-1 flex flex-col justify-center'>
           <h1 className='my-[8px] text-[#00df9a] font-bold tex-center text-[30px]'>LEARN FROM EXPERTS</h1> 
           <h3 className='my-[8px] font-bold text-[20px] text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam autem natus vero consectetur maxime saepe possimus officia, error iusto fuga maiores iure quidem perferendis tenetur ipsa debitis odit recusandae voluptatibus.</h3>
           <button className='bg-black text-white p-3 rounded w-[30%] my-5'>Click here</button>
      </div>

    </div>
  )
}
