// TODO: reemplazar "precio" y "duracion" por los valores reales de cada servicio.
// Estos son placeholders para poder probar la página.
const SERVICIOS = [
  { id: "corte-barba-cejas", nombre: "Corte Moderno", detalle: "Barba / Cejas", precio: "$0", duracion: 40 },
  { id: "corte-lavado", nombre: "Corte Moderno", detalle: "Lavado de Cabeza / Nutrición", precio: "$0", duracion: 45 },
  { id: "corte-mascarilla", nombre: "Corte Moderno", detalle: "Mascarilla", precio: "$0", duracion: 45 },
  { id: "color-moderno", nombre: "Color Moderno", detalle: "Claritos / Mechas", precio: "$0", duracion: 90 },
  { id: "color-global", nombre: "Color Global", detalle: "", precio: "$0", duracion: 60 },
  { id: "permanente", nombre: "Permanente / Ondulación", detalle: "", precio: "$0", duracion: 90 },
];

const BARBEROS = [
  { id: "sebastian", nombre: "Sebastian" },
  { id: "ale", nombre: "Ale" },
];

// Horario de atención: Lunes a Sábado 09:00 - 21:00 hs
const HORARIO_APERTURA = "09:00";
const HORARIO_CIERRE = "21:00";
const DIAS_ATENCION = [1,2,3,4,5,6]; // 0=domingo ... 6=sábado (cerrado domingo)

// URL del backend del bot (se completa cuando esté desplegado)
const API_URL = "https://TU-BACKEND-EN-RAILWAY.up.railway.app/api/reservar";
