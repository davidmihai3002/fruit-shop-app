import { cartHeaderStyles } from '@/lib/styles/cart/CartHeaderStyles';
import { CartHeaderProps } from '@/lib/types/components/cart';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import GoBackButton from '../shared/GoBackButton';

const CartHeader = ({title}: CartHeaderProps) => {
      const router = useRouter();
    
  return (
    <View style={cartHeaderStyles.container}>
            <GoBackButton style={cartHeaderStyles.goBackButton} />
    
            <Text style={cartHeaderStyles.title}>
              {title}
            </Text>
          </View>
  )
}

export default CartHeader
