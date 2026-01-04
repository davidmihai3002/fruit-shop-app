import { getSnapshot, t } from "mobx-state-tree";
import { OrdersType } from "../types/models";
import { cartStore } from "./CartStore";
import { userStore } from "./UserStore";
// TODO: Add tests for orders store

export const OrdersModel = t
  .model({
    currentOrder: OrdersType,
    orders: t.array(OrdersType),
  })
  .actions((self) => {
    function setCurrentOrderAddress(value: string) {
      self.currentOrder!.address = value;
    }
    function setCurrentOrderPhoneNumber(value: string) {
      self.currentOrder!.phoneNumber = value;
    }
    function addOrder() {
      const order = {
        id: Math.floor(Math.random() * 100),
        name: userStore.user!,
        address: self.currentOrder.address,
        phoneNumber: self.currentOrder.phoneNumber,
        orderedProducts: getSnapshot(cartStore.cartItems),
      };
      self.orders.push(order);
      console.log(order);
    }
    return {
      addOrder,
      setCurrentOrderAddress,
      setCurrentOrderPhoneNumber,
    };
  });

export const ordersStore = OrdersModel.create({
  currentOrder: {
    id: 0,
    name: "",
    address: "",
    phoneNumber: "",
    orderedProducts: [],
  },
  orders: [],
});
