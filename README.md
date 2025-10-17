# 📱 Práctica 3 - Lista de Contactos

## 👨‍💻 Información del Estudiante
**Desarrollado por:** Miguel Angel Lopez Leon  
**Fecha:** 16 de octubre de 2025  
**Curso:** React Native - Semana 01  
**Práctica:** 3 de 3  
**Nivel:** ⭐⭐ Intermedio  
**Duración:** 50 minutos (20 min presencial + 30 min autónomo)

---

## 🎯 Objetivo de la Práctica

Crear una **aplicación de lista de contactos** que demuestre el manejo de arrays, renderizado con `map()`, interfaces TypeScript, y funcionalidades de búsqueda en tiempo real.

### ✨ **Conceptos Implementados:**
- ✅ **Renderizar arrays** con `.map()`
- ✅ **Interfaces TypeScript** para objetos
- ✅ **Componentes reutilizables** con props tipadas
- ✅ **Estado local** con `useState`
- ✅ **Filtrado dinámico** con `.filter()`
- ✅ **Manejo de eventos** onPress
- ✅ **Búsqueda en tiempo real**
- ✅ **Conditional rendering** para estados

---

## 📱 Resultado Visual

### **🏠 Pantalla Principal**
```
┌─────────────────────────────┐
│ 👥 Contactos (12)          │  ← Header dinámico
│ [🔍 Buscar contactos...]    │  ← Búsqueda en tiempo real
├─────────────────────────────┤
│                             │
│  ┌─────────────────────┐   │
│  │ 📷 Juan Pérez    ›  │   │  ← ContactCard
│  │   💼 Frontend Dev   │   │
│  │   📱 +57 300 123   │   │
│  │   🏢 TechCorp      │   │
│  └─────────────────────┘   │
│                             │
│  ┌─────────────────────┐   │
│  │ 📷 María López   ›  │   │
│  │   💼 UX Designer   │   │
│  │   📱 +57 301 234   │   │
│  │   🏢 Design Studio │   │
│  └─────────────────────┘   │
│                             │
│         ... 10 más ...      │
│                             │
│    Fin de la lista          │
└─────────────────────────────┘
```

---

## 🏗️ Arquitectura del Código

### **📁 Estructura de Archivos**
```
practica-3/
├── types/
│   └── Contact.ts          # Interface TypeScript
├── data/
│   └── contacts.ts         # Datos mock (12 contactos)
├── components/
│   └── ContactCard.tsx     # Componente reutilizable
├── App.tsx                # Lista principal con búsqueda
└── README.md
```

### **🎯 Flujo de Datos**
```
contactsData (mock) 
    ↓
useState(searchQuery)
    ↓  
filter() + includes()
    ↓
filteredContacts
    ↓
map() → ContactCard
    ↓
onPress → Alert
```

---

## 💻 Implementación Técnica

### **📋 Interface Contact**
```typescript
interface Contact {
  id: number              // ID único
  name: string           // Nombre completo
  profession: string     // Profesión/cargo
  phone: string         // Teléfono
  email: string         // Email
  avatar: string        // URL de avatar
  company?: string      // Empresa (opcional)
}
```

### **🔍 Lógica de Búsqueda**
```typescript
const filteredContacts = contactsData.filter(
  (contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.profession.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (contact.company && contact.company.toLowerCase().includes(searchQuery.toLowerCase()))
);
```

---

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework de desarrollo móvil
- **TypeScript** - Tipado estático y interfaces
- **React Hooks** - useState para manejo de estado
- **ScrollView** - Lista scrollable optimizada
- **TextInput** - Campo de búsqueda interactivo
- **Alert** - Diálogos nativos del sistema

---

## 📦 Instalación y Ejecución

```bash
# Cambiar a la rama de la práctica 3
git checkout practica-3

# Instalar dependencias
pnpm install

# Ejecutar la aplicación
pnpm start
```

---

## 🧪 Funcionalidades Implementadas

### **✨ Características Principales:**
1. **📋 Lista completa** de 12 contactos profesionales
2. **🔍 Búsqueda en tiempo real** por nombre, profesión y empresa
3. **📱 Detalles al presionar** contacto (Alert con opciones)
4. **📊 Contador dinámico** de contactos filtrados
5. **❌ Estado vacío** con mensaje cuando no hay resultados
6. **🎨 Estilos profesionales** con avatares reales

---

## 👥 Datos de Contactos Mock

**12 Contactos Profesionales** con información completa:
- Juan Pérez (Frontend Developer)
- María López (UX/UI Designer)  
- Carlos Ruiz (Backend Developer)
- Ana García (Product Manager)
- Luis Martínez (DevOps Engineer)
- Sofía Hernández (Data Scientist)
- Diego Torres (Mobile Developer)
- Laura Sánchez (QA Engineer)
- Roberto Díaz (Tech Lead)
- Patricia Morales (Scrum Master)
- Fernando Castro (Security Engineer)
- Gabriela Flores (Marketing Manager)

---

## 📚 Conceptos Aprendidos

### **🔧 TypeScript con React Native:**
- ✅ **Interfaces complejas** con propiedades opcionales
- ✅ **Props tipadas** en componentes
- ✅ **Arrays tipados** con generics

### **⚛️ React Native Avanzado:**
- ✅ **Hook useState** para estado local
- ✅ **map() para listas** con keys únicas
- ✅ **filter() dinámico** en tiempo real
- ✅ **Alert.alert** con múltiples opciones

---

## 📞 Información de Contacto

- **Email:** miguelsena@gmail.com
- **GitHub:** [MiguelLopez140807](https://github.com/MiguelLopez140807)
- **Ubicación:** Cra 9 #9-22 sur

---

*Práctica 3 completada - Lista de Contactos con TypeScript y búsqueda - Miguel Angel Lopez Leon - 16 de octubre de 2025*