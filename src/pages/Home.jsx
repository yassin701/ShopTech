import React from 'react'
import fashion from "../assets/video/fashion.mp4";
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const navigate = useNavigate();
  return (
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
  )
}
