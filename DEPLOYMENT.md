# 🚀 Guía de Deployment en Vercel

## Estado del Proyecto
✅ Proyecto migrado completamente a Next.js  
✅ Configuración de Vercel optimizada  
✅ URL de producción: https://hackaton-vercel-2024.vercel.app/

## 📋 Pre-requisitos para Deployment

### 1. Verificar Build Local
Antes de hacer push a Vercel, asegúrate de que el build funcione localmente:

```bash
# Instalar dependencias
npm install

# Ejecutar build
npm run build

# Probar en producción local
npm start
```

### 2. Estructura de Archivos Verificada
```
✅ components/     - Componentes React
✅ pages/          - Páginas de Next.js
✅ public/         - Assets estáticos
✅ styles/         - CSS global
✅ vercel.json     - Configuración de Vercel
✅ package.json    - Dependencias y scripts
```

## 🔧 Configuración de Vercel

### Archivo vercel.json
```json
{
  "version": 2,
  "framework": "nextjs"
}
```

Esta configuración mínima es suficiente. Vercel detecta automáticamente Next.js.

### Variables de Entorno (si es necesario)
Si tu aplicación usa variables de entorno:

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → Environment Variables
3. Agrega las variables necesarias

## 📤 Proceso de Deployment

### Opción 1: Deployment Automático (Recomendado)

1. **Conectar con GitHub**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Vercel detectará automáticamente Next.js

2. **Configuración Automática**
   - Framework Preset: Next.js (detectado automáticamente)
   - Build Command: `npm run build` (por defecto)
   - Output Directory: `.next` (por defecto)
   - Install Command: `npm install` (por defecto)

3. **Deploy**
   - Cada push a la rama principal desplegará automáticamente
   - Los PRs crearán preview deployments

### Opción 2: Deployment Manual con Vercel CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy a producción
vercel --prod
```

## 🔍 Verificación Post-Deployment

### Checklist de Verificación
- [ ] La página principal carga correctamente
- [ ] El menú lateral funciona (Jugar, Opciones)
- [ ] Los estilos se aplican correctamente
- [ ] La API de palabras aleatorias funciona
- [ ] No hay errores en la consola del navegador

### URLs a Verificar
- **Producción**: https://hackaton-vercel-2024.vercel.app/
- **Preview**: Se genera automáticamente para cada PR

## 🐛 Troubleshooting

### Error: "Build failed"
```bash
# Limpiar caché y reinstalar
rm -rf node_modules .next
npm install
npm run build
```

### Error: "Module not found"
- Verifica que todos los imports usen rutas relativas correctas
- Asegúrate de que `components/` esté en la raíz del proyecto

### Error: "CSS not loading"
- Verifica que `pages/_app.jsx` importe todos los CSS necesarios
- Confirma que los archivos CSS existan en las rutas especificadas

## 📊 Monitoreo

### Vercel Analytics
Vercel proporciona analytics automáticos:
- Performance metrics
- Web Vitals
- Error tracking

Accede desde: Dashboard → Tu Proyecto → Analytics

## 🔄 Actualizar Deployment

### Actualización Automática
```bash
git add .
git commit -m "Update: descripción del cambio"
git push origin main
```

Vercel desplegará automáticamente los cambios.

### Rollback
Si algo sale mal:
1. Ve a Vercel Dashboard
2. Deployments
3. Selecciona un deployment anterior
4. Click en "Promote to Production"

## 📝 Notas Importantes

- **Build Time**: Next.js puede tardar 1-3 minutos en construir
- **Cache**: Vercel cachea assets automáticamente para mejor performance
- **Límites**: Plan gratuito tiene límites de bandwidth y builds
- **Logs**: Revisa los logs en Vercel Dashboard si hay problemas

## 🎯 Próximos Pasos

1. Verificar que https://hackaton-vercel-2024.vercel.app/ funcione correctamente
2. Configurar dominio personalizado (opcional)
3. Habilitar Vercel Analytics
4. Configurar notificaciones de deployment

## 📞 Soporte

- [Documentación de Vercel](https://vercel.com/docs)
- [Documentación de Next.js](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)