import Notification from "@/components/shared/Notification";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <Notification />
    </>
  );
}
