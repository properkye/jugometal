'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from 'react';

type PriceData = {
  price: number;
};

export type CartItem = {
  _id: number;
  name: string;
  qty: number;
  priceData: PriceData;
  image: string;
};

type CartContextType = {
  cart: CartItem[];
  cartTotalAmount: number;
  cartTotalQuantity: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  decreaseQty: (id: number) => void;
  getTotal: () => void;
  resetCart: () => void;
};

const getInitialCart = (): CartItem[] => {
  if (typeof window !== 'undefined' && localStorage.getItem('cart')) {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  return [];
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(getInitialCart());
  const [cartTotalAmount, setCartTotalAmount] = useState<number>(0);
  const [cartTotalQuantity, setCartTotalQuantity] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (item: CartItem) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem._id === item._id);
    if (itemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].qty += 1;
      setCart(updatedCart);
    } else {
      const newItem = { ...item, qty: 1 };
      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
  };

  const decreaseQty = (id: number) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem._id === id);
    if (itemIndex >= 0) {
      const updatedCart = [...cart];
      if (updatedCart[itemIndex].qty > 1) {
        updatedCart[itemIndex].qty -= 1;
      } else {
        updatedCart.splice(itemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  const getTotal = useCallback(() => {
    let totalQuantity = 0;
    let totalAmount = 0;
  
    cart.forEach((cartItem) => {
      const { qty, priceData } = cartItem;
      totalAmount += qty * priceData.price;
      totalQuantity += qty;
    });
  
    setCartTotalAmount(totalAmount);
    setCartTotalQuantity(totalQuantity);
  }, [cart]);

  const resetCart = () => {
    setCart([]);
    setCartTotalAmount(0);
    setCartTotalQuantity(0);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  };

  useEffect(() => {
    getTotal();
  }, [cart, getTotal]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotalAmount,
        cartTotalQuantity,
        addToCart,
        removeFromCart,
        decreaseQty,
        getTotal,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
