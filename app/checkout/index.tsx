import GoBackButton from "@/components/shared/GoBackButton";
import MainButton from "@/components/shared/MainButton";
import { FruitDish } from "@/hard-coded/hardCodedValues";
import { useProducts } from "@/lib/hooks/useProducts";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TextInput, View } from "react-native";

// TODO: Create separate Input component
// TODO: Create separate Header component for cart and checkout


export interface OrderProps{
    name: string,
    address: string,
    phoneNumber: number,
    orderedProducts: FruitDish[],
}

const CheckoutPage = () => {
  const router = useRouter();

  const {cartTotal} = useProducts();

  const orderTotal = cartTotal();

  return (
    <View style={{
        height: "100%"
}}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 24,
          justifyContent: "center",
          position: "relative",
          paddingTop: 70,
          height: 135,
          backgroundColor: "#FFA451",
        }}
      >
        <GoBackButton
          method={() => router.push("/cart")}
          style={{
            top: 70,
            left: 24,
            position: "absolute",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
            paddingRight: 8,
            paddingVertical: 6,
            backgroundColor: "white",
            borderRadius: 20,
          }}
        />

        <Text
          style={{
            color: "white",
            fontSize: 24,
          }}
        >
          Checkout
        </Text>
      </View>

      <View style={{
            paddingHorizontal: 24,
            paddingVertical: 30,
            gap: 30
      }}>
        <View style={{
            gap: 15
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 600
            }}>Where can we deliver your meals?</Text>
            <TextInput style={{
                    width: "100%",
                    height: 56,
                    borderRadius: 10,
                    paddingHorizontal: 24,
                    fontSize: 18,
                    backgroundColor: "#E5E5E5",
                }} placeholder="Enter address"/>
        </View>

        <View style={{
            gap: 15
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 600
            }}>Where can we call you?</Text>
            <TextInput style={{
                    width: "100%",
                    height: 56,
                    borderRadius: 10,
                    paddingHorizontal: 24,
                    fontSize: 18,
                    backgroundColor: "#E5E5E5",
                }} placeholder="Enter number"/>
        </View>

        <Text style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: 600
        }}>{"Total: $" + orderTotal}</Text>

        <MainButton text="Pay cash" method={()=> router.push("/order-successful")}/>

      </View>
    </View>
  );
};

export default CheckoutPage;
