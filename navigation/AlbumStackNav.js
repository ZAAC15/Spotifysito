import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AlbumDetailScreen from '../screen/AlbumDetailScreen';
import AlbumsScreen from '../screen/AlbumsScreen';
import SongsScreen from '../screen/SongsScreen';

const Stack = createNativeStackNavigator();

export default function AlbumStackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0B0B0B',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '600',
        },
        contentStyle: {
          backgroundColor: '#121212',
        },
      }}
    >
      <Stack.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{
          title: 'Álbumes',
        }}
      />

      <Stack.Screen
        name="AlbumDetail"
        component={AlbumDetailScreen}
        options={{
          title: 'Álbum',
        }}
      />

      <Stack.Screen
        name="Songs"
        component={SongsScreen}
        options={{
          title: 'Canciones',
        }}
      />
    </Stack.Navigator>
  );
}