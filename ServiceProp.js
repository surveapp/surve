import React from "react";
import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from "react-native";
import Service from "./Service"
import {LinearGradient} from "expo-linear-gradient";
 let ServiceProp = (props) => {
    return (
        <View>
            <LinearGradient colors={["#FFA439","#FF5353"]} start={[0, 1]} end={[1, 0]} locations={[0.6, 2]}>
                <View style={styles.arrow}>
                    <TouchableOpacity onPress={() => props.history.push(props.menu)}>
                        <Text style={styles.fontColor}>{props.backTo}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.shopThing}>
                    <TouchableOpacity onPress={() => props.history.push(props.shopNav)}>
                        <Text style={styles.fontColorShop}>{props.shop}</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.imageThing}>
                <TouchableOpacity onPress={() => props.history.push(props.menu)}>
                    <Text style={styles.fontColor}>{props.photo}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={() => props.history.push(props.service)}>
                    <Text style={styles.fontContainer}>The Menu</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.fontContainer2}>Survices</Text>
            </View>
            <View style={styles.subContainer}>
                <ScrollView>
                    <Service imageBre = "Bruh" price = "price"/>
                    <Service imageBre = "Bruh" price = "price"/>
                    <Service imageBre = "Bruh" price = "price"/>
                    <Service imageBre = "Bruh" price = "price"/>
                    <Service imageBre = "Bruh" price = "price"/>
                    <Service imageBre = "Bruh" price = "price"/>
                    <Service imageBre = "Bruh" price = "price"/>
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
        fontWeight:"700",
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
        fontSize: 24,
        color: "white"
    },
});

 export default ServiceProp;
