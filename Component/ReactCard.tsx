'use client'
import Image from "next/image"
import {useState,useEffect} from 'react'

interface ReactContent{
    title:string,
    imgurl:string,
    dec:string,
    giturl:string,
    demourl:string
}

const ReactCard = () => {
  const[datas,setDatas]=useState([])
  const[spans,setSpans]=useState([])
  useEffect(()=>{
    const fetchData=async ()=>{
       const response=await fetch ('/api/ReactProject')
       console.log(response)
       const Data=await response.json()
       setDatas(Data)
       console.log(Data)
    }
    fetchData()
  },[])
  useEffect(()=>{
      const spanData=async ()=>{
        const spanResponse=await fetch('/api/ReactProject/DecSpan')
        const spanData=await spanResponse.json()
        console.log(spanResponse)
        setSpans(spanData)
        console.log(spanData)
      }
  },[])
  return (
    <section className='flex flex-row border-2 
    border-red justify-center 
    items-center flex-wrap gap-y-8 gap-x-5'>
    <div className='p-4 border-1
     border-[#6b7688] text-center bg-[#e0e0e0]
         w-[250px] rounded-xl 
         hover:shadow-[0_5px_50px_-20px_#0eb9f5]'>
        <Image width={200} height={100} alt='' src='/Image/React1.png'/>
        <p className='mt-5 mb-2.5 text-2xl font-semibold'>
            Taiwan Food 
        </p>
        {/* Span 的部分 */}
        <div className='mb-4 box-border text-center'>
          <span className='
          p-1 font-semibold  text-sm border-2 border-[#9c27b0] 
          rounded-md mt-3 mr-5 mb-3 -ml-1 inline-flex text-[#9c27b0]
          '
          >ReactJs</span>
          <span className='
          p-1 font-semibold  text-sm border-2 border-[#9c27b0] 
          rounded-md mt-3 mr-5 mb-3 -ml-1 inline-flex text-[#9c27b0]
          '
          >Static Web Page</span>
          <span className='
          p-1 font-semibold  text-sm border-2 border-[#9c27b0] 
          rounded-md mt-3 mr-5 mb-3 -ml-1 inline-flex text-[#9c27b0]
          '
          >AntD</span>
        </div>
        <p className='text-base tracking-widest'>至於管碧玲在會前透過簡訊跟高金素梅說「尚祈諒察」，身段放軟的原因，目標就是希望會議進行
          而國民黨提出的提案都沒有討論，某種程度上國民黨、民眾黨都中計了</p>
        <div className='mt-5 box-border flex justify-center '>
          <a className='block  cursor-pointer  h-[50px] w-[50px] mx-5'>
          <Image src='/Image/github.png' alt='github' 
       width={0} height={0} sizes="100vw " 
           style={{ width: '100%', height: '100%',borderRadius:'50%',border:'1px solid black' }}
           />
           </a>
           <a className='block h-[50px] w-[50px] cursor-pointer  mx-5 '>
          <Image src='/Image/demo.jpg' alt='web'
           width={0} height={0} sizes="100vw"
           style={{ width: '100%', height: '100%',borderRadius:'50%',border:'1px solid black' }}
            />
          </a>
        
        </div>
    </div>
   
    </section>
  )
}

export default ReactCard