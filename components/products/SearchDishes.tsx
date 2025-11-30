import { Search } from "lucide-react-native"
import { TextInput, View } from "react-native"

// TODO: Add functionality
const SearchDishes = () => {
  return (
    <View style={{
        width: "100%",
        position: "relative"
    }}>
        <TextInput style={{
        width: "100%",
        height: 56,
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 18,
        backgroundColor: "#E5E5E5",
    }} placeholder="Search for your meal"/>
        <Search style={{
            position: "absolute",
            right: 20,
            top: 16,
        }} color={"gray"} size={24}/>
    </View>
  )
}

export default SearchDishes
