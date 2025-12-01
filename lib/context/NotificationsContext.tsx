import React, { createContext, useState } from "react";
import { Modal, Text, View } from "react-native";

export interface NotificationsContextProps {
  openNotification: (message: string) => void;
  closeNotification: () => void;
  notification: (message: string) => void;
}

export const NotificationsContext =
  createContext<NotificationsContextProps | null>(null);

export const NotificationsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [displayNotification, setDisplayNotification] =
    useState<boolean>(false);
  const [notificationMessage, setNotificationMessage] = useState<string>("");
  const openNotification = (message: string) => {
    setDisplayNotification(true);
    setNotificationMessage(message);
  };

  const closeNotification = () => {
    setDisplayNotification(false);
    setNotificationMessage("");
  };

  const notification = (message: string) => {
    openNotification(message);
    setTimeout(() => closeNotification(), 1000);
  };

  const toExport = {
    openNotification,
    closeNotification,
    notification,
  };

  return (
    <NotificationsContext.Provider value={toExport}>
      {children}
      <Modal
        visible={displayNotification}
        transparent
        animationType="fade"
        onRequestClose={closeNotification}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            backgroundColor: "transparent",
            paddingBottom: 50,
          }}
        >
          <View
            style={{
              width: 250,
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
              elevation: 7,
              //   borderWidth: 1,
              //   borderColor: "black",
            }}
          >
            <Text>{notificationMessage}</Text>
          </View>
        </View>
      </Modal>
    </NotificationsContext.Provider>
  );
};
