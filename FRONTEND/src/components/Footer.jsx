import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
             <div>
                <img src={assets.logo} className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>Join our book-loving community and unlock a world of literary treasures! Subscribe now for exclusive deals, exciting updates, and the latest arrivals right in your inbox! Don’t miss out on the adventure—start your reading journey today!</p>
             </div>

             <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
             </div>

             <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>contact@chakracart.com</li>
                </ul>
             </div>
        </div>
        <div>
            <hr/>
            <p className='py-5 text-sm text-center'>Copyright 2024@ chakracart.com- All Right Reserved. </p>
        </div>
    </div>
  )
}

export default Footer