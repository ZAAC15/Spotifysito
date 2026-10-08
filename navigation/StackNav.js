import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AlbumDetailScreen from '../screen/AlbumDetailScreen';
import AlbumsScreen from '../screen/AlbumsScreen';
import ArtistDetailScreen from '../screen/ArtistDetailScreen';
import ArtistsScreen from '../screen/ArtistsScreen';
import SongsScreen from '../screen/SongsScreen';
const Stack = createNativeStackNavigator();

export default function StackNav() {
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
        name="Artists"
        component={ArtistsScreen}
        options={{
          title: 'Artistas',
        }}
      />

      <Stack.Screen
        name="ArtistDetail"
        component={ArtistDetailScreen}
        options={{
          title: 'Artista',
        }}
      />

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