# Impostor Game 🎮

Un juego de deducción social inspirado en Among Us, construido con Next.js y React.

## 🚀 Descripción

Impostor es un juego donde los jugadores reciben palabras secretas. Uno de ellos es el "impostor" y recibe una palabra diferente. El objetivo es descubrir quién es el impostor a través de la conversación y las pistas.

## 🛠️ Tecnologías

- **Next.js 16** - Framework de React con SSR
- **React 19** - Biblioteca de UI
- **Bootstrap 5** - Framework CSS
- **Vercel** - Plataforma de deployment

## 📋 Requisitos Previos

- Node.js 20 o superior
- npm (incluido con Node.js)

## 🔧 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd impostor

# Instalar dependencias
npm install
```

## 🎯 Scripts Disponibles

### `npm run dev`

Ejecuta la aplicación en modo desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará automáticamente cuando hagas cambios.

### `npm run build`

Construye la aplicación para producción en la carpeta `.next`.
Optimiza el build para el mejor rendimiento.

### `npm start`

Inicia el servidor de producción después de ejecutar `npm run build`.

### `npm run lint`

Ejecuta el linter de Next.js para verificar problemas de código.

## 🎮 Características Planificadas

### Menú Principal
- **Jugar** - Iniciar una nueva partida
- **Opciones** - Configurar el juego

### Opciones de Juego
- **Jugadores**: Seleccionar entre 3 a 8 jugadores
- **Nombres**: Asignar nombres personalizados a cada jugador
- **Impostores**: Elegir cantidad de impostores (1 a 3)
- **Tiempo de Ronda**: Configurar duración de cada ronda

## 📁 Estructura del Proyecto

```
impostor/
├── components/          # Componentes React
│   ├── App/            # Componente principal
│   ├── Header/         # Cabecera con menú
│   ├── Footer/         # Pie de página
│   ├── Impostor/       # Lógica del juego
│   ├── Jugar/          # Pantalla de juego
│   └── Opciones/       # Configuración
├── pages/              # Páginas de Next.js
│   ├── _app.jsx        # Configuración global
│   └── index.jsx       # Página principal
├── public/             # Archivos estáticos
├── styles/             # Estilos globales
└── package.json        # Dependencias
```

## 🚀 Deployment

### Vercel (Recomendado)

El proyecto está configurado para deployment automático en Vercel.

**URL de Producción**: https://hackaton-vercel-2024.vercel.app/

Para instrucciones detalladas de deployment, consulta [DEPLOYMENT.md](DEPLOYMENT.md).

**Quick Start:**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

O conecta tu repositorio de GitHub con Vercel para deployment automático.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

## 🔗 Enlaces

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Vercel Platform](https://vercel.com)

## 📧 Contacto

Para preguntas o sugerencias, por favor abre un issue en el repositorio.
