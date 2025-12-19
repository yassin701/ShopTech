import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FaTrash } from 'react-icons/fa'
import { removeFromWishlist } from "../lib/WishList"

export default function WishList() {
  const dispatch = useDispatch();
  const { WishlistItems } = useSelector((state) => state.WishList);

  return (
    <div className='max-w-7xl mx-auto py-24'>
      <h1 className='flex items-center justify-center text-2xl font-bold mb-6 gap-3'>
        My WishList
      </h1>

      {WishlistItems.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {WishlistItems.map((item) => (
            <div key={item.id} className='bg-white rounded-xl shadow p-4 flex flex-col items-center'>
              
              {/* Product image */}
              <img
                src={item.image}
                alt={item.name}
                className='w-full h-48 object-cover rounded-xl mb-4'
              />

              {/* Product info */}
              <h2 className='font-semibold text-lg'>{item.name}</h2>
              <p className='text-gray-500 mb-4'>{item.price} MAD</p>

              {/* Remove button */}
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className='w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition'
              >
                <FaTrash /> Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className='flex text-gray-400 items-center justify-center text-center mt-20 gap-2'>
          Your WishList is empty
        </p>
      )}
    </div>
  )
}
