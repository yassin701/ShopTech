import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FaHeart } from 'react-icons/fa'

export default function WishList() {
  const  [WishlistItems , setWishlistItems]  = useState([])
  return (
    <div className='max-w-7xl mx-auto py-24'>
      <h1 className='flex items-center justify-center text-2xl font-bold mb-6 gap-5'>My WishList <FaHeart /></h1>
      {WishlistItems.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {WishlistItems.map((item) => (
            <div key={item.id}
              className='bg-white shadow rounded p-4'>
              <img
                src={item.image}
                alt={item.name}
              
              />
              <h2 className='font-semibold '>{item.name}</h2>
              <p className='text-gray-500'>{item.price} MAD</p>
            </div>
          ))}
        </div>
      ) : (
        <p className= 'flex text-gray-400 items-center justify-center text-center mt-20 gap-4'>
          Your WishLiat is empty <FaHeart size={20} />
        </p>
      )}
    </div>
  )

}
