import React, { Component } from 'react';
import { StatusBar, Text, Dimensions } from 'react-native';
import { NativeBaseProvider, Image, HStack, Pressable } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { CoinScreen, AboutScreen, SearchScreen, DetailScreen } from './screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const window = Dimensions.get('window');

const BotNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Coin"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#B1D4E0',
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: '#FF4C00CC',
        },
        tabBarLabelStyle: {
          paddingBottom: 2,
        },
        headerStyle: {
          backgroundColor: '#E3E3E3',
        },
      })}>
      <Tab.Screen
        name="Coin"
        component={CoinScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="coins" color={color} size={30} />
          ),
          unmountOnBlur: true,
          title: (
            <HStack
              space={2}
              fontSize="2xl"
              w={window.width - (window.width/2)}
              alignItems="center"
              justifyContent="space-between"
              color="#FF4C00CC">
              <Image
                source={require('./assets/KOINFO-1.png')}
                size={5}
                width={10}
                height={50}
                mt={1}
              />
              <Text >KOINFO</Text>
            </HStack>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="search" color={color} size={30} />
          ),
          unmountOnBlur: true,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="exclamation-circle" color={color} size={30} />
          ),
          unmountOnBlur: true,
          title: (
            <Text>Information</Text>
          )
        }}
      />
    </Tab.Navigator>
  );
};

class App extends Component {
  render() {
    return (
      <NativeBaseProvider>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="BottomNavigator"
              component={BotNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DetailScreen"
              component={DetailScreen}
              options={{
                headerStyle: {
                  backgroundColor: '#FF4C00CC',
                },
                headerTintColor: 'white',
                title: "KOINFO",
              }}
            />
            
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

export default App;
