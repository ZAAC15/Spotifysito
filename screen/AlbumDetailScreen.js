import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useFavorites } from '../context/FavoritesContext';

export default function AlbumDetailScreen({ navigation, route }) {
  const album = route.params?.album;

  const {
    toggleAlbum,
    isAlbumFavorite,
  } = useFavorites();

  if (!album) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          No se encontró el álbum.
        </Text>
      </View>
    );
  }

  const favorite = isAlbumFavorite(album.idAlbum);

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: album.strAlbumThumb }}
          style={styles.cover}
        />

        <View style={styles.glow} />

        <View style={styles.titleRow}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              {album.strAlbum}
            </Text>

            <Text style={styles.artist}>
              {album.strArtist}
            </Text>
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.favoriteButton,
              favorite && styles.favoriteButtonActive,
              pressed && styles.favoritePressed,
            ]}
            onPress={() => toggleAlbum(album)}
          >
            <Ionicons
              name={favorite ? 'heart' : 'heart-outline'}
              size={25}
              color={favorite ? '#FFFFFF' : '#A78BFA'}
            />
          </Pressable>
        </View>

        <Text style={styles.description}>
          Explora las canciones disponibles en este álbum.
        </Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() =>
            navigation.navigate('Songs', {
              album: album,
            })
          }
        >
          <Ionicons
            name="musical-notes"
            size={18}
            color="#FFFFFF"
          />

          <Text style={styles.buttonText}>
            Ver canciones
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B',
    padding: 24,
  },

  hero: {
    flex: 1,
    position: 'relative',
  },

  cover: {
    width: 280,
    height: 280,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#17131F',
    borderWidth: 1,
    borderColor: '#33254A',
  },

  glow: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#8B5CF6',
    opacity: 0.08,
    alignSelf: 'center',
    top: 40,
    zIndex: -1,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  titleContainer: {
    flex: 1,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
  },

  artist: {
    color: '#A78BFA',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 7,
  },

  favoriteButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#21182E',
    borderWidth: 1,
    borderColor: '#38264C',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 14,
  },

  favoriteButtonActive: {
    backgroundColor: '#8B5CF6',
    borderColor: '#A78BFA',
  },

  favoritePressed: {
    opacity: 0.7,
    transform: [{ scale: 0.92 }],
  },

  description: {
    color: '#A7A7A7',
    fontSize: 15,
    marginTop: 16,
    lineHeight: 22,
  },

  button: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#8B5CF6',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginTop: 28,
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});