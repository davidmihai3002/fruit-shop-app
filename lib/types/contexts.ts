import { FruitDish } from "./models";

export interface UserContextProps {
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface ProductsContextProps {
  products: FruitDish[] | null;
  cartItems: FruitDish[];
  setCartItems: React.Dispatch<React.SetStateAction<FruitDish[]>>;
  addToCart: (productId: number, productQty?: number) => void;
  cartTotal: () => number;
  orderNow: () => void;
  addToFavorite: (productId: number) => void;
}

export interface NotificationsContextProps {
  openNotification: (message: string) => void;
  closeNotification: () => void;
  notification: (message: string) => void;
}

