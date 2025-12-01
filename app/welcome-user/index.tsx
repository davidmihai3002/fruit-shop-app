import MainButton from '@/components/shared/MainButton'
import MainInput from '@/components/shared/MainInput'
import WelcomeIlustrationSection from '@/components/user/WelcomeIlustrationSection'
import WelcomeTextComponent from '@/components/user/WelcomeTextComponent'
import { useUser } from '@/lib/hooks/useUser'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Keyboard, Text, TouchableWithoutFeedback, View } from 'react-native'
import fruits2 from "../../assets/images/fruits2.png"

const WelcomeUserPage = () => {
  const [isUserWriting, setIsUserWriting] = useState<boolean>(false);
  const router = useRouter()

  const {user, setUser} = useUser()

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      setIsUserWriting(false)
    }}>
        <View style={{
        height: "100%",
        width: "100%",
        flexDirection: isUserWriting ? "column-reverse" : "column"
        
    }}>
        <WelcomeIlustrationSection imgUrl={fruits2}/>
        <WelcomeTextComponent>
          
            <View style={{
              width: "100%",
              height: "100%",
              gap: 20,
              justifyContent: isUserWriting ? "center" : "flex-start"
            }}>
            <View style={{
              width: "100%",
              gap: 16
            }}>
              <Text style={{
                        fontSize: 20,
                        fontWeight: 600
                    }}>What is your firstname?</Text>
              <MainInput value={user} placeholder={"Your name"} onChange={setUser} onPress={()=> setIsUserWriting(true)}/>
            </View>
            {/* <Text>{user}</Text> */}
            <MainButton text='Start Ordering' method={()=> router.push("/dashboard")}/></View>
          
        </WelcomeTextComponent>
        </View>
        
    </TouchableWithoutFeedback>
  )
}

export default WelcomeUserPage
