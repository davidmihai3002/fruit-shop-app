import { ProductsContextProvider } from "@/lib/context/ProductsContext";
import { UserContextProvider } from "@/lib/context/UserContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <UserContextProvider>
    <ProductsContextProvider>
      <Stack screenOptions={{
    headerShown: false
  }}/>
    </ProductsContextProvider>
  </UserContextProvider>;
}
