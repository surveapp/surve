import {Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import React from "react";

export default function Login({history}) {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>

                <View style={styles.container1A}>
                    <Image style={styles.image} source={require("./Images/logoBruh.png")}/>
                </View>
                <View style={styles.container1B}>
                    <Text style={styles.container1BText}>Log In Please</Text>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.container2Box}>
                    <View style={styles.container2BoxSub}>
                        <View style={styles.textBox}>
                            <Text>Username</Text>
                            <TextInput style={styles.textInput}>
                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.container2BoxSub}>
                        <View style={styles.textBox}>
                            <Text>Password</Text>
                            <TextInput style={styles.textInput}>
                            </TextInput>
                        </View>
                    </View>
                </View>
                <View style={styles.container2Box}>
                    <View style={styles.container2BoxSub}>
                        <TouchableOpacity onPress={() => Alert.alert('Login Works')}
                                          style={styles.loginButton}>
                            <Text style={styles.loginFont}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container2BoxSubText}>
                        <Text style={styles.or}>Or</Text>
                    </View>
                    <View style={styles.container2BoxSub}>
                        <TouchableOpacity onPress={() => history.push("/menu")}
                                          style={styles.loginButton}>
                            <Text style={styles.loginFont}>Log In With Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container1: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container1A: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: "contain"
    },
    container1B: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container1BText: {
        fontSize: 30,
    },
    container2: {
        flex: 3,
        justifyContent: 'center',
    },
    container2Box: {
        flex: 1,
    },
    container2BoxSub: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container2BoxSubText: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        padding: 30,
        width: "80%",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#add8e6",
        color: "white"
    },
    loginFont:{
        fontSize: 25,
        color: "white",
    },
    or:{
        fontSize: 20,
    },
    textBox: {
        width: "80%"
    },
    textInput:{
        paddingTop: 10,
        borderBottomWidth: 1
    },
    textInputBackground: {
    }
});
