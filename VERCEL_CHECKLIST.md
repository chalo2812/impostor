# ✅ Checklist de Verificación para Vercel Deployment

## 📋 Pre-Deployment

### Estructura del Proyecto
- [x] Carpeta `components/` en la raíz
- [x] Carpeta `pages/` con `_app.jsx` e `index.jsx`
- [x] Carpeta `public/` con assets estáticos
- [x] Carpeta `styles/` con `globals.css`
- [x] Archivo `vercel.json` configurado
- [x] Archivo `package.json` con scripts correctos
- [x] Sin carpeta `src/` (eliminada)
- [x] Sin archivos de CRA (eliminados)

### Configuración
- [x] `package.json` sin `packageManager: "pnpm"`
- [x] Scripts npm configurados (`dev`, `build`, `start`, `lint`)
- [x] `vercel.json` con framework "nextjs"
- [x] `.gitignore` actualizado para Next.js
- [x] Imports actualizados en `pages/index.jsx` y `pages/_app.jsx`

### Archivos Eliminados
- [x] `src/main.jsx`
- [x] `src/index.js`
- [x] `src/setupTests.js`
- [x] `src/reportWebVitals.js`
- [x] `public/index.html`
- [x] `index.html` (raíz)
- [x] `pnpm-lock.yaml`
- [x] `vercel.next.json`
- [x] `vercel.static.json`

## 🔧 Build Local (Antes de Push)

### Comandos a Ejecutar
```bash
# 1. Limpiar instalación anterior
npm install --force

# 2. Verificar build
npm run build

# 3. Probar localmente
npm start
```

### Verificaciones
- [ ] Build completa sin errores
- [ ] No hay warnings críticos
- [ ] Servidor local inicia correctamente en http://localhost:3000
- [ ] Página principal carga
- [ ] Menú lateral funciona
- [ ] Componentes se renderizan correctamente

## 🚀 Deployment en Vercel

### Configuración en Vercel Dashboard
- [ ] Framework Preset: **Next.js** (auto-detectado)
- [ ] Build Command: `npm run build` (default)
- [ ] Output Directory: `.next` (default)
- [ ] Install Command: `npm install` (default)
- [ ] Node.js Version: **20.x** (recomendado)

### Variables de Entorno (si aplica)
- [ ] `NEXT_PUBLIC_API_URL` (si es necesario)
- [ ] Otras variables según `.env.example`

## ✅ Post-Deployment

### Verificación en Producción
Visita: https://hackaton-vercel-2024.vercel.app/

- [ ] Página principal carga sin errores
- [ ] Header se muestra correctamente
- [ ] Footer se muestra correctamente
- [ ] Menú hamburguesa funciona
- [ ] Botón "Jugar" abre el componente
- [ ] Botón "Opciones" abre el componente
- [ ] Componente Impostor muestra palabra aleatoria
- [ ] Estilos CSS se aplican correctamente
- [ ] Bootstrap funciona
- [ ] No hay errores en la consola del navegador
- [ ] No hay warnings de hidratación

### Performance
- [ ] Lighthouse Score > 90
- [ ] First Contentful Paint < 2s
- [ ] Time to Interactive < 3s
- [ ] No hay recursos bloqueantes

### Funcionalidad
- [ ] API de palabras aleatorias responde
- [ ] Navegación entre componentes funciona
- [ ] Responsive design funciona en móvil
- [ ] Responsive design funciona en tablet
- [ ] Responsive design funciona en desktop

## 🐛 Troubleshooting

### Si el Build Falla en Vercel

1. **Revisar Logs**
   - Ve a Vercel Dashboard → Deployments → Click en el deployment fallido
   - Revisa los logs de build

2. **Errores Comunes**
   - **Module not found**: Verifica imports y rutas
   - **CSS not loading**: Verifica imports en `_app.jsx`
   - **Build timeout**: Optimiza dependencias

3. **Solución Rápida**
   ```bash
   # Local
   rm -rf node_modules .next
   npm install
   npm run build
   
   # Si funciona local, push a Vercel
   git add .
   git commit -m "Fix: build issues"
   git push
   ```

### Si la Página No Carga

1. **Verificar Deployment Status**
   - Debe estar en "Ready" (verde)
   - No debe tener errores

2. **Verificar Logs de Runtime**
   - Vercel Dashboard → Deployments → Functions
   - Busca errores en tiempo de ejecución

3. **Verificar Consola del Navegador**
   - F12 → Console
   - Busca errores JavaScript

## 📊 Métricas de Éxito

### Build
- ✅ Build time < 2 minutos
- ✅ Sin errores
- ✅ Warnings < 5

### Runtime
- ✅ Response time < 500ms
- ✅ Sin errores 500
- ✅ Uptime > 99%

### User Experience
- ✅ Página carga en < 3 segundos
- ✅ Interactiva en < 5 segundos
- ✅ Sin errores visibles

## 🎯 Próximos Pasos Después del Deployment

1. [ ] Configurar dominio personalizado (opcional)
2. [ ] Habilitar Vercel Analytics
3. [ ] Configurar notificaciones de deployment
4. [ ] Configurar preview deployments para PRs
5. [ ] Documentar proceso de rollback
6. [ ] Configurar monitoring y alertas

## 📝 Notas

- **URL de Producción**: https://hackaton-vercel-2024.vercel.app/
- **Última Verificación**: [Fecha]
- **Estado**: [OK / Pendiente / Con Problemas]
- **Observaciones**: [Agregar notas aquí]

---

**Importante**: Marca cada item cuando lo completes. Este checklist asegura un deployment exitoso y sin problemas.