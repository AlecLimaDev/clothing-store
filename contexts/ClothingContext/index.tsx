import { createContext, useState } from "react";

export const ClothingContext: any = createContext({});

interface ClothingProps {
  handleAddItemToCart?: (url: any, name: string, price: number) => void;
  handleRemoveItemFromCart?: (clickedItemIndex: any) => void;
  children?: any;
}

export const ClothingProvider: React.FC<ClothingProps> = ({ children }) => {
  const [cart, setCart] = useState<any>([]);

  function handleAddItemToCart(url: any, name: string, price: number) {
    const itemObject = { url, name, price };
    setCart([...cart, itemObject]);
  }

  function handleRemoveItemFromCart(clickedItemIndex: any) {
    const filteredCart = cart.filter(
      (cartItem: any) => cart.indexOf(cartItem) !== clickedItemIndex
    );
    setCart(filteredCart);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <ClothingContext.Provider
      value={{ cart, handleAddItemToCart, handleRemoveItemFromCart, clearCart }}
    >
      {children}
    </ClothingContext.Provider>
  );
};
