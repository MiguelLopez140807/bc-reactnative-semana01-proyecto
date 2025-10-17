import React, { useState } from 'react';
import { ScrollView, View, Text, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContactCard } from './components/ContactCard';
import { contactsData } from './data/contacts';
import { Contact } from './types/Contact';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtrar contactos según búsqueda
  const filteredContacts = contactsData.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (contact.company && contact.company.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Handler para cuando se presiona un contacto
  const handleContactPress = (contact: Contact): void => {
    Alert.alert(
      contact.name,
      `📱 ${contact.phone}\n📧 ${contact.email}\n💼 ${contact.profession}${
        contact.company ? `\n🏢 ${contact.company}` : ''
      }`,
      [
        {
          text: 'Llamar',
          onPress: () => console.log('Llamar:', contact.phone),
        },
        { text: 'Email', onPress: () => console.log('Email:', contact.email) },
        { text: 'Cerrar', style: 'cancel' },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header con búsqueda */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Contactos</Text>
            <Text style={styles.subtitle}>
              {filteredContacts.length} contactos guardados
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Text style={styles.headerIcon}>👥</Text>
          </View>
        </View>

        {/* Barra de búsqueda */}
        <View style={styles.searchContainer}>
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Buscar contactos..."
            placeholderTextColor="#93c5fd"
            style={styles.searchInput}
          />
        </View>
      </View>

      {/* Lista de contactos */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
              onPress={handleContactPress}
            />
          ))
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>🔍</Text>
            <Text style={styles.emptyTitle}>No se encontraron contactos</Text>
            <Text style={styles.emptySubtitle}>
              Intenta con otro término de búsqueda
            </Text>
          </View>
        )}

        {/* Footer */}
        {filteredContacts.length > 0 && (
          <View style={styles.footer}>
            <Text style={styles.footerText}>Fin de la lista</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  headerContent: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'space-between' as const,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold' as const,
  },
  subtitle: {
    color: '#dbeafe',
    marginTop: 4,
    fontSize: 16,
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  headerIcon: {
    color: '#ffffff',
    fontSize: 24,
  },
  searchContainer: {
    marginTop: 16,
  },
  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    color: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 16,
  },
  emptyState: {
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 20,
    color: '#6b7280',
    fontWeight: '600' as const,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#9ca3af',
    textAlign: 'center' as const,
  },
  footer: {
    alignItems: 'center' as const,
    paddingVertical: 32,
  },
  footerText: {
    color: '#9ca3af',
    fontSize: 14,
  },
};
