// Mantené esto sincronizado con frontend/assets/js/data.js
// TODO: completar precios reales.
const SERVICIOS = {
  "corte-barba-cejas": { nombre: "Corte Moderno (Barba/Cejas)", precio: "$0" },
  "corte-lavado": { nombre: "Corte Moderno (Lavado de Cabeza/Nutrición)", precio: "$0" },
  "corte-mascarilla": { nombre: "Corte Moderno (Mascarilla)", precio: "$0" },
  "color-moderno": { nombre: "Color Moderno (Claritos/Mechas)", precio: "$0" },
  "color-global": { nombre: "Color Global", precio: "$0" },
  "permanente": { nombre: "Permanente / Ondulación", precio: "$0" },
};

const BARBEROS = {
  sebastian: "Sebastian",
  ale: "Ale",
};

module.exports = { SERVICIOS, BARBEROS };
