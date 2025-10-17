import React from 'react'
import { ScrollView, View, Text, Alert, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from './components/Card'

export default function App(): React.JSX.Element {
  const handlePress = (title: string): void => {
    Alert.alert('Card presionada', `Presionaste: ${title}`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>
            Componentes Card
          </Text>
          <Text style={styles.headerSubtitle}>
            Ejemplos de variantes
          </Text>
        </View>

        {/* Sección: Default Cards */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Default Cards
          </Text>

          <Card
            icon="📱"
            title="React Native"
            description="Framework para crear apps móviles nativas con React"
            actionLabel="Aprender más"
            onPress={() => handlePress('React Native')}
          />

          <Card
            icon="💻"
            title="TypeScript"
            description="JavaScript con tipos estáticos para código más seguro"
            actionLabel="Ver documentación"
            onPress={() => handlePress('TypeScript')}
          />

          <Card
            icon="🎨"
            title="Componentes Reutilizables"
            description="Crear componentes que se pueden usar en múltiples lugares"
            actionLabel="Explorar"
            onPress={() => handlePress('Componentes')}
          />
        </View>

        {/* Sección: Featured Cards */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Featured Cards
          </Text>

          <Card
            variant="featured"
            icon="🚀"
            title="Expo Framework"
            description="La mejor manera de construir apps con React Native"
            actionLabel="Comenzar ahora"
            onPress={() => handlePress('Expo')}
          />

          <Card
            variant="featured"
            icon="⭐"
            title="Props con TypeScript"
            description="Aprende a crear interfaces para componentes reutilizables"
            actionLabel="Practicar"
            onPress={() => handlePress('TypeScript Props')}
          />
        </View>

        {/* Sección: Compact Cards */}
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>
            Compact Cards
          </Text>

          <Card
            variant="compact"
            icon="⚙️"
            title="Configuración"
            description="Ajusta las preferencias de tu aplicación"
            onPress={() => handlePress('Configuración')}
          />

          <Card
            variant="compact"
            icon="👤"
            title="Perfil"
            description="Ver y editar tu información personal"
            onPress={() => handlePress('Perfil')}
          />

          <Card
            variant="compact"
            icon="📊"
            title="Estadísticas"
            description="Revisa tus métricas y progreso"
            onPress={() => handlePress('Estadísticas')}
          />

          <Card
            variant="compact"
            icon="🎯"
            title="Objetivos"
            description="Define y seguimiento de tus metas"
            onPress={() => handlePress('Objetivos')}
          />

          <Card
            variant="compact"
            icon="📚"
            title="Biblioteca"
            description="Explora recursos y documentación"
            onPress={() => handlePress('Biblioteca')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 4,
  },
  section: {
    marginTop: 20,
  },
  lastSection: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    paddingHorizontal: 20,
    marginBottom: 8,
  },
});