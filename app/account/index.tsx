import { userStore } from "@/lib/stores/UserStore";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const index = () => {
  const router = useRouter();
  const [viewToken, setViewToken] = useState<boolean>(false);
  return (
    <View>
      <Text>Welcome, {userStore.user}</Text>
      <TouchableOpacity
        onPress={() => {
          router.push("/orders");
        }}
      >
        View Orders
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setViewToken((prev) => !prev)}>
        View Token
      </TouchableOpacity>
      {viewToken && <Text>{userStore.token}</Text>}
    </View>
  );
};

export default index;
