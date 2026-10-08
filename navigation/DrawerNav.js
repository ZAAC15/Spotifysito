import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutScreen from '../screen/AboutScreen';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen from '../screen/ProfileScreen';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#0A090D',
        },

        headerTintColor: '#FFFFFF',

        headerTitleStyle: {
          fontSize: 17,
          fontWeight: '700',
        },

        drawerStyle: {
          backgroundColor: '#0D0B12',
          width: 290,
        },

        drawerActiveBackgroundColor: '#241638',

        drawerActiveTintColor: '#C4B5FD',

        drawerInactiveTintColor: '#8E8998',

        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: '600',
        },

        drawerItemStyle: {
          borderRadius: 12,
          marginHorizontal: 10,
          marginVertical: 4,
        },

        drawerIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Explorar') {
            iconName = focused
              ? 'musical-notes'
              : 'musical-notes-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused
              ? 'person'
              : 'person-outline';
          } else {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
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
      <Drawer.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          title: 'Spotifysito',
        }}
      />

      <Drawer.Screen
        name="Explorar"
        component={TabNavigation}
        options={{
          title: 'Explorar',
        }}
      />

      <Drawer.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{
          title: 'Perfil',
        }}
      />

      <Drawer.Screen
        name="Acerca de"
        component={AboutScreen}
        options={{
          title: 'Acerca de',
        }}
      />
    </Drawer.Navigator>
  );
}