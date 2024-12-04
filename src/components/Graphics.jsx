import React from 'react'
import Finance from '../assets/Finance.png'
import crm from "../assets/crm.png"
import profile from '../assets/profile.png'
import graph from '../assets/graph.png'
import barGraph from '../assets/barGraph.png'

function Graphics() {
  return (
    <div className="graphics hidden md:block md:opacity-50 lg:opacity-100 w-[1000px] h-[1000px] absolute right-[-400px] z-0 top-[-343px] 2xl:right-[500] ">
              
             <div className=' w-full h-full relative '>

             <div
                className="ellipse w-[1000px] h-[1000px] bg-[#BD93BD99]
                opacity-60 rounded-full   ">
                
              </div>
              <img
                  src={crm}
                  className=" w-[358px] h-[468px] absolute right-[449px] top-[482px] z-30 "
                  alt=""/>

                <div className=" hidden lg:block lg:opacity-80 xl:opacity-100 finance w-fit h-fit bg-white z-30 absolute right-[830px] top-[585px] border-[.36px] border-[#CFD8DC] rounded-xl px-1.5 ">

                    <img src={Finance} className='h-auto w-auto ' alt="" />

                  
                </div>

                <img src={profile} className='z-40 absolute w-auto h-auto right-[435px] top-[416px] ' alt="" />

                <img src={barGraph} className=' hidden lg:block z-40 w-auto h-auto absolute  right-[639px] top-[817px] ' alt="" />
                <img src={graph} className=' w-auto h-auto absolute right-[400px] top-[650px] z-40  ' alt="" />


             </div>

            </div>
  )
}

export default Graphics
