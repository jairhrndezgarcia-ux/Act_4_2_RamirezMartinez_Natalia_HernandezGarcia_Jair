/**
 * Datos de ejemplo del alumno que inició sesión (tomados del Figma).
 * @type {{ claveUniversitaria: string, claveFacultad: string, nombre: string, carrera: string, asesor: string, semestre: string }}
 */
export const alumno = {
  claveUniversitaria: '0783421',
  claveFacultad: '202202300200',
  nombre: 'Fernando Alejandro Gomez Torrez',
  carrera: 'Ingenieria en mecatronica',
  asesor: 'Hector Alberto Jimenez Castillo',
  semestre: '2026-B',
};

/**
 * Secciones académicas del alumno. Se usan en los botones de Información Académica
 * y en las pestañas de Horario, Calificaciones, Cursos y Tareas.
 * @type {{ id: string, etiqueta: string, ruta: string, icono: string }[]}
 */
export const seccionesAcademicas = [
  { id: 'horario', etiqueta: 'Ver Horario', ruta: '/horario', icono: 'horario' },
  { id: 'calificaciones', etiqueta: 'Calificaciones', ruta: '/calificaciones', icono: 'calificaciones' },
  { id: 'cursos', etiqueta: 'Cursos', ruta: '/cursos', icono: 'curso' },
  { id: 'tareas', etiqueta: 'Tareas', ruta: '/tareas', icono: 'tareas' },
];
