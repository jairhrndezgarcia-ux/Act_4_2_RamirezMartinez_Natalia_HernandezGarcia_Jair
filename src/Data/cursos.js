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
 * Anuncios de ejemplo que los profesores publican en el muro de cada curso.
 * Las tareas del muro salen de src/Data/tareas.js (las que tienen el mismo cursoId).
 * @type {{ id: number, fecha: string, texto: string, imagenes: number }[]}
 */
export const anuncios = [
  {
    id: 1,
    fecha: '18 nov 2026, 12:30',
    texto:
      'Recuerden que el próximo lunes es el examen del tercer parcial. Revisen los ejercicios de las unidades 4 y 5 y traigan su calculadora. Les comparto las diapositivas de repaso.',
    imagenes: 2,
  },
  {
    id: 2,
    fecha: '5 nov 2026, 16:45',
    texto:
      'Ya están publicadas las calificaciones del segundo parcial. Si tienen dudas sobre su revisión, pueden pasar a asesoría el jueves de 12:00 a 14:00.',
    imagenes: 2,
  },
];
