# 🚨 JAPANESE KEYWORD HACK - DIAGNÓSTICO Y LIMPIEZA

## ⚠️ SITUACIÓN ACTUAL

**Problema Reportado:** Resultados en japonés al buscar "ebroofingma.net" en Google
**Tipo de Hack:** Japanese Keyword Hack (hack SEO común)
**Gravedad:** ALTA - Afecta SEO y confianza del sitio

---

## 📊 FASE A: DIAGNÓSTICO COMPLETO

### A1. Búsquedas en Google (HAZ AHORA)

Abre Google y ejecuta estas búsquedas **EXACTAS**:

#### Búsqueda 1: Todas las páginas indexadas
```
site:ebroofingma.net
```
**Qué buscar:**
- Cuántas páginas están indexadas (debajo del cuadro de búsqueda)
- URLs con caracteres japoneses
- URLs con nombres extraños o aleatorios
- URLs que NO reconoces

#### Búsqueda 2: Contenido en japonés
```
site:ebroofingma.net 安い
```
```
site:ebroofingma.net 日本
```
```
site:ebroofingma.net 激安
```
**Qué buscar:**
- Páginas con títulos en japonés
- Descripciones en japonés

#### Búsqueda 3: Rutas sospechosas de WordPress
```
site:ebroofingma.net inurl:wp-content
```
```
site:ebroofingma.net inurl:wp-includes
```
```
site:ebroofingma.net inurl:wp-admin
```
**Importante:** Tu sitio es Next.js, NO WordPress. Si aparece algo, es contenido viejo o hack.

#### Búsqueda 4: Archivos PHP sospechosos
```
site:ebroofingma.net filetype:php
```
**Importante:** Next.js no usa PHP. Cualquier PHP es sospechoso.

#### Búsqueda 5: Subdominios
```
site:*.ebroofingma.net
```

### A2. Documenta lo que encuentres

**CREA UN DOCUMENTO** con:

```
BÚSQUEDA: site:ebroofingma.net
RESULTADOS TOTALES: [número]
URLs SOSPECHOSAS:
1. [URL completa] - [descripción/título]
2. [URL completa] - [descripción/título]
...

BÚSQUEDA: site:ebroofingma.net 日本
RESULTADOS: [número]
URLs:
...
```

---

## 🔍 FASE B: INSPECCIÓN DEL SERVIDOR (HOSTINGER)

### B1. Acceder al File Manager de Hostinger

1. Login en panel de Hostinger
2. Ve a: **Files > File Manager**
3. Navega a: **public_html** (o el directorio raíz de tu sitio)

### B2. Buscar Archivos Sospechosos

#### Archivos PHP (CRÍTICO)
Tu sitio es Next.js (Node.js). **NO debería haber archivos PHP**.

**Busca:**
- `*.php` en el directorio raíz
- Archivos con nombres como:
  - `index.php`
  - `config.php`
  - `wp-config.php`
  - `xmlrpc.php`
  - Nombres aleatorios: `a1b2c3.php`, `temp.php`, etc.

**Acción:** Si encuentras PHP, **NO LO BORRES AÚN**. Anota la ruta completa.

#### Directorios de WordPress (SOSPECHOSO)
```
wp-content/
wp-includes/
wp-admin/
```

**Acción:** Si existen y NO los reconoces, son residuos o hack.

#### Archivos .htaccess (REVISAR)
```
.htaccess
```

**Acción:**
1. Si existe, descárgalo
2. Busca líneas sospechosas:
   - Redirects a sitios externos
   - `RewriteRule` con dominios que no reconoces
   - Código ofuscado (base64, eval, etc.)

#### Archivos con fechas recientes
En File Manager, ordena por "Date Modified"

**Busca:**
- Archivos creados/modificados recientemente que NO hayas subido tú
- Archivos con nombres aleatorios
- Archivos ocultos (empiezan con `.`)

### B3. Revisar Logs de Acceso (si disponible)

En Hostinger Panel:
- **Advanced > Error Logs**
- **Advanced > Access Logs**

**Busca:**
- Accesos a URLs que no reconoces
- IPs sospechosas
- Patrones de user-agent raros

---

## 🛡️ FASE C: LIMPIEZA DEL SERVIDOR

### C1. Backup ANTES de Eliminar

**CRÍTICO:** Antes de borrar CUALQUIER cosa:

1. En Hostinger File Manager:
   - Select All
   - Compress > Download ZIP
2. Guarda el backup con fecha: `backup-ebroofing-2026-02-10.zip`

### C2. Eliminar Contenido Malicioso

#### Si encontraste archivos PHP sospechosos:
```
1. Selecciona el archivo en File Manager
2. Click derecho > Delete
3. Confirma
```

#### Si encontraste directorios wp-*:
```
1. Selecciona el directorio entero
2. Click derecho > Delete
3. Confirma
```

#### Si encontraste .htaccess malicioso:
```
1. Descarga el archivo primero (backup)
2. Edita y elimina líneas sospechosas
3. Si está totalmente comprometido, bórralo
```

**Nota:** Para Next.js en Node.js, normalmente NO necesitas .htaccess.

### C3. Verificar Archivos de tu Sitio Real

Tu sitio Next.js debería tener una estructura como:

```
public_html/
├── .next/          (build de Next.js)
├── public/         (assets estáticos)
├── node_modules/   (dependencias)
├── package.json
├── server.js       (tu servidor Node)
└── ...
```

**Verifica:**
- Estos archivos coinciden con tu repo local
- No hay archivos extra que no reconoces

---

## 🔐 FASE D: ENDURECIMIENTO DE SEGURIDAD

### D1. Cambiar TODAS las Contraseñas

#### Hostinger Panel
1. Login a Hostinger
2. Ve a: **Account > Security**
3. **Change Password**
4. Usa contraseña fuerte (16+ caracteres, aleatorios)

#### FTP/SFTP
1. Hostinger Panel > **Advanced > FTP Accounts**
2. Elimina cuentas FTP que no uses
3. Cambia contraseña de cuentas activas

#### Base de Datos (si tienes)
1. Hostinger Panel > **Databases**
2. Click en tu base de datos
3. **Change Password**

### D2. Habilitar 2FA

1. Hostinger Panel > **Account > Security**
2. **Two-Factor Authentication**
3. Habilitar

### D3. Revisar Permisos de Archivos

En File Manager:
- Archivos: **644** (rw-r--r--)
- Directorios: **755** (rwxr-xr-x)

**Nunca:**
- 777 (demasiado permisivo)
- 666 (demasiado permisivo)

### D4. Headers de Seguridad (Next.js)

En tu proyecto local, abre `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

---

## 📋 FASE E: LIMPIEZA SEO (GOOGLE)

### E1. Google Search Console - Verificación de Seguridad

1. Ve a: https://search.google.com/search-console
2. Selecciona tu propiedad: `ebroofingma.net`
3. Menú izquierdo > **Security & Manual Actions**
4. Revisa:
   - **Security issues:** Si hay alertas
   - **Manual actions:** Si Google penalizó tu sitio

### E2. Verificar Sitemap

1. Search Console > **Sitemaps**
2. Verifica que solo esté tu sitemap legítimo
3. Si hay sitemaps raros, **elimínalos**

### E3. URL Inspection de Páginas Spam

Para CADA URL spam que encontraste:

1. Search Console > **URL Inspection** (arriba)
2. Pega la URL spam completa
3. Si dice "URL is on Google":
   - No hay opción directa de "remove" aquí
   - Anota que existe

### E4. Herramienta de Eliminación de URLs

1. Search Console > **Removals** (menú izquierdo)
2. Click **NEW REQUEST**
3. Pega la URL spam
4. Select: **Remove this URL only**
5. Submit

**Repite para CADA URL spam.**

**IMPORTANTE:**
- Esto es temporal (6 meses)
- La verdadera solución es que las URLs devuelvan 404/410

### E5. Verificar que URLs Spam den 404

Para cada URL spam que encontraste:

1. Abre la URL en tu navegador
2. Debería dar **404 Not Found**
3. Si da 200 OK o muestra contenido, el hack sigue activo

**Ejemplo:**
```
https://www.ebroofingma.net/wp-content/uploads/algo.php
```

DEBE devolver **404**.

### E6. Request Indexing para Páginas Reales

Para tus páginas legítimas:

1. Search Console > **URL Inspection**
2. Pega URL real (ej: `https://www.ebroofingma.net`)
3. Click **REQUEST INDEXING**

Repite para:
- Homepage
- Páginas de servicios
- Páginas importantes

---

## 🔧 FASE F: CONFIGURACIÓN DE SEGURIDAD EN NEXT.JS

### F1. Asegurar 404 para Rutas No Existentes

Tu archivo `app/not-found.js` ya existe. Verifica que funcione:

```bash
# Probar localmente
npm run dev

# Abrir en navegador:
http://localhost:3001/ruta-que-no-existe
```

Debe mostrar tu página 404.

### F2. Robots.txt Limpio

Crea/verifica `public/robots.txt`:

```txt
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://www.ebroofingma.net/sitemap.xml
```

### F3. Sitemap Actualizado

Tu archivo `app/sitemap.js` existe. Verifica que solo incluya rutas legítimas.

**Verificar en:**
```
https://www.ebroofingma.net/sitemap.xml
```

---

## ✅ CHECKLIST DE VERIFICACIÓN FINAL

### Diagnóstico
- [ ] Búsquedas site: completadas
- [ ] URLs spam documentadas
- [ ] File Manager de Hostinger revisado
- [ ] Archivos sospechosos identificados

### Limpieza Servidor
- [ ] Backup completo descargado
- [ ] Archivos PHP eliminados (si había)
- [ ] Directorios wp-* eliminados (si había)
- [ ] .htaccess verificado/limpiado

### Seguridad
- [ ] Contraseña Hostinger cambiada
- [ ] Contraseña FTP cambiada
- [ ] 2FA habilitado
- [ ] Permisos de archivos verificados

### Google Search Console
- [ ] Security issues revisado
- [ ] Manual actions revisado
- [ ] URLs spam removidas (Removals tool)
- [ ] URLs spam devuelven 404
- [ ] Páginas reales reindexadas

### Next.js
- [ ] Headers de seguridad añadidos
- [ ] 404 funciona correctamente
- [ ] robots.txt correcto
- [ ] sitemap.xml correcto

---

## 🚨 SEÑALES DE ALERTA (SI SIGUE COMPROMETIDO)

### El hack NO está limpio si:
- [ ] Siguen apareciendo URLs nuevas en Google
- [ ] URLs eliminadas reaparecen
- [ ] Archivos eliminados reaparecen en el servidor
- [ ] Search Console muestra "Security issues"

### Acciones adicionales si persiste:
1. **Contactar a Hostinger Support**
   - Reportar compromiso de seguridad
   - Solicitar análisis de malware completo
   - Solicitar restauración desde backup limpio

2. **Considerar Migración**
   - Si el hack persiste, puede ser más profundo (kernel, base de datos)
   - Considerar migrar a servidor limpio

3. **Auditoría Profesional**
   - Contratar auditoría de seguridad profesional
   - Revisar todo el stack (hosting, DNS, etc.)

---

## 📞 RECURSOS Y CONTACTOS

### Google Herramientas:
- **Search Console:** https://search.google.com/search-console
- **Removals Tool:** Search Console > Removals
- **URL Inspection:** Search Console > URL Inspection

### Hostinger Support:
- **Live Chat:** Panel de Hostinger > soporte
- **Tickets:** https://www.hostinger.com/cpanel-login

### Documentación Google sobre Japanese Keyword Hack:
- https://developers.google.com/search/docs/advanced/security/japanese-keyword-hack

---

## 📄 TEMPLATE PARA DOCUMENTAR URLs SPAM

```markdown
# URLs SPAM ENCONTRADAS - ebroofingma.net

Fecha: 2026-02-10

## Búsqueda: site:ebroofingma.net

Total URLs indexadas: [NÚMERO]

### URLs Sospechosas:

1. **URL:** https://www.ebroofingma.net/...
   - **Título:** [título en japonés]
   - **Estado al abrir:** [404/200/otro]
   - **Acción:** [Removal request enviado: Sí/No]

2. **URL:** https://www.ebroofingma.net/...
   - **Título:** [título en japonés]
   - **Estado al abrir:** [404/200/otro]
   - **Acción:** [Removal request enviado: Sí/No]

...

## Búsqueda: site:ebroofingma.net 日本

Total resultados: [NÚMERO]

[Repetir formato]

## Archivos Maliciosos en Servidor:

1. **Archivo:** /public_html/archivo.php
   - **Fecha modificación:** [fecha]
   - **Tamaño:** [tamaño]
   - **Acción:** [Eliminado: Sí/No]

...
```

---

**SIGUIENTE PASO INMEDIATO:**

1. **Ejecuta las búsquedas en Google** (Fase A1)
2. **Documenta TODO lo que encuentres**
3. **Accede a Hostinger File Manager** y revisa archivos
4. **Repórtame tus hallazgos**

Una vez que sepamos exactamente qué hay, procederemos con la limpieza sistemática.
