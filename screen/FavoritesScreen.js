import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from 'react-native';

import { useFavorites } from '../context/FavoritesContext';

export default function FavoritesScreen({ navigation }) {
  const {
    favorites,
    toggleArtist,
    toggleAlbum,
  } = useFavorites();

  const { width } = useWindowDimensions();

  const isMobile = width < 600;

  const hasFavorites =
    favorites.artists.length > 0 ||
    favorites.albums.length > 0;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}

      <View style={styles.hero}>
        <View style={styles.heroGlowOne} />
        <View style={styles.heroGlowTwo} />

        <View style={styles.heroIcon}>
          <Ionicons
            name="heart"
            size={28}
            color="#C4B5FD"
          />
        </View>

        <View style={styles.heroInfo}>
          <Text style={styles.eyebrow}>
            TU COLECCIÓN
          </Text>

          <Text style={styles.title}>
            Favoritos
          </Text>

          <Text style={styles.subtitle}>
            Tu música guardada en Spotifysito.
          </Text>
        </View>
      </View>

      {!hasFavorites && (
        <View style={styles.empty}>
          <View style={styles.emptyIcon}>
            <Ionicons
              name="heart-outline"
              size={38}
              color="#A78BFA"
            />
          </View>

          <Text style={styles.emptyTitle}>
            Todavía no tienes favoritos
          </Text>

          <Text style={styles.emptyText}>
            Guarda artistas o álbumes para
            encontrarlos rápidamente aquí.
          </Text>
        </View>
      )}

      {/* ARTISTAS */}

      {favorites.artists.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Artistas
              </Text>

              <Text style={styles.sectionSubtitle}>
                Tus artistas guardados
              </Text>
            </View>

            <View style={styles.sectionIcon}>
              <Ionicons
                name="mic-outline"
                size={20}
                color="#C4B5FD"
              />
            </View>
          </View>

          <View style={styles.artistList}>
            {favorites.artists.map((artist) => (
              <Pressable
                key={artist.idArtist}
                style={({ pressed }) => [
                  styles.artistCard,
                  pressed && styles.cardPressed,
                ]}
                onPress={() =>
                  navigation.navigate('Artistas', {
                    screen: 'ArtistDetail',
                    params: { artist },
                  })
                }
              >
                <View style={styles.artistImageContainer}>
                  <Image
                    source={{
                      uri: artist.strArtistThumb,
                    }}
                    style={styles.artistImage}
                  />

                  <View style={styles.artistImageGlow} />
                </View>

                <View style={styles.artistInfo}>
                  <Text
                    style={styles.artistName}
                    numberOfLines={1}
                  >
                    {artist.strArtist}
                  </Text>

                  <Text
                    style={styles.artistGenre}
                    numberOfLines={1}
                  >
                    {artist.strGenre || 'Artista'}
                  </Text>
                </View>

                <Pressable
                  style={({ pressed }) => [
                    styles.favoriteButton,
                    pressed && styles.favoritePressed,
                  ]}
                  onPress={() => toggleArtist(artist)}
                  hitSlop={10}
                >
                  <Ionicons
                    name="heart"
                    size={21}
                    color="#C4B5FD"
                  />
                </Pressable>
              </Pressable>
            ))}
          </View>
        </View>
      )}

      {/* ÁLBUMES */}

      {favorites.albums.length > 0 && (
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                Álbumes
              </Text>

              <Text style={styles.sectionSubtitle}>
                Tus álbumes guardados
              </Text>
            </View>

            <View style={styles.sectionIcon}>
              <Ionicons
                name="disc-outline"
                size={20}
                color="#C4B5FD"
              />
            </View>
          </View>

          <View style={styles.albumGrid}>
            {favorites.albums.map((album) => (
              <Pressable
                key={album.idAlbum}
                style={({ pressed }) => [
                  styles.albumCard,
                  {
                    width: isMobile ? '47%' : '23%',
                  },
                  pressed && styles.cardPressed,
                ]}
                onPress={() =>
                  navigation.navigate('Álbumes', {
                    screen: 'AlbumDetail',
                    params: { album },
                  })
                }
              >
                <View style={styles.coverContainer}>
                  <Image
                    source={{
                      uri: album.strAlbumThumb,
                    }}
                    style={styles.cover}
                  />

                  <View style={styles.coverGlow} />

                  <Pressable
                    style={({ pressed }) => [
                      styles.albumFavorite,
                      pressed && styles.favoritePressed,
                    ]}
                    onPress={() => toggleAlbum(album)}
                    hitSlop={10}
                  >
                    <Ionicons
                      name="heart"
                      size={19}
                      color="#C4B5FD"
                    />
                  </Pressable>
                </View>

                <Text
                  style={styles.albumName}
                  numberOfLines={1}
                >
                  {album.strAlbum}
                </Text>

                <Text
                  style={styles.albumArtist}
                  numberOfLines={1}
                >
                  {album.strArtist}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090B',
  },

  content: {
    padding: 24,
    paddingBottom: 70,
  },

  /* HERO */

  hero: {
    minHeight: 155,
    borderRadius: 24,
    backgroundColor: '#15121B',
    borderWidth: 1,
    borderColor: '#2B2038',
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },

  heroGlowOne: {
    position: 'absolute',
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: '#8B5CF6',
    opacity: 0.12,
    right: -90,
    top: -100,
  },

  heroGlowTwo: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#D946EF',
    opacity: 0.07,
    left: -80,
    bottom: -90,
  },

  heroIcon: {
    width: 62,
    height: 62,
    borderRadius: 20,
    backgroundColor: '#21182E',
    borderWidth: 1,
    borderColor: '#3A2850',
    justifyContent: 'center',
    alignItems: 'center',
  },

  heroInfo: {
    marginLeft: 18,
    flex: 1,
  },

  eyebrow: {
    color: '#A78BFA',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
  },

  subtitle: {
    color: '#88828F',
    fontSize: 14,
    marginTop: 5,
  },

  /* SECTIONS */

  section: {
    marginTop: 34,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
  },

  sectionSubtitle: {
    color: '#706A78',
    fontSize: 13,
    marginTop: 4,
  },

  sectionIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#18131F',
    borderWidth: 1,
    borderColor: '#2D2140',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /* ARTISTS */

  artistList: {
    gap: 10,
  },

  artistCard: {
    minHeight: 82,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141218',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#211B28',
    padding: 12,
    overflow: 'hidden',
  },

  artistImageContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    overflow: 'hidden',
    backgroundColor: '#1D1726',
  },

  artistImage: {
    width: '100%',
    height: '100%',
  },

  artistImageGlow: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#8B5CF6',
    opacity: 0.08,
    right: -20,
    bottom: -20,
  },

  artistInfo: {
    flex: 1,
    marginLeft: 14,
    minWidth: 0,
  },

  artistName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  artistGenre: {
    color: '#80798A',
    fontSize: 13,
    marginTop: 4,
  },

  favoriteButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#21182E',
    borderWidth: 1,
    borderColor: '#342348',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  /* ALBUMS */

  albumGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 18,
  },

  albumCard: {
    marginBottom: 8,
  },

  coverContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 14,
    backgroundColor: '#17131F',
    borderWidth: 1,
    borderColor: '#2B2038',
  },

  cover: {
    width: '100%',
    aspectRatio: 1,
  },

  coverGlow: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#8B5CF6',
    opacity: 0.08,
    right: -35,
    bottom: -35,
  },

  albumFavorite: {
    position: 'absolute',
    right: 8,
    top: 8,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(15, 10, 22, 0.82)',
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  albumName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 9,
  },

  albumArtist: {
    color: '#77717F',
    fontSize: 12,
    marginTop: 4,
  },

  /* INTERACTION */

  cardPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.99 }],
  },

  favoritePressed: {
    opacity: 0.65,
    transform: [{ scale: 0.9 }],
  },

  /* EMPTY */

  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    paddingHorizontal: 30,
  },

  emptyIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#1B1425',
    borderWidth: 1,
    borderColor: '#342348',
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
    marginTop: 16,
  },

  emptyText: {
    color: '#77717F',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 8,
  },
});