import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUser = () =>{
    const context = useContext(UserContext);
    if (!context) {
        throw Error("Something went wrong");
    }
    return context;
}