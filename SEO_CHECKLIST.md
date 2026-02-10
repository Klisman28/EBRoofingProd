# Checklist para Validación de Canonical URLs

Sigue estos pasos para verificar que la implementación de SEO y canonicals funciona correctamente.

## 1. Verificar Configuración Base (`app/layout.js`)
- [ ] Confirma que `metadataBase` está configurado a `new URL('https://www.ebroofingma.net')`.
- [ ] Confirma que `alternates: { canonical: './' }` está presente en el objeto `metadata`.

## 2. Prueba en Desarrollo (`npm run dev`)
1. Inicia el servidor: `npm run dev`.
2. Abre tu navegador y ve a `http://localhost:3000`.
3. Haz clic derecho -> **Ver código fuente de la página** (View Page Source).
4. Busca la etiqueta `<link rel="canonical" ... />`.
   - **Debería ser:** `<link rel="canonical" href="https://www.ebroofingma.net/"/>`
   - *Nota:* Incluso en localhost, debería mostrar el dominio de producción si `metadataBase` está hardcodeado.

## 3. Prueba de Rutas Dinámicas (Ejemplo Blog)
1. Ve a `http://localhost:3000/blog/mi-primer-post`.
2. Ver código fuente.
3. Busca el canonical.
   - **Debería ser:** `<link rel="canonical" href="https://www.ebroofingma.net/blog/mi-primer-post"/>`

## 4. Prueba de Build
1. Ejecuta `npm run build`.
2. Verifica que no haya errores de construcción.
3. Si usas TypeScript (o check JS), asegúrate de que no haya quejas sobre tipos en `generateMetadata`.

## 5. Validación Final en Producción
Una vez desplegado:
- Entra a `https://www.ebroofingma.net/contact`.
- Verifica que el canonical sea igual a la URL (sin query parameters si los hubiera).
- Entra a `https://www.ebroofingma.net` (sin www si redirige, o con www). El canonical SIEMPRE debe ser con `https://www.ebroofingma.net`.
