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
// interface SpanContent {
//   spans: string[]
// }


const ReactCard = () => {
  const[datas,setDatas]=useState([])
  const[spans,setSpans]=useState([])
  useEffect(()=>{
    const fetchData=async ()=>{
       const response=await fetch ('/api/ReactProject')
       const Data=await response.json()
       setDatas(Data)
    }
    fetchData()
  },[])
  useEffect(()=>{
      const spanData=async ()=>{
        const spanResponse=await fetch('/api/ReactProject/DecSpan')
        const spanData= await spanResponse.json()
        setSpans(spanData)
        console.log(spanData)
      }
      spanData()
  },[])
  return (
    <section className='flex flex-row border-2 
    border-red justify-center items-center flex-wrap gap-y-8 gap-x-5'>
       {datas.map((data:ReactContent)=>(
    <div className='p-4 border-1
     border-[#6b7688] text-center bg-[#e0e0e0]
         w-[280px] rounded-xl 
         hover:shadow-[0_5px_50px_-20px_#0eb9f5]' key={data.title}>
        <>
                <Image width={250} height={0} alt='' src={data.imgurl}
                />
                <p className='mt-5 mb-2.5 text-2xl font-semibold'>
                    {data.title}
                </p>
                {/* Span 的部分 */}
                <div className='mb-4 box-border text-center w-full border-2 border-red-900 '>  
                {spans.map((Span)=>( 
                     <span className='
                     p-1 font-semibold  text-[12px] border-2 border-[#9c27b0] 
                     rounded-md  inline-flex text-[#9c27b0] mx-1 my-1
                     '
                     >{Span}</span> 
                     ))}
                </div>   
                <p className='text-base tracking-widest'>
                  {data.dec}
                </p>
                <div className='mt-5 box-border flex justify-center '>
                  <a className='block  cursor-pointer  h-[50px] w-[50px] mx-5' href={data.giturl} target="_blank">
                  <Image src='/Image/github.png' alt='github' 
               width={0} height={0} sizes="100vw " 
                   style={{ width: '100%', height: '100%',borderRadius:'50%',border:'1px solid black' }}
                   />
                   </a>
                   <a className='block h-[50px] w-[50px] cursor-pointer  mx-5 ' href={data.demourl} target="_blank">
                  <Image src='/Image/demo.jpg' alt='web'
                   width={0} height={0} sizes="100vw"
                   style={{ width: '100%', height: '100%',borderRadius:'50%',border:'1px solid black' }}
                    />
                  </a>          
                </div>
              </>
        </div>
         ))}    
    </section>
  )
}

export default ReactCard