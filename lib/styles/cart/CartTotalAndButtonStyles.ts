import { StyleSheet } from "react-native";

export const cartTotalAndButtonStyles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        gap: 24,
        justifyContent: "space-between",
        paddingHorizontal: 24,
        alignItems: "flex-start",
        paddingTop: 24,
        backgroundColor: "white",
        height: 150,
    },
    totalSection: {
        gap: 5,
    },
    totalLabel: {
        fontWeight: "500",
    },
    totalValue: {
        fontWeight: "600",
        fontSize: 20,
    },
    buttonWrapper: {
        width: 200,
    },
});

