import React from 'react'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

export default function ProductCard({ product }) {
  return (
    <div className='bg-white rounded-2xl shadow-2xl hover:shadow-gray-500 transition p-5 relative group mb-10'>

      {/*Wishlist icon*/}
      <button className='absulote top-4 right-4 text-gray-400 hover:text-red-500 transition cursor-pointer'>
        <FaHeart size={20} />
      </button>

      {/*Product image*/}
      <img
       src={product.image}
       alt={product.name}
       className='w-full h-48 object-cover rounded-xl'
      />

      {/*Product info */}
      <div className='mt-4'>
        <h3 className='font-semibold text-lg'>{product.name}</h3>
        <p className='text-gray-600 mt-1'>{product.price} MAD</p>
      </div>

      {/*Add to cart*/}
      <button className='mt-4 w-full flex items-center justify-center gap-2
                          bg-black text-white py-2 rounded-lg
                          hover:bg-gray-800 transition cursor-pointer'>
      <FaShoppingCart/>
      Add to cart
      </button>

    </div>
  )
}
