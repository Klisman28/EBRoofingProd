# Checklist de Validación - Redirección WWW Canónica

## ✅ Pre-Deployment (Local)

### 1. Verificar Archivos Creados
- [ ] `middleware.ts` existe en la raíz del proyecto
- [ ] `app/layout.js` tiene `metadataBase: new URL('https://www.ebroofingma.net')`
- [ ] `app/layout.js` tiene `alternates: { canonical: './' }`

### 2. Build Local
```bash
npm run build
```
- [ ] Build completa sin errores
- [ ] No hay warnings relacionados con middleware o redirects

### 3. Test Local (Limitado - no puede simular dominios)
```bash
npm run start
```
**Nota:** En local solo puedes verificar que la app funciona en `http://localhost:3000`

---

## 🚀 Post-Deployment (Producción en Hostinger)

### 4. Verificar Redirección Básica (HTTP 308)

Usa `curl` o herramientas de desarrollo del navegador para verificar:

#### Test 1: Redirección desde raíz sin www
```bash
curl -I https://ebroofingma.net/
```
**Esperado:**
- Status: `308 Permanent Redirect`
- Header: `Location: https://www.ebroofingma.net/`

#### Test 2: Redirección desde ruta con path
```bash
curl -I https://ebroofingma.net/contact
```
**Esperado:**
- Status: `308 Permanent Redirect`
- Header: `Location: https://www.ebroofingma.net/contact`

#### Test 3: Redirección preservando query string
```bash
curl -I https://ebroofingma.net/contact?x=1&y=test
```
**Esperado:**
- Status: `308 Permanent Redirect`
- Header: `Location: https://www.ebroofingma.net/contact?x=1&y=test`

#### Test 4: WWW no redirige (loop check)
```bash
curl -I https://www.ebroofingma.net/
```
**Esperado:**
- Status: `200 OK` (o `304 Not Modified`)
- **NO** debe haber header `Location`

---

### 5. Verificar en Navegador

#### Test 5: Navegación Manual
1. [ ] Visitar `https://ebroofingma.net/` → debe ir a `https://www.ebroofingma.net/`
2. [ ] Visitar `https://ebroofingma.net/contact` → debe ir a `https://www.ebroofingma.net/contact`
3. [ ] Visitar `https://www.ebroofingma.net/` → debe quedarse en `https://www.ebroofingma.net/`

#### Test 6: DevTools Network Tab
1. Abrir DevTools (F12) → pestaña Network
2. Visitar `https://ebroofingma.net/`
3. [ ] Ver que la primera request responde con `308 Permanent Redirect`
4. [ ] Ver que el navegador hace automáticamente la segunda request a `https://www.ebroofingma.net/`

---

### 6. Verificar SEO (Meta Tags)

#### Test 7: View Source en WWW
```bash
curl https://www.ebroofingma.net/ | grep -i canonical
```
**Esperado:**
```html
<link rel="canonical" href="https://www.ebroofingma.net/"/>
```

#### Test 8: View Source en diferentes páginas
- [ ] `https://www.ebroofingma.net/contact` → canonical debe ser `https://www.ebroofingma.net/contact`
- [ ] `https://www.ebroofingma.net/about` → canonical debe ser `https://www.ebroofingma.net/about`

---

### 7. Herramientas SEO Online

#### Test 9: Redirect Checker
Usar herramientas como:
- https://www.redirect-checker.org/
- https://httpstatus.io/

1. [ ] Ingresar `https://ebroofingma.net/`
2. [ ] Verificar que muestra: `308 Permanent Redirect → https://www.ebroofingma.net/`
3. [ ] **NO** debe haber chain redirect (múltiples redirects)

#### Test 10: Google Search Console
(Si ya tienes configurado)
- [ ] Verificar que **www.ebroofingma.net** esté configurado como dominio preferido
- [ ] Verificar que no haya errores de canonical duplicado
- [ ] Solicitar re-indexación de algunas páginas clave

---

### 8. Verificar Assets y Recursos

#### Test 11: Archivos Estáticos
1. [ ] Visitar `https://www.ebroofingma.net/assets/images/logo.png` (cambiar por una ruta real de asset)
2. [ ] Verificar que carga correctamente (200 OK)
3. [ ] **NO** debe redirigir

#### Test 12: Favicon
1. [ ] Visitar `https://www.ebroofingma.net/favicon.ico`
2. [ ] Verificar que carga correctamente (200 OK)
3. [ ] **NO** debe redirigir

---

### 9. Performance Check

#### Test 13: Tiempo de Respuesta
```bash
time curl -I https://ebroofingma.net/
```
- [ ] El redirect debe ser prácticamente instantáneo (< 100ms adicionales)

---

### 10. Verificación de No-Loops

#### Test 14: Múltiples Seguimientos
```bash
curl -L -I https://ebroofingma.net/
```
(La opción `-L` sigue redirects automáticamente)

**Esperado:**
- Primera request: `308 → https://www.ebroofingma.net/`
- Segunda request: `200 OK`
- **TOTAL: Solo 2 requests** (no debe haber loops infinitos)

---

## 🔧 Troubleshooting

### Si el redirect no funciona:
1. Verificar que `middleware.ts` esté en la raíz del proyecto (al lado de `package.json`)
2. Verificar que Hostinger haya completado el rebuild después del deploy
3. Revisar logs de Passenger en Hostinger
4. Verificar que ambos dominios (con y sin www) estén configurados en el panel de Hostinger

### Si hay redirect loop:
1. Verificar que la condición en middleware sea exactamente `host === 'ebroofingma.net'`
2. Verificar que no haya reglas conflictivas en `.htaccess`
3. Limpiar caché de CDN si usas uno (Cloudflare, etc.)

### Si assets no cargan:
1. Verificar el `matcher` en `middleware.ts`
2. Asegurar que las rutas de assets están excluidas

---

## 📋 Resumen de Estados Esperados

| URL Solicitada | Status Code | Redirección a |
|----------------|-------------|---------------|
| `https://ebroofingma.net/` | 308 | `https://www.ebroofingma.net/` |
| `https://ebroofingma.net/contact` | 308 | `https://www.ebroofingma.net/contact` |
| `https://ebroofingma.net/contact?x=1` | 308 | `https://www.ebroofingma.net/contact?x=1` |
| `https://www.ebroofingma.net/` | 200 | (ninguna) |
| `https://www.ebroofingma.net/contact` | 200 | (ninguna) |
| `https://www.ebroofingma.net/assets/...` | 200 | (ninguna) |

---

**✅ Deployment completado cuando todos los tests pasen.**
