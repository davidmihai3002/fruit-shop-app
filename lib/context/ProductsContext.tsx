import fruitDishes, { FruitDish } from "@/hard-coded/hardCodedValues";
import { createContext, useCallback, useEffect, useState } from "react";
export interface ProductsContextProps {
  products: FruitDish[] | null;
  cartItems: FruitDish[];
  setCartItems: React.Dispatch<React.SetStateAction<FruitDish[]>>;
  addToCart: (productId: number)=> void;
  cartTotal: () => number
}

export const ProductsContext = createContext<ProductsContextProps | null>(null);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<FruitDish[] | null>(null);
  const [cartItems, setCartItems] = useState<FruitDish[]>([]);

const addToCart = useCallback((productId: number) => {
  const productToCart = products?.find((product) => product.id === productId);
  
  if (productToCart) {
    setCartItems((prev) => {
      const existingItem = prev.find(item => item.id === productToCart.id);
      
      if (existingItem) {
        return prev.map(item =>
          item.id === productToCart.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        return [...prev, { ...productToCart, qty: 1 }];
      }
    });
  }
}, [products]);

const cartTotal = useCallback(()=>{
    let sum = 0;

    cartItems.forEach(product => {
        sum += product.qty * product.dishPrice
    });

    return Number(sum.toFixed(2))

}, [cartItems])

  useEffect(() => {
    setProducts(fruitDishes);
  }, []);

  const toExport = {
    products,
    cartItems,
    setCartItems,
    addToCart,
    cartTotal
  };
  return (
    <ProductsContext.Provider value={toExport}>
      {children}
    </ProductsContext.Provider>
  );
};
