import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState(''); // Size state to store selected size

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                onClick={() => setImage(item)}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} />
          </div>
        </div>

        {/* product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} className='w-3 5' />
            <img src={assets.star_icon} className='w-3 5' />
            <img src={assets.star_icon} className='w-3 5' />
            <img src={assets.star_icon} className='w-3 5' />
            <img src={assets.star_dull_icon} className='w-3 5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} // Conditional class for size
                  key={index}
                  onClick={() => setSize(item)} // Update size on click
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button 
          onClick={()=>addToCart(productData._id,size)}
          className='bg-black text-white px-8 py-8 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5'/>
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on Delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* description and review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6  py-6 text-sm text-gray-500'>
           <p>A specialized e-commerce website dedicated to Naruto merchandise offers fans a unique and immersive shopping experience centered around their favorite anime. From clothing and accessories to collectible items and home decor, the platform features a wide range of products inspired by iconic Naruto characters, symbols, and moments from the series. The website's design reflects the vibrant and dynamic energy of Naruto, with themed categories and curated collections that cater to both casual fans and hardcore enthusiasts. With user-friendly navigation, secure payment options, and exclusive limited-edition items, the store becomes the go-to destination for anyone looking to express their love for the Naruto universe.</p>
           <p>Additionally, the website includes personalized recommendations based on popular characters like Naruto, Sasuke, and Kakashi, ensuring that shoppers can easily find items that resonate with their preferences. Engaging features like fan art displays, product reviews, and community forums allow users to connect with fellow Naruto fans. Regular updates on new releases and special offers keep the shopping experience fresh and exciting, making this e-commerce site a hub for Naruto lovers to celebrate their fandom in style.</p>
        </div>
      </div>
      {/* related products */}
      <RelatedProducts category={productData?.category} subCategory={productData?.subCategory} />

    </div>
  ) : <div className='opacity-0'></div>;
}

export default Product;
