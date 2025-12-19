import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import CartSidbar from './CartSidbar'

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const WishlistItems = useSelector(
    (state) => state.WishList.WishlistItems || []
  )

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur shadow">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

          {/* Logo */}
          <div className="text-2xl font-bold">
            <Link to="/">ShopTech</Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 font-medium text-gray-700">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/catalogue" className="hover:text-black">Catalog</Link>
          </div>

          {/* Icons (ALWAYS visible) */}
          <div className="flex items-center gap-6 relative">

            {/* Wishlist */}
            <Link to="/WishList" className="relative text-xl">
              <FaHeart />
              {WishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {WishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <button
              className="relative text-xl"
              onClick={() => setOpenCart(true)}
            >
              <FaShoppingCart />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </button>

            {/* Burger (mobile only) */}
            <button
              className="md:hidden text-xl"
              onClick={() => setOpenMenu(!openMenu)}
            >
              {openMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (ONLY links) */}
        {openMenu && (
          <div className="md:hidden bg-white shadow px-6 py-4 space-y-4">
            <Link
              to="/"
              onClick={() => setOpenMenu(false)}
              className="block font-medium"
            >
              Home
            </Link>

            <Link
              to="/catalogue"
              onClick={() => setOpenMenu(false)}
              className="block font-medium"
            >
              Catalog
            </Link>
          </div>
        )}
      </nav>

      <CartSidbar open={openCart} onClose={() => setOpenCart(false)} />
    </>
  )
}
