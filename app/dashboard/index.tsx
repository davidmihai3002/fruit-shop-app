import ProductsByCategorySection from '@/components/products/ProductsByCategorySection';
import RecommendedProductsSection from '@/components/products/RecommendedProductsSection';
import SearchDishes from '@/components/products/SearchDishes';
import DashboardHeader from '@/components/user/DashboardHeader';
import { useUser } from '@/lib/hooks/useUser';
import React from 'react';
import { ScrollView } from 'react-native';

const AppDashboard = () => {
    const {user} = useUser();
  return (
    <ScrollView
  contentContainerStyle={{
    paddingHorizontal: 24,
    paddingTop: 60,
    gap: 20,
  }}
>
  <DashboardHeader/>
  <SearchDishes/>
  <RecommendedProductsSection />
  <ProductsByCategorySection />
</ScrollView>


    
  )
}

export default AppDashboard
