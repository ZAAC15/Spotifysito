import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import StackNav from './StackNav';
import AlbumStackNav from './AlbumStackNav';
import FavoritesScreen from '../screen/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: '#C4B5FD',
        tabBarInactiveTintColor: '#77717F',

        tabBarStyle: {
          backgroundColor: '#0A090D',
          borderTopColor: '#241B35',
          borderTopWidth: 1,
          height: 68,
          paddingBottom: 8,
          paddingTop: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'Artistas') {
            iconName = focused ? 'mic' : 'mic-outline';
          } else if (route.name === 'Álbumes') {
            iconName = focused ? 'disc' : 'disc-outline';
          } else {
            iconName = focused
              ? 'heart'
              : 'heart-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Artistas"
        component={StackNav}
      />

      <Tab.Screen
        name="Álbumes"
        component={AlbumStackNav}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();

            navigation.navigate('Álbumes', {
              screen: 'Albums',
              params: {
                artist: null,
                artistId: null,
              },
            });
          },
        })}
      />

      <Tab.Screen
        name="Favoritos"
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
}