import MainButton from "@/components/shared/MainButton";
import { productsStore } from "@/lib/stores/ProductsStore";
import { indexPageStyles } from "@/lib/styles/pages/IndexPageStyles";
import { useRouter } from "expo-router";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Text, View } from "react-native";

const Index = observer(() => {
  const router = useRouter();
  useEffect(() => {
    const hydrateProducts = async () => {
      const data = await productsStore.loadData();
      productsStore.setProductsTo(data!);
      console.log(productsStore.products);
    };
    hydrateProducts();
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
        {!productsStore.products && <Text>Loading</Text>}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {productsStore.products &&
            productsStore.products!.map((fruit) => (
              <Text key={fruit.id}>{fruit.dishName}</Text>
            ))}
        </View>
      </View>
    </View>
  );
});

export default Index;
