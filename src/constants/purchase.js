import boxicon from '../assets/package.png'

const purchase= [
    

        

            {
              id:'1',
              imgStyle:'opacity-65',
              imageUrl: boxicon ,
              price:'Free',
              currency:'',
              duration:'',
              benifit:'with free plan you get',
              buttonStyles:" bg-white backdrop-blur-sm shadow-card text-gray-500 " ,
              content:[
                "Access to limited categories",
                "Access to limited components",
                "Limited filter & search results",
                "Limited boards",
                "Old website versions",
                

              ],
              buttonText:'Join for free',
              
            },
            {
              id:'2',
              plan:"premium", 
              imageUrl: boxicon ,
              badgeName:'popular',
              price:'120',
              currency:'AED',
              duration:'/month',
              benifit:'with pro plan you get',
              buttonStyles:"bg-red-600 text-white  " ,
              content:[
                "Access to all categories",
                "Access to all components",
                "Unlimited filter & search results",
                "Unlimited boards",
                "Mobile website previews",
                
                "Screens download",
                "‘Hire me’ button on your profile",
                "Ads-free",
                "25% Discount on a Webflow Plan",
              ],
              buttonText:'purchase',
              badgeColor:"bg-red-600",
              cardStyles:'shadow-[0px_0px_4px_0px_rgba(236,6,6,1)] hover:shadow-[0px_0px_8px_0px_rgba(236,6,6,1)] ',
            },
            {
              id:'3',
              plan:"premium", 
              imageUrl:'../../assets/package.png',
              badgeName:'most purchased',
              price:'200',
              currency:'AED',
              duration:'/month',
              benifit:'with premium plan you get',
              buttonStyles:" bg-amber-500 text-white  " ,
              content:[
                "Access to all categories",
                "Access to all components",
                "Unlimited filter & search results",
                "Unlimited boards",
                "Mobile website previews",
                "Unlimited filter & search results",
               
                "Old website versions",
                "Screens download",
                "‘Hire me’ button on your profile",
                "Ads-free",
                "25% Discount on a Webflow Plan",
              ],
              buttonText:'purchase',
              
            },
       
        
       
    
]
export default purchase;