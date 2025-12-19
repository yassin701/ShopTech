import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import CartSidbar from './CartSidbar'

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);

  // Cart quantity
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // Wishlist items
  const WishlistItems = useSelector((state) => state.WishList.WishlistItems || []);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur shadow">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <Link to="/">ShopTech</Link>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-black transition">Home</Link>
            <Link to="/catalogue" className="hover:text-black transition">Catalog</Link>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6 relative">

            {/* Wishlist */}
            <Link to="/WishList" className="relative text-xl hover:text-black transition">
              <FaHeart />
              {WishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {WishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button
              className="relative text-xl hover:text-black cursor-pointer transition"
              onClick={() => setOpenCart(true)}
            >
              <FaShoppingCart />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-black text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>

          </div>
        </div>
      </nav>

      <CartSidbar open={openCart} onClose={() => setOpenCart(false)} />
    </>
  )
}
