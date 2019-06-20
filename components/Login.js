import React, { Component } from 'react';
import {Text,View,StyleSheet,TextInput,TouchableHighlight} from 'react-native';
//import * as firebase from '../node_modules/firebase';
import firebase from '../Inicializador/firebase';
import Dialog from "react-native-dialog";


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            responsive: ''
        }
        this.singUp = this.singUp.bind(this);
        this.login = this.login.bind(this);
    }

   
   

    async singUp(){
        try{
            alert("Entro el try");
            await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            this.setState({response: '¡Cuenta creada exitosamente!'});
        }catch(error){
            alert ("Entro al catch");
            alert ("Error SingUp: "+error.toString());
            this.setState({response: 'Error SingUp: '+error.toString()});
        }
    }

    async login(){
        try{
            alert("Entro al try");
            await firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password);
            alert(this.setState({response: 'Bienvenido'}));
        }catch(error){
            alert("Entro al catch: "+error.toString());
            this.setState({response: 'Error Login: '+error.toString()});
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.textButton}> Logueo </Text>

                <View style={styles.containerInputs}>
                    <TextInput
                        placeholderTextColor="grey"
                        placeholder="Email"
                        style={styles.inputText}
                        onChangeText={(email) => this.setState({email})}
                    />

                    <TextInput
                        placeholderTextColor="grey"
                        placeholder="Contraseña"
                        style={styles.inputText}
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>


                <TouchableHighlight
                    onPress = {this.login}
                    style={[styles.singUpButton, styles.loginbutton]}
                >
                    <Text
                        style={styles.textButton}
                    >Lógin</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress = {this.singUp}
                    style={[styles.singUpButton, styles.loginbutton]}
                >
                    <Text
                        style={styles.textButton}
                    >SignUp</Text>
                </TouchableHighlight>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        marginHorizontal: 10
    },
    inputText: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'black'
    },
    loginbutton: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        borderRadius: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    textButton: {
        textAlign: 'center'
    },
    containerInputs:{
        marginBottom: 20
    },
    singUpButton: {

    }
})