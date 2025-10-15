# 📱 Mi App Personal - React Native

## 🎬 Demostración en Video

[![🎥 Ver Demostración de la App](https://img.shields.io/badge/🎥_Ver_Demostración-red?style=for-the-badge&logo=youtube&logoColor=white)](https://drive.google.com/file/d/1PhyLf5SlkAsB1U7xRy4rGVnFj-KgoI6P/view?usp=sharing)

> **¡Haz clic en el botón de arriba para ver la aplicación en funcionamiento!** 📱✨
> 
> El video muestra todas las funcionalidades de la aplicación incluyendo navegación, interfaz de usuario y tu información personal.

---

## 👨‍💻 Información del Desarrollador
**Desarrollado por:** Miguel Angel Lopez Leon  
**Fecha:** 15 de octubre de 2025  
**Título:** Técnico en Programación de Software  
**En proceso:** Tecnólogo en Análisis y Desarrollo de Software  

---

## 📋 Descripción del Proyecto

Mi App Personal es una aplicación móvil desarrollada con React Native y Expo que muestra mi información profesional de manera elegante y moderna. La aplicación presenta mi perfil, habilidades técnicas y proyectos realizados.

### ✨ Características Principales
- 📱 Diseño responsivo y moderno
- 👤 Perfil personal completo
- 💪 Sección de habilidades técnicas
- 🚀 Portafolio de proyectos
- 📞 Información de contacto
- 🎨 Interfaz intuitiva y profesional

---

## 📸 Screenshots

| Perfil Personal | Habilidades | Proyectos |
|:--------------:|:-----------:|:---------:|
| ![Perfil](./screenshots/perfil.jpg) | ![Habilidades](./screenshots/habilidades.jpg) | ![Proyectos](./screenshots/proyectos.jpg) |

> **Nota:** Para tomar screenshots de la aplicación:
> 1. Ejecuta `pnpm start` o `expo start`
> 2. Abre la app en tu dispositivo móvil con Expo Go
> 3. Toma capturas de pantalla de las diferentes secciones
> 4. Guarda las imágenes en la carpeta `screenshots/` con los nombres correspondientes

---

## 🛠️ Tecnologías Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desarrollo
- **TypeScript** - Tipado estático
- **React Native StyleSheet** - Estilos nativos
- **Expo Status Bar** - Gestión de la barra de estado
- **React Native Safe Area Context** - Áreas seguras

---

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- pnpm (gestor de paquetes)
- Expo CLI
- Expo Go (aplicación móvil para pruebas)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd mi-app-personal
   ```

2. **Instalar dependencias**
   ```bash
   pnpm install
   ```

3. **Instalar dependencias específicas de Expo**
   ```bash
   npx expo install react-native-safe-area-context
   pnpm add -D babel-preset-expo
   ```

4. **Ejecutar la aplicación**
   ```bash
   pnpm start
   ```
   o
   ```bash
   expo start
   ```

5. **Ver en dispositivo móvil**
   - Instala **Expo Go** desde Play Store o App Store
   - Escanea el código QR que aparece en la terminal
   - La aplicación se cargará automáticamente

### Comandos Adicionales

```bash
# Limpiar caché y reiniciar
pnpm start --clear

# Abrir en Android (si tienes emulador)
expo start --android

# Abrir en iOS (si tienes simulador en Mac)
expo start --ios

# Abrir en web
expo start --web
```

---

## 🔧 Decisiones Técnicas y Solución de Problemas

### ⚠️ Problema con NativeWind/Tailwind CSS

Durante el desarrollo inicial, se intentó implementar **NativeWind** (Tailwind CSS para React Native), pero se encontraron problemas de compatibilidad que impedían el correcto funcionamiento de la aplicación.

#### Error Encontrado:
```bash
ERROR  index.ts: [BABEL] C:\Users\USUARIO\mi-app-personal\index.ts: .plugins is not a valid Plugin property
```

#### Análisis del Problema:
- El error ocurría en la configuración de Babel con el plugin `nativewind/babel`
- La versión de NativeWind instalada presentaba incompatibilidades
- El bundler de Metro no podía procesar correctamente los plugins de Babel

#### Solución Implementada:
Se tomó la **decisión técnica** de migrar de **NativeWind** a **React Native StyleSheet nativo** por las siguientes razones:

1. **✅ Estabilidad:** StyleSheet es el sistema de estilos nativo y estable de React Native
2. **✅ Performance:** Mejor rendimiento al no requerir procesamiento adicional de CSS
3. **✅ Compatibilidad:** 100% compatible con todas las versiones de React Native y Expo
4. **✅ Mantenibilidad:** Código más predecible y fácil de mantener
5. **✅ Debugging:** Herramientas de depuración nativas más efectivas

#### Configuración Final de Babel:
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [], // Sin plugins adicionales para máxima compatibilidad
  };
};
```

### 🎨 Implementación de Estilos

La migración se realizó manteniendo el **mismo diseño visual** pero utilizando:
- **StyleSheet.create()** para definir estilos
- **Colores hexadecimales** equivalentes a las clases de Tailwind
- **Flexbox nativo** para layouts
- **Sombras y bordes** nativos de React Native

---

## 📁 Estructura del Proyecto

```
mi-app-personal/
├── App.tsx                 # Componente principal
├── babel.config.js         # Configuración de Babel
├── package.json           # Dependencias del proyecto
├── tsconfig.json          # Configuración de TypeScript
├── tailwind.config.js     # Configuración de Tailwind (no utilizada)
├── components/            # Componentes reutilizables
│   ├── SkillCard.tsx      # Tarjeta de habilidades
│   └── ProjectCard.tsx    # Tarjeta de proyectos
├── screenshots/           # Capturas de pantalla
│   ├── perfil.png
│   ├── habilidades.png
│   └── proyectos.png
└── assets/               # Recursos estáticos
```

---

## 📱 Secciones de la Aplicación

### 🏠 Header y Perfil
- Encabezado con gradiente azul
- Avatar circular superpuesto
- Nombre y título profesional

### 📞 Información de Contacto
- Email de contacto
- Ubicación
- Enlaces a GitHub

### ℹ️ Sobre Mí
- Descripción personal y profesional
- Características personales

### 💪 Mis Habilidades
- HTML, CSS, Python
- PHP, React, MySQL
- Tarjetas individuales por tecnología

### 🚀 Mis Proyectos
- General Propellers Services S.A.S
- TurboEmpleo
- App de Perfil Personal
- Tags de tecnologías utilizadas

---

## 🤝 Contribuciones

Este es un proyecto personal, pero las sugerencias y mejoras son bienvenidas. Si encuentras algún error o tienes ideas para mejorar la aplicación, no dudes en crear un issue o pull request.

---

## 📄 Licencia

Este proyecto es de uso personal y educativo.

---

## 📞 Contacto

- **Email:** miguelsena@gmail.com
- **GitHub:** [MiguelLopez140807](https://github.com/MiguelLopez140807)
- **Ubicación:** Cra 9 #9-22 sur

---

## 🏆 Reflexiones del Desarrollo

Este proyecto representó una excelente oportunidad para:
- Aprender React Native y Expo
- Trabajar con TypeScript en desarrollo móvil
- Resolver problemas técnicos complejos
- Tomar decisiones arquitectónicas importantes
- Documentar el proceso de desarrollo

La **migración de NativeWind a StyleSheet nativo** fue una decisión que, aunque requirió trabajo adicional, resultó en una aplicación más estable, performante y mantenible.

---

*Desarrollado por Miguel Angel Lopez Leon - Octubre 2025*