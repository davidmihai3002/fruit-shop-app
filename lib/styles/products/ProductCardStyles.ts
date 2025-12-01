import { StyleSheet } from "react-native";

export const productCardStyles = StyleSheet.create({
    card: {
        width: 152,
        height: 183,
        borderRadius: 18,
        elevation: 1,
        position: "relative",
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginRight: 24,
    },
    favoriteIcon: {
        position: "absolute",
        right: 7,
        top: 7,
    },
    contentContainer: {
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        gap: 5,
    },
    title: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 12,
    },
    bottomSection: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    price: {
        textAlign: "center",
        fontWeight: "600",
        color: "#FFA451",
        fontSize: 18,
    },
    addButton: {
        width: 24,
        height: 24,
        borderRadius: 100,
        backgroundColor: "#FFF2E7",
        alignItems: "center",
        justifyContent: "center",
    },
});

