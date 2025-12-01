import { welcomeTextComponentStyles } from '@/lib/styles/user/WelcomeTextComponentStyles'
import { WelcomeTextComponentProps } from '@/lib/types/components/user'
import React from 'react'
import { View } from 'react-native'

const WelcomeTextComponent = ({children}: WelcomeTextComponentProps) => {
  return (
    <View style={welcomeTextComponentStyles.container}>
        {children}
    </View>
  )
}

export default WelcomeTextComponent
