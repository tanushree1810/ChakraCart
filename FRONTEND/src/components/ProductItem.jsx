import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {

    const {currency}=useContext(ShopContext)
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}> 
        <div className='overflow-hidden'>
        <img
    className='hover:scale-110 transition ease-in-out'
    src={image[0]}
    style={{
        width: '250px', // Set your desired width
        height: '250px', // Set your desired height
        objectFit: 'cover', // Ensures the image covers the set dimensions without distortion
        transition: 'transform 0.3s ease-in-out', // Transition for scaling effect
    }}
/>

        </div>

        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency} {price}</p>
    </Link>
  )
}

export default ProductItem