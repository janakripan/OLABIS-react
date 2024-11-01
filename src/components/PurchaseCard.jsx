import React from 'react'
import boxIcon from '../assets/package.png'
import tick from '../assets/tick-01.png'

function PurchaseCard() {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 '>
         <div className='purchase-card-1 w-full h-fit rounded-lg bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm p-2 md:p-5' >
                            
                            <div className='flex flex-row justify-between '>
                                <div className='w-fit h-auto flex flex-row items-center justify-start gap-2 '>
                                    <img src={boxIcon} className='w-4 h-4 md:w-8 md:h-auto opacity-75 ' alt="" /><span className='font-semibold text-base md:text-xl  text-[#5C5C5C] '>Basic</span>
                                </div>

                                
                            </div>
                            <div className='mt-4' >
                                <h3 className='font-semibold text-2xl leading[60px] md:text-4xl  flex items-center gap-3  text-[#5C5C5C]  '>

                                    FREE 
                                    
                                </h3>
                               <div className="h-[1px] w-full bg-[#A3A3A3] mt-4"></div>
                               
                               
                            </div>

                            <div className="content w-full">
                                <h6 className=' mt-4  '> With basic plan, you get :</h6>
                                <ul className='text-sm md:text-base font-normal my-6 flex flex-col gap-y-6'>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Limited access to components</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Limited access to website categories</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Limited filter & search resultsUp to 3 boards</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>25% Discount on a Webflow Plan</span>
                                    </li>
                                     </ul>
                                <button className=' w-full bg-white shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm px-3 text-base md:text-lg font-semibold text-[#5C5C5C] rounded-full ' >
                                Join for free
                                </button>
                            </div>

                        </div>



                        <div className='purchase-card2 w-full h-fit rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm p-2 md:p-5' >
                            
                            <div className='flex flex-row justify-between '>
                                <div className='w-fit h-auto flex flex-row items-center justify-start gap-2 '>
                                    <img src={boxIcon} className='w-4 h-4 md:w-8 md:h-auto' alt="" /><span className='font-semibold text-base md:text-xl'>Premium</span>
                                </div>

                                <div className=' w-28 h-7 bg-[#EC0606] rounded-lg  px-2.5 py-1 flex items-center justify-center' >
                                    <span className=' font-normal text-white text-xs tracking-tight '>Popular</span>
                                </div>
                            </div>
                            <div className='mt-4' >
                                <h3 className='font-semibold text-2xl leading[60px] md:text-4xl  flex items-center gap-3   '>

                                    120AED
                                    <span className='text-xs md:text-base' >/per month</span>
                                </h3>
                               <div className="h-[1px] w-full bg-[#A3A3A3] mt-4"></div>
                               
                               
                            </div>

                            <div className="content w-full">
                                <h6 className=' mt-4 '> With the PRO plan, you get :</h6>
                                <ul className='text-sm md:text-base font-normal my-6 flex flex-col gap-y-6'>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Access to all categories</span>
                                    </li>
                                   
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Access to all components</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Unlimited filter & search results</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Unlimited boards</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Mobile website previews</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Old website versions</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Screens download</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>‘Hire me’ button on your profile</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Ads-free</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>25% Discount on a Webflow Plan</span>
                                    </li>
                                </ul>
                                <button className=' w-full bg-[#EC0606] px-3 text-base md:text-lg font-semibold text-white rounded-full ' >
                                         Purchase
                                </button>
                            </div>

                        </div>



                        <div className='purchase-card3 w-full h-auto rounded-lg shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-sm p-2 md:p-5 ' >
                            
                            <div className='flex flex-row justify-between '>
                                <div className='w-fit h-auto flex flex-row items-center justify-start gap-2 '>
                                    <img src={boxIcon} className='w-4 h-4 md:w-8 md:h-auto' alt="" /><span className='font-semibold text-base md:text-xl'>Premium</span>
                                </div>

                                <div className=' w-28 h-7 bg-[#F79E1B] rounded-lg  px-2.5 py-1 flex items-center justify-center' >
                                    <span className=' font-normal text-white text-xs tracking-tight '>Most Purchased</span>
                                </div>
                            </div>
                            <div className='mt-4' >
                                <h3 className='font-semibold text-2xl leading[60px] md:text-4xl  flex items-center gap-3   '>

                                    200AED
                                    <span className='text-xs md:text-base' >/per month</span>
                                </h3>
                               <div className="h-[1px] w-full bg-[#A3A3A3] mt-4"></div>
                               
                               
                            </div>

                            <div className="content w-full">
                                <h6 className=' mt-4 '> With the PRO plan, you get :</h6>
                                <ul className='text-sm md:text-base font-normal my-6 flex flex-col gap-y-6'>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Access to all categories</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>‘Hire me’ button on your profile</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Access to all components</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Unlimited filter & search results</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Unlimited boards</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Mobile website previews</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Old website versions</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Screens download</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>‘Hire me’ button on your profile</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>‘Hire me’ button on your profile</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>Ads-free</span>
                                    </li>
                                    <li className='flex flex-row gap-5 items-center' >
                                        <img src= {tick} className='w-6 h-6' alt="" />  <span className='text-sm md:text-base font-normal'>25% Discount on a Webflow Plan</span>
                                    </li>
                                </ul>
                                <button className=' w-full bg-[#FABC2A] px-3 text-base md:text-lg font-semibold text-white rounded-full ' >
                                         Purchase
                                </button>
                            </div>

                        </div>


      
    </div>
  )
}

export default PurchaseCard
// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5