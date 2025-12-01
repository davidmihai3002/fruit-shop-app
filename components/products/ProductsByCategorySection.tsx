import { categories, FruitDish } from '@/hard-coded/hardCodedValues';
import { useProducts } from '@/lib/hooks/useProducts';
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import dish2 from "../../assets/images/dish2.png";
import ProductCard from './ProductCard';

const ProductsByCategorySection = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("fresh");
    const [productsToDisplay, setProductsToDisplay] = useState<FruitDish[] | null>(null);
    const {products} = useProducts();

    useEffect(()=>{
        setProductsToDisplay(products!.filter(dish => dish.category === selectedCategory))
    }, [selectedCategory])

  return (
    <View style={{
        gap: 30
        
    }}>
        <View style={{
            flexDirection: "row",
            gap: 20,
            alignItems: "center"
        }}>
            {
                categories.map(category => <Text key={category} style={{
                    fontSize: selectedCategory === category.toLowerCase() ? 22 : 20,
                    fontWeight: selectedCategory === category.toLowerCase() ? "700" : "400",
                    color: selectedCategory === category.toLowerCase() ? "black" : "gray"
                }} onPress={()=>setSelectedCategory(category.toLowerCase())}>{category}</Text>)
            }
            

        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{
            paddingVertical: 10
        }}>
            {productsToDisplay?.map(product => <ProductCard key={product.id} bgColor={product.bgColor} dishId={product.id} isFavorite={product.isFavorite} imgSrc={dish2} title={product.dishName} price={product.dishPrice}/>)}
        </ScrollView>
    </View>
  )
}

export default ProductsByCategorySection
