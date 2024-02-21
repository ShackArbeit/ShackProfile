

const About = () => {
  return (
    <div className='  items-center justify-center 
               border-red-950 py-20 px-6  border-2 max-w-full box-border
               container mx-auto grid grid-cols-2'>
        <div 
        className='border-green-950 border-2 flex flex-col box-border 
                   columns-8 sm:columns-12
        '>
           <h1 className='text-5xl mb-9 tracking-widest  text-purple-800 font-sans font-bold	' >
            Hi, I am Shack Lin
            </h1> 
            <p className='text-sm  text-slate-700 '>
            Hi! I am Himanshu Kashyap from Dehradun, Uttarakhand. I am Computer Science Engineering Graduate with minors in Cyber Security. I am passionate
             about writing clean, 
             efficient and optimized code. I wrote my First Program in C++ in 2012.
            </p>
        </div>
        <div 
        className=
        'border-red-900 border-2 box-border  columns-4 sm:columns-12'>
            <h1>About Right </h1>
        </div>

    </div>
  )
}

export default About