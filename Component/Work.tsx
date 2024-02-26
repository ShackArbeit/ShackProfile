

const Work = () => {
  return (
    <section
    className='bg-workColor py-[40px] px-[20px]'
    >
        <h1 className='mb-[20px] text-4xl text-center font-bold'>Work Experience </h1>
        <div className='max-w-[500px] border-l-2 border-red-800 m-auto pl-[32px] '>
        <div className='job'>
            <h1 className='text-xl'>Trend-Go</h1>
            <h3 className='text-base text-[#9c27b0]'>Frontend Enginer</h3>
            <img src='https://media.graphassets.com/noBoILheTnNANM7wZvQ2' 
               alt='trend_go' 
               className='absolute top-[30px] right-[10px] object-contain h-[40px] w-[90px]'/>
            <div className='absolute font-bold left-[-125px] top-[50%]  translate-y-2/4'>Oct 5 2023</div>
        </div>
        </div>
     
     
    </section>
  )
}

export default Work