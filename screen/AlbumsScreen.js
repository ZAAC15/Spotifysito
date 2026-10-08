import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from 'react-native';

import { getArtistAlbums } from '../services/musicApi';

const artistNames = [
  'Doctor Krápula',
  'Aterciopelados',
  'Diamante Eléctrico',
  'Los PetitFellas',
  'Miloz',
  'Soda Stereo',
  'Zoé',
  'Maná',
  'Arctic Monkeys',
  'Foo Fighters',
  'Linkin Park',
  'Red Hot Chili Peppers',
];

export default function AlbumsScreen({ navigation, route }) {
  const { width } = useWindowDimensions();

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const isMobile = width < 600;
  const selectedArtist = route.params?.artist;

  useEffect(() => {
    loadAlbums();
  }, [selectedArtist]);

  async function loadAlbums() {
    setLoading(true);

    if (selectedArtist) {
      const artistAlbums = await getArtistAlbums(selectedArtist);

      setAlbums(artistAlbums);
      setLoading(false);
      return;
    }

    const results = await Promise.all(
      artistNames.map((name) => getArtistAlbums(name))
    );

    const allAlbums = results.flat();

    setAlbums(allAlbums);
    setLoading(false);
  }

  function openAlbum(album) {
    navigation.navigate('AlbumDetail', {
      album,
    });
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <View style={styles.loadingCircle}>
          <ActivityIndicator
            size="large"
            color="#A78BFA"
          />
        </View>

        <Text style={styles.loadingText}>
          Cargando álbumes...
        </Text>
      </View>
    );
  }

  const featuredAlbum = albums.length > 0 ? albums[0] : null;

  const remainingAlbums =
    albums.length > 1
      ? albums.slice(1)
      : [];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}

      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.eyebrow}>
            {selectedArtist
              ? 'DISCOGRAFÍA'
              : 'DESCUBRE'}
          </Text>

          <Text style={styles.title}>
            {selectedArtist
              ? `Álbumes de ${selectedArtist}`
              : 'Álbumes'}
          </Text>

          <Text style={styles.subtitle}>
            {selectedArtist
              ? `Explora la discografía de ${selectedArtist}.`
              : 'Encuentra tu próximo álbum favorito.'}
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Ionicons
            name="disc-outline"
            size={25}
            color="#C4B5FD"
          />
        </View>
      </View>

      {featuredAlbum ? (
        <>
          {/* FEATURED */}

          <Pressable
            style={({ pressed }) => [
              styles.featured,
              pressed && styles.featuredPressed,
            ]}
            onPress={() => openAlbum(featuredAlbum)}
          >
            <Image
              source={{
                uri: featuredAlbum.strAlbumThumb,
              }}
              style={styles.featuredBackground}
              blurRadius={2}
            />

            <View style={styles.featuredOverlay} />

            <View style={styles.featuredGlowOne} />
            <View style={styles.featuredGlowTwo} />

            <View style={styles.featuredContent}>
              <View style={styles.featuredBadge}>
                <Ionicons
                  name="sparkles"
                  size={12}
                  color="#FFFFFF"
                />

                <Text style={styles.featuredBadgeText}>
                  DESTACADO
                </Text>
              </View>

              <View style={styles.featuredBottom}>
                <Image
                  source={{
                    uri: featuredAlbum.strAlbumThumb,
                  }}
                  style={styles.featuredCover}
                />

                <View style={styles.featuredInfo}>
                  <Text
                    style={styles.featuredAlbum}
                    numberOfLines={2}
                  >
                    {featuredAlbum.strAlbum}
                  </Text>

                  <Text
                    style={styles.featuredArtist}
                    numberOfLines={1}
                  >
                    {featuredAlbum.strArtist}
                  </Text>

                  <Text style={styles.featuredDescription}>
                    Explora este álbum y descubre sus canciones.
                  </Text>
                </View>

                <View style={styles.playButton}>
                  <Ionicons
                    name="play"
                    size={22}
                    color="#FFFFFF"
                  />
                </View>
              </View>
            </View>
          </Pressable>

          {/* ALBUM LIST */}

          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionTitle}>
                {selectedArtist
                  ? 'Más álbumes'
                  : 'Todos los álbumes'}
              </Text>

              <Text style={styles.sectionSubtitle}>
                {albums.length}{' '}
                {albums.length === 1
                  ? 'álbum disponible'
                  : 'álbumes disponibles'}
              </Text>
            </View>

            <View style={styles.sectionIcon}>
              <Ionicons
                name="albums-outline"
                size={20}
                color="#C4B5FD"
              />
            </View>
          </View>

          {remainingAlbums.length > 0 && (
            <View style={styles.grid}>
              {remainingAlbums.map((album, index) => (
                <Pressable
                  key={album.idAlbum}
                  style={({ pressed }) => [
                    styles.albumCard,
                    {
                      width: isMobile ? '47%' : '23%',
                    },
                    pressed && styles.albumCardPressed,
                  ]}
                  onPress={() => openAlbum(album)}
                >
                  <View style={styles.coverContainer}>
                    <Image
                      source={{
                        uri: album.strAlbumThumb,
                      }}
                      style={styles.cover}
                    />

                    <View
                      style={[
                        styles.coverGlow,
                        index % 3 === 0 &&
                          styles.purpleGlow,
                        index % 3 === 1 &&
                          styles.blueGlow,
                        index % 3 === 2 &&
                          styles.pinkGlow,
                      ]}
                    />

                    <View style={styles.playButtonSmall}>
                      <Ionicons
                        name="play"
                        size={14}
                        color="#FFFFFF"
                      />
                    </View>
                  </View>

                  <Text
                    style={styles.albumName}
                    numberOfLines={1}
                  >
                    {album.strAlbum}
                  </Text>

                  <View style={styles.artistRow}>
                    <View style={styles.artistDot} />

                    <Text
                      style={styles.artistName}
                      numberOfLines={1}
                    >
                      {album.strArtist}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>
          )}

          {remainingAlbums.length === 0 && (
            <View style={styles.singleAlbumMessage}>
              <Ionicons
                name="musical-notes-outline"
                size={22}
                color="#A78BFA"
              />

              <Text style={styles.singleAlbumText}>
                Este artista tiene un solo álbum disponible.
              </Text>
            </View>
          )}
        </>
      ) : (
        <View style={styles.empty}>
          <View style={styles.emptyIcon}>
            <Ionicons
              name="disc-outline"
              size={36}
              color="#A78BFA"
            />
          </View>

          <Text style={styles.emptyTitle}>
            No encontramos álbumes
          </Text>

          <Text style={styles.emptyText}>
            No hay álbumes disponibles para este artista.
          </Text>
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

  /* LOADING */

  loading: {
    flex: 1,
    backgroundColor: '#09090B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#1B1425',
    borderWidth: 1,
    borderColor: '#342348',
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    color: '#A7A7A7',
    marginTop: 14,
    fontSize: 14,
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 26,
  },

  headerText: {
    flex: 1,
    minWidth: 0,
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
    fontSize: 32,
    fontWeight: '800',
  },

  subtitle: {
    color: '#807A87',
    fontSize: 14,
    marginTop: 7,
  },

  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: '#18131F',
    borderWidth: 1,
    borderColor: '#2D2140',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },

  /* FEATURED */

  featured: {
    height: 280,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#17131F',
    borderWidth: 1,
    borderColor: '#35264A',
  },

  featuredPressed: {
    opacity: 0.82,
    transform: [{ scale: 0.995 }],
  },

  featuredBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.22,
  },

  featuredOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#0E0B13',
    opacity: 0.72,
  },

  featuredGlowOne: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: '#8B5CF6',
    opacity: 0.16,
    right: -100,
    top: -140,
  },

  featuredGlowTwo: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#D946EF',
    opacity: 0.08,
    left: -100,
    bottom: -130,
  },

  featuredContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },

  featuredBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(139, 92, 246, 0.20)',
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.30)',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 11,
  },

  featuredBadgeText: {
    color: '#C4B5FD',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1,
  },

  featuredBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  featuredCover: {
    width: 125,
    height: 125,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#49365F',
  },

  featuredInfo: {
    flex: 1,
    marginLeft: 20,
    minWidth: 0,
  },

  featuredAlbum: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '800',
  },

  featuredArtist: {
    color: '#C4B5FD',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
  },

  featuredDescription: {
    color: '#96909F',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 9,
    maxWidth: 400,
  },

  playButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#8B5CF6',
    borderWidth: 1,
    borderColor: '#B09AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
    shadowColor: '#8B5CF6',
    shadowOpacity: 0.4,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 8,
  },

  /* SECTION */

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 34,
    marginBottom: 17,
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

  /* GRID */

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },

  albumCard: {
    marginBottom: 6,
  },

  albumCardPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.975 }],
  },

  coverContainer: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#17131F',
    borderWidth: 1,
    borderColor: '#2B2038',
    position: 'relative',
  },

  cover: {
    width: '100%',
    height: '100%',
  },

  coverGlow: {
    position: 'absolute',
    width: 130,
    height: 130,
    borderRadius: 65,
    right: -50,
    bottom: -55,
    opacity: 0.13,
  },

  purpleGlow: {
    backgroundColor: '#8B5CF6',
  },

  blueGlow: {
    backgroundColor: '#6366F1',
  },

  pinkGlow: {
    backgroundColor: '#D946EF',
  },

  playButtonSmall: {
    position: 'absolute',
    right: 9,
    bottom: 9,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#8B5CF6',
    borderWidth: 1,
    borderColor: '#B09AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  albumName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
    marginTop: 10,
  },

  artistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  artistDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#A78BFA',
    marginRight: 6,
  },

  artistName: {
    color: '#77717F',
    fontSize: 12,
    flex: 1,
  },

  /* SINGLE ALBUM */

  singleAlbumMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#141218',
    borderWidth: 1,
    borderColor: '#211B28',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 15,
    gap: 9,
  },

  singleAlbumText: {
    color: '#77717F',
    fontSize: 13,
  },

  /* EMPTY */

  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
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
    fontSize: 20,
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