export type CartItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
};

export type CartContextType = {
  items: CartItem[];
  addToCart: (product: any, quantity: number) => void;
  removeFromCart: (id: number) => void;
  getTotalPrice: () => string;
};
