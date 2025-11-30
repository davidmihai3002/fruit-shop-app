import { useUser } from '@/lib/hooks/useUser';
import { useRouter } from 'expo-router';
import { ShoppingBasket } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';

const DashboardHeader = () => {
    const {user} = useUser();
    const router = useRouter();
  return (
      <View style={{ flexDirection: "row", width: "100%", alignItems: "center" }}>
        <Text style={{ flex: 1, fontSize: 20 }}>
          Hello {user}, <Text style={{ fontWeight: "600" }}>What fruit salad combo do you want today?</Text>
        </Text>
        <ShoppingBasket color="#FFA451" size={40} onPress={()=> router.push("/cart")}/>
      </View>
  )
}

export default DashboardHeader
