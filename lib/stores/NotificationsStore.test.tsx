import { NotificationsModel } from "./NotificationsStore";

describe("NotificationsStore", () => {
  test("openNotifcation function should set the state of isNotificationOpen to true and notificationMessage to a custom string", () => {
    const store = NotificationsModel.create({
      isNotificationOpen: false,
      notificationMessage: "",
    });
    store.openNotification("Test");
    expect(store.notificationMessage).toBe("Test");
    expect(store.isNotificationOpen).toBe(true);
  });
  test("closeNotification function should set the state of isNotificationOpen to false and notificationMessage to an empty string", () => {
    const store = NotificationsModel.create({
      isNotificationOpen: false,
      notificationMessage: "",
    });
    store.closeNotification();
    expect(store.notificationMessage).toBe("");
    expect(store.isNotificationOpen).toBe(false);
  });
  test("notification function should trigger opneNotification function", () => {
    const store = NotificationsModel.create({
      isNotificationOpen: false,
      notificationMessage: "",
    });
    store.notification("Test");
    expect(store.notificationMessage).toBe("Test");
    expect(store.isNotificationOpen).toBe(true);
  });
  test("after 1 second of triggering notification function, closeNotification should trigger", () => {
    jest.useFakeTimers();
    const store = NotificationsModel.create({
      isNotificationOpen: false,
      notificationMessage: "",
    });
    store.notification("Test");
    jest.advanceTimersByTime(1000);
    expect(store.notificationMessage).toBe("");
    expect(store.isNotificationOpen).toBe(false);
  });
});
