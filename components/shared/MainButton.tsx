import { mainButtonStyles } from '@/lib/styles/button/MainButtonStyles'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export interface MainButtonProps{
    text: string,
    method?: () => void,
}

const MainButton = ({text, method}: MainButtonProps) => {
  return (
    <TouchableOpacity style={mainButtonStyles.button} onPress={method} activeOpacity={1}>
        <Text style={mainButtonStyles.textStyles}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MainButton
