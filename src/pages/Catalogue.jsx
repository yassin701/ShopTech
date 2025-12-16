import React from 'react'
import products from "../data/Product"; 
import ProductCard from '../Components/ProductCard'



export default function Catalogue() {
  return (
    <div className='pt-24 px-6 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold mb-10 flex items-center justify-center'>Catalogue</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((product)=>(
          <ProductCard key={product.id} product={product}/>

        ))}
      </div>
    </div>
  )
}
