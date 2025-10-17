# 📱 Práctica 2 - Componente Card Reutilizable

## 👨‍💻 Información del Estudiante
**Desarrollado por:** Miguel Angel Lopez Leon  
**Fecha:** 16 de octubre de 2025  
**Curso:** React Native - Semana 01  
**Práctica:** 2 de 3  
**Nivel:** ⭐⭐ Intermedio  

---

## � Objetivo de la Práctica

Crear un **componente Card reutilizable** con TypeScript que acepte diferentes variantes y pueda usarse en cualquier parte de la aplicación, implementando conceptos avanzados de React Native.

### ✨ **Conceptos Aprendidos:**
- ✅ **Componentes personalizados** reutilizables
- ✅ **Props con TypeScript** (interfaces)
- ✅ **Variantes de componentes** (default, featured, compact)
- ✅ **Props opcionales vs requeridos**
- ✅ **Composición de componentes**
- ✅ **Estilos condicionais** según variante

---

## � Variantes Implementadas

### 1. **Variante Default (básica)**
```
┌────────────────────────┐
│ 📱                     │
│                        │
│ Título de la Card      │
│ Descripción breve...   │
│                        │
│ [Botón de acción]      │
└────────────────────────┘
```

### 2. **Variante Featured (destacada)**
```
┌────────────────────────┐
│ ⭐ DESTACADO           │
├────────────────────────┤
│ 🎨                     │
│                        │
│ Título Destacado       │
│ Contenido especial...  │
│                        │
│ [Acción Principal]     │
└────────────────────────┘
```

### 3. **Variante Compact (compacta)**
```
┌──────────────────────┐
│ 📌 Título  [Acción] │
│ Breve descripción    │
└──────────────────────┘
```

---

## � Resultado de la Implementación

### ✨ **Características Técnicas:**
- **TypeScript Interface** para props tipadas
- **Valores por defecto** para props opcionales
- **3 variantes visuales** completamente diferentes
- **Estilos nativos** React Native
- **Componente exportable** y reutilizable
- **Manejo de eventos** (onPress)

### 🎯 **Funcionalidades:**
- **Título y descripción** configurables
- **Iconos personalizables** con emojis
- **Botones de acción** opcionales
- **Estilos adaptativos** según variante
- **Feedback visual** al presionar (activeOpacity)

---

## � Estructura del Código

### 📋 **Interface CardProps**
```typescript
interface CardProps {
  title: string              // Obligatorio
  description: string        // Obligatorio
  icon?: string             // Opcional (default: '📄')
  variant?: 'default' | 'featured' | 'compact'  // Opcional (default: 'default')
  onPress?: () => void      // Opcional
  actionLabel?: string      // Opcional (default: 'Ver más')
}
```

### 🎨 **Variantes de Estilo**
- **Default:** Fondo blanco, sombras sutiles, botón azul
- **Featured:** Fondo morado con gradiente, badge destacado
- **Compact:** Layout horizontal, sin botón separado

---

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework de desarrollo móvil
- **TypeScript** - Tipado estático y interfaces
- **React Native StyleSheet** - Estilos nativos
- **TouchableOpacity** - Componente interactivo
- **SafeAreaView** - Manejo de áreas seguras

---

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16+)
- pnpm o npm
- Expo CLI
- Expo Go (app móvil)

### Pasos para Ejecutar
```bash
# Clonar el repositorio
git clone https://github.com/MiguelLopez140807/bc-reactnative-semana01-proyecto.git
cd mi-app-personal

# Cambiar a la rama de la práctica 2
git checkout practica-2

# Instalar dependencias
pnpm install
npx expo install react-native-safe-area-context

# Ejecutar la aplicación
pnpm start
```

---

## 🔧 Implementación Técnica

### 📁 **Estructura de Archivos**
```
practica-2/
├── components/
│   └── Card.tsx           # Componente reutilizable
├── App.tsx               # Ejemplos de uso
├── package.json
└── README.md
```

### 🎯 **Componente Card.tsx**

#### **Props y Defaults:**
- **Tipado estricto** con TypeScript
- **Valores por defecto** para props opcionales
- **Validación de variantes** en tiempo de compilación

#### **Renderizado Condicional:**
```typescript
if (variant === 'default') { /* Render default */ }
if (variant === 'featured') { /* Render featured */ }
if (variant === 'compact') { /* Render compact */ }
```

#### **Estilos Organizados:**
- **StyleSheet separado** por variante
- **Colores consistentes** en toda la aplicación
- **Sombras y efectos** nativos de React Native

---

## 🎨 Paleta de Colores

### **Default Card:**
- Fondo: `#ffffff` (blanco)
- Texto principal: `#111827` (gris oscuro)
- Texto secundario: `#6b7280` (gris medio)
- Botón: `#2563eb` (azul)

### **Featured Card:**
- Fondo: `#8b5cf6` (morado)
- Badge: `#fbbf24` (amarillo)
- Texto: `#ffffff` (blanco)
- Botón: `#ffffff` (blanco con texto morado)

### **Compact Card:**
- Fondo: `#f9fafb` (gris claro)
- Borde: `#e5e7eb` (gris borde)
- Arrow: `#9ca3af` (gris flecha)

---

## 🧪 Ejemplos de Uso

### **Uso Básico:**
```typescript
<Card
  title="Mi Título"
  description="Mi descripción"
/>
```

### **Card con Acción:**
```typescript
<Card
  title="React Native"
  description="Framework móvil"
  icon="📱"
  actionLabel="Aprender"
  onPress={() => Alert.alert('Presionado!')}
/>
```

### **Card Destacada:**
```typescript
<Card
  variant="featured"
  title="Componente Especial"
  description="Este es un componente destacado"
  icon="⭐"
  onPress={handlePress}
/>
```

### **Card Compacta:**
```typescript
<Card
  variant="compact"
  title="Configuración"
  description="Ajustes de la app"
  icon="⚙️"
  onPress={navigate}
/>
```

---

## 🚀 Funcionalidades Avanzadas

### ✨ **Características Implementadas:**
- **Reutilización total** del componente
- **Props tipadas** con TypeScript
- **Renderizado condicional** eficiente
- **Estilos optimizados** para cada variante
- **Feedback visual** en interacciones
- **Exportación limpia** del componente

### 🎯 **Casos de Uso:**
- **Listas de contenido** (variante default)
- **Promociones especiales** (variante featured)
- **Menús de navegación** (variante compact)
- **Dashboards informativos**
- **Galerías de productos**

---

## 📚 Aprendizajes Clave

### **TypeScript con React Native:**
- ✅ Definición de **interfaces** para props
- ✅ Uso de **tipos union** para variantes
- ✅ **Props opcionales** con valores por defecto
- ✅ **Tipado de funciones** (onPress)

### **Componentes Reutilizables:**
- ✅ **Composición** sobre herencia
- ✅ **Props como API** del componente
- ✅ **Renderizado condicional** eficiente
- ✅ **Estilos modulares** y mantenibles

### **Mejores Prácticas:**
- ✅ **Separación de responsabilidades**
- ✅ **Código autodocumentado** con comentarios
- ✅ **Exportación explícita** de componentes
- ✅ **Manejo de estados** opcionales

---

## 📞 Información de Contacto

- **Email:** miguelsena@gmail.com
- **GitHub:** [MiguelLopez140807](https://github.com/MiguelLopez140807)
- **Ubicación:** Cra 9 #9-22 sur

---

## 🔗 Enlaces Relacionados

- **📁 Repositorio Completo:** [Ver proyecto principal](https://github.com/MiguelLopez140807/bc-reactnative-semana01-proyecto)
- **🌿 Otras Prácticas:** Revisar rama `main` para ver organización completa
- **📋 Código Fuente:** Componente principal en `components/Card.tsx`

---

*Práctica 2 completada - Componentes Reutilizables con TypeScript - Miguel Angel Lopez Leon - Octubre 2025*