import ProductsByCategorySection from "@/components/products/ProductsByCategorySection";
import RecommendedProductsSection from "@/components/products/RecommendedProductsSection";
import SearchDishes from "@/components/products/SearchDishes";
import DashboardHeader from "@/components/user/DashboardHeader";
import { dashboardPageStyles } from "@/lib/styles/pages/DashboardPageStyles";
import React from "react";
import { ScrollView } from "react-native";

const AppDashboard = () => {
  return (
    <ScrollView contentContainerStyle={dashboardPageStyles.scrollViewContent}>
      <DashboardHeader />
      <SearchDishes />
      <RecommendedProductsSection />
      <ProductsByCategorySection />
    </ScrollView>
  );
};

export default AppDashboard;
