import { RiLinkM } from '@remixicon/react'
import React from 'react'
import logo from "../images/logo.png";

function NavBar() {
    return (
        <>
            <nav className='py-2 px-5 md:px-16 flex justify-start md:justify-between items-center '>
                
                <span className='rounded-full transition-all duration-300 ease-in-out hover:bg-black'>
                    <img 
                    className='object-contain'
                    width={80} height={80}
                    loading='lazy'
                    src={logo} alt="logo" />
                </span>

                <button className='btn hidden md:flex'>
                    community 
                    <RiLinkM />
                </button>
            </nav>
        </>

    )
}

export default NavBar