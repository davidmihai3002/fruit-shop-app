import { NotificationsContextProvider } from "@/lib/context/NotificationsContext";
import { ProductsContextProvider } from "@/lib/context/ProductsContext";
import { UserContextProvider } from "@/lib/context/UserContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <NotificationsContextProvider>
      <UserContextProvider>
        <ProductsContextProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </ProductsContextProvider>
      </UserContextProvider>
    </NotificationsContextProvider>
  );
}
