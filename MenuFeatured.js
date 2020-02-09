import {Alert, Image, StyleSheet, Text, TouchableOpacity, View, ScrollView} from "react-native";
import React from "react";
import fetch from "node-fetch"
import Card from "./Card"

export default function MenuFeatured({history}){
        return (
            <View style={styles.mainContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.hamburgerContainer}>
                        <TouchableOpacity onPress={() => history.push("/")}>
                            <Image style={styles.image} source={require("./Images/hamburger.png")}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image1} source={require("./Images/logoBruh.png")}/>
                        <Text style={styles.font1}>SURVE</Text>
                    </View>
                    <View style={styles.textContainer}>
                        <TouchableOpacity onPress={() => history.push("/menu")}>
                            <Text style={styles.font}>Favorite</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => history.push("/menuTry")}>
                            <Text style={styles.font}>Try</Text>
                        </TouchableOpacity>
                        <Text style={styles.fontSpecial}>Featured</Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <ScrollView horizontal={true} pagingEnabled={true}>
                        <Card gradientColor={["#FFA439", "#FF5353"]} style="styles.swipeContainer" food="Indian" name="Nan I" history = {history}
                              imageChoice = {require("./Images/IndianChicken.png")}/>
                        <Card gradientColor={["#A642D6", "#ED5EFA"]} style="styles.swipeContainer" food="Mexican" name="Loco Chocos" history = {history}
                              imageChoice = {require("./Images/Taco.png")}/>
                        <Card gradientColor={["#3272EE", "#A3D8E9"]} style="styles.swipeContainer" food="Chinese" name="Yu Wang" history = {history}
                              imageChoice = {require("./Images/Noodles.png")}/>
                        <Card gradientColor={["#32B589", "#84CBA0"]} style="styles.swipeContainer" food="Italian" name="Chef Boy Hardee's" history = {history}
                              imageChoice = {require("./Images/Spaghetti.png")}/>
                    </ScrollView>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    topContainer: {
        flex: 1,

        backgroundColor: "white"
    },
    textContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomContainer: {
        flexDirection: "row",
        paddingTop: 40,
        flex: 3,
        backgroundColor: "white"
    },
    font: {
        paddingTop: 80,
        fontSize: 25,
        fontFamily: "Roboto"
        //Change Font Family to Avenir
    },
    fontSpecial: {
        paddingTop: 80,
        borderBottomWidth: 2,
        fontSize: 25,
        fontFamily: "Roboto"
        //Change Font Family to Avenir
    },
    font1: {
        fontSize: 30,
        fontFamily: "Roboto"
        //Change Font Family to Avenir
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: "contain"
    },
    hamburgerContainer: {
        paddingTop: 20,
        paddingLeft: 20,
    },
    imageContainer: {
        position: "absolute",
        top: 10,
        left: "38%",
        alignItems: "center"
    },
    image1: {
        width: 75,
        height: 75,
        resizeMode: "contain"
    },
    swipeContainer: {
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eeeeee",
        marginLeft: 40,
        width: 250,
        height: 350
    }
});
