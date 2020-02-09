import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Shop from "./Data/Shop"
import React from "react";
import Food from "./Data/Food";
import Service from "./Data/Service";
let ChineseShopProp = (props) => {
    return (
        <View>
            <LinearGradient colors={["#3272EE", "#A3D8E9"]} start={[0, 1]} end={[1, 0]} locations={[0.6, 2]}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => props.history.push(props.menu)}>
                        <Image style={styles.arrowImage} source = {require("../../Images/backArrow.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.shopThing}>
                    <Text style={styles.fontColorShop}>{props.shop}</Text>
                </View>
                <View style={styles.imageThing}>
                    <Image source={require('../../Images/Noodles.png')}/>
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
                        <Service imageBre = {require("../../Images/holiday.png")} price = "$1.00" color = "#23B856" food = "Holiday Pack"/>
                        <Food imageBruh = {require("../../Images/sweet.png")} food = "Sesame Chicken" price = "$5.00"/>
                        <Food imageBruh = {require("../../Images/kung.png")} food = "Kung Pao Beef" price = "$7.99"/>
                        <Service imageBre = {require("../../Images/flame.png")} price = "$31.99" color = "#FB8EE3" food = "Romantic Pack"/>
                        <Service imageBre = {require("../../Images/birthday.png")} price = "$45.99" color = "#F0DA14" food = "Birthday Pack"/>
                        <View style={styles.ScrollTopContainer}>
                            <Text style={styles.totalFont}>Total</Text>
                            <Text style={styles.componentFont}>$1.00</Text>
                            <Text style={styles.componentFont}>$5.00</Text>
                            <Text style={styles.componentFont}>$7.99</Text>
                            <Text style={styles.componentFont}>$30.99</Text>
                            <Text style={styles.componentFont}>$45.99</Text>
                            <Text style={styles.totalFont2}>$99.25</Text>
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

export default ChineseShopProp;
