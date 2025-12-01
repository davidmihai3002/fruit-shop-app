import { StyleSheet } from "react-native";

export const qtyModifierStyles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    controlsContainer: {
        width: 200,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    minusButton: {
        padding: 8,
        borderRadius: 50,
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "black",
    },
    quantityText: {
        fontSize: 20,
        fontWeight: "500",
    },
    plusButton: {
        padding: 10,
        borderRadius: 50,
        backgroundColor: "#FFF7F0",
    },
    priceText: {
        fontSize: 24,
        fontWeight: "500",
        color: "#FFA451",
    },
});

