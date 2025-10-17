import React, { useState } from 'react';
import { ScrollView, View, Text, Alert, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ContactCard } from './components/ContactCard';
import { contactsData } from './data/contacts';
import { Contact } from './types/Contact';

// Interfaces TypeScript
interface ContactInfo {
  icon: string
  label: string
  value: string
}

interface Skill {
  id: string
  emoji: string
  name: string
  level?: string
}

interface Project {
  id: string
  emoji: string
  title: string
  description: string
  tags: string[]
}

// Datos personales
const personalInfo = {
  name: 'Miguel Angel Lopez Leon',
  title: 'Técnico en Programación de Software',
  avatar: require('./screenshots/mi_foto.jpg'),
  bio: 'En proceso tecnólogo en análisis y desarrollo de software. Soy muy ordenado, organizado, me gusta planear las cosas con anterioridad, puntual, compañerista, activo y respetuoso.',
}

const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'miguelsena@gmail.com' },
  { icon: '📍', label: 'Ubicación', value: 'Cra 9 #9-22 sur' },
  { icon: '🔗', label: 'GitHub', value: 'github.com/MiguelLopez140807' },
]

const skills: Skill[] = [
  { id: '1', emoji: '🌐', name: 'HTML' },
  { id: '2', emoji: '🎨', name: 'CSS' },
  { id: '3', emoji: '🐍', name: 'Python' },
  { id: '4', emoji: '�', name: 'PHP' },
  { id: '5', emoji: '⚛️', name: 'React' },
  { id: '6', emoji: '🗄️', name: 'MySQL' },
]

const projects: Project[] = [
  {
    id: '1',
    emoji: '✈️',
    title: 'General Propellers Services S.A.S',
    description:
      'Página web de ventas especializada en hélices de aviones con catálogo completo y sistema de cotizaciones',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
  },
  {
    id: '2',
    emoji: '�',
    title: 'TurboEmpleo',
    description: 'Plataforma de búsqueda de trabajo eficiente y rápida para conectar candidatos con empleadores',
    tags: ['React', 'PHP', 'MySQL'],
  },
  {
    id: '3',
    emoji: '👤',
    title: 'App de Perfil Personal',
    description: 'Aplicación móvil para mostrar información profesional con diseño moderno y responsivo',
    tags: ['React Native', 'TypeScript'],
  },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>MI APP PERSONAL</Text>
        </View>

        {/* AVATAR */}
        <View style={styles.avatarContainer}>
          <Image
            source={personalInfo.avatar}
            style={styles.avatar}
          />
        </View>

        {/* NOMBRE Y TÍTULO */}
        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {personalInfo.name}
          </Text>
          <Text style={styles.title}>
            {personalInfo.title}
          </Text>
        </View>

        {/* CONTACTO */}
        <View style={styles.card}>
          {contacts.map((contact, index) => (
            <View
              key={index}
              style={[
                styles.contactItem,
                index < contacts.length - 1 && styles.contactItemMargin
              ]}
            >
              <Text style={styles.contactIcon}>{contact.icon}</Text>
              <View style={styles.contactInfo}>
                <Text style={styles.contactLabel}>{contact.label}</Text>
                <Text style={styles.contactValue}>
                  {contact.value}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* SOBRE MÍ */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Sobre Mí</Text>
          <Text style={styles.bioText}>
            {personalInfo.bio}
          </Text>
        </View>

        {/* SEPARADOR */}
        <View style={styles.separator} />

        {/* MIS HABILIDADES */}
        <View style={styles.section}>
          <Text style={styles.mainSectionTitle}>
            💪 Mis Habilidades
          </Text>
          {skills.map((skill) => (
            <SkillCard key={skill.id} emoji={skill.emoji} name={skill.name} />
          ))}
        </View>

        {/* SEPARADOR */}
        <View style={styles.separator} />

        {/* MIS PROYECTOS */}
        <View style={styles.lastSection}>
          <Text style={styles.mainSectionTitle}>
            🚀 Mis Proyectos
          </Text>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              emoji={project.emoji}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
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
    height: 192,
    backgroundColor: '#3b82f6',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 70,
  },
  headerTitle: {
    color: 'white',
    fontSize: 30,
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
  card: {
    marginHorizontal: 20,
    marginTop: 24,
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
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactItemMargin: {
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
  },
  bioText: {
    fontSize: 16,
    color: '#6b7280',
    lineHeight: 24,
  },
  separator: {
    height: 1,
    backgroundColor: '#d1d5db',
    marginHorizontal: 20,
    marginVertical: 32,
  },
  section: {
    marginHorizontal: 20,
  },
  lastSection: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  mainSectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
});
