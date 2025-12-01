import { ProductDescription } from "@/components/products/ProductDescription";
import { ProductPageActionButtons } from "@/components/products/ProductPageActionButtons";
import { QtyModifier } from "@/components/products/QtyModifier";
import GoBackButton from "@/components/shared/GoBackButton";
import { Separator } from "@/components/shared/Separator";
import { useProducts } from "@/lib/hooks/useProducts";
import { productPageStyles } from "@/lib/styles/pages/ProductPageStyles";
import { FruitDish } from "@/lib/types/models";
import { useLocalSearchParams } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import dish3 from "../../assets/images/dish3.png";

const ProductPage = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<FruitDish | null>(null);
  const [quantity, setQuantity] = useState<number>(product?.qty ?? 1);
  const { products } = useProducts();

  const increaseQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const decreaseQuantity = useCallback(() => {
    setQuantity((prev) => {
      if (prev === 1) return prev;
      return prev - 1;
    });
  }, []);

  useEffect(() => {
    const chosenProduct = products?.find(
      (product) => product.id === Number(id)
    );
    setProduct(chosenProduct!);
  }, [id, products]);

  return (
    <View style={productPageStyles.container}>
      <GoBackButton style={productPageStyles.goBackButton} />
      <Image source={dish3} style={productPageStyles.productImage} />
      <View style={productPageStyles.detailsContainer}>
        <Text style={productPageStyles.productTitle}>{product?.dishName}</Text>

        <QtyModifier
          price={product?.dishPrice ?? 0}
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />

        <Separator />

        <ProductDescription
          ingredients={product?.ingredients ?? "No ingredients provided"}
          description={product?.description ?? "No description provided"}
        />

        <ProductPageActionButtons
          productId={Number(id)}
          productQty={quantity}
          isFavorite={product?.isFavorite!}
        />
      </View>
    </View>
  );
};

export default ProductPage;
