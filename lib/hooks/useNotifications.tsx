import { useContext } from "react";
import { NotificationsContext } from "../context/NotificationsContext";

export const useNotifications = () => {
    const context = useContext(NotificationsContext);
    if (!context) {
        throw Error("Something went wrong!")
    }
    return context
}