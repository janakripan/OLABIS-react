import React from 'react'
import light from "../assets/light.png"
import office from "../assets/office-idea-bulb.png"
import radios from "../assets/radios.png"
import thermometer from "../assets/thermometer.png"

function Section3() {
  return (
<section className="3">
          <div className="features p-6 md:p-32">
            <h2 className="text-2xl leading-[2rem] md:leading-[4rem]  md:text-4xl lg:text-5xl   font-semibold text-center mb-4 md:mb-32">
              <span className="text-[#EC0606]">Olabis </span>Features
            </h2>

            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2  md:gap-y-32">
              <div className="card flex flex-col items-start gap-y-4 md:gap-y-10">
                <div className="w-[120px] h-[120px] flex items-center justify-center ">
                  <img src={light} alt="" className=" w-auto h-auto" />
                </div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  Flexible Diployment Options
                </h3>
                <p className="font-normal text-sm md:text-lg leading-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </p>
              </div>

              <div className="card flex flex-col items-start gap-y-4 md:gap-y-10">
                <div className="w-[120px] h-[120px] flex items-center justify-center ">
                  <img src={office} alt="" className=" w-auto h-auto" />
                </div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  Problem solving
                </h3>
                <p className="font-normal text-sm md:text-lg leading-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </p>
              </div>

              <div className="card flex flex-col items-start gap-y-4 md:gap-y-10">
                <div className="w-[120px] h-[120px] flex items-center justify-center ">
                  <img src={radios} alt="" className=" w-auto h-auto" />
                </div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  Client Friendly Interface
                </h3>
                <p className="font-normal text-sm md:text-lg leading-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </p>
              </div>

              <div className="card flex flex-col items-start gap-y-4 md:gap-y-10">
                <div className="w-[120px] h-[120px] flex items-center justify-center ">
                  <img src={thermometer} alt="" className=" w-auto h-auto" />
                </div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  Low Cost Effect
                </h3>
                <p className="font-normal text-sm md:text-lg leading-8">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Section3
