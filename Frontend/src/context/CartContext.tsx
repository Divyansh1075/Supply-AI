import React, { createContext, useContext, useReducer, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  unit: string;
  quantity: number;
  weight: number;
  totalPrice: number;
  supplier: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

type CartAction = 
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_WEIGHT'; payload: { id: string; weight: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      
      if (existingItemIndex >= 0) {
        // Update existing item
        const updatedItems = [...state.items];
        const existingItem = updatedItems[existingItemIndex];
        updatedItems[existingItemIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + newItem.quantity,
          weight: existingItem.weight + newItem.weight,
          totalPrice: (existingItem.quantity + newItem.quantity) * newItem.price
        };
        
        return {
          ...state,
          items: updatedItems,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
          totalAmount: updatedItems.reduce((sum, item) => sum + item.totalPrice, 0),
        };
      } else {
        // Add new item
        const updatedItems = [...state.items, newItem];
        
        return {
          ...state,
          items: updatedItems,
          totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
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
          ? { ...item, weight, quantity: weight, totalPrice: weight * item.price }
          : item
      );
      
      return {
        ...state,
        items: updatedItems,
        totalItems: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
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
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateWeight: (id: string, weight: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const updateWeight = (id: string, weight: number) => {
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
