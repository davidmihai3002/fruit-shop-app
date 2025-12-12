import { useUser } from "@/lib/hooks/useUser";
import { ProductsStoreType } from "@/lib/stores/ProductsStore";
import { dashboardHeaderStyles } from "@/lib/styles/user/DashboardHeaderStyles";
import { useRouter } from "expo-router";
import { ShoppingBasket } from "lucide-react-native";
import { observer } from "mobx-react-lite";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const DashboardHeader = observer(({ store }: { store: ProductsStoreType }) => {
  const { user } = useUser();
  const router = useRouter();
  const cartItems = store.cartItems;
  return (
    <View style={dashboardHeaderStyles.container}>
      <Text style={dashboardHeaderStyles.greetingText}>
        Hello {user},{" "}
        <Text style={dashboardHeaderStyles.boldText}>
          What fruit salad combo do you want today?
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/cart")}
        style={dashboardHeaderStyles.cartButton}
      >
        <ShoppingBasket color="#FFA451" size={40} />
        {cartItems.length > 0 && (
          <View style={dashboardHeaderStyles.cartBadge}>
            <Text style={dashboardHeaderStyles.cartBadgeText}>
              {cartItems.length}
            </Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
});

export default DashboardHeader;
