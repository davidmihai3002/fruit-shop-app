import { StyleSheet } from "react-native";

export const individualCartItemStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 30,
    },
    leftSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
        alignItems: "center",
        gap: 15,
    },
    imageContainer: {
        width: 64,
        height: 64,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
    },
    image: {
        width: 40,
        height: 40,
    },
    productName: {
        fontSize: 18,
        fontWeight: "500",
    },
    priceText: {
        fontSize: 20,
        fontWeight: "500",
    },
});

