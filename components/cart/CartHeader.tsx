import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import GoBackButton from '../shared/GoBackButton';

const CartHeader = ({title}: {title: string}) => {
      const router = useRouter();
    
  return (
    <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 24,
              justifyContent: "center",
              position: "relative",
              paddingTop: 70,
              height: 135,
              backgroundColor: "#FFA451",
            }}
          >
            <GoBackButton
              style={{
                top: 70,
                left: 24,
                position: "absolute",
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                paddingRight: 8,
                paddingVertical: 6,
                backgroundColor: "white",
                borderRadius: 20,
              }}
            />
    
            <Text
              style={{
                color: "white",
                fontSize: 24,
              }}
            >
              {title}
            </Text>
          </View>
  )
}

export default CartHeader
