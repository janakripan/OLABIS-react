import React from 'react'
import dataOf3 from '../constants/dataOf3'
import CommonCard from './shared/CommonCard'






function Section3() {
  return (
<section className="3">
          <div className="features p-6 md:p-32">
            <h2 className="text-2xl leading-[2rem] md:leading-[4rem]  md:text-4xl lg:text-5xl   font-semibold text-center mb-8 md:mb-24">
              <span className="text-[#EC0606]">Olabis </span>Features
            </h2>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-[1500px] mx-auto md:gap-y-16">

              {dataOf3.map((card)=>(
                <CommonCard
                
                key={card.id}
                tittle={card.tittle}
                image={card.image}
                content={card.content}
                cardStyle={card.cardStyle}
                imageStyle={card.imageStyle}
                contentStyle={card.contentStyle}
                titleStyle={card.titleStyle}
                

                />
                
                
              ))}
              
              
            </div>
          </div>
        </section>
  )
}

export default Section3
