import { Search } from "lucide-react-native";
import { View } from "react-native";
import MainInput from "../shared/MainInput";

const SearchDishes = () => {
  return (
    <View
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <MainInput placeholder={"Search for your meal"} />
      <Search
        style={{
          position: "absolute",
          right: 20,
          top: 16,
        }}
        color={"gray"}
        size={24}
      />
    </View>
  );
};

export default SearchDishes;
