import React from "react";
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import Food from "./Data/Food"
import { LinearGradient } from 'expo-linear-gradient';
let ChickenProp = (props) => {
    return (
        <View>
            <LinearGradient colors={["#32B589", "#84CBA0"]} start={[0, 1]} end={[1, 0]} locations={[0.6, 2]}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => props.history.push(props.menu)}>
                        <Image style={styles.arrowImage} source = {require("../../Images/backArrow.png")}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.shopThing}>
                    <TouchableOpacity onPress={() => props.history.push(props.shopNav)}>
                        <Text style={styles.fontColorShop}>{props.shop}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imageThing}>
                    <Image source={require('../../Images/Spaghetti.png')}/>
                </View>
            <View>
                <Text style={styles.fontContainer}>The Menu</Text>
            </View>
                <TouchableOpacity onPress={() => props.history.push(props.service)}>
                    <View>
                        <Text style={styles.fontContainer2}>Survices</Text>
                    </View>
                </TouchableOpacity>
            <View style={styles.subContainer}>
                <ScrollView>
                    <Food imageBruh = {require("../../Images/ChickenItalian.png")} food = "Baked Chicken Salad" price = "$8.00"/>
                    <Food imageBruh = {require("../../Images/Steak.png")} food = "8 oz. Steak" price = "$10.00"/>
                    <Food imageBruh = {require("../../Images/Bacon.png")} food = "Bacon Wrapped Wings" price = "$9.00"/>
                    <Food imageBruh = {require("../../Images/Bean.png")} food = "Black Bean Burger" price = "$12.00"/>
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
};
const styles = StyleSheet.create({

    subContainer: {
        borderRadius: 20,
        backgroundColor: "white",
        marginTop: -250,
        paddingTop: 30,
        paddingLeft: 30,
        marginLeft: 100,
        marginBottom: 850
    },
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
    ScrollTopContainer: {
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
        width: 250,
        height: 190,
        backgroundColor: "transparent"
    },
    fontContainer: {
        fontWeight: "700",
        color: "black",
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
        fontSize: 20,
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
        fontSize: 24,
        color: "white"
    },
});

export default ChickenProp
