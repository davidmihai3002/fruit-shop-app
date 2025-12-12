import { ProductDescription } from "@/components/products/ProductDescription";
import { ProductPageActionButtons } from "@/components/products/ProductPageActionButtons";
import { QtyModifier } from "@/components/products/QtyModifier";
import GoBackButton from "@/components/shared/GoBackButton";
import { Separator } from "@/components/shared/Separator";
import { productsStore } from "@/lib/stores/ProductsStore";
import { productPageStyles } from "@/lib/styles/pages/ProductPageStyles";
import { useLocalSearchParams } from "expo-router";
import { observer } from "mobx-react-lite";
import React, { useCallback, useState } from "react";
import { Image, Text, View } from "react-native";
import dish3 from "../../assets/images/dish3.png";

const ProductPage = observer(() => {
  const { id } = useLocalSearchParams();
  const chosenProduct = productsStore.findProductById(Number(id));
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const decreaseQuantity = useCallback(() => {
    setQuantity((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  }, []);

  return (
    <View style={productPageStyles.container}>
      <GoBackButton style={productPageStyles.goBackButton} />
      <Image source={dish3} style={productPageStyles.productImage} />
      <View style={productPageStyles.detailsContainer}>
        <Text style={productPageStyles.productTitle}>
          {chosenProduct?.dishName}
        </Text>

        <QtyModifier
          price={chosenProduct?.dishPrice ?? 0}
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />

        <Separator />

        <ProductDescription
          ingredients={chosenProduct?.ingredients ?? "No ingredients provided"}
          description={chosenProduct?.description ?? "No description provided"}
        />

        <ProductPageActionButtons
          productId={Number(id)}
          productQty={quantity}
          isFavorite={chosenProduct?.isFavorite!}
        />
      </View>
    </View>
  );
});

export default ProductPage;
