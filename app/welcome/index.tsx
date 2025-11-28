import WelcomeIlustrationSection from '@/components/user/WelcomeIlustrationSection'
import WelcomeTextComponent from '@/components/user/WelcomeTextComponent'
import React from 'react'
import { View } from 'react-native'
import fruits1 from '../../assets/images/fruits1.png'

const WelcomePage = () => {
  return (
    <View style={{
        height: "100%"
    }}>
        <WelcomeIlustrationSection imgUrl={fruits1}/>
        <WelcomeTextComponent/>
    </View>
  )
}

export default WelcomePage
