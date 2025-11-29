import fruitDishes, { FruitDish } from "@/hard-coded/hardCodedValues";
import { createContext, useEffect, useState } from "react";
export interface ProductsContextProps {
    products: FruitDish[] | null
}

export const ProductsContext = createContext<ProductsContextProps | null>(null);

export const ProductsContextProvider = ({children}: {children: React.ReactNode}) => {
    const [products, setProducts] = useState<FruitDish[] | null>(null);

    useEffect(()=>{
        setProducts(fruitDishes)
    }, [])

    const toExport = {
        products
    }
    return <ProductsContext.Provider value={toExport}>
        {children}
    </ProductsContext.Provider>
}