import React from 'react'

export default function Newsletter() {
    return (
        <div className='w-full p-4 bg-[#2699fb]'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[40px]'>
                <div className='m-2' >
                    <h1 className='text-white font-bold text-[25px] md:text-[40px]'>Want to learn latest I.T Skills</h1>
                    <span className='text-white text-align:right'> Signup to Newsletter stay updated to us.</span>
                </div >

                <div className='m-2'>
                    <input type="text" className='rounded p-3 mr-3 text-slate-300 ' placeholder='email' />
                    <button className='bg-black text-white p-3 rounded  my-5'>Click here</button><br />
                    <p className='text-white'>We care protection of the our Data.Read us. <br /><a href="" className='text-black text-left'>Private policy.</a></p>
                    
                </div>
            </div>
        </div>
    )
}
