import { categories, Category } from "@/hard-coded/hardCodedValues";
import { productsStore, ProductsStoreType } from "@/lib/stores/ProductsStore";
import { productsByCategorySectionStyles } from "@/lib/styles/products/ProductsByCategorySectionStyles";
import { FruitDish } from "@/lib/types/models";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import dish2 from "../../assets/images/dish2.png";
import ProductCard from "./ProductCard";

const ProductsByCategorySection = observer(
  ({ store }: { store: ProductsStoreType }) => {
    const products = store.products;
    const [selectedCategory, setSelectedCategory] = useState<Category>("fresh");
    const [productsToDisplay, setProductsToDisplay] = useState<FruitDish[]>(
      store.filterProductsByCategory(selectedCategory)
    );

    useEffect(() => {
      setProductsToDisplay(store.filterProductsByCategory(selectedCategory));
    }, [selectedCategory, products, store]);

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
                  selectedCategory === category.toLowerCase()
                    ? "black"
                    : "gray",
              }}
              onPress={() =>
                setSelectedCategory(category.toLowerCase() as Category)
              }
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
              store={productsStore}
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
  }
);

export default ProductsByCategorySection;
