import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const GoBackButton = ({method, style}: {method: ()=> void, style: Object}) => {
  return (
    <TouchableOpacity activeOpacity={1} style={style} onPress={method}>
        <ChevronLeft />
        <Text>Go Back</Text>
    </TouchableOpacity>
  )
}

export default GoBackButton
