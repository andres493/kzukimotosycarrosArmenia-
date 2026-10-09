/* ============================================================
   KZUKI MOTOS Y CARROS — Lógica de la página
   Panel de administración: agregar / editar / eliminar
   repuestos, testimonios y datos de contacto.
   ============================================================ */

/* ---------- Configuración por defecto (editable en el Panel) ---------- */
const DEFAULT_CONFIG = {
  phone: "300 813 1531",
  whatsapp: "573008131531",
  email: "blizzbyblizz@gmail.com",
  address: "Calle 48 #22-53, Barrio Las Acacias, Armenia, Quindío",
  schedule: "Lunes a Sábado: 8:00 am – 6:00 pm",
  facebook: "",
  instagram: "",
  tiktok: "",
  mercadopago: "",
  paypal: "",
  nequi: "3008131531",
  mapEmbed: "https://maps.google.com/maps?q=Calle%2048%20%2322-53%2C%20Armenia%2C%20Quind%C3%ADo%2C%20Colombia&z=16&output=embed"
};

/* ---------- Datos por defecto ---------- */

const WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

const DEFAULT_REPUESTOS = [
  /* Aceites (catálogo) — sin precio, consulta por WhatsApp */
  { id: 101, image: "img/aceites/101_shell-helix-ultra-5w-30.jpg", categoria: "Aceite carro", nombre: "Shell Helix Ultra 5W-30", precio: 0 },
  { id: 102, image: "img/aceites/102_mobil-super-1000-20w-50.jpg", categoria: "Aceite carro", nombre: "Mobil Super 1000 20W-50", precio: 0 },
  { id: 103, image: "img/aceites/103_shell-helix-hx7-10w-40.jpg", categoria: "Aceite carro", nombre: "Shell Helix HX7 10W-40", precio: 0 },
  { id: 104, image: "img/aceites/104_castrol-magnatec-10w-40.jpg", categoria: "Aceite carro", nombre: "Castrol Magnatec 10W-40", precio: 0 },
  { id: 105, image: "img/aceites/105_mobil-super-2000-10w-40.jpg", categoria: "Aceite carro", nombre: "Mobil Super 2000 10W-40", precio: 0 },
  { id: 106, image: "img/aceites/106_shell-helix-hx5-20w-50.jpg", categoria: "Aceite carro", nombre: "Shell Helix HX5 20W-50", precio: 0 },
  { id: 107, image: "img/aceites/107_castrol-gtx-20w-50.jpg", categoria: "Aceite carro", nombre: "Castrol GTX 20W-50", precio: 0 },
  { id: 108, image: "img/aceites/108_havoline-prods-5w-30.jpg", categoria: "Aceite carro", nombre: "Havoline ProDS 5W-30", precio: 0 },
  { id: 109, image: "img/aceites/109_terpel-maxter-15w-40.jpg", categoria: "Aceite carro", nombre: "Terpel Maxter 15W-40", precio: 0 },

  { id: 110, image: "img/aceites/110_castrol-power1-20w-50-4t.jpg", categoria: "Aceite moto", nombre: "Castrol Power1 20W-50 4T", precio: 0 },
  { id: 111, image: "img/aceites/111_castrol-actevo-20w-50-4t.jpg", categoria: "Aceite moto", nombre: "Castrol Actevo 20W-50 4T", precio: 0 },
  { id: 112, image: "img/aceites/112_mobil-super-moto-20w-50-4t.jpg", categoria: "Aceite moto", nombre: "Mobil Super Moto 20W-50 4T", precio: 0 },
  { id: 113, image: "img/aceites/113_motul-7100-10w-40-4t.jpg", categoria: "Aceite moto", nombre: "Motul 7100 10W-40 4T", precio: 0 },
  { id: 114, image: "img/aceites/114_motul-5100-15w-50-4t.jpg", categoria: "Aceite moto", nombre: "Motul 5100 15W-50 4T", precio: 0 },
  { id: 115, image: "img/aceites/115_terpel-celerity-20w-50-4t.jpg", categoria: "Aceite moto", nombre: "Terpel Celerity 20W-50 4T", precio: 0 },
  { id: 116, image: "img/aceites/116_shell-advance-ax7-10w-40-4t.jpg", categoria: "Aceite moto", nombre: "Shell Advance AX7 10W-40 4T", precio: 0 },
  { id: 117, image: "img/aceites/117_shell-advance-ax5-20w-50-4t.jpeg", categoria: "Aceite moto", nombre: "Shell Advance AX5 20W-50 4T", precio: 0 },
  { id: 118, image: "img/aceites/118_liqui-moly-street-10w-40-4t.jpg", categoria: "Aceite moto", nombre: "Liqui Moly Street 10W-40 4T", precio: 0 },
  { id: 119, image: "img/aceites/119_castrol-power1-10w-40-4t.jpg", categoria: "Aceite moto", nombre: "Castrol Power1 10W-40 4T", precio: 0 },
  { id: 120, image: "img/aceites/120_motul-7100-20w-50-4t.jpg", categoria: "Aceite moto", nombre: "Motul 7100 20W-50 4T", precio: 0 },
  { id: 121, image: "img/aceites/121_havoline-20w-50-sl-4t.jpg", categoria: "Aceite moto", nombre: "Havoline 20W-50 SL 4T", precio: 0 },
  { id: 122, image: "img/aceites/122_ipone-katana-10w-40-4t.jpg", categoria: "Aceite moto", nombre: "Ipone Katana 10W-40 4T", precio: 0 },

  { id: 123, image: "img/aceites/123_castrol-magnatec-5w-30.jpg", categoria: "Aceite carro", nombre: "Castrol Magnatec 5W-30", precio: 0 },
  { id: 124, image: "img/aceites/124_havoline-20w-50-1l.jpg", categoria: "Aceite carro", nombre: "Havoline 20W-50 1L", precio: 0 },
  { id: 125, image: "img/aceites/125_mobil-super-3000-xe-5w-30.jpg", categoria: "Aceite carro", nombre: "Mobil Super 3000 XE 5W-30", precio: 0 },

  /* Repuestos (motos y carros) — sin precio, consulta por WhatsApp */
  { id: 201, image: "", categoria: "Repuesto moto", nombre: "Kit de arrastre", precio: 0 },
  { id: 202, image: "", categoria: "Repuesto moto", nombre: "Pastillas de freno", precio: 0 },
  { id: 203, image: "", categoria: "Repuesto moto", nombre: "Bandas de freno", precio: 0 },
  { id: 204, image: "", categoria: "Repuesto moto", nombre: "Filtros de aire", precio: 0 },
  { id: 205, image: "", categoria: "Repuesto moto", nombre: "Filtros de aceite", precio: 0 },
  { id: 206, image: "", categoria: "Repuesto moto", nombre: "Bujías", precio: 0 },
  { id: 207, image: "", categoria: "Repuesto moto", nombre: "Baterías", precio: 0 },
  { id: 208, image: "", categoria: "Repuesto moto", nombre: "Bombillos y luces LED", precio: 0 },
  { id: 209, image: "", categoria: "Repuesto moto", nombre: "Cables de acelerador", precio: 0 },
  { id: 210, image: "", categoria: "Repuesto moto", nombre: "Cables de clutch", precio: 0 },
  { id: 211, image: "", categoria: "Repuesto moto", nombre: "Cables de freno", precio: 0 },
  { id: 212, image: "", categoria: "Repuesto moto", nombre: "Maniguetas", precio: 0 },
  { id: 213, image: "", categoria: "Repuesto moto", nombre: "Espejos", precio: 0 },
  { id: 214, image: "", categoria: "Repuesto moto", nombre: "Rodamientos", precio: 0 },
  { id: 215, image: "", categoria: "Repuesto moto", nombre: "Amortiguadores", precio: 0 },
  { id: 216, image: "", categoria: "Repuesto moto", nombre: "Guayas", precio: 0 },
  { id: 217, image: "", categoria: "Repuesto moto", nombre: "Direccionales", precio: 0 },
  { id: 218, image: "", categoria: "Repuesto moto", nombre: "Reguladores rectificadores", precio: 0 },
  { id: 219, image: "", categoria: "Repuesto moto", nombre: "CDI", precio: 0 },
  { id: 220, image: "", categoria: "Repuesto moto", nombre: "Relés", precio: 0 },
  { id: 221, image: "", categoria: "Repuesto moto", nombre: "Fusibles", precio: 0 },
  { id: 222, image: "", categoria: "Repuesto moto", nombre: "Empaques", precio: 0 },
  { id: 223, image: "", categoria: "Repuesto moto", nombre: "Carburadores", precio: 0 },
  { id: 224, image: "", categoria: "Repuesto moto", nombre: "Cables de bujía", precio: 0 },
  { id: 225, image: "", categoria: "Repuesto moto", nombre: "Tensores de cadena", precio: 0 },
  { id: 226, image: "", categoria: "Repuesto moto", nombre: "Piñones", precio: 0 },
  { id: 227, image: "", categoria: "Repuesto moto", nombre: "Coronas", precio: 0 },
  { id: 228, image: "", categoria: "Repuesto moto", nombre: "Filtros de gasolina", precio: 0 },
  { id: 229, image: "", categoria: "Repuesto moto", nombre: "Bombas de gasolina", precio: 0 },
  { id: 230, image: "", categoria: "Repuesto moto", nombre: "Termostatos", precio: 0 },
  { id: 231, image: "", categoria: "Repuesto moto", nombre: "Mangueras", precio: 0 },
  { id: 232, image: "", categoria: "Repuesto moto", nombre: "Tanques de gasolina", precio: 0 },
  { id: 233, image: "", categoria: "Repuesto moto", nombre: "Asientos", precio: 0 },
  { id: 234, image: "", categoria: "Repuesto moto", nombre: "Carcasas y plásticos", precio: 0 },
  { id: 235, image: "", categoria: "Repuesto moto", nombre: "Llantas", precio: 0 },
  { id: 236, image: "", categoria: "Repuesto moto", nombre: "Rines", precio: 0 },
  { id: 237, image: "", categoria: "Repuesto moto", nombre: "Cadenas de distribución", precio: 0 },
  { id: 238, image: "", categoria: "Repuesto moto", nombre: "Válvulas", precio: 0 },
  { id: 239, image: "", categoria: "Repuesto moto", nombre: "Juntas de culata", precio: 0 },
  { id: 240, image: "", categoria: "Repuesto moto", nombre: "Bomba de agua", precio: 0 },
  { id: 241, image: "", categoria: "Repuesto moto", nombre: "Faro delantero", precio: 0 },
  { id: 242, image: "", categoria: "Repuesto moto", nombre: "Stop", precio: 0 },
  { id: 243, image: "", categoria: "Repuesto moto", nombre: "Porta placas", precio: 0 },
  { id: 244, image: "", categoria: "Repuesto moto", nombre: "Guardabarros", precio: 0 },
  { id: 245, image: "", categoria: "Repuesto moto", nombre: "Gomas de manubrio", precio: 0 },
  { id: 246, image: "", categoria: "Repuesto moto", nombre: "Pedales", precio: 0 },
  { id: 247, image: "", categoria: "Repuesto moto", nombre: "Tapa de válvulas", precio: 0 },
  { id: 248, image: "", categoria: "Repuesto moto", nombre: "Tornillería", precio: 0 },
  { id: 249, image: "", categoria: "Repuesto moto", nombre: "Baterías de repuesto", precio: 0 },
  { id: 250, image: "", categoria: "Repuesto moto", nombre: "Accesorios varios", precio: 0 },
  { id: 251, image: "", categoria: "Repuesto carro", nombre: "Filtros de aceite", precio: 0 },
  { id: 252, image: "", categoria: "Repuesto carro", nombre: "Filtros de aire", precio: 0 },
  { id: 253, image: "", categoria: "Repuesto carro", nombre: "Filtros de gasolina", precio: 0 },
  { id: 254, image: "", categoria: "Repuesto carro", nombre: "Pastillas de freno", precio: 0 },
  { id: 255, image: "", categoria: "Repuesto carro", nombre: "Discos de freno", precio: 0 },
  { id: 256, image: "", categoria: "Repuesto carro", nombre: "Bujías", precio: 0 },
  { id: 257, image: "", categoria: "Repuesto carro", nombre: "Bobinas", precio: 0 },
  { id: 258, image: "", categoria: "Repuesto carro", nombre: "Baterías", precio: 0 },
  { id: 259, image: "", categoria: "Repuesto carro", nombre: "Amortiguadores", precio: 0 },
  { id: 260, image: "", categoria: "Repuesto carro", nombre: "Terminales de dirección", precio: 0 },
  { id: 261, image: "", categoria: "Repuesto carro", nombre: "Rótulas", precio: 0 },
  { id: 262, image: "", categoria: "Repuesto carro", nombre: "Bieletas", precio: 0 },
  { id: 263, image: "", categoria: "Repuesto carro", nombre: "Rodamientos", precio: 0 },
  { id: 264, image: "", categoria: "Repuesto carro", nombre: "Correas", precio: 0 },
  { id: 265, image: "", categoria: "Repuesto carro", nombre: "Tensores", precio: 0 },
  { id: 266, image: "", categoria: "Repuesto carro", nombre: "Bombillos", precio: 0 },
  { id: 267, image: "", categoria: "Repuesto carro", nombre: "Sensores", precio: 0 },
  { id: 268, image: "", categoria: "Repuesto carro", nombre: "Termostatos", precio: 0 },
  { id: 269, image: "", categoria: "Repuesto carro", nombre: "Mangueras de refrigeración", precio: 0 },
  { id: 270, image: "", categoria: "Repuesto carro", nombre: "Limpiaparabrisas", precio: 0 },
  { id: 271, image: "", categoria: "Repuesto carro", nombre: "Pastillas de embrague", precio: 0 },
  { id: 272, image: "", categoria: "Repuesto carro", nombre: "Kit de embrague", precio: 0 },
  { id: 273, image: "", categoria: "Repuesto carro", nombre: "Volante de motor", precio: 0 },
  { id: 274, image: "", categoria: "Repuesto carro", nombre: "Caja de cambios", precio: 0 },
  { id: 275, image: "", categoria: "Repuesto carro", nombre: "Soportes de motor", precio: 0 },
  { id: 276, image: "", categoria: "Repuesto carro", nombre: "Soportes de caja", precio: 0 },
  { id: 277, image: "", categoria: "Repuesto carro", nombre: "Radiador", precio: 0 },
  { id: 278, image: "", categoria: "Repuesto carro", nombre: "Ventilador", precio: 0 },
  { id: 279, image: "", categoria: "Repuesto carro", nombre: "Compresor de A C", precio: 0 },
  { id: 280, image: "", categoria: "Repuesto carro", nombre: "Condensador de A C", precio: 0 },
  { id: 281, image: "", categoria: "Repuesto carro", nombre: "Alternador", precio: 0 },
  { id: 282, image: "", categoria: "Repuesto carro", nombre: "Motor de arranque", precio: 0 },
  { id: 283, image: "", categoria: "Repuesto carro", nombre: "Tanque de expansión", precio: 0 },
  { id: 284, image: "", categoria: "Repuesto carro", nombre: "Tapa de radiador", precio: 0 },
  { id: 285, image: "", categoria: "Repuesto carro", nombre: "Mangueras de freno", precio: 0 },
  { id: 286, image: "", categoria: "Repuesto carro", nombre: "Cables de freno de mano", precio: 0 },
  { id: 287, image: "", categoria: "Repuesto carro", nombre: "Faros", precio: 0 },
  { id: 288, image: "", categoria: "Repuesto carro", nombre: "Stop", precio: 0 },
  { id: 289, image: "", categoria: "Repuesto carro", nombre: "Espejos", precio: 0 },
  { id: 290, image: "", categoria: "Repuesto carro", nombre: "Sensor MAP", precio: 0 }
];

const DEFAULT_TESTIMONIALS = [
  { id: 1, nombre: "Carlos Martínez", texto: "Excelente servicio y muy buena atención." },
  { id: 2, nombre: "Andrea Gómez", texto: "Mi moto quedó funcionando perfectamente." },
  { id: 3, nombre: "Juan David R.", texto: "Encontré lubricantes y repuestos originales para mi carro, muy buenos precios." }
];

const SERVICES = [
  { icon: "moto", titulo: "Reparación de Motos", texto: "Diagnóstico, mantenimiento y reparación de motos." },
  { icon: "carro", titulo: "Reparación de Carros", texto: "Servicio mecánico y mantenimiento para diferentes tipos de vehículos." },
  { icon: "preventivo", titulo: "Mantenimiento Preventivo", texto: "Cambio de aceite, filtros, revisión general y mantenimiento." },
  { icon: "diagnostico", titulo: "Diagnóstico Mecánico", texto: "Revisión profesional para detectar fallas y prevenir daños mayores." },
  { icon: "electrico", titulo: "Servicio Eléctrico", texto: "Diagnóstico y reparación de sistemas eléctricos y electrónicos." },
  { icon: "aceites", titulo: "Aceites y Lubricantes", texto: "Venta de aceites de motor, filtros y lubricantes originales." }
];

const REASONS = [
  "Atención personalizada",
  "Servicio confiable",
  "Personal especializado",
  "Soluciones rápidas"
];

/* ---------- Iconos SVG ---------- */
const ICONS = {
  moto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="18" r="2.5"/><circle cx="18.5" cy="18" r="2.5"/><path d="M5.5 18H12l3-8 5 1"/><path d="M12 10H7.5L5.5 18M15 10l-3 8"/><path d="M3 10h3.5"/></svg>',
  carro: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16 5 10a2 2 0 0 1 2-1.5h10A2 2 0 0 1 19 10l1 6"/><path d="M3 16h18v3H3z"/><circle cx="7.5" cy="16" r="1.2"/><circle cx="16.5" cy="16" r="1.2"/></svg>',
  preventivo: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4.5 4.5 0 1 0-6.2 6.4l4.6 4.6a1.6 1.6 0 0 0 2.2-2.2l-4.6-4.6a4.5 4.5 0 0 0 4-4.2z"/><path d="m14.7 6.3 2-2"/><path d="m13.5 8.9 2-2"/><path d="m9.7 12.7-5.2 5.2a1.6 1.6 0 0 0 2.2 2.2l5.2-5.2"/></svg>',
  diagnostico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 8v8l7 5 7-5V8z"/><path d="m9.5 12 1.8 1.8L15 10.5"/></svg>',
  electrico: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z"/></svg>',
  aceites: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5s6 6.2 6 10.5a6 6 0 0 1-12 0C6 8.7 12 2.5 12 2.5z"/><path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5"/></svg>'
};

/* ---------- Estado (localStorage) ---------- */
const LS = {
  repuestos: "kzuki_repuestos_v2",
  repuestosDeleted: "kzuki_repuestos_deleted_v1",
  testimonials: "kzuki_testimonials_v1",
  config: "kzuki_config_v1"
};

function loadLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw);
  } catch (e) {
    return fallback;
  }
}

function saveLS(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) { /* storage no disponible */ }
}

const LEGACY_REPUESTOS = [1, 2, 3, 4, 5, 6];
const DEFAULT_IDS = DEFAULT_REPUESTOS.map((r) => r.id);

/* Conversión de fotos de aceites (PNG -> JPG optimizadas): corrige rutas viejas guardadas */
const ACEITES_PNG_A_JPG = {
  "img/aceites/101_shell-helix-ultra-5w-30.png": "img/aceites/101_shell-helix-ultra-5w-30.jpg",
  "img/aceites/103_shell-helix-hx7-10w-40.png": "img/aceites/103_shell-helix-hx7-10w-40.jpg",
  "img/aceites/108_havoline-prods-5w-30.png": "img/aceites/108_havoline-prods-5w-30.jpg",
  "img/aceites/113_motul-7100-10w-40-4t.png": "img/aceites/113_motul-7100-10w-40-4t.jpg",
  "img/aceites/118_liqui-moly-street-10w-40-4t.png": "img/aceites/118_liqui-moly-street-10w-40-4t.jpg"
};

let deletedRepuestos = loadLS(LS.repuestosDeleted, []);
if (!Array.isArray(deletedRepuestos)) deletedRepuestos = [];

/* Los defaults aportan los productos nuevos; lo guardado aporta ediciones del admin */
let repuestos = DEFAULT_REPUESTOS.filter((r) => !deletedRepuestos.includes(r.id));
const storedRepuestos = loadLS(LS.repuestos, null);
if (Array.isArray(storedRepuestos)) {
  const merged = new Map(repuestos.map((r) => [r.id, r]));
  storedRepuestos.forEach((r) => {
    if (!r || LEGACY_REPUESTOS.includes(r.id) || deletedRepuestos.includes(r.id)) return;
    if (typeof r.image === "string" && ACEITES_PNG_A_JPG[r.image]) r.image = ACEITES_PNG_A_JPG[r.image];
    if (DEFAULT_IDS.includes(r.id)) merged.set(r.id, Object.assign({}, merged.get(r.id), r));
    else merged.set(r.id, r);
  });
  repuestos = Array.from(merged.values());
}
repuestos = repuestos.filter((r) => r && !LEGACY_REPUESTOS.includes(r.id));
/* Fotos de repuestos retiradas del catálogo: limpia rutas viejas guardadas */
repuestos.forEach((r) => {
  if (typeof r.image === "string" && r.image.indexOf("img/repuestos/") === 0) r.image = "";
});
saveLS(LS.repuestos, repuestos);
let testimonials = loadLS(LS.testimonials, DEFAULT_TESTIMONIALS);
let config = Object.assign({}, DEFAULT_CONFIG, loadLS(LS.config, null) || {});

/* ---------- Utilidades ---------- */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function waLink(message) {
  let num = String(config.whatsapp || "").replace(/\D/g, "");
  if (!num) num = "573008131531";
  return "https://wa.me/" + num + "?text=" + encodeURIComponent(message);
}

const defaultMsg = "Hola KZUKI Motos y Carros, quiero información sobre sus servicios.";

function money(n) {
  return "$ " + Number(n).toLocaleString("es-CO");
}

/* ---------- Animaciones al hacer scroll ---------- */
let revealObserver = null;
function setupReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

/* ---------- Render: servicios ---------- */
function renderServices() {
  $("#servicesGrid").innerHTML = SERVICES.map((s) =>
    '<article class="service-card reveal">' +
      '<span class="service-icon">' + ICONS[s.icon] + "</span>" +
      "<h3>" + s.titulo + "</h3>" +
      "<p>" + s.texto + "</p>" +
      '<a class="service-link" href="#contacto">Solicitar →</a>' +
    "</article>"
  ).join("");
}

/* ---------- Render: por qué elegirnos ---------- */
function renderReasons() {
  $("#reasonsGrid").innerHTML = REASONS.map((r) =>
    '<article class="reason-card reveal">' +
      '<span class="reason-icon">✓</span>' +
      "<h3>" + r + "</h3>" +
    "</article>"
  ).join("");
}

/* ---------- Render: repuestos (tienda) ---------- */
const PH_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="44" height="44" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>';

function mediaBox(r, alt) {
  if (r.image) return '<img src="' + r.image + '" alt="' + alt + '" loading="lazy">';
  return '<div class="ph-box">' + PH_SVG + "</div>";
}

function renderRepuestos() {
  const grid = $("#repuestosGrid");
  if (!repuestos.length) {
    grid.innerHTML = '<p class="section-sub center">Próximamente tendremos repuestos disponibles. Consúltanos por WhatsApp.</p>';
    return;
  }
  grid.innerHTML = repuestos.map((r) => {
    const sinPrecio = !(Number(r.precio) > 0);
    const precioHtml = sinPrecio ? "" :
      '<div class="vehicle-price">' +
        "<small>Precio</small>" +
        "<strong>" + money(r.precio) + "</strong>" +
      "</div>";
    const accion = sinPrecio
      ? '<a href="' + waLink("Hola KZUKI Motos y Carros, quiero información sobre este aceite/repuesto: " + r.nombre) + '" target="_blank" rel="noopener" class="btn btn-green">' + WA_SVG + "Consultar por WhatsApp</a>"
      : '<button type="button" class="btn btn-red" data-open-checkout data-id="' + r.id + '">Comprar ahora</button>';
    return '<article class="vehicle-card is-shop reveal">' +
      '<div class="vehicle-img">' +
        mediaBox(r, r.nombre + " — repuesto en KZUKI") +
        '<span class="vehicle-type">' + r.categoria + "</span>" +
      "</div>" +
      '<div class="vehicle-body">' +
        "<h3>" + r.nombre + "</h3>" +
        precioHtml +
        '<div class="vehicle-actions">' + accion + "</div>" +
      "</div>" +
    "</article>";
  }).join("");
}

/* ---------- Checkout / Pasarela de pagos ---------- */
let checkoutCtx = null;

function checkoutItem() {
  return repuestos.find((r) => r.id === checkoutCtx.id);
}

function renderPayMethods() {
  const wrap = $("#ckMethods");
  let html = "";
  const mk = (v, name, desc) =>
    '<label class="pay-method" data-method="' + v + '">' +
      '<input type="radio" name="ck_pay" value="' + v + '"' + (html === "" ? " checked" : "") + ">" +
      '<span><span class="pm-name">' + name + '</span><span class="pm-desc">' + desc + "</span></span>" +
    "</label>";
  if (config.mercadopago) html += mk("mercadopago", "Mercado Pago", "Tarjeta, PSE o Nequi. Pago en línea.");
  if (config.paypal) html += mk("paypal", "PayPal", "Pago internacional con PayPal.");
  if (config.nequi) html += mk("nequi", "Nequi / DaviPlata", "Transferencia al " + config.nequi);
  html += mk("efectivo", "Pagar en el taller", "Efectivo o tarjeta al recoger / entregar.");
  wrap.innerHTML = html;
  const first = wrap.querySelector(".pay-method");
  if (first) first.classList.add("selected");
}

function selectedMethod() {
  const el = $("#ckMethods").querySelector("input[name='ck_pay']:checked");
  return el ? el.value : "efectivo";
}

function unitPrice() {
  const item = checkoutItem();
  return item ? Number(item.precio) || 0 : 0;
}

function qtyValue() {
  return Math.max(1, Number($("#ck_qty").value) || 1);
}

function updateCheckoutTotal() {
  const item = checkoutItem();
  if (!item) return;
  const unit = unitPrice();
  const qty = qtyValue();
  const total = unit * qty;
  const totalEl = $("#ckTotal");
  const btn = $("#ckPayBtn");
  const breakdown = $("#ckBreakdown");
  const qWord = qty === 1 ? "unidad" : "unidades";
  if (unit > 0) {
    totalEl.innerHTML = "<span>Total</span><strong>" + money(total) + "</strong>";
    btn.textContent = "Continuar";
    btn.dataset.auto = "total";
    if (breakdown) breakdown.textContent = qty + " " + qWord + " × " + money(unit);
  } else {
    totalEl.innerHTML = '<span>Total</span><strong class="pendiente">Valor a confirmar</strong>';
    btn.textContent = "Consultar precio";
    btn.dataset.auto = "pending";
    if (breakdown) breakdown.textContent = "";
  }
  updatePayBtnLabel();
}

function updatePayBtnLabel() {
  const m = selectedMethod();
  const unit = unitPrice();
  const total = unit * qtyValue();
  const btn = $("#ckPayBtn");
  if (m === "mercadopago" || m === "paypal") {
    btn.textContent = unit > 0 ? "Pagar " + money(total) + " ahora" : "Continuar";
  } else if (m === "nequi") {
    btn.textContent = "Confirmar pedido por WhatsApp";
  } else {
    btn.textContent = "Confirmar pedido por WhatsApp";
  }
}

function openCheckout(id) {
  checkoutCtx = { id };
  const item = repuestos.find((r) => r.id === id);
  if (!item) return;

  $("#checkoutTitle").textContent = "Compra de repuesto";
  $("#checkoutSummary").innerHTML =
    mediaBox(item, item.nombre) +
    "<div>" +
      "<h4>" + item.nombre + "</h4>" +
      '<div class="ck-meta">' +
        "<b>" + item.categoria + "</b> · " + (item.precio > 0 ? money(item.precio) : "Precio a consultar") +
      "</div>" +
    "</div>";

  $("#ckQtyGroup").style.display = "block";
  $("#ckQtyLabel").textContent = "Cantidad";
  $("#ck_qty").value = 1;
  $("#ck_qty").min = "1";
  $("#ck_name").value = "";
  $("#ck_phone").value = "";
  $("#ckNote").textContent = "";
  renderPayMethods();
  updateCheckoutTotal();

  $("#checkoutOverlay").classList.add("open");
  $("#checkoutOverlay").setAttribute("aria-hidden", "false");
}

function closeCheckout() {
  $("#checkoutOverlay").classList.remove("open");
  $("#checkoutOverlay").setAttribute("aria-hidden", "true");
  checkoutCtx = null;
}

function setupCheckout() {
  const overlay = $("#checkoutOverlay");

  document.addEventListener("click", (ev) => {
    const btn = ev.target.closest("[data-open-checkout]");
    if (btn) openCheckout(Number(btn.dataset.id));
  });

  $("#checkoutClose").addEventListener("click", closeCheckout);
  overlay.addEventListener("click", (ev) => { if (ev.target === overlay) closeCheckout(); });
  document.addEventListener("keydown", (ev) => { if (ev.key === "Escape") closeCheckout(); });

  $("#ckMethods").addEventListener("click", (ev) => {
    const label = ev.target.closest(".pay-method");
    if (!label) return;
    $("#ckMethods").querySelectorAll(".pay-method").forEach((l) => l.classList.remove("selected"));
    label.classList.add("selected");
    label.querySelector("input").checked = true;
    updateCheckoutTotal();
  });

  $("#ck_qty").addEventListener("input", () => { updateCheckoutTotal(); });

  $("#checkoutForm").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const item = checkoutItem();
    if (!item) return;
    if (!$("#ck_name").value.trim() || !$("#ck_phone").value.trim()) return;

    const method = selectedMethod();
    const unit = unitPrice();
    const qty = qtyValue();
    const total = unit * qty;
    const ref = "KZ-" + String(Math.floor(1000 + Math.random() * 9000));
    const name = item.nombre;
    const qWord = qty === 1 ? "unidad" : "unidades";

    const orderMsg =
      "¡Hola KZUKI Motos y Carros! 🛵🚗 Nuevo pedido:\n\n" +
      "📦 Referencia: " + ref + "\n" +
      "Producto: " + name + "\n" +
      "Cantidad: " + qty + " " + qWord + "\n" +
      "Total: " + (unit > 0 ? money(total) : "A confirmar") + "\n" +
      "Pago: " + method + "\n" +
      "Nombre: " + $("#ck_name").value.trim() + "\n" +
      "Teléfono: " + $("#ck_phone").value.trim() + "\n\n" +
      "¿Confirmas la disponibilidad?";

    if (method === "mercadopago" && config.mercadopago) {
      window.open(config.mercadopago, "_blank", "noopener");
      $("#ckNote").textContent = "Completa el pago en el enlace abierto y envíanos el comprobante por WhatsApp con la referencia " + ref + ".";
    } else if (method === "paypal" && config.paypal) {
      window.open(config.paypal + "/" + (unit > 0 ? total : ""), "_blank", "noopener");
      $("#ckNote").textContent = "Completa el pago en PayPal y envíanos el comprobante por WhatsApp con la referencia " + ref + ".";
    } else if (method === "nequi" && config.nequi) {
      $("#ckNote").textContent = "Transfiere " + (unit > 0 ? money(total) : "el valor acordado") + " al Nequi " + config.nequi + " (titular KZUKI Motos y Carros) y envía el comprobante por WhatsApp con la referencia " + ref + ".";
    } else {
      $("#ckNote").textContent = "Abriendo WhatsApp con tu pedido...";
    }

    window.open(waLink(orderMsg), "_blank", "noopener");
    $("#checkoutForm").reset();
    setTimeout(() => { $("#ckNote").textContent = ""; }, 12000);
  });
}

/* ---------- Render: testimonios ---------- */
function renderTestimonials() {
  const grid = $("#testimonialsGrid");
  if (!testimonials.length) {
    grid.innerHTML = '<p class="section-sub center">Pronto compartiremos las opiniones de nuestros clientes.</p>';
    return;
  }
  grid.innerHTML = testimonials.map((t) => {
    const iniciales = (t.nombre || "C")
      .split(" ").map((p) => p[0]).join("").toUpperCase().slice(0, 2);
    return '<article class="testimonial-card reveal">' +
      '<div class="t-stars">★★★★★</div>' +
      "<p class=\"t-text\">" + t.texto + "</p>" +
      '<div class="t-author">' +
        '<span class="t-avatar">' + iniciales + "</span>" +
        '<div><strong>' + t.nombre + "</strong><span>Cliente de KZUKI</span></div>" +
      "</div>" +
    "</article>";
  }).join("");
}

/* ---------- Render: datos de contacto ---------- */
function renderConfigUI() {
  $("#infoPhone").textContent = config.phone;
  $("#infoWhats").textContent = config.whatsapp;
  $("#infoAddress").textContent = config.address;
  $("#infoSchedule").textContent = config.schedule;
  $("#infoEmail").textContent = config.email;

  const contactBtn = $("#contactWaBtn");
  const floatBtn = $("#floatWa");
  [contactBtn, floatBtn].forEach((b) => {
    b.setAttribute("href", waLink(defaultMsg));
  });

  document.querySelectorAll("[data-social]").forEach((a) => {
    const type = a.getAttribute("data-social");
    const url = type === "whatsapp"
      ? waLink(defaultMsg)
      : (config[type] || "#");
    a.setAttribute("href", url);
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener");
  });

  renderMap();
}

function renderMap() {
  const wrap = $("#mapWrap");
  const ph = $("#mapPlaceholder");
  const embed = (config.mapEmbed || "").trim();

  const oldIframe = wrap.querySelector("iframe");
  if (oldIframe) oldIframe.remove();

  if (embed) {
    ph.style.display = "none";
    const iframe = document.createElement("iframe");
    if (embed.indexOf("<iframe") === 0) {
      const tmp = document.createElement("div");
      tmp.innerHTML = embed;
      const src = tmp.querySelector("iframe").src;
      iframe.src = src;
    } else {
      iframe.src = embed;
    }
    iframe.title = "Ubicación de KZUKI Motos y Carros";
    iframe.loading = "lazy";
    wrap.appendChild(iframe);
    const pin = $("#mapPin");
    if (pin) pin.style.display = "block";
  } else {
    ph.style.display = "flex";
    const pin = $("#mapPin");
    if (pin) pin.style.display = "none";
  }
}

/* ---------- Navegación por pestañas ---------- */
function showView(id) {
  const target = document.getElementById(id);
  if (!target || !target.classList.contains("view")) return;
  const group = target.dataset.view || id;
  $$(".view").forEach((sec) => {
    sec.classList.toggle("active", (sec.dataset.view || sec.id) === group);
  });
  $$(".nav-link").forEach((link) => {
    const t = document.querySelector(link.getAttribute("href"));
    link.classList.toggle("active", !!t && (t.dataset.view || t.id) === group);
  });
  window.scrollTo(0, 0);
  setupReveal();
}

/* ---------- Menú móvil ---------- */
function setupNav() {
  const nav = $("#navbar");
  const toggle = $("#navToggle");

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (ev) => {
    const a = ev.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute("href").slice(1);
    if (!id) return;
    const sec = document.getElementById(id);
    if (sec && sec.classList.contains("view")) {
      ev.preventDefault();
      showView(id);
    }
  });

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });

  $("#heroScroll").addEventListener("click", (ev) => {
    ev.preventDefault();
    showView("nosotros");
  });

  if (location.hash) {
    const id = location.hash.slice(1);
    const sec = document.getElementById(id);
    if (sec && sec.classList.contains("view")) showView(id);
  }
}

/* ---------- Formulario de contacto → WhatsApp ---------- */
function setupForm() {
  const form = $("#contactForm");
  const note = $("#formNote");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const msg =
      "Hola KZUKI Motos y Carros, quiero solicitar un servicio:\n\n" +
      "Nombre: " + $("#fname").value + "\n" +
      "Teléfono: " + $("#fphone").value + "\n" +
      "Servicio: " + $("#fservice").value + "\n" +
      "Mensaje: " + $("#fmsg").value;
    note.textContent = "Abriendo WhatsApp con tu solicitud...";
    const url = waLink(msg);
    let win = null;
    try { win = window.open(url, "_blank"); } catch (e) { win = null; }
    if (win && win.opener) win.opener = null;
    if (!win) window.location.href = url;
    form.reset();
    setTimeout(() => { note.textContent = ""; }, 8000);
  });
}

/* ---------- Panel de administración ---------- */
function setUpAdmin() {
  const overlay = $("#adminOverlay");
  const msg = (el, text, ok) => {
    el.textContent = text;
    el.className = "admin-msg " + (ok ? "ok" : "err");
    setTimeout(() => { el.textContent = ""; el.className = "admin-msg"; }, 4000);
  };

  $("#adminTrigger").addEventListener("click", () => {
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    fillConfigForm();
    renderAdminLists();
  });
  $("#adminClose").addEventListener("click", closeAdmin);
  overlay.addEventListener("click", (ev) => {
    if (ev.target === overlay) closeAdmin();
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") closeAdmin();
  });
  function closeAdmin() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    $("#repuestosForm").reset();
    $("#r_id").value = "";
    $("#repuestosFormTitle").textContent = "Agregar repuesto";
  }

  $$(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".tab-btn").forEach((b) => b.classList.remove("active"));
      $$(".tab-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      $("#tab-" + btn.dataset.tab).classList.add("active");
    });
  });

  /* --- Testimonios: agregar / eliminar --- */
  $("#testimonialForm").addEventListener("submit", (ev) => {
    ev.preventDefault();
    testimonials.push({
      id: Date.now() % 999999,
      nombre: $("#t_name").value.trim(),
      texto: $("#t_text").value.trim()
    });
    saveLS(LS.testimonials, testimonials);
    renderTestimonials();
    renderAdminLists();
    msg($("#testimonialsAdminMsg"), "Testimonio agregado correctamente.", true);
    $("#testimonialForm").reset();
    setupReveal();
  });

  $("#adminTestimonialsList").addEventListener("click", (ev) => {
    const btn = ev.target.closest("button");
    if (!btn || btn.dataset.action !== "delete") return;
    testimonials = testimonials.filter((t) => t.id !== Number(btn.dataset.id));
    saveLS(LS.testimonials, testimonials);
    renderTestimonials();
    renderAdminLists();
    msg($("#testimonialsAdminMsg"), "Testimonio eliminado.", true);
  });

  /* --- Repuestos: CRUD --- */
  const rForm = $("#repuestosForm");
  rForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const id = $("#r_id").value ? Number($("#r_id").value) : null;
    const data = {
      image: $("#r_img").value.trim(),
      categoria: $("#r_cat").value.trim(),
      nombre: $("#r_nombre").value.trim(),
      precio: Number($("#r_precio").value) || 0
    };
    if (id) {
      const item = repuestos.find((r) => r.id === id);
      if (item) Object.assign(item, data);
      msg($("#repuestosAdminMsg"), "Repuesto actualizado correctamente.", true);
    } else {
      data.id = Date.now() % 999999;
      repuestos.unshift(data);
      msg($("#repuestosAdminMsg"), "Repuesto agregado correctamente.", true);
    }
    saveLS(LS.repuestos, repuestos);
    renderRepuestos();
    renderAdminLists();
    rForm.reset();
    $("#r_id").value = "";
    $("#repuestosFormTitle").textContent = "Agregar repuesto";
    setupReveal();
  });

  $("#repuestosCancelEdit").addEventListener("click", () => {
    rForm.reset();
    $("#r_id").value = "";
    $("#repuestosFormTitle").textContent = "Agregar repuesto";
  });

  $("#adminRepuestosList").addEventListener("click", (ev) => {
    const btn = ev.target.closest("button");
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const r = repuestos.find((x) => x.id === id);
    if (!r) return;
    if (btn.dataset.action === "edit") {
      $("#r_id").value = r.id;
      $("#r_img").value = r.image;
      $("#r_cat").value = r.categoria;
      $("#r_nombre").value = r.nombre;
      $("#r_precio").value = r.precio;
      $("#repuestosFormTitle").textContent = "Editar repuesto";
      $("#r_img").scrollIntoView({ behavior: "smooth", block: "center" });
    } else if (btn.dataset.action === "delete") {
      repuestos = repuestos.filter((x) => x.id !== id);
      if (DEFAULT_IDS.includes(id) && !deletedRepuestos.includes(id)) deletedRepuestos.push(id);
      saveLS(LS.repuestos, repuestos);
      saveLS(LS.repuestosDeleted, deletedRepuestos);
      renderRepuestos();
      renderAdminLists();
      msg($("#repuestosAdminMsg"), "Repuesto eliminado.", true);
    }
  });

  /* --- Configuración --- */
  $("#configForm").addEventListener("submit", (ev) => {
    ev.preventDefault();
    config = {
      phone: $("#c_phone").value.trim(),
      whatsapp: $("#c_whatsapp").value.trim(),
      email: $("#c_email").value.trim(),
      address: $("#c_address").value.trim(),
      schedule: $("#c_schedule").value.trim(),
      facebook: $("#c_fb").value.trim(),
      instagram: $("#c_ig").value.trim(),
      tiktok: $("#c_tt").value.trim(),
      mercadopago: $("#c_mp").value.trim(),
      paypal: $("#c_paypal").value.trim(),
      nequi: $("#c_nequi").value.trim(),
      mapEmbed: $("#c_map").value.trim()
    };
    saveLS(LS.config, config);
    renderConfigUI();
    msg($("#configAdminMsg"), "Configuración guardada correctamente.", true);
  });

  $("#configRestore").addEventListener("click", () => {
    config = Object.assign({}, DEFAULT_CONFIG);
    saveLS(LS.config, config);
    renderConfigUI();
    fillConfigForm();
    msg($("#configAdminMsg"), "Se restauraron los valores por defecto.", true);
  });

  function fillConfigForm() {
    $("#c_phone").value = config.phone;
    $("#c_whatsapp").value = config.whatsapp;
    $("#c_email").value = config.email;
    $("#c_address").value = config.address;
    $("#c_schedule").value = config.schedule;
    $("#c_fb").value = config.facebook;
    $("#c_ig").value = config.instagram;
    $("#c_tt").value = config.tiktok;
    $("#c_mp").value = config.mercadopago;
    $("#c_paypal").value = config.paypal;
    $("#c_nequi").value = config.nequi;
    $("#c_map").value = config.mapEmbed;
  }

  function renderAdminLists() {
    const tl = $("#adminTestimonialsList");
    if (!testimonials.length) {
      tl.innerHTML = '<p class="admin-msg">No hay testimonios registrados.</p>';
    } else {
      tl.innerHTML = testimonials.map((t) =>
        '<div class="admin-item">' +
          '<div class="ai-info">' +
            "<strong>" + t.nombre + "</strong>" +
            "<span>" + t.texto + "</span>" +
          "</div>" +
          '<div class="ai-actions">' +
            '<button class="mini-btn danger" data-action="delete" data-id="' + t.id + '">Eliminar</button>' +
          "</div>" +
        "</div>"
      ).join("");
    }

    const rl = $("#adminRepuestosList");
    if (!repuestos.length) {
      rl.innerHTML = '<p class="admin-msg">No hay repuestos registrados.</p>';
    } else {
      rl.innerHTML = repuestos.map((r) =>
        '<div class="admin-item">' +
          mediaBox(r, "") +
          '<div class="ai-info">' +
            "<strong>" + r.nombre + "</strong>" +
            "<span>" + r.categoria + " · " + (r.precio > 0 ? money(r.precio) : "A consultar") + "</span>" +
          "</div>" +
          '<div class="ai-actions">' +
            '<button class="mini-btn" data-action="edit" data-id="' + r.id + '">Editar</button>' +
            '<button class="mini-btn danger" data-action="delete" data-id="' + r.id + '">Eliminar</button>' +
          "</div>" +
        "</div>"
      ).join("");
    }
  }
}

/* ---------- Inicio ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderServices();
  renderReasons();
  renderRepuestos();
  renderTestimonials();
  renderConfigUI();
  setupNav();
  setupForm();
  setupCheckout();
  setUpAdmin();
  setupReveal();
});