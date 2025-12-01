import MainButton from "@/components/shared/MainButton";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  // TODO: add authGuard that checks if the user is authenticated, if now we redirect him to the dashboard
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.ts.</Text>
      <MainButton text="Go to welcome page" method={()=>{
        router.push("/welcome");
      }}/>

    </View>
  );
}
