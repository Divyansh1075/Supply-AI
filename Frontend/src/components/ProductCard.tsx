import React, { useState } from 'react';
import { Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  unit: string;
  discount?: number;
  category: string;
}

const ProductCard = ({ id, name, image, rating, price, unit, discount, category }: ProductCardProps) => {
  const [selectedWeight, setSelectedWeight] = useState(1); // Weight in kg
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  const totalPrice = discountedPrice * selectedWeight;

  const handleAddToCart = () => {
    const product = {
      id,
      name,
      image,
      price: discountedPrice,
      category
    };
    
    addToCart(product, selectedWeight);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const incrementWeight = () => {
    setSelectedWeight(prev => prev + 0.5);
  };

  const decrementWeight = () => {
    if (selectedWeight > 0.5) {
      setSelectedWeight(prev => prev - 0.5);
    }
  };

  return (
    <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 hover:border-[#00E3FF]/30 group">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <div className="absolute top-2 left-2 bg-[#00E3FF] text-[#0B1222] px-2 py-1 rounded-lg text-xs font-bold">
            -{discount}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? 'text-[#2ED47A] fill-current' : 'text-gray-600'
              }`}
            />
          ))}
          <span className="text-gray-400 text-sm ml-2">({rating}.0)</span>
        </div>

        {/* Price and Weight */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              {discount ? (
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-[#00E3FF]">
                    ${discountedPrice.toFixed(2)}/kg
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${price.toFixed(2)}/kg
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-[#00E3FF]">
                  ${price.toFixed(2)}/kg
                </span>
              )}
            </div>
          </div>
          
          {/* Weight selector */}
          <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Weight:</span>
              <span className="text-white font-semibold">{selectedWeight} kg</span>
            </div>
            
            <div className="flex items-center justify-between">
              <button
                onClick={decrementWeight}
                className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                disabled={selectedWeight <= 0.5}
              >
                <Minus className="w-4 h-4 text-white" />
              </button>
              
              <div className="text-center">
                <div className="text-xl font-bold bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
                  ${totalPrice.toFixed(2)}
                </div>
                <div className="text-xs text-gray-400">Total Price</div>
              </div>
              
              <button
                onClick={incrementWeight}
                className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
            isAdded
              ? 'bg-[#2ED47A] text-[#0B1222]'
              : 'bg-[#00E3FF] hover:bg-[#00E3FF]/90 text-[#0B1222]'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{isAdded ? 'Added!' : 'Add to Cart'}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;