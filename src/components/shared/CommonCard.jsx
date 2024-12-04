import React from 'react'

const CommonCard= ({
    tittle,
    image,
    content,
    cardStyle,
    imageStyle,
    contentStyle,
    titleStyle
}) =>{
  return (
    <div className={`card flex flex-col  ${cardStyle} `}>
        {image&&(<div className={`  ${imageStyle}`} >
            <img src={image} alt="" className=" w-auto h-auto" />
        </div>)}
    
        {tittle&&(<h3 className={` ${titleStyle} `}>
            {tittle}
        </h3>)}
        {content&&(<p className={` ${contentStyle}`}>
            {content}
        </p>)}
    </div>

  )
}

export default CommonCard
