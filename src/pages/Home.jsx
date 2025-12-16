import React from 'react'
import fashion from "../assets/video/fashion.mp4";
import { useNavigate } from 'react-router-dom';
import products from '../data/Product';
import ProductCard from '../Components/ProductCard';



export default function Home() {
  const navigate = useNavigate();
  const specialite = products.slice(0,4)
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
      <div className="py-2 px-6 max-w-7xl mx-auto">
      <h1 className='text-3xl font-bold mt-7 mb-5 flex items-center justify-center '>Our Specialite</h1>
        <p className='text-center text-gray-600  max-w-2xl mx-auto mb-8'>
              Discover some of our best products selected for you.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
           {specialite.map((product)=>(
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
 
 </>
  )
}
