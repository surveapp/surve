import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import React from "react";

let Service = (props) => {
    return (
        <View>
            <View style={[styles.itemContainer, {backgroundColor: props.color}]}>
                <Image source = {props.imageBre}/>
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
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
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

export default Service;
