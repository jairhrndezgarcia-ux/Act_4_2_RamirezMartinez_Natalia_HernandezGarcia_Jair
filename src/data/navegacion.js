/**
 * Enlaces del menú principal (barra superior y menú móvil).
 * @type {{ id: string, etiqueta: string, ruta: string }[]}
 */
export const enlacesPrincipales = [
  { id: 'inicio', etiqueta: 'Inicio', ruta: '/' },
  { id: 'oferta', etiqueta: 'Oferta Educativa', ruta: '/oferta-educativa' },
  { id: 'universidad', etiqueta: 'Universidad', ruta: '/universidad' },
  { id: 'investigacion', etiqueta: 'Investigación', ruta: '/investigacion' },
  { id: 'info', etiqueta: 'Información Académica', ruta: '/info-academica' },
];

/**
 * Enlaces del pie de página, cada uno con su ícono.
 * @type {{ id: string, etiqueta: string, ruta: string, icono: string }[]}
 */
export const enlacesPie = [
  { id: 'info', etiqueta: 'Información Académica', ruta: '/info-academica', icono: 'horario' },
  { id: 'oferta', etiqueta: 'Oferta Educativa', ruta: '/oferta-educativa', icono: 'lupa' },
  { id: 'universidad', etiqueta: 'Universidad', ruta: '/universidad', icono: 'calificaciones' },
  { id: 'investigacion', etiqueta: 'Investigación', ruta: '/investigacion', icono: 'informacion' },
];

/** Datos de contacto mostrados en el pie de página. */
export const contacto = [
  'Universidad Autónoma Los Búhos',
  'Sebastián Lerdo de Tejada. CP 78436',
  'San Luis Potosí, SLP',
  '444 145 89 45',
  '©2026 Todos los derechos reservados',
];
