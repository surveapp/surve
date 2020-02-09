import React from "react";
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import Service from "./Data/Service"
import {LinearGradient} from "expo-linear-gradient";
let MexicanServiceProp = (props) => {
    return (
        <View>
            <LinearGradient colors={["#A642D6", "#ED5EFA"]} start={[0, 1]} end={[1, 0]} locations={[0.6, 2]}>
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
                    <Image source={require('../../Images/Taco.png')}/>
                </View>
                <TouchableOpacity onPress={() => props.history.push(props.service)}>
                    <View>
                        <Text style={styles.fontContainer}>The Menu</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.fontContainer2}>Survices</Text>
                </View>
                <View style={styles.subContainer}>
                    <ScrollView>
                        <Service imageBre = {require("../../Images/flame.png")} price = "$11.99" color = "#FB8EE3" food = "Romantic Pack"/>
                        <Service imageBre = {require("../../Images/birthday.png")} price = "$5.99" color = "#F0DA14" food = "Birthday Pack"/>
                        <Service imageBre = {require("../../Images/holiday.png")} price = "$5.99" color = "#23B856" food = "Holiday Pack"/>
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
        marginBottom: 20,
        width: 250,
        height: 190,
        backgroundColor: "transparent"
    },
    fontContainer: {
        fontWeight: "100",
        color: "white",
        fontSize: 20,
        marginTop: 400,
        marginRight: 300,
        transform: [
            {rotate: "270deg"}
        ]
    },

    fontContainer2: {
        fontWeight:"700",
        color:"black",
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
        fontSize: 24,
        color: "white"
    },
});


export default MexicanServiceProp;
