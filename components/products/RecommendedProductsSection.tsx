import { productsStore } from "@/lib/stores/ProductsStore";
import { recommendedProductsSectionStyles } from "@/lib/styles/products/RecommendedProductsSectionStyles";
import { observer } from "mobx-react-lite";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import dish3 from "../../assets/images/dish3.png";
import ProductCard from "./ProductCard";

const RecommendedProductsSection = observer(() => {
  const products = productsStore.products;
  return (
    <View style={recommendedProductsSectionStyles.container}>
      <Text style={recommendedProductsSectionStyles.title}>
        Recommended Combo
      </Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          recommendedProductsSectionStyles.scrollViewContent
        }
      >
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            dishId={product.id}
            isFavorite={product.isFavorite}
            imgSrc={dish3}
            title={product.dishName}
            price={product.dishPrice}
          />
        ))}
      </ScrollView>
    </View>
  );
});

export default RecommendedProductsSection;
