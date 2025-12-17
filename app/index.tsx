import MainButton from "@/components/shared/MainButton";
import { productsStore } from "@/lib/stores/ProductsStore";
import { indexPageStyles } from "@/lib/styles/pages/IndexPageStyles";
import { Fruit } from "@/lib/types/models";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Index = () => {
  const router = useRouter();
  const [data, setData] = useState<Fruit[]>([]);
  useEffect(() => {
    console.log(productsStore.load());
    const fetch = async () => {
      const res = await productsStore.load();
      if (res) {
        setData(res);
      }
    };
    fetch();
  }, []);
  return (
    <View style={indexPageStyles.container}>
      <Text>Edit app/index.ts.</Text>
      <MainButton
        text="Go to welcome page"
        method={() => {
          router.push("/welcome");
        }}
      />
      <View>
        {data.length === 0 && <Text>Loading</Text>}

        {data && data!.map((fruit) => <Text key={fruit.id}>{fruit.name}</Text>)}
      </View>
    </View>
  );
};

export default Index;
