import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { useFavorites } from '../context/FavoritesContext';

export default function ArtistDetailScreen({ navigation, route }) {
  const artist = route.params?.artist;

  const {
    toggleArtist,
    isArtistFavorite,
  } = useFavorites();

  if (!artist) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>
          No se encontró el artista.
        </Text>
      </View>
    );
  }

  const favorite = isArtistFavorite(artist.idArtist);

  function openArtistAlbums() {
    const tabNavigation = navigation.getParent();

    tabNavigation?.navigate('Álbumes', {
      screen: 'Albums',
      params: {
        artist: artist.strArtist,
        artistId: artist.idArtist,
      },
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.hero}>
        <View style={styles.imageContainer}>
          {artist.strArtistThumb ? (
            <Image
              source={{ uri: artist.strArtistThumb }}
              style={styles.image}
            />
          ) : (
            <Ionicons
              name="person"
              size={70}
              color="#A78BFA"
            />
          )}
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>
            {artist.strArtist}
          </Text>

          <Text style={styles.genre}>
            {artist.strGenre || 'Artista'}
          </Text>

          <Text style={styles.description}>
            Explora la música y los álbumes de este artista.
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.albumButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={openArtistAlbums}
          >
            <Ionicons
              name="albums-outline"
              size={19}
              color="#FFFFFF"
            />

            <Text style={styles.albumButtonText}>
              Ver álbumes
            </Text>
          </Pressable>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.favoriteButton,
            favorite && styles.favoriteButtonActive,
            pressed && styles.favoritePressed,
          ]}
          onPress={() => toggleArtist(artist)}
        >
          <Ionicons
            name={favorite ? 'heart' : 'heart-outline'}
            size={24}
            color={favorite ? '#FFFFFF' : '#A78BFA'}
          />
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

  imageContainer: {
    width: 240,
    height: 240,
    borderRadius: 120,
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: '#18131F',
    borderWidth: 1,
    borderColor: '#33254A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  info: {
    marginTop: 32,
  },

  name: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
  },

  genre: {
    color: '#A78BFA',
    fontSize: 15,
    marginTop: 7,
  },

  description: {
    color: '#A7A7A7',
    fontSize: 15,
    marginTop: 16,
    lineHeight: 22,
  },

  albumButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: '#8B5CF6',
    paddingVertical: 13,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginTop: 24,
  },

  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },

  albumButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  favoriteButton: {
    position: 'absolute',
    right: 0,
    top: 20,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#21182E',
    borderWidth: 1,
    borderColor: '#38264C',
    justifyContent: 'center',
    alignItems: 'center',
  },

  favoriteButtonActive: {
    backgroundColor: '#8B5CF6',
    borderColor: '#A78BFA',
  },

  favoritePressed: {
    opacity: 0.7,
    transform: [{ scale: 0.92 }],
  },

  error: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
  },
});