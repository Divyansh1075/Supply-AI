import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface CartItem {
  id: number;
  name: string;
  image: string;
  pricePerKg: number;
  weight: number;
  totalPrice: number;
  category: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

type CartAction = 
  | { type: 'ADD_TO_CART'; payload: { product: any; weight: number } }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_WEIGHT'; payload: { id: number; weight: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, weight } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // Update existing item
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          weight: updatedItems[existingItemIndex].weight + weight,
          totalPrice: (updatedItems[existingItemIndex].weight + weight) * product.price
        };
        
        return {
          ...state,
          items: updatedItems,
          totalItems: updatedItems.reduce((sum, item) => sum + item.weight, 0),
          totalAmount: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
        };
      } else {
        // Add new item
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          image: product.image,
          pricePerKg: product.price,
          weight: weight,
          totalPrice: weight * product.price,
          category: product.category,
        };
        
        const updatedItems = [...state.items, newItem];
        
        return {
          ...state,
          items: updatedItems,
          totalItems: updatedItems.reduce((sum, item) => sum + item.weight, 0),
          totalAmount: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
        };
      }
    }
    
    case 'REMOVE_FROM_CART': {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((sum, item) => sum + item.weight, 0),
        totalAmount: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
      };
    }
    
    case 'UPDATE_WEIGHT': {
      const { id, weight } = action.payload;
      const updatedItems = state.items.map(item => 
        item.id === id 
          ? { ...item, weight, totalPrice: weight * item.pricePerKg }
          : item
      );
      
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((sum, item) => sum + item.weight, 0),
        totalAmount: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
      };
    }
    
    case 'CLEAR_CART': {
      return initialState;
    }
    
    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addToCart: (product: any, weight: number) => void;
  removeFromCart: (id: number) => void;
  updateWeight: (id: number, weight: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: any, weight: number) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, weight } });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateWeight = (id: number, weight: number) => {
    dispatch({ type: 'UPDATE_WEIGHT', payload: { id, weight } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, removeFromCart, updateWeight, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
