import React from 'react'

const CommonCard= ({
    tittle,
    image,
    content,
    cardStyle,
    imageStyle,
    contentStyle,
    titleStyle,
    wrapStyle,
    imageDimentions,
}) =>{
  return (
    <div className={`${wrapStyle}`} >
        <div className={`card flex flex-col  ${cardStyle} `}>
        {image&&(<div className={`  ${imageStyle}`} >
            <img src={image} alt="" className={`${imageDimentions}`} />
        </div>)}
    
        {tittle&&(<h3 className={` ${titleStyle} `}>
            {tittle}
        </h3>)}
        {content&&(<p  style={{lineHeight : "32px"}} className={`${contentStyle}  w-[80%] text-gray-800`}>
            {content}
        </p>)}
    </div>

    </div>
  )
}

export default CommonCard
