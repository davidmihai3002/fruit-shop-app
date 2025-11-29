import { useProducts } from '@/lib/hooks/useProducts';
import { useUser } from '@/lib/hooks/useUser';
import { ShoppingBasket } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const AppDashboard = () => {
    const {user} = useUser();
    const {products} = useProducts();
  return (
    <ScrollView style={{
        paddingTop: 70
    }}>
            <View style={{
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            paddingBottom: 100,
            paddingHorizontal: 24

        }}>
        <View style={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        }}>
            <Text style={{
                maxWidth: 250,
                fontSize: 20
            }}>Hello {user}, <Text style={{
                fontWeight: "600"
            }}>What fruit salad combo do you want today?</Text></Text>
            <ShoppingBasket color={"#FFA451"} size={40}/>
        </View>

        {/* <ProductCard/> */}
    </View>
    </ScrollView>
  )
}

export default AppDashboard
