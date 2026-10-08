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

import { searchArtist } from '../services/musicApi';

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

export default function ArtistsScreen({ navigation }) {
  const { width } = useWindowDimensions();

  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  const isMobile = width < 600;

  useEffect(() => {
    loadArtists();
  }, []);

  async function loadArtists() {
    setLoading(true);

    const results = await Promise.all(
      artistNames.map((name) => searchArtist(name))
    );

    setArtists(results.filter(Boolean));
    setLoading(false);
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
          Cargando artistas...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>
            DESCUBRE
          </Text>

          <Text style={styles.title}>
            Artistas
          </Text>

          <Text style={styles.subtitle}>
            Descubre artistas y explora su música.
          </Text>
        </View>

        <View style={styles.headerIcon}>
          <Ionicons
            name="mic-outline"
            size={24}
            color="#C4B5FD"
          />
        </View>
      </View>

      <View style={styles.list}>
        {artists.map((artist, index) => (
          <Pressable
            key={artist.idArtist}
            style={({ pressed }) => [
              styles.artistCard,
              {
                width: isMobile ? '100%' : '48%',
              },
              pressed && styles.artistCardPressed,
            ]}
            onPress={() =>
              navigation.navigate('ArtistDetail', {
                artist,
              })
            }
          >
            <View
              style={[
                styles.cardGlow,
                index % 3 === 0 && styles.purpleGlow,
                index % 3 === 1 && styles.blueGlow,
                index % 3 === 2 && styles.pinkGlow,
              ]}
            />

            <View style={styles.imageContainer}>
              <Image
                source={{
                  uri: artist.strArtistThumb,
                }}
                style={styles.artistImage}
              />
            </View>

            <View style={styles.artistInfo}>
              <Text
                style={styles.artistName}
                numberOfLines={1}
              >
                {artist.strArtist}
              </Text>

              <View style={styles.genreRow}>
                <View style={styles.genreDot} />

                <Text
                  style={styles.artistGenre}
                  numberOfLines={1}
                >
                  {artist.strGenre || 'Artista'}
                </Text>
              </View>
            </View>

            <View style={styles.arrow}>
              <Ionicons
                name="arrow-forward"
                size={17}
                color="#C4B5FD"
              />
            </View>
          </Pressable>
        ))}
      </View>
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
    paddingBottom: 60,
  },

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

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 28,
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
  },

  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 14,
  },

  artistCard: {
    minHeight: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141218',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#211B28',
    padding: 14,
    overflow: 'hidden',
    position: 'relative',
  },

  artistCardPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.985 }],
    borderColor: '#3A2A4E',
  },

  cardGlow: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    right: -70,
    top: -80,
    opacity: 0.11,
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

  imageContainer: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: '#1D1726',
    borderWidth: 1,
    borderColor: '#342348',
    padding: 2,
    overflow: 'hidden',
  },

  artistImage: {
    width: '100%',
    height: '100%',
    borderRadius: 31,
  },

  artistInfo: {
    flex: 1,
    minWidth: 0,
    marginLeft: 14,
  },

  artistName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  genreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  genreDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A78BFA',
    marginRight: 7,
  },

  artistGenre: {
    color: '#80798A',
    fontSize: 12,
    flex: 1,
  },

  arrow: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#1D1726',
    borderWidth: 1,
    borderColor: '#30213F',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
});