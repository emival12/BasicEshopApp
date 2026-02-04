import { CartItem } from "@/types/types";
import { calculateTotal } from "@/utils/cartUtils";

describe("Cart Utilities", () => {
  test("should calculate the total price correctly", () => {
    const mockItems: CartItem[] = [
      {
        id: 1,
        name: "Prodotto A",
        price: "10.00",
        quantity: 2,
        image: "",
      },
      {
        id: 2,
        name: "Prodotto B",
        price: "5.00",
        quantity: 1,
        image: "",
      },
    ];

    const result = calculateTotal(mockItems);
    expect(result).toBe("25.00");
  });
});
