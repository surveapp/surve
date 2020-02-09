import React from "react"
import {StyleSheet, Text, View} from "react-native";
let Shop = (props) => {
    return (
        <View>
            <View style={styles.itemContainer}>
                <Text>{props.imageBre}</Text>
            </View>
            <View style={styles.itemContainerFont}>
                <Text>{props.food}</Text>
                <Text>{props.price}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
        itemContainer: {
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#eeeeee",
            width: 250,
            height: 250
        },
        itemContainerFont: {
            marginTop: 20,
            marginBottom: 20,
            paddingRight: 30,
            alignItems: "center",
        },
    }
);

export default Shop;
