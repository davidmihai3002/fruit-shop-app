import { searchDishesStyles } from "@/lib/styles/products/SearchDishesStyles";
import { Search } from "lucide-react-native";
import { View } from "react-native";
import MainInput from "../shared/MainInput";

const SearchDishes = () => {
  return (
    <View style={searchDishesStyles.container}>
      <MainInput placeholder={"Search for your meal"} />
      <Search
        style={searchDishesStyles.searchIcon}
        color={"gray"}
        size={24}
      />
    </View>
  );
};

export default SearchDishes;
