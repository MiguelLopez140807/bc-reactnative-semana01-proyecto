/**
 * Interface Contact - Define la estructura de un contacto
 *
 * ¿Para qué? Asegurar que todos los contactos tengan la misma estructura
 * ¿Cómo? TypeScript interface con propiedades requeridas y opcionales
 * 
 * @author Miguel Angel Lopez Leon
 * @date 16 de octubre de 2025
 * @practice Práctica 3 - Lista de Contactos
 */
export interface Contact {
  /** ID único del contacto */
  id: number
  /** Nombre completo del contacto */
  name: string
  /** Profesión o cargo */
  profession: string
  /** Número de teléfono */
  phone: string
  /** Dirección de email */
  email: string
  /** URL del avatar/foto */
  avatar: string
  /** Empresa donde trabaja (opcional) */
  company?: string
}