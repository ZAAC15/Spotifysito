import { Ionicons } from '@expo/vector-icons';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      {/* HERO */}

      <View style={styles.hero}>
        <View style={styles.heroGlowOne} />
        <View style={styles.heroGlowTwo} />

        <View style={styles.logo}>
          <Ionicons
            name="musical-notes"
            size={34}
            color="#C4B5FD"
          />
        </View>

        <Text style={styles.title}>
          Spotifysito
        </Text>

        <Text style={styles.subtitle}>
          Descubre. Explora. Escucha.
        </Text>

        <View style={styles.versionBadge}>
          <Text style={styles.versionText}>
            VERSIÓN 1.0
          </Text>
        </View>
      </View>

      {/* DESCRIPCIÓN */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Sobre la aplicación
        </Text>

        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <Ionicons
              name="information-circle-outline"
              size={23}
              color="#C4B5FD"
            />
          </View>

          <Text style={styles.description}>
            Spotifysito es una aplicación móvil
            enfocada en el descubrimiento de música.
            Permite explorar artistas, consultar sus
            álbumes, conocer las canciones disponibles
            y guardar contenido como favorito.
          </Text>
        </View>
      </View>

      {/* NAVEGACIÓN */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Navegación implementada
        </Text>

        <View style={styles.navigationGrid}>
          <View style={styles.navigationCard}>
            <View style={styles.navigationIcon}>
              <Ionicons
                name="menu-outline"
                size={24}
                color="#C4B5FD"
              />
            </View>

            <Text style={styles.navigationTitle}>
              Drawer
            </Text>

            <Text style={styles.navigationText}>
              Menú principal de la aplicación.
            </Text>
          </View>

          <View style={styles.navigationCard}>
            <View style={styles.navigationIcon}>
              <Ionicons
                name="albums-outline"
                size={24}
                color="#A78BFA"
              />
            </View>

            <Text style={styles.navigationTitle}>
              Tabs
            </Text>

            <Text style={styles.navigationText}>
              Acceso rápido a las secciones.
            </Text>
          </View>

          <View style={styles.navigationCard}>
            <View style={styles.navigationIcon}>
              <Ionicons
                name="git-branch-outline"
                size={24}
                color="#D8B4FE"
              />
            </View>

            <Text style={styles.navigationTitle}>
              Stack
            </Text>

            <Text style={styles.navigationText}>
              Navegación entre detalles y contenido.
            </Text>
          </View>
        </View>
      </View>

      {/* TECNOLOGÍAS */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Tecnologías
        </Text>

        <View style={styles.techCard}>
          <View style={styles.techItem}>
            <View style={styles.techDot} />
            <Text style={styles.techText}>
              React Native
            </Text>
          </View>

          <View style={styles.techItem}>
            <View style={styles.techDot} />
            <Text style={styles.techText}>
              Expo
            </Text>
          </View>

          <View style={styles.techItem}>
            <View style={styles.techDot} />
            <Text style={styles.techText}>
              React Navigation
            </Text>
          </View>

          <View style={styles.techItem}>
            <View style={styles.techDot} />
            <Text style={styles.techText}>
              TheAudioDB API
            </Text>
          </View>

          <View style={styles.techItem}>
            <View style={styles.techDot} />
            <Text style={styles.techText}>
              AsyncStorage
            </Text>
          </View>

          <View style={styles.techItem}>
            <View style={styles.techDot} />
            <Text style={styles.techText}>
              Expo Vector Icons
            </Text>
          </View>
        </View>
      </View>

      {/* FUNCIONES */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Funcionalidades
        </Text>

        <View style={styles.featureCard}>
          <Feature
            icon="people-outline"
            title="Artistas"
            text="Explora diferentes artistas y géneros musicales."
          />

          <Feature
            icon="disc-outline"
            title="Álbumes"
            text="Consulta álbumes y sus respectivas discografías."
          />

          <Feature
            icon="musical-notes-outline"
            title="Canciones"
            text="Consulta las canciones disponibles de cada álbum."
          />

          <Feature
            icon="heart-outline"
            title="Favoritos"
            text="Guarda artistas y álbumes para acceder a ellos rápidamente."
          />
        </View>
      </View>

      <Text style={styles.footer}>
        Spotifysito · Proyecto académico · 2026
      </Text>
    </ScrollView>
  );
}

function Feature({ icon, title, text }) {
  return (
    <View style={styles.feature}>
      <View style={styles.featureIcon}>
        <Ionicons
          name={icon}
          size={21}
          color="#C4B5FD"
        />
      </View>

      <View style={styles.featureInfo}>
        <Text style={styles.featureTitle}>
          {title}
        </Text>

        <Text style={styles.featureText}>
          {text}
        </Text>
      </View>
    </View>
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

  hero: {
    minHeight: 270,
    borderRadius: 25,
    backgroundColor: '#15121B',
    borderWidth: 1,
    borderColor: '#2B2038',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },

  heroGlowOne: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: '#8B5CF6',
    opacity: 0.13,
    right: -100,
    top: -130,
  },

  heroGlowTwo: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#D946EF',
    opacity: 0.08,
    left: -90,
    bottom: -120,
  },

  logo: {
    width: 78,
    height: 78,
    borderRadius: 24,
    backgroundColor: '#21182E',
    borderWidth: 1,
    borderColor: '#49345F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 16,
  },

  subtitle: {
    color: '#817A89',
    fontSize: 14,
    marginTop: 5,
  },

  versionBadge: {
    marginTop: 16,
    backgroundColor: '#241638',
    borderWidth: 1,
    borderColor: '#3B2852',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  versionText: {
    color: '#C4B5FD',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1,
  },

  section: {
    marginTop: 32,
  },

  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 14,
  },

  card: {
    backgroundColor: '#141218',
    borderWidth: 1,
    borderColor: '#211B28',
    borderRadius: 17,
    padding: 16,
  },

  cardIcon: {
    width: 45,
    height: 45,
    borderRadius: 14,
    backgroundColor: '#1D1726',
    borderWidth: 1,
    borderColor: '#30213F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },

  description: {
    color: '#8A8491',
    fontSize: 14,
    lineHeight: 22,
  },

  navigationGrid: {
    gap: 10,
  },

  navigationCard: {
    backgroundColor: '#141218',
    borderWidth: 1,
    borderColor: '#211B28',
    borderRadius: 16,
    padding: 15,
  },

  navigationIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1D1726',
    borderWidth: 1,
    borderColor: '#30213F',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  navigationTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },

  navigationText: {
    color: '#77717F',
    fontSize: 12,
    lineHeight: 18,
    marginTop: 5,
  },

  techCard: {
    backgroundColor: '#141218',
    borderWidth: 1,
    borderColor: '#211B28',
    borderRadius: 17,
    padding: 16,
    gap: 15,
  },

  techItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  techDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#A78BFA',
    marginRight: 11,
  },

  techText: {
    color: '#D2CDD8',
    fontSize: 14,
    fontWeight: '600',
  },

  featureCard: {
    backgroundColor: '#141218',
    borderWidth: 1,
    borderColor: '#211B28',
    borderRadius: 17,
    padding: 14,
    gap: 8,
  },

  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },

  featureIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1D1726',
    justifyContent: 'center',
    alignItems: 'center',
  },

  featureInfo: {
    flex: 1,
    marginLeft: 13,
  },

  featureTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  featureText: {
    color: '#77717F',
    fontSize: 12,
    lineHeight: 17,
    marginTop: 4,
  },

  footer: {
    color: '#514C58',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 30,
  },
});