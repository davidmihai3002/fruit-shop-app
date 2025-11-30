import { useProducts } from '@/lib/hooks/useProducts';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import dish3 from "../../assets/images/dish3.png";
import ProductCard from './ProductCard';

const RecommendedProductsSection = () => {
    const {products} = useProducts();
  return (
    <View style={{
      gap: 24
    }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 500
        }}>Recommended Combo</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingVertical: 10
        }}>
            {products?.map(product => <ProductCard key={product.id} dishId={product.id} isFavorite={product.isFavorite} imgSrc={dish3} title={product.dishName} price={product.dishPrice} />)}
        </ScrollView>
    </View>
  )
}

export default RecommendedProductsSection
