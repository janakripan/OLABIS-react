import React from 'react'
import { Link } from 'react-router-dom'
import Button from "./shared/button";


function Header() {
  return (
    <header className='w-full  bg-white  absolute top-0  z-50 flex justify-center '>

        <div className='header lg:px-[66px]   flex justify-between container max-w-full h-[100px]  items-center  '>
            
            <div className="menu md:hidden pl-3 ">
               <button className=' material-symbols-outlined  ' class="material-symbols-outlined" >menu</button> 
            </div>
            
            
            <div className="logo w-21 h-6 font-olabis text-[#EC0606]  font-bold  text-[23.95px] flex items-center "> Olabis </div>
            

            <div className="nav hidden md:block    justify-center w-[550px]">
             <ul className=' w-2/3 max-h-[30px] gap-[20px] lg:gap-x-[50px]  lg:w-[550px] flex flex-row    '>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter  '>
                    <Link to="/">Home</Link>
                </li>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter'>
                    <Link to="/about">About Us</Link>
                </li>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter'>
                    <Link to="#">Features</Link>
                </li>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter'>
                    <Link to="#">Price</Link>
                </li>
                <li className='font-sans font-semibold  leading-[30px] tracking-tighter'>
                    <Link to="#">Contact Us</Link>
                 </li>
             </ul>
           </div>

            <div className="signUpButton sm:w-3/12  md:w-2/12 xl:w-1/12 ">

                
                 <Button
                
                 className="h-[46px] w-full bg-[#EC0606] py-[8px] px-[32px]    text-white  sm:text-xs md:text-sm md:tracking-tighter"
      >
                 Sign Up
                </Button>
            
            </div>


        </div>
        
        
        
        
        
        
        
        
    </header>
  )
}

export default Header
