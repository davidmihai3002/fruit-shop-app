import { t } from "mobx-state-tree";
import { OrdersType } from "../types/models";
// TODO: Add actions, views, and order addition logic

export const OrdersModel = t.model({
  orders: t.array(OrdersType),
});

export const ordersStore = OrdersModel.create();
