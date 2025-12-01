import fruitDishes from "@/hard-coded/hardCodedValues";
import { ProductsContextProps } from "@/lib/types/contexts";
import { FruitDish } from "@/lib/types/models";
import { useRouter } from "expo-router";
import { createContext, useCallback, useEffect, useState } from "react";
import { useNotifications } from "../hooks/useNotifications";

export const ProductsContext = createContext<ProductsContextProps | null>(null);

export const ProductsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<FruitDish[]>([]);
  const [cartItems, setCartItems] = useState<FruitDish[]>([]);

  const { notification } = useNotifications();

  const router = useRouter();

  const addToCart = useCallback(
    (productId: number, productQty: number = 1) => {
      const productToCart = products?.find(
        (product) => product.id === productId
      );

      if (productToCart) {
        setCartItems((prev) => {
          const existingItem = prev.find(
            (item) => item.id === productToCart.id
          );

          if (existingItem) {
            return prev.map((item) =>
              item.id === productToCart.id
                ? { ...item, qty: item.qty + productQty }
                : item
            );
          } else {
            return [...prev, { ...productToCart, qty: productQty }];
          }
        });
      }
      notification("Your item was added to cart");
    },
    [products]
  );

  const addToFavorite = useCallback(
    (productId: number) => {
      const productToFavorite = products?.find(
        (product) => product.id === productId
      );

      if (productToFavorite) {
        setProducts((prev) => {
          return prev?.map((product) =>
            product.id === productToFavorite.id
              ? { ...product, isFavorite: product.isFavorite ? false : true }
              : product
          );
        });
      }
      notification(
        !productToFavorite?.isFavorite
          ? "You have a new favorite!"
          : "Choose another favorite!"
      );
    },
    [products, setProducts]
  );

  const cartTotal = useCallback(() => {
    let sum = 0;

    cartItems.forEach((product) => {
      sum += product.qty * product.dishPrice;
    });

    return Number(sum.toFixed(2));
  }, [cartItems]);

  const orderNow = useCallback(() => {
    setCartItems([]);
    router.push("/dashboard");
  }, []);

  useEffect(() => {
    setProducts(fruitDishes);
  }, []);

  const toExport = {
    products,
    cartItems,
    setCartItems,
    addToCart,
    cartTotal,
    orderNow,
    addToFavorite,
  };
  return (
    <ProductsContext.Provider value={toExport}>
      {children}
    </ProductsContext.Provider>
  );
};
