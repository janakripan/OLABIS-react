import circltick from "../assets/charm_circle-tick.png";
import arrow from "../assets/arrow-right.png";
import PurchaseCard from "../components/PurchaseCard";

import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Graphics from "../components/Graphics";

export default function Home() {
  return (
    <>
      <main className=" w-full  ">
        <section className="bg-[#F2EDEB]">
          <div className="hero h-fit w-full py-6 px-3 bg-[#F2EDEB]  max-w-[1500px] mx-auto  md:py-16 md:pl-16 md:h-[680px] overflow-hidden flex relative z-50 ">
            <div className="flex flex-col items-center  md:items-start gap-y-6 md:w-1/2 z-50 ">
              <h1 className=" text-4xl  md:text-5xl xl:text-6xl  font-bold z-50 ">
                <span className="lg:leading-[90px] z-50 ">
                  Connecting Retailers To Their Coustomers Like
                </span>{" "}
                <br />
                <span className="text-red-600 leading-[90px]">
                  Never Before
                </span>
              </h1>
              <ul className="text-xs tracking-tighter lg:text-base gap-y-5 flex flex-col ">
                <li className="flex flex-row justify-start items-start gap-3">
                  <img
                    src={circltick}
                    className="w-3 h-3 md:h-5 md:w-5"
                    alt=""
                  />{" "}
                  Bridging the gap between retailers and customers effortlessly.
                </li>
                <li className="flex flex-row justify-start items-start gap-3">
                  <img
                    src={circltick}
                    className="w-3 h-3 md:h-5 md:w-5"
                    alt=""
                  />
                  Asmarter way to showcase and sell your products.
                </li>
                <li className="flex flex-row justify-start items-start gap-3">
                  <img
                    src={circltick}
                    className="w-3 h-3 md:h-5 md:w-5"
                    alt=""
                  />
                  Simplyfying online shopping for everyone.
                </li>
              </ul>
              <div className="buttons flex flex-row items-center gap-10">
                <button className=" w-2/5  text-sm flex items-center justify-center hover:scale-105 hover:bg-red-700 transition-colors duration-300 text-white md:w-[170px] max-w-[170px] lg:text-xl  h-7 md:h-12 bg-[#EC0606] rounded-full ">
                  Get Started
                </button>

                <button className=" flex flex-row items-center text-sm font-semibold text-[#EC0606] hover:text-red-500 md:w-full  lg:text-xl max-w-[180px]">
                  View Products <img className=" h-6 w-6 " src={arrow} alt="" />
                </button>
              </div>
            </div >


            <Graphics/>
            
          </div>
        </section>

        <Section2/>

        <Section3/>

        <section className="4 max-w-[1500px] mx-auto">
          <div className=" w-full p-6 md:p-16 ">
            <h2 className="text-2xl leading-[2rem] md:leading-[4rem]   md:text-4xl   font-semibold text-center mb-4 md:mb-10">
              Choose your best plan
            </h2>

            <p className="font-normal text-sm md:text-base leading-8 text-center">
              
              Unlock unlimited access to all our features and become a valued
              member of our incredible community of supporters. By joining,
              you’ll not only gain exclusive benefits but also be part of a
              thriving network that’s helping us grow and innovate.
            </p>
            <div></div>

            <PurchaseCard />
          </div>
        </section>
      </main>
    </>
  );
}
