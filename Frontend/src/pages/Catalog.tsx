import React, { useState, useEffect } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
import ProductCard from '../components/ProductCard';

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  unit: string;
  image: string;
  stock: number;
  supplier: string;
  rating: number;
  isActive: boolean;
}

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 0 },
    { id: 'vegetables', name: 'Fresh Vegetables', count: 0 },
    { id: 'fruits', name: 'Seasonal Fruits', count: 0 },
    { id: 'herbs', name: 'Herbs & Spices', count: 0 },
    { id: 'grains', name: 'Grains', count: 0 },
    { id: 'dairy', name: 'Dairy', count: 0 },
    { id: 'meat', name: 'Meat', count: 0 }
  ];

  useEffect(() => {
    fetchProducts();
    setIsVisible(true);
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data.products || []);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter products based on selected criteria
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesStock = product.stock > 0; // Only show products in stock
    return matchesCategory && matchesSearch && matchesPrice && matchesStock;
  });

  // Sort products
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

  // Update category counts
  const updatedCategories = categories.map(cat => ({
    ...cat,
    count: cat.id === 'all' 
      ? products.length 
      : products.filter(p => p.category === cat.id && p.stock > 0).length
  }));

  return (
    <div className="min-h-screen bg-[#0B1222] pt-20 pb-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-[#00E3FF]/20 to-[#2ED47A]/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-[#2ED47A]/20 to-[#00E3FF]/20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent animate-gradient">
              Product Catalog
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover premium quality products from verified suppliers with advanced search and filtering capabilities.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-1/4 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 sticky top-24 hover-lift">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="w-5 h-5 text-[#00E3FF] animate-pulse" />
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
                  {updatedCategories.map((category) => (
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
          <div className={`lg:w-3/4 transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            {/* Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-400">
                  Showing <span className="text-[#00E3FF] font-semibold animate-counter">{sortedProducts.length}</span> of <span className="text-[#2ED47A] font-semibold">{products.length}</span> products
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-600 focus:border-[#00E3FF] focus:outline-none transition-all duration-300 hover:border-[#00E3FF]/50"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Sort by Rating</option>
                </select>

                {/* View Mode */}
                <div className="flex items-center space-x-2 bg-gray-800 rounded-lg p-1 hover-lift">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-all duration-300 ${viewMode === 'grid' ? 'bg-[#00E3FF] text-[#0B1222] shadow-lg' : 'text-gray-400 hover:text-white'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-all duration-300 ${viewMode === 'list' ? 'bg-[#00E3FF] text-[#0B1222] shadow-lg' : 'text-gray-400 hover:text-white'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products */}
            {loading ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center space-x-2">
                  <div className="w-4 h-4 bg-[#00E3FF] rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-[#2ED47A] rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-4 h-4 bg-[#00E3FF] rounded-full animate-bounce animation-delay-500"></div>
                  <span className="text-white text-lg ml-4">Loading products...</span>
                </div>
              </div>
            ) : sortedProducts.length > 0 ? (
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sortedProducts.map((product, index) => (
                  <div 
                    key={product._id}
                    className="animate-fade-in-up transform hover:scale-105 transition-all duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <ProductCard 
                      id={product._id}
                      name={product.name}
                      image={product.image}
                      rating={product.rating}
                      price={product.price}
                      unit={product.unit}
                      category={product.category}
                      stock={product.stock}
                      description={product.description}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 animate-fade-in-up">
                <div className="w-24 h-24 bg-gradient-to-r from-[#00E3FF]/20 to-[#2ED47A]/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <div className="text-gray-400 text-lg mb-4">No products found matching your criteria</div>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                    setPriceRange([0, 100]);
                  }}
                  className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] text-[#0B1222] px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
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