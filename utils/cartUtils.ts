import { CartItem } from "@/types/types";

export const calculateTotal = (items: CartItem[]) => {
  const total = items.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0,
  );
  return total.toFixed(2);
};
