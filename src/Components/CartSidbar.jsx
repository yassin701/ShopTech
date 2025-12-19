import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} from "../lib/CartSlice";
import { FaTrash } from "react-icons/fa";

export default function CartSidebar({ open, onClose }) {
    const dispatch = useDispatch();

    const { cartItems, totalQuantity, totalPrice } = useSelector(
        (state) => state.cart
    );

    return (
        <div
            className={`fixed inset-0 z-50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black/90 transition-opacity ${open ? "opacity-100" : "opacity-0"
                    }`}
                onClick={onClose}
            />

{/* Sidebar */}
<div
  className={`fixed right-0 top-16 w-96 h-[calc(100vh-4rem)] bg-white p-4 flex flex-col transform transition-transform duration-300 ${
    open ? "translate-x-0" : "translate-x-full"
  }`}
>
  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-bold">My Cart</h2>

    <button
      onClick={onClose}
      className="text-xl font-bold text-gray-500 hover:text-black"
    >
      ✕
    </button>
  </div>

                {/* Cart content */}
                <div className="flex-1 overflow-y-auto">
                    {cartItems.length > 0 ? (
                        cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-3 bg-gray-100 p-2 rounded mb-2"
                            >
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

                                        <span className="font-semibold">
                                            {item.quantity}
                                        </span>

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
                        ))
                    ) : (
                        <p className="text-gray-500 text-center mt-10">
                            Your cart is empty 🛒
                        </p>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="mt-4 border-t pt-4 mb-4">
                        <p className="font-semibold">
                            Total Items: {totalQuantity}
                        </p>
                        <p className="font-semibold">
                            Total Price: {totalPrice} MAD
                        </p>
                    </div>
                )}

                {/* Checkout */}
                <button
                    className="mt-auto w-full bg-black hover:bg-gray-500 text-white py-2 rounded font-semibold"
                >
                    Checkout
                </button>

            </div>
        </div>
    );
}
