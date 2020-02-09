import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export default function Card(props) {
    return (<View>
        <TouchableOpacity onPress={() => props.history.push(`/${props.food}`)}>
            <LinearGradient style={styles.container} colors={props.gradientColor} start={[0, 1]} end={[1, 0]}
                            locations={[0.6, 2]}>
                <Image style={styles.image} source={props.imageChoice}/>
                <Text style={styles.text}>{props.name}</Text>
            </LinearGradient>
        </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
        marginLeft: 40,
        width: 250,
        height: 350,
    },
    text: {
        fontSize: 22,
    },
    image: {
        height: 125,
        width: 125,
        resizeMode: "contain"
    }
});

