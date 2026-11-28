/**
 * Tareas de ejemplo del alumno.
 * - `estado`: 'pendiente' (aún se puede entregar), 'vencida' (pasó la fecha sin entregar)
 *   o 'completada' (ya entregada).
 * - `fecha`: fecha de cierre en formato AAAA-MM-DD.
 * - `puntos`: calificación obtenida (null si aún no se califica) sobre `total`.
 * @type {{
 *   id: string, titulo: string, cursoId: string, estado: 'pendiente'|'vencida'|'completada',
 *   fecha: string, hora: string, publicada: string, puntos: number|null, total: number,
 *   descripcion: string, materiales: string[]
 * }[]}
 */
export const tareas = [
  {
    id: 'reporte-practica-4',
    titulo: 'Reporte de práctica 4',
    cursoId: 'algoritmos',
    estado: 'pendiente',
    fecha: '2026-11-27',
    hora: '23:59',
    publicada: '20 nov 2026, 9:00',
    puntos: null,
    total: 100,
    descripcion:
      'Implementa los algoritmos de ordenamiento vistos en clase (merge sort y quick sort), mide su tiempo de ejecución con arreglos de 1,000 a 100,000 elementos y entrega un reporte con tus gráficas y conclusiones.',
    materiales: ['practica-4.pdf', 'plantilla-reporte.docx'],
  },
  {
    id: 'cuestionario-unidad-5',
    titulo: 'Cuestionario unidad 5',
    cursoId: 'matematicas',
    estado: 'pendiente',
    fecha: '2026-11-28',
    hora: '23:59',
    publicada: '15 nov 2026, 8:00',
    puntos: null,
    total: 50,
    descripcion: 'Resuelve los 10 ejercicios de integrales múltiples del cuestionario. Incluye el procedimiento completo de cada uno.',
    materiales: ['cuestionario-u5.pdf'],
  },
  {
    id: 'ensayo-investigacion',
    titulo: 'Ensayo de investigación',
    cursoId: 'ingles-v',
    estado: 'pendiente',
    fecha: '2026-12-02',
    hora: '23:59',
    publicada: '10 nov 2026, 10:15',
    puntos: null,
    total: 100,
    descripcion: 'Write a 500-word essay about a recent technological advance and its impact on society. Use at least three references.',
    materiales: ['rubrica-ensayo.pdf'],
  },
  {
    id: 'laboratorio-3',
    titulo: 'Laboratorio 3: titulación',
    cursoId: 'quimica-i',
    estado: 'vencida',
    fecha: '2026-11-14',
    hora: '18:00',
    publicada: '7 nov 2026, 12:00',
    puntos: 0,
    total: 100,
    descripcion: 'Entrega el reporte de la práctica de titulación ácido-base con tus cálculos de concentración.',
    materiales: ['practica-titulacion.pdf', 'tabla-resultados.png'],
  },
  {
    id: 'problemas-ciclo-carnot',
    titulo: 'Problemas del ciclo de Carnot',
    cursoId: 'termodinamica',
    estado: 'completada',
    fecha: '2026-11-12',
    hora: '23:59',
    publicada: '5 nov 2026, 9:30',
    puntos: 95,
    total: 100,
    descripcion: 'Resuelve los problemas 4.1 a 4.8 del libro de texto sobre eficiencia del ciclo de Carnot.',
    materiales: ['problemas-carnot.pdf'],
  },
  {
    id: 'proyecto-parcial-2',
    titulo: 'Proyecto del segundo parcial',
    cursoId: 'algoritmos',
    estado: 'completada',
    fecha: '2026-10-30',
    hora: '23:59',
    publicada: '15 oct 2026, 8:00',
    puntos: 100,
    total: 100,
    descripcion: 'Implementa un árbol AVL con operaciones de inserción, borrado y búsqueda, y documenta su complejidad.',
    materiales: ['proyecto-p2.pdf'],
  },
];

/** Filtros de la lista de tareas (Figma: "Tareas / Navegación"). */
export const filtrosTareas = [
  { id: 'pendiente', etiqueta: 'Pendientes' },
  { id: 'vencida', etiqueta: 'Vencidas' },
  { id: 'completada', etiqueta: 'Completadas' },
];

/**
 * Convierte una fecha AAAA-MM-DD en texto, p. ej. { fecha: '27 de noviembre', dia: 'viernes' }.
 * @param {string} iso
 */
export function formatearFecha(iso) {
  const fecha = new Date(`${iso}T00:00`);
  return {
    fecha: fecha.toLocaleDateString('es-MX', { day: 'numeric', month: 'long' }),
    dia: fecha.toLocaleDateString('es-MX', { weekday: 'long' }),
  };
}
