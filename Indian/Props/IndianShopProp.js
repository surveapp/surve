import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Shop from "./Data/Shop"
import React from "react";
import Food from "./Data/Food";

let IndianShopProp = (props) => {
    return (
        <View>
            <LinearGradient colors={["#FFA439", "#FF5353"]} start={[0, 1]} end={[1, 0]} locations={[0.6, 2]}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => props.history.push(props.menu)}>
                        <Image style={styles.arrowImage} source = {require("../../Images/backArrow.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.shopThing}>
                    <Text style={styles.fontColorShop}>{props.shop}</Text>
                </View>
                <View style={styles.imageThing}>
                    <Image source={require('../../Images/IndianChicken.png')}/>
                </View>
                <TouchableOpacity onPress={() => props.history.push(props.foodMenu)}>
                    <View>
                        <Text style={styles.fontContainer}>The Menu</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.history.push(props.service)}>
                    <View>
                        <Text style={styles.fontContainer2}>Survices</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.subContainer}>
                    <ScrollView>
                        <Food imageBruh = {require("../../Images/salmon.png")} food = "Tandoori Salmon" price = "$12.99"/>
                        <Shop imageBre = {require("../../Images/flame.png")} price = "$20.99" food = "Romantic Pack"/>
                        <Food imageBruh = {require("../../Images/aloo.png")} food = "Aloo Gobhi" price = "$8.99"/>
                        <Food imageBruh = {require("../../Images/paneer.png")} food = "Paneer Tikka" price = "$7.99"/>
                        <Shop imageBre = {require("../../Images/holiday.png")} price = "$2.99" food = "Holiday Pack"/>
                        <View style={styles.ScrollTopContainer}>
                            <Text style={styles.totalFont}>Total</Text>
                            <Text style={styles.componentFont}>$12.99</Text>
                            <Text style={styles.componentFont}>$20.99</Text>
                            <Text style={styles.componentFont}>$8.99</Text>
                            <Text style={styles.componentFont}>$7.99</Text>
                            <Text style={styles.componentFont}>$2.99</Text>
                            <Text style={styles.totalFont2}>$58.81</Text>
                        </View>
                        <View style={styles.ScrollTopContainer}>
                        </View>
                        <View style={styles.ScrollTopContainer}>
                        </View>
                        <View style={styles.ScrollTopContainer}>
                        </View>
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
        marginTop: -20,
        marginBottom: 20,
        width: 250,
        height: 175,
        backgroundColor: "transparent"
    },
    totalFont: {
        marginTop: 200,
        marginLeft: 150,
        fontSize: 40,
        borderBottomWidth: 5,
    },
    totalFont2: {
        marginBottom: -50,
        marginTop: 50,
        marginLeft: 112,
        fontSize: 40,
        color: "red",
        alignItems: "center",
        borderBottomWidth: 5,
        borderBottomColor: "red",
    },
    componentFont: {
        marginTop: 10,
        marginBottom: -10,
        marginLeft: 150,
    },
    fontContainer: {
        fontWeight: "100",
        color: "white",
        fontSize: 22,
        marginTop: 400,
        marginRight: 300,
        transform: [
            {rotate: "270deg"}
        ]
    },

    fontContainer2: {
        fontWeight:"100",
        color:"white",
        fontSize: 22,
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
        top: 40,
        height: 50,
        width: 50,
        resizeMode: "contain"
    },
    arrowImage: {
        height: 50,
        width: 50,
        resizeMode: "contain"
    },
    imageThing: {
        position: "absolute",
        left: 150,
        height: 100,
        width: 100,
        top: 100,
        resizeMode: "contain"
    },
    shopThing: {
        position: "absolute",
        top: 725,
        left: 20
    },
    fontColorShop: {
        fontWeight:"700",
        fontSize: 28,
        color: "black"
    },
});

export default IndianShopProp;
