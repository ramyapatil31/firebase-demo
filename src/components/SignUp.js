import React, {Component} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignUp extends Component{
    constructor(props){
        super(props);
     }

    render(){
        return(
            <View style={styles.container}>
            <Text style={styles.welcome}>Register</Text>
            <View style={styles.inputContainer}>
            <Input style={styles.inputs}
                placeholder=' Username'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='black'
                    />
                }
                />
                </View>
                <View style={styles.inputContainer}>
                 <Input style={styles.inputs}
                placeholder='Email Id'
                leftIcon={
                    <Icon
                    name='envelope'
                    size={24}
                    color='black'
                    />
                }
                />
                </View>
                <View  style={styles.inputContainer}>
                <Input style={styles.inputs}
                placeholder='Password'
                leftIcon={
                    <Icon
                    name='key'
                    size={24}
                    color='black'
                    />
                }
                />
                </View>
                <Button
                    title="Sign Up"
                    type="outline"
                    color="#602C84"  
                    style={{width: 250}}
                    onPress={() => this.props.navigation.navigate('AddItem')}
                />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E6E6FA',
      
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    h3: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
  });
  