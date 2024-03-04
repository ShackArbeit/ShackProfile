'use client'
import {useState} from 'react'

const Project = () => {
    const[beforeClick,setBeforeClick]=useState(false)
    const[beforeClick2,setBeforeClick2]=useState(false)
    const[beforeClick3,setBeforeClick3]=useState(false)
    const[beforeClick4,setBeforeClick4]=useState(false)
    const buttonClassName = beforeClick ? 'bg-[#edf2f8] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px]' : 'bg-[#9c27b0] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px]';
    const buttonClassName2=beforeClick2 ? 'bg-[#9c27b0] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px]' : 'bg-[#edf2f8] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px]';
    const buttonClassName3=beforeClick3 ? 'bg-[#9c27b0] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px]' : 'bg-[#edf2f8] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px]';
    const buttonClassName4=beforeClick4 ? 'bg-[#9c27b0] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px]' : 'bg-[#edf2f8] border-2 border-[#9c27b0] text-center font-bold text-[18px] mr-4 mb-2.5 rounded-lg cursor-pointer py-[16px] px-[10px]';
    const handleChangeColor=()=>{
        setBeforeClick(!beforeClick)
    }
    const handleChangeColor2=()=>{
        setBeforeClick(beforeClick)
        setBeforeClick2(!beforeClick2)
        setBeforeClick3(beforeClick3)
        setBeforeClick4(beforeClick4)
    }
    const handeChangeColor3=()=>{
        setBeforeClick(beforeClick)
        setBeforeClick2(beforeClick2)
        setBeforeClick3(!beforeClick3)
        setBeforeClick4(beforeClick4)
    }
    const handleChangeColor4=()=>{
        setBeforeClick4(!beforeClick4)
        setBeforeClick(beforeClick)
        setBeforeClick2(beforeClick2)
        setBeforeClick3(beforeClick3)
    }
  return (
    <section className='bg-white py-[40px] px-[25px]'>
      <h1 className='text-center mb-[50px] text-5xl'>Personal Side Project </h1>
      <div className='flex flex-row justify-center mb-[50px] items-center flex-wrap'>
          <div className={buttonClassName} onClick={handleChangeColor}>All </div>
          <div className={buttonClassName2} onClick={handleChangeColor2}>ReactJs </div>
          <div className={buttonClassName3} onClick={handeChangeColor3}>NextJs</div>
          <div className={buttonClassName4} onClick={handleChangeColor4}>Python</div>
      </div>
  </section>
  )
}

export default Project