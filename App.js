import { Image, StyleSheet, Text, View } from 'react-native';
import { Colors } from './src/global-styles';
import { useFonts, Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_900Black } from '@expo-google-fonts/poppins';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './src/signup/signup';
import Welcome from './src/signup/welcome';


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_200ExtraLight, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold, Poppins_900Black
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={{flex: 1}}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="signup" component={Signup} options={{ title: '',
            headerShadowVisible: false, headerShown: false, headerStyle: styles.navHeaderStyle}}/>

          <Stack.Screen name="welcome" component={Welcome} options={{ title: '',
            headerShadowVisible: false, headerShown: false, headerStyle: styles.navHeaderStyle}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Colors.MainBackground,
  },
  bodyWrapper: {
  },
  contentContainer: {
      flex: 1,
      width: '100%'
  },
  navHeaderStyle: { 
    backgroundColor: Colors.MainBackground,
    height: 40,
    borderBottomWidth: 0,
    borderBottomColor: Colors.MainBackground
  }
});
