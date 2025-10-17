import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

/**
 * Props del componente Card
 *
 * Define qué datos puede recibir el componente
 * Interface de TypeScript con propiedades tipadas
 */
interface CardProps {
  title: string // Obligatorio
  description: string // Obligatorio
  icon?: string // Opcional
  variant?: 'default' | 'featured' | 'compact' // Opcional
  onPress?: () => void // Opcional
  actionLabel?: string // Opcional
}

/**
 * Card Component - Tarjeta reutilizable con variantes
 *
 * ¿Para qué?
 * Mostrar información de forma consistente en toda la app
 *
 * ¿Cómo?
 * Recibe props y renderiza diferentes variantes según configuración
 *
 * Variantes disponibles:
 * - default: Tarjeta estándar con botón de acción
 * - featured: Tarjeta destacada con gradiente
 * - compact: Tarjeta compacta para listas
 */
export function Card({
  title,
  description,
  icon = '📄', // Valor por defecto
  variant = 'default', // Valor por defecto
  onPress,
  actionLabel = 'Ver más', // Valor por defecto
}: CardProps): React.JSX.Element {
  
  // Variante default (estándar)
  if (variant === 'default') {
    return (
      <View style={styles.defaultCard}>
        {/* Icono */}
        <Text style={styles.defaultIcon}>{icon}</Text>

        {/* Título */}
        <Text style={styles.defaultTitle}>{title}</Text>

        {/* Descripción */}
        <Text style={styles.defaultDescription}>{description}</Text>

        {/* Botón de acción */}
        {onPress && (
          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            style={styles.defaultButton}
          >
            <Text style={styles.defaultButtonText}>
              {actionLabel}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }

  // Variante featured (destacada)
  if (variant === 'featured') {
    return (
      <View style={styles.featuredCard}>
        {/* Badge "DESTACADO" */}
        <View style={styles.featuredBadge}>
          <Text style={styles.featuredBadgeText}>⭐ DESTACADO</Text>
        </View>

        <View style={styles.featuredContent}>
          {/* Icono más grande */}
          <Text style={styles.featuredIcon}>{icon}</Text>

          {/* Título en blanco */}
          <Text style={styles.featuredTitle}>{title}</Text>

          {/* Descripción en blanco */}
          <Text style={styles.featuredDescription}>{description}</Text>

          {/* Botón con fondo blanco */}
          {onPress && (
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.8}
              style={styles.featuredButton}
            >
              <Text style={styles.featuredButtonText}>
                {actionLabel}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    )
  }

  // Variante compact (compacta)
  if (variant === 'compact') {
    return (
      <TouchableOpacity
        onPress={onPress}
        disabled={!onPress}
        activeOpacity={0.7}
        style={styles.compactCard}
      >
        <View style={styles.compactHeader}>
          {/* Icono + Título */}
          <View style={styles.compactTitleRow}>
            <Text style={styles.compactIcon}>{icon}</Text>
            <Text style={styles.compactTitle} numberOfLines={1}>
              {title}
            </Text>
          </View>

          {/* Arrow (indicador de acción) */}
          {onPress && <Text style={styles.compactArrow}>›</Text>}
        </View>

        {/* Descripción breve */}
        <Text style={styles.compactDescription} numberOfLines={1}>
          {description}
        </Text>
      </TouchableOpacity>
    )
  }

  // Fallback (no debería llegar aquí)
  return null as any
}

const styles = StyleSheet.create({
  // Estilos para variante DEFAULT
  defaultCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 12,
  },
  defaultIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  defaultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  defaultDescription: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 16,
    lineHeight: 24,
  },
  defaultButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 8,
  },
  defaultButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Estilos para variante FEATURED
  featuredCard: {
    backgroundColor: '#8b5cf6',
    borderRadius: 12,
    overflow: 'hidden',
    margin: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },
  featuredBadge: {
    backgroundColor: '#fbbf24',
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  featuredBadgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#111827',
  },
  featuredContent: {
    padding: 20,
  },
  featuredIcon: {
    fontSize: 60,
    marginBottom: 12,
  },
  featuredTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
    lineHeight: 24,
  },
  featuredButton: {
    backgroundColor: 'white',
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featuredButtonText: {
    color: '#8b5cf6',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Estilos para variante COMPACT
  compactCard: {
    backgroundColor: '#f9fafb',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  compactHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  compactTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  compactIcon: {
    fontSize: 24,
    marginRight: 8,
  },
  compactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    flex: 1,
  },
  compactArrow: {
    color: '#9ca3af',
    fontSize: 20,
    marginLeft: 8,
  },
  compactDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 32,
  },
});