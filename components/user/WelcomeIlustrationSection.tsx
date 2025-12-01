import { welcomePageStyles } from "@/lib/styles/welcome/WelcomePageStyles"
import { WelcomeIllustrationSectionProps } from "@/lib/types/components/user"
import { Image, View } from "react-native"
import shadow from "../../assets/images/shadow-basket-1.png"

const WelcomeIlustrationSection = ({imgUrl}: WelcomeIllustrationSectionProps) => {
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
