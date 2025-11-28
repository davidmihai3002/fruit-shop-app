import MainButton from '@/components/shared/MainButton'
import WelcomeIlustrationSection from '@/components/user/WelcomeIlustrationSection'
import WelcomeTextComponent from '@/components/user/WelcomeTextComponent'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import fruits1 from '../../assets/images/fruits1.png'

const WelcomePage = () => {
    const router = useRouter();
  return (
    <View style={{
        height: "100%"
    }}>
        <WelcomeIlustrationSection imgUrl={fruits1}/>
        <WelcomeTextComponent>
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
                    <MainButton text="Let's continue" method={()=>router.push("/welcome-user")}/>
        </WelcomeTextComponent>
    </View>
  )
}

export default WelcomePage
