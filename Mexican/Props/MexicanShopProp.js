import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Shop from "./Data/Shop"
import React from "react";
import Food from "./Data/Food";

let MexicanShopProp = (props) => {
    return (
        <View>
            <LinearGradient colors={["#A642D6", "#ED5EFA"]} start={[0, 1]} end={[1, 0]} locations={[0.6, 2]}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => props.history.push(props.menu)}>
                        <Image style={styles.arrowImage} source = {require("../../Images/backArrow.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.shopThing}>
                    <Text style={styles.fontColorShop}>{props.shop}</Text>
                </View>
                <View style={styles.imageThing}>
                    <Image source={require('../../Images/Taco.png')}/>
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
                        <Shop imageBre = {require("../../Images/flame.png")} price = "$11.99" food = "Romantic Pack"/>
                        <Food imageBruh = {require("../../Images/burrito.png")} food = "Taco, Burrito combo" price = "$6.00"/>
                        <Shop imageBre = {require("../../Images/birthday.png")} price = "$5.99" food = "Holiday Pack"/>
                        <Shop imageBre = {require("../../Images/birthday.png")} price = "$5.99" food = "Birthday Pack"/>
                        <Food imageBruh = {require("../../Images/salad.png")} food = "Taco Salad" price = "$8.99"/>
                        <View style={styles.ScrollTopContainer}>
                            <Text style={styles.totalFont}>Total</Text>
                            <Text style={styles.componentFont}>$11.99</Text>
                            <Text style={styles.componentFont}>$6.00</Text>
                            <Text style={styles.componentFont}>$5.99</Text>
                            <Text style={styles.componentFont}>$5.99</Text>
                            <Text style={styles.componentFont}>$8.99</Text>
                            <Text style={styles.totalFont2}>$42.47</Text>
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

export default MexicanShopProp;
