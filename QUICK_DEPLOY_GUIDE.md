# 🚀 Quick Deploy Guide - WWW Redirect

## ✅ Archivos Creados

1. **`middleware.ts`** - Maneja la redirección
2. **`REDIRECT_IMPLEMENTATION_SUMMARY.md`** - Documentación completa
3. **`REDIRECT_TESTING_CHECKLIST.md`** - Checklist de pruebas

## 🎯 Deploy Steps

```bash
# 1. Verificar que el build funciona local
npm run build

# 2. Commit los cambios
git add middleware.ts *.md
git commit -m "feat: implement www canonical redirect"

# 3. Push a producción
git push origin main

# 4. Esperar deployment en Hostinger (~2-5 min)

# 5. Test rápido (desde tu terminal o navegador)
curl -I https://ebroofingma.net/
# Debes ver: HTTP/2 308 + Location: https://www.ebroofingma.net/

curl -I https://www.ebroofingma.net/
# Debes ver: HTTP/2 200 (sin redirect)
```

## 🔍 Troubleshooting Rápido

**❌ Si no redirige:**
- Verifica que `middleware.ts` esté en la raíz (al lado de `package.json`)
- Asegúrate de que Hostinger completó el rebuild
- Limpia el caché del navegador/CDN

**❌ Si hay redirect loop:**
- Verifica que la condición sea exactamente `host === 'ebroofingma.net'`
- Verifica que no hay reglas en `.htaccess` que interfieran

**❌ Si assets no cargan:**
- Verifica el matcher en `middleware.ts`

## 📱 Test en Navegador

1. Visita `https://ebroofingma.net/`
2. Debe redirigir automáticamente a `https://www.ebroofingma.net/`
3. Abre DevTools (F12) → Network
4. Refresca la página
5. Verifica que el primer request sea `308 Permanent Redirect`

## ✅ SEO Ya Configurado

Tu `app/layout.js` ya tiene:
- ✅ `metadataBase: new URL('https://www.ebroofingma.net')`
- ✅ `alternates: { canonical: './' }`

**No necesitas cambiar nada más en SEO.**

## 📊 Status Codes Esperados

| URL | Status | Redirección |
|-----|--------|-------------|
| `https://ebroofingma.net/` | 308 | → `https://www.ebroofingma.net/` |
| `https://ebroofingma.net/contact` | 308 | → `https://www.ebroofingma.net/contact` |
| `https://www.ebroofingma.net/` | 200 | (ninguna) |
| `https://www.ebroofingma.net/assets/*` | 200 | (ninguna) |

---

**✅ Listo para production!**
