import MainButton from '@/components/shared/MainButton'
import WelcomeIlustrationSection from '@/components/user/WelcomeIlustrationSection'
import WelcomeTextComponent from '@/components/user/WelcomeTextComponent'
import { welcomePageStyles } from '@/lib/styles/pages/WelcomePageStyles'
import { useRouter } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'
import fruits1 from '../../assets/images/fruits1.png'

const WelcomePage = () => {
    const router = useRouter();
  return (
    <View style={welcomePageStyles.container}>
        <WelcomeIlustrationSection imgUrl={fruits1}/>
        <WelcomeTextComponent>
                    <View style={welcomePageStyles.textSection}>
                        <Text style={welcomePageStyles.titleText}>Get The Freshest Fruit Salad Combo</Text>
                    <Text style={welcomePageStyles.descriptionText}>We deliver the best and freshest fruit salad in town. Order for a combo today!!!</Text>
                    </View>
                    <MainButton text="Let's continue" method={()=>router.push("/welcome-user")}/>
        </WelcomeTextComponent>
    </View>
  )
}

export default WelcomePage
