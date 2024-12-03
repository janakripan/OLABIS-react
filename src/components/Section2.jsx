import React from 'react'
import honda from "../assets/honda.png"
import scania from "../assets/scania.png"
import mobility from "../assets/mobility.png"
import avis from "../assets/avis.png"
import keolis from "../assets/keolis.png"
import avl from "../assets/avl.png"
import truck from "../assets/tow-truck.png"

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
        <div className=" w-full md:w-[355px] h-fit  px-7 py-9 ">
          <div className=" bg-white w-full h-full flex flex-col items-center gap-[4px] ">
            <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
              <img src={truck} alt="" className=" w-[50px] h-[50px]" />
            </div>
            <h3 className="text-3xl font-semibold leading-10">
              Services Listing
            </h3>
            <p className="font-normal text-base text-center">
              You can list your services with explaination content and
              enquiry button.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-[355px] h-fit  px-7 py-9 ">
          <div className=" bg-white w-full h-full flex flex-col items-center gap-[4px] ">
            <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
              <img src={truck} alt="" className=" w-[50px] h-[50px]" />
            </div>
            <h3 className="text-3xl font-semibold leading-10">
              Save vCard
            </h3>
            <p className="font-normal text-base text-center">
              Visitor can save your phone number as vCard file format.
              button.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-[355px] h-fit  px-7 py-9 ">
          <div className=" bg-white w-full h-full flex flex-col items-center gap-[4px] ">
            <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
              <img src={truck} alt="" className=" w-[50px] h-[50px]" />
            </div>
            <h3 className="text-3xl font-semibold leading-10">
              Contact Information
            </h3>
            <p className="font-normal text-base text-center">
              The ability to add and update contact details, such as name,
              phone number, email, website, and social media profiles.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-[355px] h-fit  px-7 py-9 ">
          <div className=" bg-white w-full h-full flex flex-col items-center gap-[4px] ">
            <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
              <img src={truck} alt="" className=" w-[50px] h-[50px]" />
            </div>
            <h3 className="text-3xl font-semibold leading-10">
              Sharing Options
            </h3>
            <p className="font-normal text-base text-center">
              Options to share the digital business card via email, social
              media, text message, or other communication channels.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-[355px] h-fit  px-7 py-9 ">
          <div className=" bg-white w-full h-full flex flex-col items-center gap-[4px] ">
            <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
              <img src={truck} alt="" className=" w-[50px] h-[50px]" />
            </div>
            <h3 className="text-3xl font-semibold leading-10">
              Services Listing
            </h3>
            <p className="font-normal text-base text-center">
              You can list your services with explaination content and
              enquiry button.
            </p>
          </div>
        </div>

        <div className=" w-full md:w-[355px] h-fit  px-7 py-9 ">
          <div className=" bg-white w-full h-full flex flex-col items-center gap-[4px] ">
            <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
              <img src={truck} alt="" className=" w-[50px] h-[50px]" />
            </div>
            <h3 className="text-3xl font-semibold leading-10">
              Save vCard
            </h3>
            <p className="font-normal text-base text-center">
              Visitor can save your phone number as vCard file format.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Section2
