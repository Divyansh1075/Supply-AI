import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { state, removeFromCart, updateWeight, clearCart } = useCart();

  const handleWeightChange = (id: number, newWeight: number) => {
    if (newWeight > 0) {
      updateWeight(id, newWeight);
    }
  };

  const incrementWeight = (id: number, currentWeight: number) => {
    handleWeightChange(id, currentWeight + 0.5);
  };

  const decrementWeight = (id: number, currentWeight: number) => {
    if (currentWeight > 0.5) {
      handleWeightChange(id, currentWeight - 0.5);
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0B1222] pt-20 px-4">
        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="w-32 h-32 bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="w-16 h-16 text-[#0B1222]" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-gray-400 mb-8">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link
            to="/catalog"
            className="bg-[#00E3FF] text-[#0B1222] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00E3FF]/90 transition-all transform hover:scale-105 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1222] pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Shopping Cart</h1>
            <p className="text-gray-400">
              {state.totalItems} kg of items in your cart
            </p>
          </div>
          <Link
            to="/catalog"
            className="text-[#00E3FF] hover:text-[#00E3FF]/80 transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Cart Items</h2>
                <button
                  onClick={clearCart}
                  className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Cart
                </button>
              </div>

              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-700/30 rounded-xl p-4 border border-gray-600 hover:border-[#00E3FF]/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">
                          {item.name}
                        </h3>
                        <p className="text-gray-400 text-sm mb-2">
                          ${item.pricePerKg.toFixed(2)} per kg
                        </p>
                        <span className="inline-block px-2 py-1 bg-[#00E3FF]/20 text-[#00E3FF] text-xs rounded-full">
                          {item.category}
                        </span>
                      </div>

                      {/* Weight Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decrementWeight(item.id, item.weight)}
                          className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                          disabled={item.weight <= 0.5}
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        
                        <div className="text-center min-w-[80px]">
                          <div className="text-white font-semibold">
                            {item.weight} kg
                          </div>
                        </div>
                        
                        <button
                          onClick={() => incrementWeight(item.id, item.weight)}
                          className="w-8 h-8 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right min-w-[100px]">
                        <div className="text-xl font-bold bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
                          ${item.totalPrice.toFixed(2)}
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/20 rounded-2xl p-6 border border-gray-700 sticky top-24">
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Total Weight:</span>
                  <span>{state.totalItems} kg</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal:</span>
                  <span>${state.totalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Shipping:</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax (8%):</span>
                  <span>${(state.totalAmount * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-600 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span className="text-white">Total:</span>
                    <span className="bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] bg-clip-text text-transparent">
                      ${(state.totalAmount * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#00E3FF] to-[#2ED47A] text-[#0B1222] py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity transform hover:scale-105">
                Proceed to Checkout
              </button>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">
                  Free shipping on orders over $50
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
