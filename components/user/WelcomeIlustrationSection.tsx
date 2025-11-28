import { welcomePageStyles } from "@/lib/styles/welcome/WelcomePageStyles"
import { Image, ImageSourcePropType, View } from "react-native"
import shadow from "../../assets/images/shadow-basket-1.png"

export interface WelcomeIlustrationSectionProps{
    imgUrl: ImageSourcePropType
}

const WelcomeIlustrationSection = ({imgUrl}: WelcomeIlustrationSectionProps) => {
  return (
    <View style={welcomePageStyles.ilustrationStyles}>
        <Image
        source={imgUrl}
    />
    <Image
        source = {shadow}
    />
    </View>
  )
}

export default WelcomeIlustrationSection
