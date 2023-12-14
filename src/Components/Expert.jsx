import React from 'react'
import OIP from '../assets/OIP.jpeg'

export default function Expert() {
  return (
    <div className='max-w-1240px w-auto my-[50px] mx-[50px]  border border-black grid:flex grid grid-cols-2'>
      <div className='border border-[blue]   col-span-1 w-[100%]'>
        <img src={OIP} alt="" />
      </div>
1
      <div className='border border-[blue] gird:col-span-1'>
           <h1>LEARN FROM EXPERTS</h1> 
           <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam autem natus vero consectetur maxime saepe possimus officia, error iusto fuga maiores iure quidem perferendis tenetur ipsa debitis odit recusandae voluptatibus.</h3>
           {/* <button className='bg-black text-white p-3 rounded'>Click here</button> */}
      </div>

    </div>
  )
}
