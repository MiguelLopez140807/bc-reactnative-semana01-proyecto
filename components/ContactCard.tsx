import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Contact } from '../types/Contact'

/**
 * ContactCard - Tarjeta individual de contacto
 *
 * ¿Para qué? Mostrar información de un contacto de forma visual y interactiva
 * ¿Cómo? Recibe datos del contacto como props y los renderiza con estilos nativos
 * 
 * @author Miguel Angel Lopez Leon
 * @date 16 de octubre de 2025
 * @practice Práctica 3 - Lista de Contactos
 */

interface ContactCardProps {
  /** Datos del contacto a mostrar */
  contact: Contact
  /** Función que se ejecuta al presionar la tarjeta */
  onPress: (contact: Contact) => void
}

export function ContactCard({
  contact,
  onPress,
}: ContactCardProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(contact)}
      activeOpacity={0.7}
      style={styles.container}
    >
      <View style={styles.contentRow}>
        {/* Avatar */}
        <Image
          source={{ uri: contact.avatar }}
          style={styles.avatar}
        />

        {/* Información del contacto */}
        <View style={styles.infoContainer}>
          {/* Nombre */}
          <Text style={styles.name}>
            {contact.name}
          </Text>

          {/* Profesión */}
          <View style={styles.professionRow}>
            <Text style={styles.professionText}>
              💼 {contact.profession}
            </Text>
          </View>

          {/* Teléfono */}
          <View style={styles.phoneRow}>
            <Text style={styles.phoneText}>📱 {contact.phone}</Text>
          </View>
        </View>

        {/* Indicador de navegación */}
        <Text style={styles.arrowIndicator}>›</Text>
      </View>

      {/* Empresa (si existe) */}
      {contact.company && (
        <View style={styles.companyContainer}>
          <Text style={styles.companyText}>🏢 {contact.company}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  contentRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold' as const,
    color: '#111827',
    marginBottom: 4,
  },
  professionRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginBottom: 4,
  },
  professionText: {
    fontSize: 14,
    color: '#6b7280',
  },
  phoneRow: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
  },
  phoneText: {
    fontSize: 14,
    color: '#9ca3af',
  },
  arrowIndicator: {
    color: '#d1d5db',
    fontSize: 24,
    marginLeft: 8,
  },
  companyContainer: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
  },
  companyText: {
    fontSize: 12,
    color: '#9ca3af',
  },
}