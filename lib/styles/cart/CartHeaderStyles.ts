import { StyleSheet } from "react-native";

export const cartHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: 24,
        justifyContent: "center",
        position: "relative",
        paddingTop: 70,
        height: 135,
        backgroundColor: "#FFA451",
    },
    goBackButton: {
        top: 70,
        left: 24,
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingRight: 8,
        paddingVertical: 6,
        backgroundColor: "white",
        borderRadius: 20,
    },
    title: {
        color: "white",
        fontSize: 24,
    },
});

