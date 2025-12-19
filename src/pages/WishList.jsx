import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart, FaTrash } from "react-icons/fa";
import { addToCart } from '../lib/CartSlice';
import { removeFromWishlist } from "../lib/WishList";
import products from '../data/Product';


export default function WishList() {
  const dispatch = useDispatch();
  const { WishlistItems } = useSelector((state) => state.WishList);

  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <h1 className=" flex items-center justify-center text-3xl font-bold mb-10 gap-4">My Wishlist <FaHeart/></h1>

      {WishlistItems.length > 0 ? (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-4 border-b text-sm font-semibold text-gray-500">
            <div className="col-span-5">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Stock</div>
            <div className="col-span-3 text-right">Actions</div>
          </div>

          {/* Items */}
          {WishlistItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 items-center px-6 py-5 border-b hover:bg-gray-50 transition"
            >
              {/* Product */}
              <div className="col-span-5 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg border"
                />
                <div>
                  <h2 className="font-semibold text-gray-800">
                    {item.name}
                  </h2>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2 font-medium text-gray-700">
                {item.price} MAD
              </div>

              {/* Stock */}
              <div className="col-span-2">
                <span className="text-green-600 font-medium">
                  In Stock
                </span>
              </div>

              {/* Actions */}
              <div className="col-span-3 flex items-center justify-end gap-4">
             
                <button
                  onClick={() => dispatch(removeFromWishlist(item.id))}
                  className="text-gray-400 hover:text-red-500 transition"
                >
                  <FaTrash size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-20">
          Your wishlist is empty
        </p>
      )}
    </div>
  );
}
