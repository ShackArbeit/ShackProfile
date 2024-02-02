'use client'
import Image from "next/image"
import Link from "next/link"
import taiwanImage from '../../Image/taiwan.png'
import { FiMenu } from "react-icons/fi";
import { useState } from "react";



const Header = () => {
    const [open,setOpen]=useState(false)
  return (
    <header className='border-b border-gray-700 py-2'>
        <div className='flex items-center  justify-between xl:max-w-7xl max-w-full xl:mx-auto border-2 flex-wrap w-full border-red-700'>
            <Image src={taiwanImage} alt='taiwna' width={100} height={50}/>
            <FiMenu className='lg:hidden block h-6 w-6  cursor-pointer'
            onClick={()=>setOpen(!open)}
            />
            <nav className={`lg:flex ${open ? "block" : "hidden"} w-full lg:items-center lg:w-auto`}>
                <ul className='text-base text-gray-700 lg:flex lg:justify-between'>
                    <li>
                        <Link href='/' className='lg:px-5 py-2 block text-center  hover:text-blue-600 font-semibold'>Home </Link>
                    </li>
                    <li>
                        <Link href='/' className='lg:px-5 py-2 block text-center  hover:text-blue-600 font-semibold'>About Me </Link>
                    </li>
                    <li>
                        <Link href='/' className='lg:px-5 py-2 block text-center  hover:text-blue-600 font-semibold'>Work </Link>
                    </li>
                    <li>
                        <Link href='/' className='lg:px-5 py-2 block text-center  hover:text-blue-600 font-semibold'>Projects </Link>
                    </li>
                    <li>
                        <Link href='/' className='lg:px-6 py-2 block text-center bg-blue-600 text-white rounded-xl font-semibold'>Contact </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header