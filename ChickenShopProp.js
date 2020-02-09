import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Shop from "./Shop"
import React from "react";

let ChickenShopProp = (props) => {
    return (
        <View>
            <LinearGradient colors={["#FFA439","#FF5353"]} start={[0, 1]} end={[1, 0]} locations={[0.6, 2]}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => props.history.push(props.menu)}>
                        <Text style={styles.fontColor}>{props.backTo}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.shopThing}>
                        <Text style={styles.fontColorShop}>{props.shop}</Text>
                </View>
                <View style={styles.imageThing}>
                    <TouchableOpacity onPress={() => props.history.push(props.menu)}>
                        <Text style={styles.fontColor}>{props.photo}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => props.history.push(props.foodMenu)}>
                        <Text style={styles.fontContainer}>The Menu</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={() => props.history.push(props.service)}>
                        <Text style={styles.fontContainer2}>Survices</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainer}>
                    <ScrollView>
                        <Shop imageBre = "Bruh" price = "price" food = "item"/>
                        <Shop imageBre = "Bruh" price = "price" food = "item"/>
                        <Shop imageBre = "Bruh" price = "price" food = "item"/>
                        <Shop imageBre = "Bruh" price = "price" food = "item"/>
                        <Shop imageBre = "Bruh" price = "price" food = "item"/>
                        <Shop imageBre = "Bruh" price = "price" food = "item"/>
                        <Shop imageBre = "Bruh" price = "price" food = "item"/>
                        <View style={styles.ScrollTopContainer}>
                        </View>
                        <View style={styles.ScrollTopContainer}>
                        </View>
                        <View style={styles.ScrollTopContainer}>
                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "black"
    },
    subContainer: {
        borderRadius: 20,
        backgroundColor: "white",
        marginTop: -250,
        paddingTop: 30,
        paddingLeft: 30,
        marginLeft: 100,
        marginBottom: 850
    },
    ScrollTopContainer: {
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        width: 250,
        height: 250,
        backgroundColor: "transparent"
    },
    fontContainer: {
        fontWeight: "100",
        color: "white",
        fontSize: 18,
        marginTop: 400,
        marginRight: 300,
        transform: [
            {rotate: "270deg"}
        ]
    },

    fontContainer2: {
        fontWeight:"100",
        color:"white",
        fontSize: 18,
        marginTop: 100,
        marginRight: 300,
        transform: [
            {rotate: "270deg"}
        ]
    },
    fontColor: {
        color: "white"
    },
    arrow: {
        position: "absolute",
        left: 40,
        top: 40
    },
    imageThing: {
        position: "absolute",
        left: "50%",
        top: 150
    },
    shopThing: {
        position: "absolute",
        top: 725,
        left: 20
    },
    fontColorShop: {
        fontWeight:"700",
        fontSize: 28,
        color: "white"
    },
});

export default ChickenShopProp;
