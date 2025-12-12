import { productsStore } from "@/lib/stores/ProductsStore";
import { productPageActionButtonsStyles } from "@/lib/styles/products/ProductPageActionButtonsStyles";
import { ProductPageActionButtonsProps } from "@/lib/types/components/products";
import { observer } from "mobx-react-lite";
import { TouchableOpacity, View } from "react-native";
import AddToFavoriteButton from "../shared/AddToFavoriteButton";
import MainButton from "../shared/MainButton";

export const ProductPageActionButtons = observer(
  ({ store, productId, productQty }: ProductPageActionButtonsProps) => {
    const product = store.findProductById(productId);

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={productPageActionButtonsStyles.container}
        onPress={() => store.addToFavorite(productId)}
      >
        <AddToFavoriteButton
          store={productsStore}
          isFavorite={product?.isFavorite!}
          productId={product?.id!}
        />
        <View style={productPageActionButtonsStyles.buttonWrapper}>
          <MainButton
            text="Add to basket"
            method={() => store.addToCart(productId, productQty)}
          />
        </View>
      </TouchableOpacity>
    );
  }
);
