import Image from "next/image"


const About = () => {
  return (
    <div className='  items-center justify-center 
               border-red-950 py-20 px-6  border-2 max-w-full box-border
               container mx-auto grid lg:grid-cols-12 grid-cols-2 '>
        <div 
        className='border-green-950 border-2 flex flex-col box-border 
        mb-5 col-span-8
                  
        '>
           <h1 className='text-5xl mb-9 tracking-widest  text-purple-800 font-sans font-bold dark:text-white' >
            Hi, I am Shack Lin
            </h1> 
            <p className=' text-slate-700  dark:text-white text-xl'>
            Hi! I am Shack Lin from Taiwan, I studied astronomy in Vienna and became a front-end and data analysis engineer by chance. I am passionate about writing clean, 
            efficient and optimized code. I wrote my Programm in ReactJs in 2022.
            </p>
            <div className='mt-10  flex'>
              <a href='https://github.com/ShackArbeit' target="_blank">
               <Image
                  className='mx-3'
                  src='https://www.himankash.com/_next/static/media/github.2da849b9.webp'
                  width={40}
                  height={40}
                  alt='Github'/>
              </a>
              <a href='mailto:g0972222165@gmail.com' >
                <Image
                className='mx-3'
                src='https://www.himankash.com/_next/static/media/gmail.c1db09a0.webp'
                width={40}
                height={40}
                alt='Email'
                />
              </a>
              <a href='https://www.linkedin.com/in/caisiang-lin-1a807a104/' target="_blank">
                <Image
                className='mx-3'
                src='https://www.himankash.com/_next/static/media/linkedin.a0ed62e4.webp'
                width={40}
                height={40}
                alt='Linkin'/>
              </a>
              <a href='https://www.instagram.com/lin_shack/' target="_blank">
                 <Image
                 className='mx-3'
                src='https://www.himankash.com/_next/static/media/instagram.01642d29.webp'
                width={40}
                height={40}
                alt='Instagram'/>
              </a>
            </div>
            <div
            className='bg-githubColor text-white mt-7 border-2 border-githubColor text-center
            rounded-md py-2.5 px-1.5 w-[200px] cursor-pointer
            '
            >⭐ Star Me On Github</div>
        </div>
        <div 
        className=
        'border-red-900 border-2 box-border col-span-4 '>
            <h1>About Right </h1>
        </div>

    </div>
  )
}

export default About