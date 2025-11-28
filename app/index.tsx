import MainButton from "@/components/shared/MainButton";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function Index() {
  const [isRed , setIsRed] = useState(false);
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{
        color: isRed ? "red" : "black",
      }}>Edit app/index.ts.</Text>
      {/* <MainButton text="Click me" method={()=>setIsRed(prev => !prev)}/> */}

      <MainButton text="Go to welcome page" method={()=>router.push("/welcome")}/>

    </View>
  );
}
