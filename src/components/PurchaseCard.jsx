import React from 'react'
import purchase from '../constants/purchase'
import Card from './shared/Card'


function PurchaseCard() {
  return (
    <div className=' grid grid-cols-1  lg:grid-cols-3 gap-5 mt-20 '>
      {purchase.map((card)=>(
        <Card
              key={card.id}
              plan={card.plan} 
              imageUrl={card.imageUrl}
              imgStyle={card.imgStyle}
              badgeName={card.badgeName}
              price={card.price}
              currency={card.currency}
              duration={card.duration}
              benifit={card.benifit}
              buttonStyles={card.buttonStyles}
              buttonText={card.buttonText}
              badgeColor={card.badgeColor}
              features={card.content}
              cardStyles={card.cardStyles}
             
        
        />
      ))
      
    }


         


      
    </div>
  )
}

export default PurchaseCard
