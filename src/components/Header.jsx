import React from 'react'
import { Link } from 'react-router-dom'
import Button from "./shared/button";


function Header() {
  return (
    <header className='w-full  bg-white  absolute top-0 = z-50 flex justify-center  '>

        <div className='max-w-[1500px] h-20 w-[1440px] mx-auto '>
        <div className='header lg:px-[66px]   flex justify-between container max-w-full h-[80px]  items-center   '>
            
            <div className="menu md:hidden pl-3 ">
               <button className=' material-symbols-outlined  ' class="material-symbols-outlined" >menu</button> 
            </div>
            
            
            <div className="logo w-21 h-6 font-olabis text-[#EC0606]  font-bold  text-3xl flex items-center "> Olabis </div>
            

            <div className="nav hidden md:block    justify-center w-[550px]">
             <ul className=' w-2/3 max-h-[30px] gap-[20px] lg:gap-x-[50px]  lg:w-[550px] flex flex-row    '>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter hover:text-red-400 transition-all duration-300 '>
                    <Link to="/">Home</Link>
                </li>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter   hover:text-red-400 transition-all duration-300'>
                    <Link to="/about">About Us</Link>
                </li>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter  hover:text-red-400 transition-all duration-300'>
                    <Link to="#">Features</Link>
                </li>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter  hover:text-red-400 transition-all duration-300'>
                    <Link to="#">Price</Link>
                </li>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter  hover:text-red-400 transition-all duration-300'>
                    <Link to="#">Contact Us</Link>
                 </li>
             </ul>
           </div>

            <div className="signUpButton sm:w-3/12  md:w-2/12 xl:w-1/12 ">

                
                 <Button
                
                 className="h-[46px] w-full bg-[#EC0606] py-[8px] px-[32px] hover:scale-105 hover:bg-red-700 transition-colors duration-300  text-white  sm:text-xs md:text-sm md:tracking-tighter"
      >
                 Sign Up
                </Button>
            
            </div>


        </div>
        
        </div>
        
        
        
        
        
        
        
    </header>
  )
}

export default Header
