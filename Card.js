import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';

export default function Card(props) {
    return (<View>
            <LinearGradient style={styles.container} colors={props.gradientColor} start={[0, 1]} end={[1, 0]}
                            locations={[0.6, 2]}>
                <TouchableOpacity onPress={() => props.history.push(`/${props.food}`)}>
                    <Text style={styles.text}>{props.name}</Text>
                </TouchableOpacity>
            </LinearGradient>
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
        zIndex: 9999,
    }
});

