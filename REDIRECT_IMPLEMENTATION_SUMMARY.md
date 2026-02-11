# 🎯 Implementación de Redirección Canónica WWW

## 📊 Resumen Ejecutivo

**Dominio Canónico:** `https://www.ebroofingma.net`  
**Redirección:** `https://ebroofingma.net/*` → `https://www.ebroofingma.net/*`  
**Método:** Middleware Next.js (óptimo para Hostinger/Passenger)  
**Status Code:** 308 Permanent Redirect

---

## ✅ Archivos Modificados/Creados

### 1. ✨ **NUEVO:** `middleware.ts` (Raíz del proyecto)

**Función:**
- Intercepta todas las requests HTTP antes de que lleguen a las páginas
- Detecta si el host es `ebroofingma.net` (sin www)
- Redirige permanentemente a `www.ebroofingma.net` preservando path y query strings
- Usa status 308 (Permanent Redirect con método HTTP preservado)

**Ventajas de esta implementación:**
- ✅ Acceso directo al header `host` de la request
- ✅ Compatible con Hostinger Node.js Web App (Passenger)
- ✅ No requiere modificar `.htaccess`
- ✅ Edge middleware (se ejecuta antes que las páginas)
- ✅ Excluye automáticamente assets y rutas internas de Next.js

**Matcher Configuration:**
```typescript
matcher: [
  '/((?!_next/static|_next/image|favicon.ico|assets|api).*)',
]
```
Esto asegura que:
- ❌ NO redirige: `/assets/*`, `/favicon.ico`, `/_next/*`, `/api/*`
- ✅ SÍ redirige: `/`, `/contact`, `/about`, etc.

---

### 2. ✅ **YA CONFIGURADO:** `app/layout.js`

Tu archivo ya tiene la configuración SEO correcta:

```javascript
export const metadata = {
    metadataBase: new URL('https://www.ebroofingma.net'),
    alternates: {
        canonical: './',
    },
    title: 'E&B Roofing',
    description: 'E&B Roofing - Where Performance Meets Quality',
    // ...
}
```

**Qué hace esto:**
- `metadataBase`: Define la URL base para todos los meta tags
- `alternates.canonical`: Genera el tag `<link rel="canonical">` automáticamente en cada página
- Next.js combinará `metadataBase + pathname` para generar el canonical correcto

**Ejemplo de output HTML:**
```html
<!-- En https://www.ebroofingma.net/ -->
<link rel="canonical" href="https://www.ebroofingma.net/"/>

<!-- En https://www.ebroofingma.net/contact -->
<link rel="canonical" href="https://www.ebroofingma.net/contact"/>
```

---

## 🔄 Flujo de Redirección

```
Usuario visita:
https://ebroofingma.net/contact?x=1

         ↓
         
Middleware detecta:
host === 'ebroofingma.net'

         ↓
         
Construye nueva URL:
https://www.ebroofingma.net/contact?x=1

         ↓
         
Responde con:
HTTP 308 Permanent Redirect
Location: https://www.ebroofingma.net/contact?x=1

         ↓
         
Navegador sigue redirect:
https://www.ebroofingma.net/contact?x=1

         ↓
         
Middleware detecta:
host === 'www.ebroofingma.net'

         ↓
         
No hay redirect, continúa:
NextResponse.next()

         ↓
         
Página se renderiza normalmente:
HTTP 200 OK
```

---

## 🚀 Deployment en Hostinger

### Pasos para Deploy:

1. **Commit y Push al repositorio:**
   ```bash
   git add middleware.ts REDIRECT_TESTING_CHECKLIST.md REDIRECT_IMPLEMENTATION_SUMMARY.md
   git commit -m "feat: implement www canonical redirect with middleware"
   git push origin main
   ```

2. **En Hostinger Panel:**
   - Ve a tu Node.js Web App
   - Configura/verifica que **ambos dominios** estén apuntando a la app:
     - `ebroofingma.net`
     - `www.ebroofingma.net`
   - Trigger un rebuild/redeploy si es necesario

3. **Verificar ambos dominios en DNS/Panel:**
   - Asegúrate de que ambos dominios resuelvan correctamente
   - Si usas Cloudflare u otro CDN, asegúrate de limpiar el caché después del deploy

---

## 🧪 Testing Rápido

Una vez desplegado, prueba esto inmediatamente:

```bash
# Test 1: Verificar redirect
curl -I https://ebroofingma.net/

# Debes ver:
# HTTP/2 308
# location: https://www.ebroofingma.net/

# Test 2: Verificar que www NO redirige
curl -I https://www.ebroofingma.net/

# Debes ver:
# HTTP/2 200
# (sin header location)
```

**Para más tests detallados, consulta:** `REDIRECT_TESTING_CHECKLIST.md`

---

## 🎯 Por Qué Esta Solución es Óptima para Hostinger

### ❌ Alternativas Descartadas:

1. **`next.config.js` redirects:**
   - Problema: Next.js no puede acceder al host header de forma confiable en `redirects()`
   - No funciona bien con proxy/reverse proxy de Passenger

2. **`.htaccess` (Apache):**
   - Problema: Hostinger usa Passenger sobre Node.js
   - `.htaccess` solo afecta archivos estáticos, no requests a Node.js
   - Añade complejidad y posibles conflictos

### ✅ Middleware Next.js:

- ✅ **Edge-first:** Se ejecuta antes que cualquier otra cosa
- ✅ **Acceso al header `host`:** Puede leer el dominio exacto de la request
- ✅ **Compatible con Passenger:** Passenger hace proxy a Node.js, middleware funciona perfectamente
- ✅ **TypeScript:** Type-safe y bien documentado
- ✅ **Matcher avanzado:** Excluye assets automáticamente
- ✅ **Status 308:** Mejor para SEO que 301 (preserva método HTTP)

---

## 📈 Impacto SEO Esperado

### Antes:
- ❌ Contenido duplicado en 2 dominios
- ❌ PageRank dividido entre www y no-www
- ❌ Google no sabe cuál es la versión preferida

### Después:
- ✅ Redirección permanente consolidada
- ✅ Todo el PageRank apunta a `www.ebroofingma.net`
- ✅ Canonical tags consistentes
- ✅ Google verá `www` como única versión oficial

**Tiempo de consolidación:** 2-4 semanas (Google re-indexará gradualmente)

---

## 🔧 Mantenimiento

### ¿Necesitas cambiar el dominio canónico en el futuro?

**Para cambiar de www → no-www:**

1. Editar `middleware.ts`:
   ```typescript
   if (host === 'www.ebroofingma.net') {
     url.host = 'ebroofingma.net'
     // ...
   }
   ```

2. Editar `app/layout.js`:
   ```javascript
   metadataBase: new URL('https://ebroofingma.net')
   ```

**Para agregar más dominios/subdominios:**
```typescript
if (host === 'ebroofingma.net' || host === 'old-domain.com') {
  url.host = 'www.ebroofingma.net'
  // ...
}
```

---

## 📚 Referencias

- [Next.js Middleware Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)
- [Next.js Metadata Docs](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [HTTP 308 Permanent Redirect](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308)
- [Google: Canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

---

**✅ Implementación completa. Listo para deployment.**
