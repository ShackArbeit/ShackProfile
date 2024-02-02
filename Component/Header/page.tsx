'use client'
import Image from "next/image"
import Link from "next/link"
import taiwanImage from '../../public/Image/taiwan.png'
import NavbarImage from '../../public/Image/Nav.jpg'
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import ThemeSwitch from "../Theme/ThemeSwitch";




const Header = () => {
    const [open,setOpen]=useState(false)
  return (
    <header className='border-b  border-gray-700 py-2 ' style={{backgroundImage: `url(${NavbarImage.src})`}}>
        <div className='flex items-center  justify-between xl:max-w-7xl max-w-full xl:mx-auto flex-wrap w-full '>
            <div className=' flex justify-between items-center w-[200px]'>
            <ThemeSwitch  />
            <Image src={taiwanImage} alt='taiwan' width={120} height={15} priority={true}/> 
            </div>
            <FiMenu className='lg:hidden block h-10 w-10  cursor-pointer'
            onClick={()=>setOpen(!open)}
            />
            <nav className={`lg:flex ${open ? "block" : "hidden"} w-full lg:items-center lg:w-auto`}>
                <ul className='text-base text-gray-700  dark:text-white lg:flex lg:justify-between'>
                    <li>
                        <Link href='/' className='lg:px-5 py-2 block text-center text-2xl  hover:text-blue-600 font-semibold'>Home </Link>
                    </li>
                    <li>
                        <Link href='/' className='lg:px-5 py-2 block text-center text-2xl hover:text-blue-600 font-semibold'>About Me </Link>
                    </li>
                    <li>
                        <Link href='/' className='lg:px-5 py-2 block text-center text-2xl  hover:text-blue-600 font-semibold'>Work </Link>
                    </li>
                    <li>
                        <Link href='/' className='lg:px-5 py-2 block text-center  text-2xl hover:text-blue-600 font-semibold'>Projects </Link>
                    </li>
                    <li>
                        <Link href='/' className='lg:px-6 py-2 block text-center text-2xl bg-blue-600 text-white rounded-xl font-semibold'>Contact </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header