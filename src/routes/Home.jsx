
import circltick from '../assets/charm_circle-tick.png'
import arrow from '../assets/arrow-right.png'
import honda from '../assets/honda.png'
import scania from '../assets/scania.png'
import mobility from '../assets/mobility.png'
import avis from '../assets/avis.png'
import keolis from '../assets/keolis.png'
import avl from '../assets/avl.png'
import truck from '../assets/tow-truck.png'
import light from '../assets/light.png'
import office from '../assets/office-idea-bulb.png'
import radios from '../assets/radios.png'
import thermometer from '../assets/thermometer.png'
import PurchaseCard from '../components/PurchaseCard'



export default function Home(){
    return(
        <>
            <main className=' w-full  '>

                <section>
                    <div className="hero h-fit w-full p-6 bg-[#F2EDEB] md:p-16 md:h-[680px] ">

                       <div className='flex flex-col items-center md:items-start gap-y-6 md:w-1/2' >

                       <h1 className=" text-4xl  md:text-5xl xl:text-6xl  font-bold" >
                            <span className='lg:leading-[90px]'>Connecting Retailers To Their Coustomers Like</span> <br />
                            <span className="text-red-600 leading-[90px]">Never Before</span>
                        </h1>
                        <ul className='text-xs tracking-tighter lg:text-base gap-y-5 flex flex-col '>
                            <li className='flex flex-row justify-start items-start gap-3'>
                                <img src={circltick} className='w-3 h-3 md:h-5 md:w-5' alt="" /> Bridging the gap between retailers and customers effortlessly.
                                
                            </li>
                            <li className='flex flex-row justify-start items-start gap-3'>
                                <img src={circltick} className='w-3 h-3 md:h-5 md:w-5' alt="" />Asmarter way to shwcase and sell your products.
                            </li>
                            <li className='flex flex-row justify-start items-start gap-3'>
                                <img src={circltick} className='w-3 h-3 md:h-5 md:w-5' alt="" />Simplyfying online shopping for everyone.

                            </li>
                        </ul>
                        <div className="buttons flex flex-row items-center gap-10">

                            
                                <button className=" w-2/5  text-sm flex items-center justify-center text-white md:w-[170px] lg:text-2xl  h-7 md:h-12 bg-[#EC0606] rounded-full "  >
                                 Get Started 
                                </button>
                                
                                <button className=' flex flex-row items-center text-sm font-semibold text-[#EC0606] md:w-full  lg:text-2xl max-w-[180px]'>
                                    View Products <img  className=' h-6 w-6' src={arrow} alt="" />
                                </button>
                             

                        </div>



                       </div>
                       

                    </div>

                </section>



                <section className="2 w-full ">
                    <div className="w-full p-2 md:py-16 flex flex-col items-center">

                        <h6 className='text-[#5C5C5C] text-xs md:text-base font-semibold tracking-tight'>TRUSTED BY</h6>
                        <div className='w-full max-w-[1308px] my-12  gap-4 grid grid-cols-2  justify-items-center md:grid-cols-6 md:gap-x-16 '>

                           
                                 <img src={honda} alt="" className='w-auto h-4 lg:h-10 ' />
                          
                            
                                 <img src={scania} alt="" className='w-auto h-4 lg:h-10' />
                            
                           
                                 <img src={mobility} alt="" className='w-auto h-4 lg:h-10 ' /> 
                            
                           
                                <img src={avis} alt="" className='w-auto h-4 lg:h-10 ' />
                            
                            
                                <img src={keolis} alt="" className='w-auto h-4 lg:h-10 ' />
                            
                            
                                <img src={avl} alt="" className='w-auto h-4 lg:h-10 ' />
                                                    
                                                                
                                 

                        </div>


                    </div>
                    <div className="w-full p-4 md:px-16 flex flex-col items-center ">

                        <h2 className='text-2xl leading-[2rem] md:leading-[4rem] lg:leading-[5rem]  md:text-4xl lg:text-5xl   font-semibold text-center mb-4 md:mb-8' >Engage, promote, and sell <br /> with ease on  
                            <span className='text-[#EC0606]'>Olabis</span>
                        </h2>
                        <div className='card-section w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-items-center '>

                         <div className=' w-full md:w-[355px] h-fit  px-7 py-9 '>
                             <div className=' bg-white w-full h-full flex flex-col items-center gap-[4px] '>
                                  <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
                                    <img src={truck} alt="" className=" w-[50px] h-[50px]" />
                                  </div>
                                  <h3 className='text-3xl font-semibold leading-10' >Services Listing</h3>
                                  <p className='font-normal text-base text-center'>You can list your services with explaination content and enquiry button.</p>


                            </div>

                         </div>
                         
                         <div className=' w-full md:w-[355px] h-fit  px-7 py-9 '>
                             <div className=' bg-white w-full h-full flex flex-col items-center gap-[4px] '>
                                  <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
                                    <img src={truck} alt="" className=" w-[50px] h-[50px]" />
                                  </div>
                                  <h3 className='text-3xl font-semibold leading-10' >Save vCard</h3>
                                  <p className='font-normal text-base text-center'>Visitor can save your phone number as vCard file format. button.</p>


                            </div>

                         </div>
                        
                         <div className=' w-full md:w-[355px] h-fit  px-7 py-9 '>
                             <div className=' bg-white w-full h-full flex flex-col items-center gap-[4px] '>
                                  <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
                                    <img src={truck} alt="" className=" w-[50px] h-[50px]" />
                                  </div>
                                  <h3 className='text-3xl font-semibold leading-10' >Contact Information</h3>
                                  <p className='font-normal text-base text-center'>The ability to add and update contact details, such as name, phone number, email, website, and social media profiles.</p>


                            </div>

                         </div>
                        
                         <div className=' w-full md:w-[355px] h-fit  px-7 py-9 '>
                             <div className=' bg-white w-full h-full flex flex-col items-center gap-[4px] '>
                                  <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
                                    <img src={truck} alt="" className=" w-[50px] h-[50px]" />
                                  </div>
                                  <h3 className='text-3xl font-semibold leading-10' >Sharing Options</h3>
                                  <p className='font-normal text-base text-center'>Options to share the digital business card via email, social media, text message, or other communication channels.</p>


                            </div>

                         </div>
                        
                         <div className=' w-full md:w-[355px] h-fit  px-7 py-9 '>
                             <div className=' bg-white w-full h-full flex flex-col items-center gap-[4px] '>
                                  <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
                                    <img src={truck} alt="" className=" w-[50px] h-[50px]" />
                                  </div>
                                  <h3 className='text-3xl font-semibold leading-10' >Services Listing</h3>
                                  <p className='font-normal text-base text-center'>You can list your services with explaination content and enquiry button.</p>


                            </div>

                         </div>
                         
                         <div className=' w-full md:w-[355px] h-fit  px-7 py-9 '>
                             <div className=' bg-white w-full h-full flex flex-col items-center gap-[4px] '>
                                  <div className="w-20 h-20 rounded-full bg-[#F46A6A] flex flex-row justify-center items-center ">
                                    <img src={truck} alt="" className=" w-[50px] h-[50px]" />
                                  </div>
                                  <h3 className='text-3xl font-semibold leading-10' >Save vCard</h3>
                                  <p className='font-normal text-base text-center'>Visitor can save your phone number as vCard file format.</p>


                            </div>

                         </div>

                        </div>

                    </div>



                </section>

                <section className="3">

                    <div className="features p-6 md:p-32">

                        <h2 className='text-2xl leading-[2rem] md:leading-[4rem]  md:text-4xl lg:text-5xl   font-semibold text-center mb-4 md:mb-32'>
                        <span className='text-[#EC0606]'>Olabis </span>Features
                        </h2>



                            <div className='grid grid-cols-1 gap-16 lg:grid-cols-2  md:gap-y-32'>
                                <div className="card flex flex-col items-start gap-y-4 md:gap-y-10">

                                    <div className='w-[120px] h-[120px] flex items-center justify-center '>
                                        <img src={light} alt="" className=' w-auto h-auto' />
                                    </div>
                                    <h3 className='text-xl md:text-3xl font-semibold'>
                                    Flexible Diployment Options
                                    </h3>
                                    <p className='font-normal text-sm md:text-lg leading-8'>
                                        It is a long established fact that a reader will be distracted 
                                        by the readable content of a page when looking at its 
                                        layout. The point of using Lorem Ipsum is that it has a 
                                        more-or-less normal distribution
                                    </p>

                                </div>

                                <div className="card flex flex-col items-start gap-y-4 md:gap-y-10">

                                    <div className='w-[120px] h-[120px] flex items-center justify-center '>
                                        <img src={office} alt="" className=' w-auto h-auto' />
                                    </div>
                                    <h3 className='text-xl md:text-3xl font-semibold'>
                                    Problem solving
                                    </h3>
                                    <p className='font-normal text-sm md:text-lg leading-8'>
                                    It is a long established fact that a reader will be distracted 
                                    by the readable content of a page when looking at its 
                                    layout. The point of using Lorem Ipsum is that it has a 
                                    more-or-less normal distribution
                                    </p>

                                </div>

                                <div className="card flex flex-col items-start gap-y-4 md:gap-y-10">

                                    <div className='w-[120px] h-[120px] flex items-center justify-center '>
                                        <img src={radios} alt="" className=' w-auto h-auto' />
                                    </div>
                                    <h3 className='text-xl md:text-3xl font-semibold'>
                                    Client Friendly Interface
                                    </h3>
                                    <p className='font-normal text-sm md:text-lg leading-8'>
                                    It is a long established fact that a reader will be distracted 
                                    by the readable content of a page when looking at its 
                                    layout. The point of using Lorem Ipsum is that it has a 
                                    more-or-less normal distribution
                                    </p>

                                </div>

                                <div className="card flex flex-col items-start gap-y-4 md:gap-y-10">

                                    <div className='w-[120px] h-[120px] flex items-center justify-center '>
                                        <img src={thermometer} alt="" className=' w-auto h-auto' />
                                        
                                    </div>
                                    <h3 className='text-xl md:text-3xl font-semibold'>
                                    Low Cost Effect
                                    </h3>
                                    <p className='font-normal text-sm md:text-lg leading-8'>
                                    It is a long established fact that a reader will be distracted 
                                    by the readable content of a page when looking at its 
                                    layout. The point of using Lorem Ipsum is that it has a 
                                    more-or-less normal distribution
                                    </p>

                                </div>


                            </div>


                    </div>





                </section>


                <section className="4">
                    <div className=" w-full p-6 md:p-16 ">


                        
                    <h2 className='text-2xl leading-[2rem] md:leading-[4rem]   md:text-5xl   font-semibold text-center mb-4 md:mb-10'>Choose your best plan</h2>
                    
                    <p className='ont-normal text-sm md:text-lg leading-8 text-center'> Unlock unlimited access to all our features and become a valued member of our incredible community of supporters. By joining, you’ll not 
                    only gain exclusive benefits but also be part of a thriving network that’s helping us grow and innovate. </p>
                    <div>

                       

                    </div >

                        <PurchaseCard/>
                        
                    </div>




                </section>

            </main>
        
        
        
        
        
        </>
    );
}
