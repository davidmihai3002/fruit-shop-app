import ProductsByCategorySection from "@/components/products/ProductsByCategorySection";
import RecommendedProductsSection from "@/components/products/RecommendedProductsSection";
import SearchDishes from "@/components/products/SearchDishes";
import DashboardHeader from "@/components/user/DashboardHeader";
import { productsStore } from "@/lib/stores/ProductsStore";
import { dashboardPageStyles } from "@/lib/styles/pages/DashboardPageStyles";
import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { ScrollView } from "react-native";

const AppDashboard = observer(() => {
  useEffect(() => {
    productsStore.setProductsTo(productsStore.allProducts);
  });
  return (
    <ScrollView contentContainerStyle={dashboardPageStyles.scrollViewContent}>
      <DashboardHeader />
      <SearchDishes />
      <RecommendedProductsSection store={productsStore} />
      <ProductsByCategorySection store={productsStore} />
    </ScrollView>
  );
});
export default AppDashboard;
