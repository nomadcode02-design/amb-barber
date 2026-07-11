// TODO: la duración es un estimado (45 min) hasta que definas cuánto dura cada uno.
const SERVICIOS = [
  { id: "corte-lavado", nombre: "Corte moderno", detalle: "Incluye lavado", precio: "$12.000", duracion: 45 },
  { id: "corte-mascarilla", nombre: "Corte moderno + Mascarilla facial", detalle: "Puntos negros", precio: "$15.000", duracion: 45 },
  { id: "corte-nutricion", nombre: "Corte moderno + Nutrición capilar", detalle: "", precio: "$20.000", duracion: 45 },
  { id: "corte-completo", nombre: "Corte moderno + Mascarilla facial + Nutrición capilar", detalle: "", precio: "$25.000", duracion: 45 },
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
