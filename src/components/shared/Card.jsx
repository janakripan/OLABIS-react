import React from 'react'
import tick from '../../assets/tick-01.png'




const Card = ({ 
  imgStyle,
  plan, 
  imageUrl,
  badgeName,
  price,currency,
  duration,
  benifit,
  buttonStyles,
  features, 
  buttonText,
  onButtonClick,
  badgeColor,
  cardStyles 
}) =>  {
  return (
    <div className={`purchase-card3 w-full h-fit rounded-lg shadow-card hover:shadow-cardhover backdrop-blur-sm p-2 md:p-5 ${cardStyles} `}  >
                            
    <div className='flex flex-row justify-between '>
        {imageUrl&&(<div className='w-fit h-auto flex flex-row items-center justify-start gap-2 '>
            <img src={imageUrl} className={`w-4 h-4 md:w-8 md:h-auto ${imgStyle}`} alt="" /><span className='font-semibold text-base md:text-xl'>{plan}</span>
        </div>)}

        {badgeName&&(<div 
        className= {` w-28 h-7  rounded-lg  px-2.5 py-1 flex items-center justify-center ${badgeColor ||"bg-[#F79E1B]" }`} >
            <span className=' font-normal text-white text-xs tracking-tight '>{badgeName}</span>
        </div>)}
    </div>
    <div className='mt-4' >
        <h3 className='font-semibold text-2xl leading[60px] md:text-4xl  flex items-center gap-3   '>

           {price}{currency}
            <span className='text-xs md:text-base' >{duration}</span>
        </h3>
       <div className="h-[1px] w-full bg-[#A3A3A3] mt-4"></div>
       
       
    </div>

    <div className="content w-full">
        <h6 className=' mt-4 '>{benifit}</h6>
        {features&&(
          <ul className='text-sm md:text-base font-normal my-6 flex flex-col gap-y-6' >
            {features.map((items)=>(
              <li key={items}  className='flex flex-row gap-5 items-center text-sm md:text-base font-normal' >
                <img src={tick} alt="" />{items}
              </li>

            ))}

          </ul>
        )}

        {buttonText && (
          <button
            onClick={onButtonClick}
            className= {`mt-6 w-full text-base py-2 px-4 rounded-full md:text-lg transform transition-transform
            hover:scale-105  ${buttonStyles || " bg-white   " } `} >
            {buttonText}
          </button>
        )}
       
      
    </div>

</div>
  )
}

export default Card
