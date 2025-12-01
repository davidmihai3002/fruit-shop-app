import { noCartItemsStyles } from "@/lib/styles/cart/NoCartItemsStyles";
import { useRouter } from "expo-router";
import { ScanBarcode } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import MainButton from "../shared/MainButton";

const NoCartItems = () => {
  const router = useRouter();
  return (
    <View style={noCartItemsStyles.container}>
      <ScanBarcode size={40} />
      <Text style={noCartItemsStyles.messageText}>
        No items added to your cart yet :(
      </Text>
      <Text style={noCartItemsStyles.titleText}>
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
