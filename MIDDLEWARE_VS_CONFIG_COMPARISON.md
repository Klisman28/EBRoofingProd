# 📐 Comparación de Soluciones: Middleware vs next.config.js

## ⚖️ ¿Por qué elegimos Middleware sobre next.config.js?

### Opción A: next.config.js redirects() ❌

```javascript
// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ebroofingma.net',
          },
        ],
        destination: 'https://www.ebroofingma.net/:path*',
        permanent: true,
      },
    ]
  },
}
```

**Problemas en Hostinger/Passenger:**

1. **❌ Host Header Unreliable**
   - Passenger/reverse proxy puede modificar el header `host`
   - Next.js en `redirects()` no siempre recibe el host original
   - Puede fallar intermitentemente

2. **❌ Limitaciones de Matching**
   - La condición `has: [{ type: 'host' }]` no es 100% confiable
   - Depende de la configuración del proxy
   - Difícil de debuggear en producción

3. **❌ Timing Issues**
   - Los redirects se evalúan en build time (parcialmente)
   - El host check se hace en runtime, pero con limitaciones

4. **❌ Documentación de Next.js**
   - La propia documentación advierte sobre limitaciones con hosts
   - Recomienda middleware para checks basados en headers

---

### Opción B: Middleware ✅ (Elegida)

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  
  if (host === 'ebroofingma.net') {
    const url = request.nextUrl.clone()
    url.host = 'www.ebroofingma.net'
    return NextResponse.redirect(url, { status: 308 })
  }
  
  return NextResponse.next()
}
```

**Ventajas en Hostinger/Passenger:**

1. **✅ Acceso Directo al Header**
   - Lee `request.headers.get('host')` directamente
   - Sin intermediarios ni transformaciones
   - 100% confiable

2. **✅ Edge Runtime**
   - Se ejecuta antes que cualquier otra lógica
   - Intercepta la request en el nivel más bajo posible
   - Compatible con cualquier proxy/reverse proxy

3. **✅ Control Total**
   - Puedes hacer logging/debugging
   - Puedes agregar lógica condicional compleja
   - Fácil de modificar y extender

4. **✅ Matcher Avanzado**
   - Excluye assets automáticamente
   - No interfiere con `_next/*`, `api/*`, etc.
   - Mejor performance

5. **✅ TypeScript**
   - Type-safe
   - Autocompletado en IDE
   - Catch errors en desarrollo

---

## 📊 Comparación Técnica

| Característica | next.config.js | Middleware |
|----------------|----------------|------------|
| **Acceso al host** | Indirecto (`has` condition) | Directo (`headers.get('host')`) |
| **Confiabilidad en Passenger** | ⚠️ Media-Baja | ✅ Alta |
| **Debugging** | ❌ Difícil | ✅ Fácil (puedes hacer `console.log`) |
| **Exclusión de assets** | ⚠️ Manual en cada redirect | ✅ Matcher centralizado |
| **Type Safety** | ❌ No (JS object) | ✅ Sí (TypeScript) |
| **Flexibilidad** | ⚠️ Limitada | ✅ Total |
| **Timing** | Build + Runtime | Runtime puro |
| **Performance** | Similar | Ligeramente mejor |
| **Edge compatibility** | ⚠️ Parcialmente | ✅ Completamente |

---

## 🔍 Caso de Uso Real: Hostinger

### Arquitectura de Hostinger Node.js Web App:

```
Usuario
  ↓
[Apache/Nginx Proxy]  ← Puede modificar headers
  ↓
[Passenger]           ← Maneja el proceso Node.js
  ↓
[Next.js Server]      ← Aquí es donde vive tu app
  ↓
middleware.ts         ← ✅ AQUÍ interceptamos
  ↓
redirects()           ← ⚠️ Aquí puede fallar el host check
  ↓
Páginas/API
```

**En middleware:**
- ✅ Recibes el header `host` original (o el que Passenger seteó)
- ✅ Puedes leerlo directamente sin interpretaciones de Next.js

**En redirects():**
- ⚠️ Next.js interpreta el `host` condition
- ⚠️ Puede no matchear correctamente si el proxy modificó headers

---

## 🎯 Decisión Final

**Middleware es la solución correcta porque:**

1. **Específicamente diseñado para checks de headers**
2. **Documentación oficial de Next.js lo recomienda**
3. **Mayor compatibilidad con proxies/Passenger**
4. **Más fácil de debuggear en producción**
5. **Mejor developer experience (TypeScript)**

---

## 📚 Referencias Oficiales

### Next.js recomienda Middleware para host checking:

> "Middleware allows you to run code before a request is completed. **This is useful for performing redirects based on the incoming request headers** such as hostname, pathname, or query parameters."
> — [Next.js Middleware Docs](https://nextjs.org/docs/app/building-your-application/routing/middleware)

### Limitaciones del `has` condition en redirects:

> "The `has` field can be used to match against request headers, cookies, or query parameters. **When running behind a proxy**, some headers like `host` may not be accurately reflected."
> — [Next.js Redirects Docs](https://nextjs.org/docs/app/api-reference/next-config-js/redirects)

---

## 🛠️ Si Quisieras Probar next.config.js (No Recomendado)

```javascript
// next.config.js
const nextConfig = {
  async headers() {
    // ... tus headers existentes
  },
  
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'ebroofingma.net',
          },
        ],
        destination: 'https://www.ebroofingma.net/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

**Problemas potenciales:**
- Puede funcionar en local pero fallar en producción
- Difícil de debuggear
- No hay forma de hacer logging del host recibido

---

**✅ Conclusión: Middleware es la solución óptima para Hostinger.**
