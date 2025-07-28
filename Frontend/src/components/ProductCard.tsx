import React, { useState } from 'react';
import { Star, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  price: number;
  unit: string;
  category: string;
  stock: number;
  description: string;
  discount?: number;
}

const ProductCard = ({ id, name, image, rating, price, unit, discount, category, stock, description }: ProductCardProps) => {
  const [selectedWeight, setSelectedWeight] = useState(1); // Weight in kg
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const discountedPrice = discount ? price * (1 - discount / 100) : price;
  const totalPrice = discountedPrice * selectedWeight;

  const handleAddToCart = () => {
    const cartItem = {
      id,
      name,
      image,
      price: discountedPrice,
      unit,
      quantity: selectedWeight,
      weight: selectedWeight,
      totalPrice: discountedPrice * selectedWeight,
      supplier: 'unknown' // We don't have supplier info in ProductCard props
    };
    
    addToCart(cartItem);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const incrementWeight = () => {
    if (selectedWeight < stock) {
      setSelectedWeight(prev => Math.min(prev + 0.5, stock));
    }
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
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">{description}</p>
        
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
                    ${discountedPrice.toFixed(2)}/{unit}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${price.toFixed(2)}/{unit}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-[#00E3FF]">
                  ${price.toFixed(2)}/{unit}
                </span>
              )}
            </div>
          </div>
          
          {/* Quantity selector */}
          <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Quantity:</span>
              <span className="text-white font-semibold">{selectedWeight} {unit}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-xs">Stock:</span>
              <span className="text-gray-300 text-xs">{stock} {unit}</span>
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
                disabled={selectedWeight >= stock}
                className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          disabled={stock === 0 || selectedWeight > stock}
          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
            isAdded
              ? 'bg-[#2ED47A] text-[#0B1222]'
              : 'bg-[#00E3FF] hover:bg-[#00E3FF]/90 text-[#0B1222]'
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>
            {stock === 0 ? 'Out of Stock' : isAdded ? 'Added!' : 'Add to Cart'}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;