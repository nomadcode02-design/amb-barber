# AMB Barbers — Bot de confirmación automática

Backend que recibe las reservas del formulario y confirma el turno por WhatsApp
al toque, sin que nadie tenga que escribir a mano.

## Cómo funciona

1. El cliente completa el formulario en la página.
2. La página manda esos datos a este servidor (`POST /api/reservar`).
3. El servidor guarda el turno y usa un WhatsApp conectado (con Baileys, no
   requiere la API oficial de Meta ni verificación de negocio) para mandar
   la confirmación automática al cliente, con todos los detalles.
4. Opcionalmente también le avisa al dueño.

## Probarlo en tu computadora

```bash
cd backend
npm install
cp .env.example .env   # completá OWNER_WHATSAPP si querés el aviso al dueño
npm start
```

La primera vez va a aparecer un **código QR en la terminal**. Escaneálo desde
el WhatsApp de la barbería (Configuración → Dispositivos vinculados →
Vincular un dispositivo). Una vez escaneado, la sesión queda guardada en la
carpeta `auth_info/` y no hay que volver a escanear (salvo que cierres sesión
manualmente desde el celular).

⚠️ Este WhatsApp queda "ocupado" por el bot — usá un número dedicado para la
barbería, no el personal de uso diario, para no arriesgar la cuenta.

## Desplegarlo (para que funcione 24/7, no solo en tu compu)

Recomendado: **Railway** o **Render** (tienen plan gratuito/muy barato).

1. Subí la carpeta `backend/` a un repo de GitHub (puede ser el mismo repo
   `AMB-BARBERS` o uno nuevo, ej. `AMB-BARBERS-bot`).
2. En Railway: "New Project" → "Deploy from GitHub repo" → elegí el repo.
3. Agregá la variable de entorno `OWNER_WHATSAPP` en el panel de Railway.
4. Una vez desplegado, mirá los **logs** del servicio ahí mismo: va a
   aparecer el QR para escanear (la primera vez).
5. Copiá la URL pública que te da Railway (algo como
   `https://amb-barbers-bot-production.up.railway.app`) y pegala en
   `frontend/assets/js/data.js`, en `API_URL`, agregando `/api/reservar`.

⚠️ La carpeta `auth_info/` (la sesión de WhatsApp) tiene que persistir entre
reinicios del servidor — en Railway/Render eso significa usar un "volume"
persistente, si no cada redeploy te va a pedir escanear el QR de nuevo.

## Completar antes de usarlo en serio

- `data.js` (acá y en el frontend): reemplazar los precios `$0` por los
  precios reales de cada servicio.
- `.env`: número real de WhatsApp del dueño para las notificaciones.
