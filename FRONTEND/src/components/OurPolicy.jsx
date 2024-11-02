import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-xs sm:text-sm md:text-sm text-gray-700 mt-20'>
      {/** Policy Items */}
      <PolicyItem 
        imgSrc={assets.exchange_icon} 
        title="Easy Exchange Policy" 
        description="We offer hassle free exchange policy" 
      />
      <PolicyItem 
        imgSrc={assets.quality_icon} 
        title="7 Days Return Policy" 
        description="We provide 7 days free return policy" 
      />
      <PolicyItem 
        imgSrc={assets.support_img} 
        title="Best Customer Support" 
        description="We provide 24/7 customer support" 
      />
    </div>
  )
}

const PolicyItem = ({ imgSrc, title, description }) => (
  <div className='flex flex-col items-center text-center'>
    <img src={imgSrc} className='w-12 mb-5' alt={title} />
    <p className='font-semibold'>{title}</p>
    <p className='text-gray-400'>{description}</p>
  </div>
)

export default OurPolicy
