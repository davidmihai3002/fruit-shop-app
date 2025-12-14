import { notificationsStore } from "@/lib/stores/NotificationsStore";
import { observer } from "mobx-react-lite";
import React from "react";
import { Modal, Text, View } from "react-native";

const Notification = observer(() => {
  return (
    <Modal
      visible={notificationsStore.isNotificationOpen}
      transparent
      animationType="fade"
      onRequestClose={notificationsStore.closeNotification}
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
          <Text>{notificationsStore.notificationMessage}</Text>
        </View>
      </View>
    </Modal>
  );
});

export default Notification;
