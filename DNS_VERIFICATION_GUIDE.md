# 🔐 VERIFICACIÓN DNS - Google Search Console

## PASO A PASO

### PASO 1: Obtener el Código de Verificación DNS

**A) En Google Search Console:**
1. Ve a: https://search.google.com/search-console
2. Si estás en el error, click **"Aceptar"** o **"Cerrar"**
3. Click en **"Agregar propiedad"** o **"Add Property"**
4. Selecciona: **"Dominio"** (Domain) - NO "Prefijo de URL"
5. Escribe: `ebroofingma.net` (sin https://, sin www)
6. Click **"Continuar"**

**B) Copiar el código TXT:**

Google te mostrará algo como:

```
Verification code:
google-site-verification=ABC123XYZ789_EJEMPLO_tu-codigo-real-aqui
```

**COPIAR TODO EL CÓDIGO** (empieza con `google-site-verification=`)

---

### PASO 2: Acceder al DNS de Hostinger

**A) Login a Hostinger:**
1. Ve a: https://hpanel.hostinger.com
2. Ingresa tus credenciales

**B) Ir a DNS Settings:**
1. En el panel principal, busca: **"Domains"**
2. Encuentra: `ebroofingma.net`
3. Click en los **3 puntos** (⋮) o **"Manage"**
4. Busca y click en: **"DNS / Name Servers"** o **"DNS Records"**

---

### PASO 3: Agregar el Registro TXT

**A) En la página de DNS Records:**

Deberías ver una lista de registros existentes (A, CNAME, MX, etc.)

**B) Click en: "Add Record" o "Add New Record"**

**C) Llenar el formulario:**

```
Type (Tipo):          TXT
Name (Nombre):        @ 
  (o deja en blanco, o escribe: ebroofingma.net)

TTL:                  3600 
  (o deja el valor por defecto - 14400)

Value (Valor):        google-site-verification=ABC123XYZ789_tu-codigo-real-aqui
  (Pega el código COMPLETO que copiaste de Google)
```

**IMPORTANTE:**
- Pega el código EXACTAMENTE como lo dio Google
- Incluye `google-site-verification=` al inicio
- NO agregues comillas ni espacios extra

**D) Click: "Save" o "Add Record"**

---

### PASO 4: Verificar en Google Search Console

**A) Volver a Google Search Console**

**IMPORTANTE:** DNS puede tardar un poco en propagarse.

**Opciones:**

**Opción 1 - Esperar 5 minutos y verificar:**
1. Espera 5 minutos
2. En Google Search Console, click **"Verify"** o **"Verificar"**
3. Si funciona: ✅ ¡Listo!
4. Si falla: Espera 15 minutos más e intenta de nuevo

**Opción 2 - Verificar que el registro DNS esté activo:**

Antes de verificar en Google, confirma que el DNS está activo:

1. Ve a: https://mxtoolbox.com/TXTLookup.aspx
2. Escribe: `ebroofingma.net`
3. Click **"TXT Lookup"**
4. Deberías ver tu código: `google-site-verification=ABC123...`

Si NO aparece todavía:
- Espera 5-15 minutos
- Vuelve a verificar

Una vez que aparezca en MXToolbox:
- Vuelve a Google Search Console
- Click **"Verify"**

---

## ✅ VERIFICACIÓN EXITOSA

Una vez verificada la propiedad, deberías ver:

```
✅ Ownership verified
ebroofingma.net
```

---

## 🚀 DESPUÉS DE LA VERIFICACIÓN

### PASO SIGUIENTE: Limpiar URLs Spam

**A) En Search Console, ir a:**
- Menú izquierdo > **"Removals"**

**B) Remover URLs spam:**

Click **"New Request"** y remover estas URLs una por una:

```
https://ebroofingma.net/mina-perhonen-shadow-snow-カシミヤ混-パーカー-36
https://ebroofingma.net/hot-レア-mina-perhonen-one-day-タートルネックニット-38
https://ebroofingma.net/な様専用-レミーマルタン-ルイ13世-バカラクリスタル-デキャンタ
https://ebroofingma.net/試着のみ-ミナペルホネン-mina-perhonen-36-インナー-襟付き
https://ebroofingma.net/希少-初期ミナ-mina-perhonen-ミナペルホネン-マーメイド-ブラウス
```

**Para cada URL:**
1. Pega la URL completa
2. Select: **"Temporarily remove URL"**
3. Click **"Submit"**

**C) Request Indexing para páginas reales:**

1. Search Console > **URL Inspection** (arriba)
2. Pega: `https://www.ebroofingma.net/`
3. Click **"Request Indexing"**

---

## 🔍 TROUBLESHOOTING

### Problema: "No se puede verificar"

**Causas comunes:**

1. **DNS no propagó todavía:**
   - Solución: Esperar 15-30 minutos

2. **Código incorrecto:**
   - Verificar que copiaste el código COMPLETO
   - Verificar que no tiene espacios extra

3. **Record mal configurado:**
   - Name debe ser: `@` o vacío
   - Type debe ser: `TXT`
   - Value debe empezar con: `google-site-verification=`

**Verificar el registro DNS:**
```
https://mxtoolbox.com/TXTLookup.aspx
Escribe: ebroofingma.net
```

### Problema: "El registro TXT ya existe"

Si Hostinger dice que ya existe un registro TXT:
- Edita el registro existente
- O agrega el código de Google al registro existente (separado por espacio o coma)

---

## 📋 CHECKLIST

### Antes de Verificar:
- [ ] Código de Google copiado COMPLETO
- [ ] Registro TXT agregado en Hostinger DNS
- [ ] Esperado 5-15 minutos para propagación
- [ ] Verificado en MXToolbox que aparece

### Después de Verificar:
- [ ] Propiedad verificada en Search Console ✅
- [ ] Revisado Security & Manual Actions
- [ ] Comenzado a remover URLs spam

---

## 🎯 RESUMEN RÁPIDO

**Hostinger DNS Settings:**
```
Type:   TXT
Name:   @
Value:  google-site-verification=TU_CODIGO_AQUI
TTL:    3600
```

**Después:**
1. Esperar 5-15 minutos
2. Verificar en Google Search Console
3. Proceder a limpiar URLs spam

---

**Tiempo estimado:**
- Agregar DNS: 2 minutos
- Esperar propagación: 5-15 minutos
- Verificar: 1 minuto
- **Total: ~20 minutos**

**¡Avísame cuando hayas agregado el registro DNS y te ayudo con los siguientes pasos!**
