import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import QuizScreen from '../screens/Quiz';
import SoalScreen from '../screens/Soal';
import UjiKompetensiScreen from '../screens/UjiKompetensi';
import MateriScreen from '../screens/Materi';
import IsiSubMateriScreen from '../screens/IsiSubMateri';
import IsiLatihanScreen from '../screens/IsiLatihan';
import DetailMateriScreen from '../screens/DetailMateri';
import KataKunciScreen from '../screens/KataKunci';
import KompetensiDasarScreen from '../screens/KompetensiDasar';
import PengalamanBelajar from '../screens/PengalamanBelajar';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="MTK"
          component={MainApp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Quiz"
          component={QuizScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Soal"
          component={SoalScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="DetailMateri"
          component={DetailMateriScreen}
        />
        <Stack.Screen
          options={({route}) => ({
            title: route.params.name,
            headerBackVisible: false,
            headerTintColor: '#FB9646',
            headerStyle: {
              shadowColor: '#AFC3FB',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 50,
            },
          })}
          name="IsiSubMateri"
          component={IsiSubMateriScreen}
        />
        <Stack.Screen
          options={({route}) => ({
            title: route.params.name,
            headerBackVisible: false,
            headerTintColor: '#FB9646',
            headerStyle: {
              shadowColor: '#AFC3FB',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 50,
            },
          })}
          name="IsiLatihan"
          component={IsiLatihanScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="KataKunci"
          component={KataKunciScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="KompetensiDasar"
          component={KompetensiDasarScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PengalamanBelajar"
          component={PengalamanBelajar}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainApp = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    screenOptions={{
      tabBarActiveTintColor: '#AFC3FB',
      tabBarInactiveTintColor: '#FB9646',
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        borderRadius: 25,
        height: 65,
        borderTopWidth: 0,
        shadowColor: 'blue',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 20,
      },
    }}>
    <Tab.Screen
      name="Materi"
      component={MateriScreen}
      options={{
        tabBarLabel: 'Home',
        headerTintColor: '#FB9646',
        headerStyle: {
          shadowColor: '#AFC3FB',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 50,
        },
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons name="home-outline" color={color} size={40} />
        ),
      }}
    />
    <Tab.Screen
      name="Uji Kompetensi"
      component={UjiKompetensiScreen}
      options={{
        tabBarLabel: 'Uji Kompetensi',
        headerTintColor: '#FB9646',
        headerStyle: {
          shadowColor: '#AFC3FB',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 50,
        },
        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="puzzle-outline"
            color={color}
            size={35}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        headerTintColor: '#FB9646',
        headerStyle: {
          shadowColor: '#AFC3FB',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 50,
        },

        tabBarIcon: ({color, size}) => (
          <MaterialCommunityIcons
            name="account-outline"
            color={color}
            size={40}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
