import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../lib/CartSlice";
import { FaTrash } from "react-icons/fa";

export default function CardItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-3 bg-gray-100 p-2 rounded mb-2">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />

      <div className="flex-1">
        <p className="font-semibold">{item.name}</p>
        <p className="text-sm text-gray-500">{item.price} MAD</p>

        {/* Quantity controls */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            className="w-6 h-6 bg-gray-300 rounded font-bold"
          >
            -
          </button>

          <span className="font-semibold">{item.quantity}</span>

          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="w-6 h-6 bg-gray-300 rounded font-bold"
          >
            +
          </button>
        </div>
      </div>

      {/* Remove item */}
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="text-red-500 font-bold cursor-pointer"
      >
        <FaTrash />
      </button>
    </div>
  );
}
