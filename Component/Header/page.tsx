'use client'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



const Header = () => {
    const usePathName=usePathname();
    const[navbarOpen,setNavbarOpen]=useState(false);
    const navbarToggleHandler=()=>{
        setNavbarOpen(!navbarOpen)
    }
    const [sticky,setSticky]=useState(false);
    const handleStickyNavbar=()=>{
        if(window.scrollY>=80){
            setSticky(true)
        }else{setSticky(false);}
    }
    useEffect(()=>{
        window.addEventListener('scroll',handleStickyNavbar)
    })
  return (
    <>
     <header className='w-full '>
          jjjjjjjj
     </header>
    
    </>
  )
}

export default Header