import { useState, useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { View, StyleSheet, Text, TextInput, Image, Button, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Colors, globalStyles } from '../global-styles';

const renderInputs = (props) => {
    console.log(props);
    return (
        <View style={[globalStyles.fullWidth]}>
                    
        <View style={styles.loginInputItem}>
            <TouchableWithoutFeedback>
            <TextInput onChangeText={props.setFullName} value={props.fullName} style={[styles.input, globalStyles.gray]} placeholder='Your full name' placeholderTextColor={Colors.MainForeColor}></TextInput>
            </TouchableWithoutFeedback>
        </View>

        <View style={styles.loginInputItem}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
            <TextInput style={[styles.input, globalStyles.gray]} placeholder='Your email id' placeholderTextColor={Colors.MainForeColor}></TextInput>
            </TouchableWithoutFeedback>
        </View>

        <View style={styles.loginInputItem}>
            <TextInput style={[styles.input, globalStyles.gray]} placeholder='Password' secureTextEntry placeholderTextColor={Colors.MainForeColor}></TextInput>
        </View>
    </View>
    )
}

const Signup = props => {

    const [fullName, setFullName] = useState('');

    useEffect(() => {
        console.log(fullName);
    }, []);

    return (
        <View style={[styles.mainContainer]}>
            
            <View style={[styles.paddedContainer, globalStyles.fullWidth, globalStyles.flex1]}>
                
                <View style={[globalStyles.fullWidth, globalStyles.vCenter]}>
                    <Text style={[globalStyles.biggerTitle]}>Let's Plant</Text>
                    <Text style={[globalStyles.lightMedium]}>Make your home green & clean</Text>
                </View>

                {renderInputs(fullName, setFullName)}

                <View style={[globalStyles.fullWidth]}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('welcome', {fullName: fullName})}>
                        <View style={[styles.btn]}>
                        <Text style={[globalStyles.regularTitle, styles.btnText]}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>

            <View style={[globalStyles.fullWidth, globalStyles.vCenter, globalStyles.flex1, {zIndex: -2}]}>
                <ImageBackground source={require("../../assets/plant.jpg")} resizeMode="contain" style={styles.backImage}>
                </ImageBackground>
            </View>
        </View>
    )
}

export default Signup;

const styles = StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      flex: 1,
      backgroundColor: Colors.MainBackground
    },
    backImage: {
        // flex: 1,
        width: '100%',
        height: '100%',
        backgroundSize: 'contain',
        justifyContent: 'center',
        zIndex: -100
    },    
    paddedContainer: {
        padding: 25,
        paddingTop: 65
    },
    sectionHeader: {
        backgroundColor: '#cee0d6',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    subHeader: {
        paddingTop: 20,
        paddingBottom: 20
    },

    input: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: Colors.Gray,
        color: Colors.MainForeColor,
        outlineStyle: 'none',
        fontFamily: 'Poppins_400Regular',
        marginVertical: 20,
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: Colors.ButtonBackgroundColor,
        borderRadius: 50,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 8,
        paddingRight: 8
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Poppins_300Light'
    }
});

