import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    // <NotificationsContextProvider>
    //   <UserContextProvider>
    //     <ProductsContextProvider>
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
    //     </ProductsContextProvider>
    //   </UserContextProvider>
    // </NotificationsContextProvider>
  );
}
