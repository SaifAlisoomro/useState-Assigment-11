"use client"
import React, { useState } from 'react'


const State = () => {

    const [count , setCount] = useState(0)

    const handleincrement =()=>{
        setCount(count + 1)
    }

    const handledecrement =()=>{
        setCount(count - 1)
    }
  return (
 <div className='w-full sm:w-11/12 md:w-9/12 lg:w-6/12 xl:w-4/12 h-auto shadow-md shadow-black m-auto '>
    <div className='text-center text-4xl font-sans font-bold p-10'>
        <h1 className='text-[#044e83]'>Counter : <span className='text-black mt-10'>{count}</span></h1>
    </div>
    <div className='space-x-5 text-center font-sans font-semibold p-10'>
        <button onClick={handleincrement} className='bg-green-700 hover:bg-slate-700 text-white px-5 py-2 rounded-sm shadow-sm shadow-black'>Increment</button>
        <button onClick={handledecrement} className='bg-red-700 hover:bg-slate-700 text-white px-5 py-2 rounded-sm shadow-sm shadow-black'>Decrement</button>
    </div>
 </div>
  )
}

export default State
