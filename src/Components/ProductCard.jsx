import React from 'react';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../lib/CartSlice';
import { AddWishlist } from "../lib/WishList";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  // جيب wishlistItems من Redux
  const WishlistItems = useSelector(
    (state) => state.WishList.WishlistItems || []
  );

  // هنا دير check واش المنتج موجود فالـ wishlist
  const isLiked = WishlistItems.some((item) => item.id === product.id);

  return (
    <div className='bg-white rounded-2xl shadow-2xl hover:shadow-gray-500 transition p-5 relative group mb-10'>
      {/*Product image*/}
      <img
       src={product.image}
       alt={product.name}
       className='w-full h-48 object-cover rounded-2xl'
      />

      {/*Product info*/}
      <div className='mt-4 '>
        <h3 className='font-semibold text-lg'> {product.name}</h3>
        <p className='text-gray-600 mt-1'>{product.price} MAD</p>
      </div>

      {/*Add to cart & wishlist*/}
      <div className='flex items-center justify-center gap-7'>
        <button 
          onClick={() => dispatch(addToCart(product))} 
          className='mt-4 w-70 flex items-center justify-center gap-2
                     bg-black text-white py-2 rounded-lg
                     hover:bg-gray-300 hover:text-black transition cursor-pointer'>
          <FaShoppingCart/>
          Add to cart
        </button>

        <button 
          onClick={() => dispatch(AddWishlist(product))}
          className={`mt-7 transition cursor-pointer ${
            isLiked ? 'text-black' : 'text-gray-400'
          }`}
        >
          <FaHeart size={20} />
        </button>
      </div>
    </div>
  );
}
