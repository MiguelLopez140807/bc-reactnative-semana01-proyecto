import { ScrollView, View, Text, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mi Perfil</Text>
        </View>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          <Image
            source={require('./screenshots/mi_foto.jpg')}
            style={styles.avatar}
          />
        </View>

        {/* Nombre */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Miguel Angel Lopez Leon</Text>
          <Text style={styles.title}>
            Técnico en Programación de Software
          </Text>
        </View>

        {/* Info de contacto */}
        <View style={styles.contactCard}>
          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📧</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>
                miguelsena@gmail.com
              </Text>
            </View>
          </View>

          <View style={styles.contactItem}>
            <Text style={styles.contactIcon}>📱</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Teléfono</Text>
              <Text style={styles.contactValue}>
                +57 300 123 4567
              </Text>
            </View>
          </View>

          <View style={[styles.contactItem, { marginBottom: 0 }]}>
            <Text style={styles.contactIcon}>📍</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>Ubicación</Text>
              <Text style={styles.contactValue}>
                Cra 9 #9-22 sur
              </Text>
            </View>
          </View>
        </View>

        {/* Sobre mí */}
        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>Sobre Mí</Text>
          <Text style={styles.aboutText}>
            En proceso tecnólogo en análisis y desarrollo de software. Soy muy ordenado, organizado, me gusta planear las cosas con anterioridad, puntual, compañerista, activo y respetuoso.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#2563eb',
    height: 160,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60,
  },
  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -64,
  },
  avatar: {
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 4,
    borderColor: 'white',
  },
  nameContainer: {
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
  },
  title: {
    fontSize: 18,
    color: '#6b7280',
    marginTop: 4,
    textAlign: 'center',
  },
  contactCard: {
    marginHorizontal: 20,
    marginTop: 24,
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  contactIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  contactValue: {
    fontSize: 16,
    color: '#111827',
    fontWeight: '500',
  },
  aboutCard: {
    marginHorizontal: 20,
    marginTop: 24,
    marginBottom: 40,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
});