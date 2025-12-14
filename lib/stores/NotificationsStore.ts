import { t } from "mobx-state-tree";

export const NotificationsModel = t
  .model({
    isNotificationOpen: t.boolean,
    notificationMessage: t.string,
  })
  .actions((self) => {
    function openNotification(message: string) {
      self.isNotificationOpen = true;
      self.notificationMessage = message;
    }
    function closeNotification() {
      self.isNotificationOpen = false;
      self.notificationMessage = "";
    }
    return {
      openNotification,
      closeNotification,
    };
  })
  .actions((self) => {
    function notification(message: string) {
      self.openNotification(message);
      setTimeout(() => self.closeNotification(), 1000);
    }
    return {
      notification,
    };
  });

export const notificationsStore = NotificationsModel.create({
  isNotificationOpen: false,
  notificationMessage: "",
});
