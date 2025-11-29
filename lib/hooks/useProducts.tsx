import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw Error("Something went wrong in fetching latest products");
    }
    return context;
}