import { StyleSheet } from "react-native";

export const productPageStyles = StyleSheet.create({
    container: {
        backgroundColor: "#FFA451",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 100,
        position: "relative",
    },
    goBackButton: {
        position: "absolute",
        left: 10,
        top: 50,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        paddingRight: 8,
        paddingVertical: 6,
        backgroundColor: "white",
        borderRadius: 20,
    },
    productImage: {
        width: 176,
        height: 176,
    },
    detailsContainer: {
        backgroundColor: "white",
        height: "65%",
        width: "100%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 24,
        paddingTop: 40,
        paddingBottom: 76,
        gap: 20,
    },
    productTitle: {
        fontSize: 24,
        fontWeight: "500",
    },
});

