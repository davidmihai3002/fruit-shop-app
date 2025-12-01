import { GoBackButtonProps } from '@/lib/types/components/shared';
import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const GoBackButton = ({style}: GoBackButtonProps) => {
  const router = useRouter()
  return (
    <TouchableOpacity activeOpacity={1} style={style} onPress={()=> router.back()}>
        <ChevronLeft />
        <Text>Go Back</Text>
    </TouchableOpacity>
  )
}

export default GoBackButton
