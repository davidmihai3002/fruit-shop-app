import { mainButtonStyles } from '@/lib/styles/button/MainButtonStyles'
import { MainButtonProps } from '@/lib/types/components/shared'
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const MainButton = ({text, method}: MainButtonProps) => {
  return (
    <TouchableOpacity style={mainButtonStyles.button} onPress={method} activeOpacity={1}>
        <Text style={mainButtonStyles.textStyles}>{text}</Text>
    </TouchableOpacity>
  )
}

export default MainButton
