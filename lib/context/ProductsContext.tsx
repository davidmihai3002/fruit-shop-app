import fruitDishes, { FruitDish } from "@/hard-coded/hardCodedValues";
import { createContext, useEffect, useState } from "react";
export interface ProductsContextProps {
    products: FruitDish[] | null,
    cartItems: FruitDish[],
    setCartItems: React.Dispatch<React.SetStateAction<FruitDish[]>>
}

// TODO: Add cart functionality

export const ProductsContext = createContext<ProductsContextProps | null>(null);

export const ProductsContextProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<FruitDish[] | null>(null);
    const [cartItems, setCartItems] = useState<FruitDish[]>([]);

    useEffect(()=>{
        setProducts(fruitDishes)
    }, [])

    const toExport = {
        products,
        cartItems,
        setCartItems
    }
    return <ProductsContext.Provider value={toExport}>
        {children}
    </ProductsContext.Provider>
}