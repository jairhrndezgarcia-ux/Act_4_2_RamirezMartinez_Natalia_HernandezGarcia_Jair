/**
 * Cursos de ejemplo del alumno.
 * @type {{ id: string, nombre: string, profesor: string }[]}
 */
export const cursos = [
  { id: 'algoritmos', nombre: 'Algoritmos y Complejidad Avanzada', profesor: 'Camila Ortiz Mendoza' },
  { id: 'ingles-v', nombre: 'Inglés V', profesor: 'Valeria Sofía Herrera Blanco' },
  { id: 'matematicas', nombre: 'Matemáticas Avanzadas', profesor: 'Valentina Reyes Navarro' },
  { id: 'quimica-i', nombre: 'Química I', profesor: 'Santiago Miguel Vargas Torres' },
  { id: 'termodinamica', nombre: 'Termodinámica', profesor: 'Héctor Alberto Jiménez Castillo' },
  { id: 'programacion', nombre: 'Programación', profesor: 'Camila Ortiz Mendoza' },
  { id: 'ciberseguridad', nombre: 'Ciberseguridad', profesor: 'Leonardo Andrés Guzmán Silva' },
  { id: 'laboratorio', nombre: 'Laboratorio de Física', profesor: 'Santiago Miguel Vargas Torres' },
];

/**
 * Publicaciones de ejemplo que se muestran en el muro de cada curso.
 * - `tipo: 'tarea'`: una tarea asignada, con título y fecha de cierre.
 * - `tipo: 'anuncio'`: un aviso del profesor con texto y, opcionalmente, imágenes.
 * @type {Array<
 *   { id: number, tipo: 'tarea', fecha: string, titulo: string, cierre: string } |
 *   { id: number, tipo: 'anuncio', fecha: string, texto: string, imagenes: number }
 * >}
 */
export const publicacionesDeEjemplo = [
  { id: 1, tipo: 'tarea', fecha: '20 nov 2026, 9:00', titulo: 'Reporte de práctica 4', cierre: 'Cierra el 27 nov, 23:59' },
  {
    id: 2,
    tipo: 'anuncio',
    fecha: '18 nov 2026, 12:30',
    texto:
      'Recuerden que el próximo lunes es el examen del tercer parcial. Revisen los ejercicios de las unidades 4 y 5 y traigan su calculadora. Les comparto las diapositivas de repaso.',
    imagenes: 2,
  },
  { id: 3, tipo: 'tarea', fecha: '15 nov 2026, 8:00', titulo: 'Cuestionario unidad 5', cierre: 'Cierra el 22 nov, 23:59' },
  { id: 4, tipo: 'tarea', fecha: '10 nov 2026, 10:15', titulo: 'Ensayo de investigación', cierre: 'Cierra el 17 nov, 23:59' },
  {
    id: 5,
    tipo: 'anuncio',
    fecha: '5 nov 2026, 16:45',
    texto:
      'Ya están publicadas las calificaciones del segundo parcial. Si tienen dudas sobre su revisión, pueden pasar a asesoría el jueves de 12:00 a 14:00.',
    imagenes: 2,
  },
];
