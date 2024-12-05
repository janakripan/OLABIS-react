import React from 'react'
import honda from "../assets/honda.png"
import scania from "../assets/scania.png"
import mobility from "../assets/mobility.png"
import avis from "../assets/avis.png"
import keolis from "../assets/keolis.png"
import avl from "../assets/avl.png"
import dataOf2 from '../constants/dataOfSection2'
import CommonCard from './shared/commonCard'


function Section2() {
  return (
    <section className="2 w-full ">
    <div className="w-full p-2 md:py-16 flex flex-col items-center">
      <h6 className="text-[#5C5C5C] text-xs md:text-base font-semibold tracking-tight">
        TRUSTED BY
      </h6>
      <div className="w-full max-w-[1308px] my-12  gap-4 grid grid-cols-2  justify-items-center md:grid-cols-6 md:gap-x-16 ">
        <img src={honda} alt="" className="w-auto h-4 lg:h-10 " />

        <img src={scania} alt="" className="w-auto h-4 lg:h-10" />

        <img src={mobility} alt="" className="w-auto h-4 lg:h-10 " />

        <img src={avis} alt="" className="w-auto h-4 lg:h-10 " />

        <img src={keolis} alt="" className="w-auto h-4 lg:h-10 " />

        <img src={avl} alt="" className="w-auto h-4 lg:h-10 " />
      </div>
    </div>
    <div className="w-full p-4 md:px-16 flex flex-col items-center ">
      <h2 className="text-2xl leading-[2rem] md:leading-[4rem] lg:leading-[5rem]  md:text-4xl lg:text-5xl   font-semibold text-center mb-4 md:mb-8">
        Engage, promote, and sell <br /> with ease on
        <span className="text-[#EC0606]">Olabis</span>
      </h2>
      <div className="card-section w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center ">

        {dataOf2.map((card)=>(
          <CommonCard
          
          tittle={card.tittle}
          image={card.image}
          content={card.content}
          cardStyle={card.cardStyle}
          imageStyle={card.imageStyle}
          contentStyle={card.contentStyle}
          titleStyle={card.titleStyle}
          wrapStyle={card.wrapStyle}

          />
        ))}
        
        
      
      </div>
    </div>
  </section>
  )
}

export default Section2
