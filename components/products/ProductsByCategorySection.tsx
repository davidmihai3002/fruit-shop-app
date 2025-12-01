import { categories } from "@/hard-coded/hardCodedValues";
import { useProducts } from "@/lib/hooks/useProducts";
import { productsByCategorySectionStyles } from "@/lib/styles/products/ProductsByCategorySectionStyles";
import { FruitDish } from "@/lib/types/models";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import dish2 from "../../assets/images/dish2.png";
import ProductCard from "./ProductCard";

const ProductsByCategorySection = () => {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>("fresh");
  const [productsToDisplay, setProductsToDisplay] = useState<FruitDish[]>(
    products!.filter((dish) => dish.category === selectedCategory)
  );

  useEffect(() => {
    setProductsToDisplay(
      products!.filter((dish) => dish.category === selectedCategory)
    );
  }, [selectedCategory, products]);

  return (
    <View style={productsByCategorySectionStyles.container}>
      <View style={productsByCategorySectionStyles.categoriesContainer}>
        {categories.map((category) => (
          <Text
            key={category}
            style={{
              fontSize: selectedCategory === category.toLowerCase() ? 22 : 20,
              fontWeight:
                selectedCategory === category.toLowerCase() ? "700" : "400",
              color:
                selectedCategory === category.toLowerCase() ? "black" : "gray",
            }}
            onPress={() => setSelectedCategory(category.toLowerCase())}
          >
            {category}
          </Text>
        ))}
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={
          productsByCategorySectionStyles.scrollViewContent
        }
      >
        {productsToDisplay?.map((product) => (
          <ProductCard
            key={product.id}
            hideFavoriteIcon={true}
            bgColor={product.bgColor}
            dishId={product.id}
            isFavorite={product.isFavorite}
            imgSrc={dish2}
            title={product.dishName}
            price={product.dishPrice}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductsByCategorySection;
