import React from 'react'
import { Text, View } from 'react-native'
import MainButton from '../shared/MainButton'

const WelcomeTextComponent = () => {
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
        <View style={{
            gap: 5
        }}>
            <Text style={{
            fontSize: 20,
            fontWeight: 600
        }}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={{
            fontSize: 16,
            fontWeight: 400
        }}>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>
        </View>
        <MainButton text="Let's continue"/>
    </View>
  )
}

export default WelcomeTextComponent
