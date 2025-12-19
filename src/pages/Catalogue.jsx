import React, { useState } from 'react';
import products from '../data/Product';
import ProductCard from '../Components/ProductCard';

export default function Catalogue() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Jackets", "Tops", "Pants", "Shoes", "Accessories"];

  const filteredProducts = products
    .filter(product =>
      selectedCategory === "All" ? true : product.category === selectedCategory
    )
    .filter(product =>
      product.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

  return (
    <div className='pt-24 px-6 max-w-7xl mx-auto'>
      <h1 className='text-3xl font-bold mb-10 flex items-center justify-center'>Catalogue</h1>

      {/* Category + Search */}
      <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-8'>
        {/* Category dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='border rounded-lg px-4 py-2 w-full md:w-60'
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Search input */}
        <input
          type="text"
          placeholder='Search product...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='border rounded-lg px-4 py-2 w-full md:w-72 focus:outline-none'
        />
      </div>

      {/* Grid of products */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            Product not found.
          </p>
        )}
      </div>

    </div>
  );
}
