import React from 'react'
import fashion from "../assets/video/fashion.mp4";
import { useNavigate } from 'react-router-dom';
import products from '../data/Product';
import ProductCard from '../Components/ProductCard';
import { FaTruck, FaClock, FaMapMarkedAlt } from "react-icons/fa";



export default function Home() {
  const navigate = useNavigate();
  const shuffledProducts = [...products].sort(() => 0.5 - Math.random());
  const randomProducts = shuffledProducts.slice(0, 4);

  return (
    <>
      <section className='relative h-screen overflow-hidden'>
        {/*Video*/}
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={fashion} autoPlay loop muted playsInline
        />

        {/*Dark Overlay*/}
        <div className='absolute inset-0 bg-black/50' />
        {/*Content*/}
        <div className='relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 '>
          <p className="mt-4 text-lg md:text-xl max-w-xl">
            Modern fashion for smart people.
            Discover clothing that fits your style and your lifestyle.
          </p>

          <div className='mt-8'>
            <button onClick={() => navigate("/catalogue")} className="px-6 py-3 border border-white rounded-lg cursor-pointer hover:bg-white hover:text-black transition">
              View Catalogue
            </button>

          </div>
        </div>
      </section>

      {/*Section About us*/}
      <section className='py-15'>
        <div className='max-w-7xl mx-auto px-6 bg-white/-10 flex flex-col md:flex-row items-center gap-10'>

          <div className=" flex-1 flex justify-center relative md:justify-start">
            <img
              src="/images/About.png"
              alt="About us"
              className="w-64 md:w-100 h-auto rounded-xl"
            />
          </div>

          {/*Text*/}
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-3xl font-bold mb-4'>About Us</h1>
            <p className="text-gray-600 leading-relaxed text-lg">
              Welcome to <span className="font-semibold text-black">ShopTech Studio</span>,
              where creativity meets innovation. We specialize in building modern,
              stylish, and user-friendly e-commerce experiences designed to inspire
              confidence and simplicity.
              <br /><br />
              Our mission is to bring fashion closer to everyone by offering carefully
              selected products that fit your lifestyle, reflect your personality,
              and adapt to your everyday needs. We believe that great style should be
              accessible, functional, and timeless.
              <br /><br />
              At ShopTech Studio, we focus on quality, modern design, and a smooth
              shopping experience—because fashion is not just about what you wear,
              but how it makes you feel.
            </p>
          </div>
        </div>
      </section>

      {/*ligne*/}
      <div className='w-full h-px bg-gray-300 my-5'></div>


      {/*section best products*/}
      <section className="py-2  px-6 max-w-7xl mx-auto">
        <h1 className='text-3xl font-bold mt-7 mb-5 flex items-center justify-center '>Our Best Products</h1>
        <p className='text-center text-gray-600  max-w-2xl mx-auto mb-8'>
          Discover some of our best products selected for you.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {randomProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>


      {/*ligne*/}
      <div className='w-full h-px bg-gray-300 my-16'></div>


      {/*section delivery*/}

      <section className=" py-10 my-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Fast & Reliable Delivery
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

            {/* Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <FaTruck className="text-4xl mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2">Nationwide Delivery</h3>
              <p className="text-gray-600">
                We deliver your orders anywhere with secure and careful shipping.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <FaClock className="text-4xl mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">
                Get your products delivered within 24–72 hours.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
              <FaMapMarkedAlt className="text-4xl mx-auto mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2">Easy Tracking</h3>
              <p className="text-gray-600">
                Track your order easily from confirmation to delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
