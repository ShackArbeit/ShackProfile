'use client'
import {useState} from 'react'

const Project = () => {
   const[checkClick,setCheckClick]=useState<string|null>(null)
  return (
    <section className='bg-white py-[40px] px-[25px]'>
      <h1 className='text-center mb-[50px] text-5xl'>Personal Side Project </h1>
      <div className='flex flex-row justify-center mb-[50px] items-center flex-wrap'>
          <div 
          className={checkClick==='A' ? 'bg-[#ff5555] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px] hover:bg-[#b065ff]':'bg-[#edf2f8] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px] hover:bg-[#b065ff]'}
          onClick={()=>setCheckClick('A')}
          >
            All 
            </div>
          <div className={checkClick==='React' ? 'bg-[#ff5555] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px] hover:bg-[#b065ff]':'bg-[#edf2f8] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px] hover:bg-[#b065ff]'}
          onClick={()=>setCheckClick('React')} >ReactJs </div>
          <div className={checkClick==='Next' ? 'bg-[#ff5555] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px] hover:bg-[#b065ff]':'bg-[#edf2f8] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px] hover:bg-[#b065ff]'}
          onClick={()=>setCheckClick('Next')}>NextJs</div>
          <div  className={checkClick==='Python' ? 'bg-[#ff5555] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px] hover:bg-[#b065ff]':'bg-[#edf2f8] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px] hover:bg-[#b065ff]'}
          onClick={()=>setCheckClick('Python')} >Python</div>
      </div>
  </section>
  )
}

export default Project