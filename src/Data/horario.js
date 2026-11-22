/** Días de la semana que aparecen como columnas del horario. */
export const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

/** Horas de inicio de cada bloque (filas del horario). */
export const horas = [
  '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00',
  '14:00', '15:00', '16:00', '17:00', '18:00', '19:00',
];

/**
 * Clases de ejemplo del alumno. Cada clase ocupa un bloque de una hora.
 * Las combinaciones de día y hora que no aparecen quedan como horas libres.
 * @type {{ dia: string, hora: string, materia: string }[]}
 */
export const clases = [
  { dia: 'Lunes', hora: '7:00', materia: 'Algoritmos' },
  { dia: 'Lunes', hora: '8:00', materia: 'Algoritmos' },
  { dia: 'Lunes', hora: '10:00', materia: 'Inglés V' },
  { dia: 'Lunes', hora: '12:00', materia: 'Química I' },
  { dia: 'Martes', hora: '9:00', materia: 'Matemáticas' },
  { dia: 'Martes', hora: '10:00', materia: 'Matemáticas' },
  { dia: 'Martes', hora: '13:00', materia: 'Termodinámica' },
  { dia: 'Miércoles', hora: '7:00', materia: 'Algoritmos' },
  { dia: 'Miércoles', hora: '10:00', materia: 'Inglés V' },
  { dia: 'Miércoles', hora: '12:00', materia: 'Química I' },
  { dia: 'Jueves', hora: '9:00', materia: 'Matemáticas' },
  { dia: 'Jueves', hora: '13:00', materia: 'Termodinámica' },
  { dia: 'Jueves', hora: '14:00', materia: 'Termodinámica' },
  { dia: 'Viernes', hora: '8:00', materia: 'Algoritmos' },
  { dia: 'Viernes', hora: '10:00', materia: 'Inglés V' },
  { dia: 'Viernes', hora: '11:00', materia: 'Química I' },
  { dia: 'Sábado', hora: '9:00', materia: 'Laboratorio' },
  { dia: 'Sábado', hora: '10:00', materia: 'Laboratorio' },
];
