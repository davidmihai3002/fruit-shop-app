import MainButton from "@/components/shared/MainButton";
import MainInput from "@/components/shared/MainInput";
import WelcomeIlustrationSection from "@/components/user/WelcomeIlustrationSection";
import WelcomeTextComponent from "@/components/user/WelcomeTextComponent";
import { userStore } from "@/lib/stores/UserStore";
import { welcomeUserPageStyles } from "@/lib/styles/pages/WelcomeUserPageStyles";
import { useRouter } from "expo-router";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import fruits2 from "../../assets/images/fruits2.png";

const WelcomeUserPage = observer(() => {
  const [isUserWriting, setIsUserWriting] = useState<boolean>(false);
  const router = useRouter();

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsUserWriting(false);
      }}
    >
      <View
        style={[
          welcomeUserPageStyles.container,
          { flexDirection: isUserWriting ? "column-reverse" : "column" },
        ]}
      >
        <WelcomeIlustrationSection imgUrl={fruits2} />
        <WelcomeTextComponent>
          <View
            style={[
              welcomeUserPageStyles.contentContainer,
              { justifyContent: isUserWriting ? "center" : "flex-start" },
            ]}
          >
            <View style={welcomeUserPageStyles.inputSection}>
              <Text style={welcomeUserPageStyles.questionText}>
                What is your firstname?
              </Text>
              <MainInput
                value={userStore.user!}
                placeholder={"Your name"}
                onChange={userStore.setUser}
                onPress={() => setIsUserWriting(true)}
              />
            </View>
            {/* <Text>{user}</Text> */}
            <MainButton
              text="Start Ordering"
              method={() => router.push("/dashboard")}
            />
          </View>
        </WelcomeTextComponent>
      </View>
    </TouchableWithoutFeedback>
  );
});

export default WelcomeUserPage;
