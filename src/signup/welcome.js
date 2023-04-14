import { ImageBackground } from 'react-native';
import { View, StyleSheet, Text, TextInput, Image, Button, Pressable, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { Colors, globalStyles } from '../global-styles';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { useEffect } from 'react';

const Welcome = props => {

    const [profileComplete, setProfileComplete] = useState(false);
    const [welcomeNow, setWelcomeNow] = useState(false);

    useEffect(() => {
        console.log(props.route.params);
        if (profileComplete && !welcomeNow) {
            setTimeout(() => {
                setWelcomeNow(true);                
            }, 2000);
        }
    }, []);

    return (
        <View style={[styles.mainContainer]}>
            
            <View style={[styles.paddedContainer, globalStyles.vCenter, globalStyles.fullWidth, globalStyles.flex1]}>
                
                {!profileComplete && <AnimatedCircularProgress
                size={240}
                width={10}
                fill={100}
                rotation={0}
                tintColor={Colors.ButtonBackgroundColor}
                duration={1000}
                onAnimationComplete={() => setProfileComplete(true)}
                backgroundColor='#fff'>
                {
                    (fill) => (
                    <SafeAreaView>
                    <View style={[globalStyles.flexCenter, globalStyles.vCenter, globalStyles.flexRow]}>
                        <Text style={[globalStyles.mediumTitle]}>Planting ... </Text>
                    </View>
                    </SafeAreaView>
                    )
                }
                </AnimatedCircularProgress>}

                {profileComplete && <View style={[globalStyles.vCenter]}>
                    <Animatable.View animation={'zoomIn'} iterationCount={1} direction="alternate">
                    <Image style={{maxWidth: 150, maxHeight: 250}} source={require("../../assets/plant-growing.gif")} resizeMode="center"></Image>
                    <Text style={[globalStyles.mediumTitle]} >Profile Complete!</Text>
                </Animatable.View>
                </View>}
            

                {welcomeNow && <View style={[globalStyles.vCenter]}>
                    <Animatable.View animation={'zoomIn'} iterationCount={1} direction="alternate">

                </Animatable.View>
                </View>}

            </View>

            <View style={[globalStyles.fullWidth, globalStyles.vCenter, globalStyles.flex1, {zIndex: -2}]}>
                <ImageBackground source={require("../../assets/plant.jpg")} resizeMode="contain" style={styles.backImage}>
                </ImageBackground>
            </View>
        </View>
    )
}

export default Welcome;

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

