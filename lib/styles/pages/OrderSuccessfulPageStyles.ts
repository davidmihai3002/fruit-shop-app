import { StyleSheet } from "react-native";

export const orderSuccessfulPageStyles = StyleSheet.create({
    container: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: 50,
        paddingHorizontal: 24,
    },
    successImage: {
        width: 164,
        height: 164,
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        gap: 25,
    },
    congratsText: {
        fontSize: 30,
        fontWeight: "500",
    },
    messageText: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "300",
    },
});

