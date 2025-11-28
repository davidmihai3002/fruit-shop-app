import React from 'react'
import { View } from 'react-native'

const WelcomeTextComponent = ({children}: {children: React.ReactNode}) => {
  return (
    <View style={{
        width: "100%",
        flex: 1,
        gap: 30,
        paddingHorizontal: 24,
        paddingVertical: 48,
        alignItems: "flex-start",
        justifyContent: "flex-start"
    }}>
        {children}
    </View>
  )
}

export default WelcomeTextComponent
