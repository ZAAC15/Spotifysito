import { Ionicons } from '@expo/vector-icons';
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  function goToArtists() {
    navigation.navigate('Explorar', {
      screen: 'Artistas',
    });
  }

  function goToAlbums() {
    navigation.navigate('Explorar', {
      screen: 'Álbumes',
    });
  }

  function goToFavorites() {
    navigation.navigate('Explorar', {
      screen: 'Favoritos',
    });
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* HERO */}
      <View style={styles.hero}>
        <View style={styles.heroGlowOne} />
        <View style={styles.heroGlowTwo} />

        <View style={styles.heroContent}>
          <Text style={styles.eyebrow}>
            BIENVENIDO A
          </Text>

          <Text style={styles.title}>
            Spotifysito
          </Text>

          <Text style={styles.description}>
            Descubre artistas, álbumes y canciones
            que valen la pena escuchar.
          </Text>

          <Pressable
            style={({ pressed }) => [
              styles.heroButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={goToArtists}
          >
            <Ionicons
              name="musical-notes"
              size={18}
              color="#FFFFFF"
            />

            <Text style={styles.heroButtonText}>
              Explorar música
            </Text>
          </Pressable>
        </View>

        <View style={styles.heroCircle}>
          <Ionicons
            name="musical-notes"
            size={70}
            color="#A78BFA"
          />
        </View>
      </View>

      {/* ACCESOS */}
      <Text style={styles.sectionTitle}>
        Explora Spotifysito
      </Text>

      <View style={styles.cards}>
        {/* ARTISTAS */}
        <Pressable
          style={({ pressed }) => [
            styles.exploreCard,
            styles.artistsCard,
            pressed && styles.cardPressed,
          ]}
          onPress={goToArtists}
        >
          <View style={styles.cardGlowPurple} />

          <View style={styles.cardIcon}>
            <Ionicons
              name="mic-outline"
              size={26}
              color="#C4B5FD"
            />
          </View>

          <Text style={styles.cardTitle}>
            Artistas
          </Text>

          <Text style={styles.cardText}>
            Descubre nuevos sonidos y artistas.
          </Text>

          <View style={styles.cardArrow}>
            <Ionicons
              name="arrow-forward"
              size={19}
              color="#FFFFFF"
            />
          </View>
        </Pressable>

        {/* ALBUMES */}
        <Pressable
          style={({ pressed }) => [
            styles.exploreCard,
            styles.albumsCard,
            pressed && styles.cardPressed,
          ]}
          onPress={goToAlbums}
        >
          <View style={styles.cardGlowBlue} />

          <View style={styles.cardIcon}>
            <Ionicons
              name="disc-outline"
              size={26}
              color="#A5B4FC"
            />
          </View>

          <Text style={styles.cardTitle}>
            Álbumes
          </Text>

          <Text style={styles.cardText}>
            Explora discos y descubre canciones.
          </Text>

          <View style={styles.cardArrow}>
            <Ionicons
              name="arrow-forward"
              size={19}
              color="#FFFFFF"
            />
          </View>
        </Pressable>

        {/* FAVORITOS */}
        <Pressable
          style={({ pressed }) => [
            styles.exploreCard,
            styles.favoritesCard,
            pressed && styles.cardPressed,
          ]}
          onPress={goToFavorites}
        >
          <View style={styles.cardGlowPink} />

          <View style={styles.cardIcon}>
            <Ionicons
              name="heart-outline"
              size={26}
              color="#F0ABFC"
            />
          </View>

          <Text style={styles.cardTitle}>
            Favoritos
          </Text>

          <Text style={styles.cardText}>
            Encuentra la música que guardaste.
          </Text>

          <View style={styles.cardArrow}>
            <Ionicons
              name="arrow-forward"
              size={19}
              color="#FFFFFF"
            />
          </View>
        </Pressable>
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

  hero: {
    minHeight: 330,
    borderRadius: 28,
    padding: 30,
    overflow: 'hidden',
    backgroundColor: '#15131A',
    justifyContent: 'flex-end',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#27202F',
  },

  heroContent: {
    zIndex: 2,
    maxWidth: 600,
  },

  heroGlowOne: {
    position: 'absolute',
    width: 360,
    height: 360,
    borderRadius: 180,
    backgroundColor: '#8B5CF6',
    opacity: 0.18,
    right: -130,
    top: -130,
  },

  heroGlowTwo: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#6D28D9',
    opacity: 0.12,
    left: -100,
    bottom: -130,
  },

  heroCircle: {
    position: 'absolute',
    right: 70,
    top: 60,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(139, 92, 246, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  eyebrow: {
    color: '#A78BFA',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 8,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 42,
    fontWeight: '800',
    letterSpacing: -1,
  },

  description: {
    color: '#B5B5B5',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 10,
    maxWidth: 500,
  },

  heroButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    paddingHorizontal: 19,
    borderRadius: 24,
    marginTop: 22,
    gap: 8,
  },

  buttonPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },

  heroButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 34,
    marginBottom: 16,
  },

  cards: {
    gap: 14,
  },

  exploreCard: {
    minHeight: 160,
    borderRadius: 22,
    padding: 20,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
  },

  artistsCard: {
    backgroundColor: '#17131F',
    borderColor: '#292033',
  },

  albumsCard: {
    backgroundColor: '#141721',
    borderColor: '#202638',
  },

  favoritesCard: {
    backgroundColor: '#1C1420',
    borderColor: '#302036',
  },

  cardPressed: {
    opacity: 0.72,
    transform: [{ scale: 0.995 }],
  },

  cardGlowPurple: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#8B5CF6',
    opacity: 0.12,
    right: -60,
    top: -80,
  },

  cardGlowBlue: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: '#6366F1',
    opacity: 0.12,
    right: -70,
    bottom: -100,
  },

  cardGlowPink: {
    position: 'absolute',
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: '#D946EF',
    opacity: 0.11,
    right: -60,
    top: -90,
  },

  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 15,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  cardTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
  },

  cardText: {
    color: '#999999',
    fontSize: 13,
    marginTop: 5,
    maxWidth: 300,
  },

  cardArrow: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: 'rgba(255,255,255,0.07)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});