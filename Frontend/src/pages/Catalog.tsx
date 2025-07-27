import React, { useState } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  const categories = [
    { id: 'all', name: 'All Products', count: 25 },
    { id: 'vegetables', name: 'Fresh Vegetables', count: 13 },
    { id: 'fruits', name: 'Seasonal Fruits', count: 8 },
    { id: 'herbs', name: 'Herbs & Spices', count: 4 }
  ];

  const products = [
    {
      id: 1,
      name: "Premium Organic Tomatoes",
      image: "https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      price: 12.99,
      unit: "1kg",
      discount: 15,
      category: "vegetables"
    },
    {
      id: 2,
      name: "Fresh Green Lettuce",
      image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=600&h=400&fit=crop&crop=center",
      rating: 4,
      price: 8.50,
      unit: "500g",
      category: "vegetables"
    },
    {
      id: 3,
      name: "Organic Carrots Bundle",
      image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      price: 6.75,
      unit: "1kg",
      discount: 10,
      category: "vegetables"
    },
    {
      id: 4,
      name: "Fresh Bell Peppers Mix",
      image: "https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      price: 15.20,
      unit: "1kg",
      category: "vegetables"
    },
    {
      id: 5,
      name: "Premium Broccoli Crowns",
      image: "https://images.pexels.com/photos/47347/broccoli-vegetable-food-healthy-47347.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      price: 9.99,
      unit: "500g",
      category: "vegetables"
    },
    {
      id: 6,
      name: "Organic Spinach Leaves",
      image: "https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      price: 7.25,
      unit: "500g",
      discount: 20,
      category: "vegetables"
    },
    {
      id: 7,
      name: "Sweet Red Apples",
      image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      price: 11.50,
      unit: "1kg",
      category: "fruits"
    },
    {
      id: 8,
      name: "Fresh Bananas Bunch",
      image: "https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      price: 4.99,
      unit: "1kg",
      category: "fruits"
    },
    {
      id: 9,
      name: "Organic Basil Herbs",
      image: "https://images.pexels.com/photos/4198105/pexels-photo-4198105.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      price: 3.75,
      unit: "100g",
      category: "herbs"
    },
    {
      id: 10,
      name: "Fresh Rosemary Sprigs",
      image: "https://images.pexels.com/photos/4198017/pexels-photo-4198017.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 4,
      price: 5.25,
      unit: "100g",
      discount: 5,
      category: "herbs"
    },
    {
      id: 11,
      name: "Premium Oranges",
      image: "https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      price: 8.99,
      unit: "1kg",
      category: "fruits"
    },
    {
      id: 12,
      name: "Fresh Strawberries",
      image: "https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=600",
      rating: 5,
      price: 14.50,
      unit: "500g",
      discount: 25,
      category: "fruits"
    },
    {
      id: 13,
      name: "Crispy Iceberg Lettuce",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=600&h=400&fit=crop&crop=center",
      rating: 5,
      price: 6.75,
      unit: "1kg",
      discount: 10,
      category: "vegetables"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="min-h-screen bg-[#0B1222] pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
              Product Catalog
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover premium quality products from verified suppliers. 
            Browse our extensive catalog with smart filtering and AI-powered recommendations.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 sticky top-24">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="w-5 h-5 text-[#00E3FF]" />
                <h3 className="text-xl font-semibold text-white">Filters</h3>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-2">Search Products</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg border border-gray-600 focus:border-[#00E3FF] focus:outline-none"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">Categories</label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-[#00E3FF]/20 text-[#00E3FF] border border-[#00E3FF]/30'
                          : 'text-gray-300 hover:bg-gray-700/30'
                      }`}
                    >
                      <span>{category.name}</span>
                      <span className="text-xs bg-gray-600 px-2 py-1 rounded">{category.count}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:w-3/4">
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">
                  Showing {sortedProducts.length} of {products.length} products
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-[#00E3FF] focus:outline-none"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Sort by Rating</option>
                </select>

                {/* View Mode */}
                <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#00E3FF] text-[#0B1222]' : 'text-gray-400'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#00E3FF] text-[#0B1222]' : 'text-gray-400'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {sortedProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 text-lg">No products found matching your criteria.</div>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                    setPriceRange([0, 100]);
                  }}
                  className="mt-4 text-[#00E3FF] hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;