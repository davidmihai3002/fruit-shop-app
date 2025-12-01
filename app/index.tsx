import MainButton from "@/components/shared/MainButton";
import { indexPageStyles } from "@/lib/styles/pages/IndexPageStyles";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View style={indexPageStyles.container}>
      <Text>Edit app/index.ts.</Text>
      <MainButton
        text="Go to welcome page"
        method={() => {
          router.push("/welcome");
        }}
      />
    </View>
  );
}
