import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import CartSidbar from './CartSidbar'

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);

    // 🔥 Get totalQuantity from Redux
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
    <nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur shadow">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/">ShopTech</Link>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-black transition">Home</Link>
          <Link to="/catalogue" className="hover:text-black transition">Catalogue</Link>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          < Link to="/WishList" className="text-xl hover:text-black transition">
           
            <FaHeart />
          </Link>

          <button
            className= "relative text-xl hover:text-black cursor-pointer transition" 
            onClick={() => setOpenCart(true)}
          >
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
           {totalQuantity}
            </span>
          </button>
        </div>
      </div>

     
    </nav>
     <CartSidbar open={openCart} onClose={() => setOpenCart(false)} />
     </>
  )
}
