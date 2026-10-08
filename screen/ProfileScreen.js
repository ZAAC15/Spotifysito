import { Ionicons } from '@expo/vector-icons';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default function ProfileScreen() {
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

        <View style={styles.avatar}>
          <Ionicons
            name="person"
            size={42}
            color="#C4B5FD"
          />
        </View>

        <Text style={styles.name}>
          Mi perfil
        </Text>

        <Text style={styles.subtitle}>
          Tu espacio dentro de Spotifysito
        </Text>
      </View>

      {/* INFORMACIÓN */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Mi cuenta
        </Text>

        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <Ionicons
              name="person-outline"
              size={21}
              color="#C4B5FD"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardLabel}>
              Usuario
            </Text>

            <Text style={styles.cardValue}>
              Usuario de Spotifysito
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={18}
            color="#55505E"
          />
        </View>

        <View style={styles.card}>
          <View style={styles.cardIcon}>
            <Ionicons
              name="musical-notes-outline"
              size={21}
              color="#A78BFA"
            />
          </View>

          <View style={styles.cardInfo}>
            <Text style={styles.cardLabel}>
              Preferencias
            </Text>

            <Text style={styles.cardValue}>
              Música y descubrimiento
            </Text>
          </View>

          <Ionicons
            name="chevron-forward"
            size={18}
            color="#55505E"
          />
        </View>
      </View>

      {/* PREFERENCIAS */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Preferencias
        </Text>

        <View style={styles.preferenceCard}>
          <View style={styles.preferenceIcon}>
            <Ionicons
              name="moon-outline"
              size={22}
              color="#C4B5FD"
            />
          </View>

          <View style={styles.preferenceInfo}>
            <Text style={styles.preferenceTitle}>
              Tema oscuro
            </Text>

            <Text style={styles.preferenceText}>
              Interfaz oscura de Spotifysito
            </Text>
          </View>

          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>
              ACTIVO
            </Text>
          </View>
        </View>

        <View style={styles.preferenceCard}>
          <View style={styles.preferenceIcon}>
            <Ionicons
              name="color-palette-outline"
              size={22}
              color="#A78BFA"
            />
          </View>

          <View style={styles.preferenceInfo}>
            <Text style={styles.preferenceTitle}>
              Estilo visual
            </Text>

            <Text style={styles.preferenceText}>
              Morado · Dark Music
            </Text>
          </View>

          <View style={styles.colorIndicator}>
            <View style={styles.colorDot} />
          </View>
        </View>
      </View>

      {/* ESTADO */}

      <View style={styles.status}>
        <View style={styles.statusIcon}>
          <Ionicons
            name="checkmark-circle"
            size={21}
            color="#A78BFA"
          />
        </View>

        <View style={styles.statusInfo}>
          <Text style={styles.statusTitle}>
            Aplicación lista
          </Text>

          <Text style={styles.statusText}>
            Tus favoritos se guardan automáticamente.
          </Text>
        </View>
      </View>

      <Text style={styles.version}>
        Spotifysito · Versión 1.0
      </Text>
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

  hero: {
    minHeight: 250,
    borderRadius: 25,
    backgroundColor: '#15121B',
    borderWidth: 1,
    borderColor: '#2B2038',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },

  heroGlowOne: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#8B5CF6',
    opacity: 0.13,
    right: -100,
    top: -120,
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

  avatar: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: '#21182E',
    borderWidth: 1,
    borderColor: '#49345F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 16,
  },

  subtitle: {
    color: '#817A89',
    fontSize: 14,
    marginTop: 6,
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
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141218',
    borderWidth: 1,
    borderColor: '#211B28',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },

  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1D1726',
    borderWidth: 1,
    borderColor: '#30213F',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardInfo: {
    flex: 1,
    marginLeft: 13,
  },

  cardLabel: {
    color: '#77717F',
    fontSize: 12,
  },

  cardValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },

  preferenceCard: {
    minHeight: 78,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141218',
    borderWidth: 1,
    borderColor: '#211B28',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
  },

  preferenceIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#1D1726',
    justifyContent: 'center',
    alignItems: 'center',
  },

  preferenceInfo: {
    flex: 1,
    marginLeft: 13,
  },

  preferenceTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  preferenceText: {
    color: '#77717F',
    fontSize: 12,
    marginTop: 4,
  },

  activeBadge: {
    backgroundColor: '#241638',
    borderWidth: 1,
    borderColor: '#3B2852',
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },

  activeBadgeText: {
    color: '#C4B5FD',
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 0.7,
  },

  colorIndicator: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#21182E',
    justifyContent: 'center',
    alignItems: 'center',
  },

  colorDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    backgroundColor: '#A78BFA',
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#141218',
    borderWidth: 1,
    borderColor: '#2A2035',
    borderRadius: 16,
    padding: 15,
    marginTop: 24,
  },

  statusIcon: {
    width: 42,
    height: 42,
    borderRadius: 13,
    backgroundColor: '#1D1726',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusInfo: {
    flex: 1,
    marginLeft: 12,
  },

  statusTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  statusText: {
    color: '#77717F',
    fontSize: 12,
    marginTop: 4,
  },

  version: {
    color: '#514C58',
    fontSize: 11,
    textAlign: 'center',
    marginTop: 28,
  },
});