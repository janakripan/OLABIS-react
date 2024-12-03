import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../assets/footerLogo.png'
import fb from '../assets/fb.png'
import insta from '../assets/insta.png'
import yt from '../assets/youtube.png'
import twitter from '../assets/twitter.png'


function Footer() {
  return (
   <footer>
    <div className='w-full p-4  h-fit lg:h-[528px] bg-black  md:px-16 md:pt-20 ' >
      
      <div className="section1 md:flex flex-row  ">
        <div className=" sm:w-full md:w-6/12 mb-10 md:mb-0 ">
            <img src={footerLogo} alt="" className=' sm:w-8/12 md:w-5/12 mb-6 md:mb-14 ' />
            <span className='text-white  font-sans font-normal text-xs tracking-wide '>It is a long established fact that a reader will be distracted by the readable content</span>

         </div>
          <div className="sm:w-full  md:w-6/12 flex flex-col  md:ml-auto ">

              <span className='text-white  font-sans font-medium text-xl tracking-normal  '>Join our newsletter for expert advice and tools.</span>
              <div className="searchBar flex flex-row h-10 bg-white justify-between items-center sm:max-w-full lg:w-7/8 lg:h-16 mt-14  rounded-[8px] p-1 ">
                

                 <form className='outline-none flex items-center pl-4 border-none w-full h-full text-base font-[#0000 ] font-medium '> 
                    <input className=' font-sans font-medium text-black w-full h-full outline-none placeholder-black placeholder-text-sm placeholder-leading-6 placeholder-font-sans ' type="email" id='email' name='email'    placeholder='your email address  '  />

                 </form>
                 <button className='bg-[#EC0606] h-full w-2/3 rounded-[12px] lg:w-1/4 text-white text-base font-sans '> subscribe</button>
                
              </div>


          </div>

          


      </div>

      <div className="section2 w-full flex flex-col items-center grid-cols-4 md:flex-row justify-between md:items-start mt-16 ">

        <div className="follow mb-10 flex flex-col items-center md:mb-0 md:items-start  ">
          <h4 className='text-white font-sans text-2xl mb-10 '>Follow us on</h4>

          
           <ul className=" flex flex-row gap-x-5 justify-between md:gap-x-10 " >
            <li>
              <Link to='#'><img src={fb} className=' w-6 h-6' alt="" /></Link>
            </li>
            <li>
              <Link to='#'><img src={insta} className=' w-6 h-6' alt="" /></Link>
            </li>
            <li>
              <Link to='#'><img src={yt} className=' w-9 h-6' alt="" /></Link>
            </li>
            <li>
              <Link to='#'><img src={twitter} className='w-6 h-6' alt="" /></Link>
            </li>
          </ul>
              
                                       
          
        </div>

        <div className="qklinks mb-10 flex flex-col items-center md:mb-0 md:items-start">
          <h4 className='text-white font-sans text-xl mb-7 ' > Quick Links</h4>
          <ul className='text-white text-sm flex flex-col items-start gap-y-7'>
            <li>
              <Link to='#'>About</Link>
            </li>
            <li>
              <Link to='#'>Product</Link>
            </li>
            <li>
              <Link to='#'>Features</Link>
            </li>
          </ul>


        </div>

        <div className="product mb-10 flex flex-col items-center md:mb-0 md:items-start">


        <h4 className='text-white font-sans text-xl mb-7 ' > Products</h4>
          <ul className='text-white text-sm flex flex-col items-start gap-y-7' >
            <li>
              <Link to='#'>Clients</Link>
            </li>
            <li>
              <Link to='#'>Pricing</Link>
            </li>
            <li>
              <Link to='#'>Rating</Link>
            </li>
          </ul>


        </div>

       
        <div className="contact mb-10 flex flex-col items-center md:mb-0 md:items-start">

        <h4 className='text-white font-sans text-xl mb-7 ' >Contact</h4>
          <ul className='text-white text-sm flex flex-col items-start gap-y-7' >
            <li>
              <Link to='#'>info@olabis.com</Link>
            </li>
            <li>
              <Link to='#'>+91 9809813299</Link>
            </li>
            <li>
              <Link to='#'>+91 9847284746</Link>
            </li>
          </ul>



        </div>




      </div>

    </div>
   </footer>
  )
}

export default Footer
