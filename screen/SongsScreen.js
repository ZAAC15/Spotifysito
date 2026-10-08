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
} from 'react-native';

import { getAlbumSongs } from '../services/musicApi';

export default function SongsScreen({ route }) {
  const album = route.params?.album;

  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (album?.idAlbum) {
      loadSongs();
    }
  }, [album]);

  async function loadSongs() {
    setLoading(true);

    const results = await getAlbumSongs(album.idAlbum);

    setSongs(results);
    setLoading(false);
  }

  function formatDuration(milliseconds) {
    if (!milliseconds) return '--:--';

    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes}:${String(seconds).padStart(2, '0')}`;
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
          Cargando canciones...
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
      <View style={styles.headerCard}>
        <View style={styles.headerGlowOne} />
        <View style={styles.headerGlowTwo} />

        <Image
          source={{ uri: album?.strAlbumThumb }}
          style={styles.cover}
        />

        <View style={styles.headerInfo}>
          <Text style={styles.eyebrow}>
            ÁLBUM
          </Text>

          <Text style={styles.title}>
            {album?.strAlbum || 'Canciones'}
          </Text>

          <Text style={styles.artist}>
            {album?.strArtist || 'Artista'}
          </Text>

          <View style={styles.songCount}>
            <Ionicons
              name="musical-notes-outline"
              size={15}
              color="#A78BFA"
            />

            <Text style={styles.songCountText}>
              {songs.length}{' '}
              {songs.length === 1 ? 'canción' : 'canciones'}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionTitle}>
            Canciones
          </Text>

          <Text style={styles.sectionSubtitle}>
            Disfruta la lista del álbum
          </Text>
        </View>

        <View style={styles.albumIcon}>
          <Ionicons
            name="disc-outline"
            size={22}
            color="#C4B5FD"
          />
        </View>
      </View>

      <View style={styles.list}>
        {songs.map((song, index) => (
          <Pressable
            key={song.idTrack}
            style={({ pressed }) => [
              styles.song,
              pressed && styles.songPressed,
            ]}
          >
            <View style={styles.numberContainer}>
              <Text style={styles.number}>
                {String(index + 1).padStart(2, '0')}
              </Text>
            </View>

            <View style={styles.songIcon}>
              <Ionicons
                name="musical-note"
                size={17}
                color="#A78BFA"
              />
            </View>

            <View style={styles.info}>
              <Text
                style={styles.songName}
                numberOfLines={1}
              >
                {song.strTrack}
              </Text>

              <Text
                style={styles.songArtist}
                numberOfLines={1}
              >
                {song.strArtist}
              </Text>
            </View>

            <Text style={styles.duration}>
              {formatDuration(song.intDuration)}
            </Text>

            <Ionicons
              name="chevron-forward"
              size={17}
              color="#55505E"
            />
          </Pressable>
        ))}
      </View>

      {songs.length === 0 && (
        <View style={styles.empty}>
          <View style={styles.emptyIcon}>
            <Ionicons
              name="musical-notes-outline"
              size={34}
              color="#A78BFA"
            />
          </View>

          <Text style={styles.emptyTitle}>
            No hay canciones
          </Text>

          <Text style={styles.emptyText}>
            No encontramos canciones disponibles
            para este álbum.
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

  headerCard: {
    minHeight: 230,
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

  headerGlowOne: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#8B5CF6',
    opacity: 0.13,
    right: -100,
    top: -120,
  },

  headerGlowTwo: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#6366F1',
    opacity: 0.08,
    left: -90,
    bottom: -100,
  },

  cover: {
    width: 170,
    height: 170,
    borderRadius: 14,
    backgroundColor: '#292929',
  },

  headerInfo: {
    flex: 1,
    marginLeft: 26,
  },

  eyebrow: {
    color: '#A78BFA',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 8,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '800',
  },

  artist: {
    color: '#C4B5FD',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 7,
  },

  songCount: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 6,
    backgroundColor: 'rgba(139, 92, 246, 0.10)',
    borderWidth: 1,
    borderColor: 'rgba(167, 139, 250, 0.15)',
    borderRadius: 18,
    paddingVertical: 7,
    paddingHorizontal: 11,
    marginTop: 18,
  },

  songCountText: {
    color: '#B8B0C5',
    fontSize: 12,
    fontWeight: '600',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 34,
    marginBottom: 14,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },

  sectionSubtitle: {
    color: '#77717F',
    fontSize: 13,
    marginTop: 4,
  },

  albumIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#18131F',
    borderWidth: 1,
    borderColor: '#2D2140',
    justifyContent: 'center',
    alignItems: 'center',
  },

  list: {
    gap: 8,
  },

  song: {
    minHeight: 70,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141218',
    borderWidth: 1,
    borderColor: '#211B28',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  songPressed: {
    backgroundColor: '#1D1726',
    borderColor: '#3A2A4E',
    transform: [{ scale: 0.995 }],
  },

  numberContainer: {
    width: 34,
    alignItems: 'center',
  },

  number: {
    color: '#625B6B',
    fontSize: 13,
    fontWeight: '600',
  },

  songIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#1C1626',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },

  info: {
    flex: 1,
    marginLeft: 12,
    minWidth: 0,
  },

  songName: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },

  songArtist: {
    color: '#77717F',
    fontSize: 12,
    marginTop: 4,
  },

  duration: {
    color: '#77717F',
    fontSize: 12,
    marginLeft: 12,
    marginRight: 12,
  },

  empty: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70,
    paddingHorizontal: 30,
  },

  emptyIcon: {
    width: 68,
    height: 68,
    borderRadius: 34,
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
    lineHeight: 20,
    marginTop: 8,
  },
});