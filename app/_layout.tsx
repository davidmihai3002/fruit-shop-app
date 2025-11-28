import { UserContextProvider } from "@/lib/context/UserContext";
import { Stack } from "expo-router";

export default function RootLayout() {
  return <UserContextProvider>
    <Stack screenOptions={{
    headerShown: false
  }}/>
  </UserContextProvider>;
}
