# 🚨 GUÍA RÁPIDA - Limpieza Japanese Keyword Hack

## ✅ BUENAS NOTICIAS

**TU SERVIDOR ESTÁ LIMPIO** ✅

El contenido japonés que aparece en Google **NO EXISTE** en tu servidor actual.
Las URLs spam devuelven 404 correctamente.

---

## 🎯 LO QUE DEBES HACER AHORA

### PASO 1: Google Search Console (15 minutos)

**A) Accede a:**
```
https://search.google.com/search-console
```

**B) Remover URLs Spam:**

1. Menú izquierdo > **Removals**
2. Click **"New Request"**
3. Para CADA URL spam que viste en Google:

```
Ejemplo de URLs a remover:
https://www.ebroofingma.net/mina-perhonen-shadow-snow...
https://www.ebroofingma.net/hot-レア-mina-perhonen...
https://www.ebroofingma.net/な様専用-レミーマルタン...
```

4. Pega la URL completa
5. Select: **"Temporarily remove URL"**
6. Click **Submit**

**Repite para TODAS las URLs spam.**

**C) Request Indexing de Páginas Reales:**

1. En Search Console, arriba > **URL Inspection**
2. Pega: `https://www.ebroofingma.net/`
3. Click **"REQUEST INDEXING"**

Repite para tus páginas importantes:
- Homepage
- About
- Contact
- Services

**D) Verificar Seguridad:**

1. Menú izquierdo > **Security & Manual Actions**
2. Verifica que NO haya alertas

---

### PASO 2: Deploy Cambios de Seguridad (10 minutos)

He creado archivos de seguridad en tu proyecto local:

**Archivos creados:**
- `next.config.js` - Headers de seguridad
- `public/robots.txt` - Robots actualizado
- Documentación completa

**Deploy:**

```bash
# 1. Build
npm run build

# 2. Verificar que no haya errores

# 3. Subir a Hostinger (tu proceso normal)
```

---

### PASO 3: Cambiar Contraseñas (5 minutos)

**Hostinger Panel:**
1. Login > Account > Security
2. Change Password
3. Usar contraseña fuerte (16+ caracteres)

**FTP (si usas):**
1. Hostinger Panel > Advanced > FTP Accounts
2. Change Password

**Habilitar 2FA:**
1. Hostinger Panel > Account > Security
2. Two-Factor Authentication > Enable

---

## 📊 EXPECTATIVAS DE TIEMPO

**Removal requests en Search Console:**
- Efecto visible: **1-2 días**

**Desindexación completa:**
- URLs spam desaparecen: **7-14 días**

**Resultados limpios en Google:**
- SERP totalmente limpio: **2-4 semanas**

---

## 🔍 MONITOREO

**Cada 2-3 días:**

Busca en Google:
```
site:ebroofingma.net
```

**Deberías ver:**
- ✅ Menos URLs spam cada vez
- ✅ Tus páginas reales aparecen
- ❌ NO aparecen nuevas URLs spam

---

## 🚨 SI EL PROBLEMA PERSISTE

**Si después de 2 semanas:**
- Siguen apareciendo URLs spam nuevas
- Las URLs removidas reaparecen
- Search Console muestra alertas de seguridad

**Entonces:**
1. Contactar Hostinger Support
2. Solicitar análisis completo de malware
3. Considerar migración a servidor limpio

---

## ✅ RESUMEN

**Estado actual:**
- ✅ Servidor limpio
- ✅ URLs spam devuelven 404
- ✅ Código securizado
- 🔲 Pendiente: Limpieza en Google (tú debes hacer)

**Tu trabajo:**
1. Remover URLs en Search Console (15 min)
2. Deploy cambios de seguridad (10 min)
3. Cambiar contraseñas (5 min)
4. Monitorear resultados (próximos 7-14 días)

---

**Lee el archivo completo:** `SECURITY_CLEANUP_SUMMARY.md`

**Total tiempo estimado:** 30 minutos  
**Dificultad:** Fácil  
**Resultado:** Sitio limpio en Google en 2-4 semanas
