import React from 'react'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'

export default function ProductCard({ product }) {
  return (
    <div className='bg-white rounded-2xl shadow-2xl hover:shadow-gray-500 transition p-5 relative group mb-10'>

      {/*Product image*/}
      <img
       src={product.image}
       alt={product.name}
       className='w-full h-48 object-cover rounded-2xl'
      />

      {/*Product info */}
      <div className='mt-4 '>
        <h3 className='font-semibold text-lg'>{product.name}</h3>
        <p className='text-gray-600 mt-1'>{product.price} MAD</p>
      </div>

      {/*Add to cart*/}
      <div className='flex items-center justify-center gap-7'>
      <button className='mt-4 w-70 flex items-center justify-center gap-2
                          bg-black text-white py-2 rounded-lg
                          hover:bg-gray-300 hover:text-black transition cursor-pointer'>
      <FaShoppingCart/>
      Add to cart
      </button>
      {/*Wishlist icon*/}
      <button className= ' text-gray-400 hover:text-red-600 mt-7 transition cursor-pointer'>
        <FaHeart size={20} />
      </button>

</div>
    </div>
  )
}
