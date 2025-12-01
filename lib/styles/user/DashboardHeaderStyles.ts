import { StyleSheet } from "react-native";

export const dashboardHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
    },
    greetingText: {
        flex: 1,
        fontSize: 20,
    },
    boldText: {
        fontWeight: "600",
    },
    cartButton: {
        position: "relative",
    },
    cartBadge: {
        position: "absolute",
        top: -5,
        right: -5,
        backgroundColor: "black",
        borderRadius: 100,
        padding: 3,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    cartBadgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "600",
    },
});

