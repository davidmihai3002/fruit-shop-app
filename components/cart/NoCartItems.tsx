import { useRouter } from "expo-router";
import { ScanBarcode } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import MainButton from "../shared/MainButton";

const NoCartItems = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24,
        gap: 30,
      }}
    >
      <ScanBarcode size={40} />
      <Text
        style={{
          fontSize: 22,
          textAlign: "center",
          fontWeight: 300,
        }}
      >
        No items added to your cart yet :(
      </Text>
      <Text
        style={{
          fontSize: 28,
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        Go back and start ordering now!
      </Text>
      <MainButton
        text="Go to products"
        method={() => router.push("/dashboard")}
      />
    </View>
  );
};

export default NoCartItems;
