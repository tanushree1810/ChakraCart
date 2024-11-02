import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[600px]' src={assets.about_img}/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Chakra Cart, we believe shopping should be more than just buying products – it should be an experience that excites, delights, and resonates with who you are. We aim to bring joy through carefully curated collections that reflect the latest trends and timeless designs.</p>
          <p>Our store is a one-stop destination for high-quality footwear, accessories, and lifestyle essentials. Whether you’re stepping out in stylish, character-inspired shoes or adding a touch of anime to your routine with our unique fragrances, we’ve got something for everyone.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>To offer products that combine creativity, comfort, and quality, ensuring every purchase leaves you happy and satisfied. We take pride in delivering joy with every package, because your satisfaction is our ultimate reward.</p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-700'>Delivering premium products through rigorous quality checks for unmatched style, comfort, and durability.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-700'>Enjoy a hassle-free shopping experience with easy navigation and quick access to products.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-700'>Experience responsive, customer-first support that ensures your satisfaction every step of the way.</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About