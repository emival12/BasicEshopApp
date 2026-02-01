import React, { createContext, useContext, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: any, quantity: number) => void;
  removeFromCart: (id: number) => void;
  getTotalPrice: () => string;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (product: any, quantity: number) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [...currentItems, { ...product, quantity: quantity }];
    });
  };

  const removeFromCart = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    const total = items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0,
    );
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");

  return context;
};
