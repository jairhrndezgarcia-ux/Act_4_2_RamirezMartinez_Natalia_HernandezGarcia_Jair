import { Link } from 'react-router';
import { Icono } from '../../../components/ui/Icono';

/**
 * Ficha de una tarea en la lista de tareas (Figma: "Ficha de tarea" y "Tareas / Cuerpo de tarea").
 * Muestra la fecha de cierre, el título, el curso y el puntaje, y lleva al detalle de la tarea.
 *
 * @param {Object} props
 * @param {string} props.ruta - Ruta del detalle de la tarea.
 * @param {string} props.fecha - Fecha de cierre ya formateada (p. ej. "27 de noviembre").
 * @param {string} props.dia - Día de la semana de la fecha de cierre.
 * @param {string} props.titulo - Título de la tarea.
 * @param {string} props.curso - Nombre del curso.
 * @param {number|null} props.puntos - Puntos obtenidos (null si aún no se califica).
 * @param {number} props.total - Puntos posibles.
 */
export function FichaTarea({ ruta, fecha, dia, titulo, curso, puntos, total }) {
  return (
    <Link
      to={ruta}
      className="flex w-full flex-col gap-3.75 rounded-[10px] bg-blanco-fondo px-2.5 pt-1.25 pb-2.5 hover:bg-gris-claro/50 dark:bg-negro-fondo dark:hover:bg-negro-primario"
    >
      <span className="flex items-end gap-2.25 whitespace-nowrap">
        <span className="text-xs text-negro-fondo dark:text-gris-claro">{fecha}</span>
        <span className="text-[10px] text-gris-oscuro dark:text-gris-primario">{dia}</span>
      </span>
      <span className="flex items-center justify-between gap-4 rounded-[5px] bg-gris-claro px-1.25 text-xs text-negro-fondo dark:bg-gris-oscuro dark:text-blanco-primario">
        <span className="flex min-w-0 items-center">
          <Icono nombre="tarea-lista" className="size-12" />
          <span className="flex min-w-0 flex-col gap-2">
            <span>{titulo}</span>
            <span className="underline">{curso}</span>
          </span>
        </span>
        <span className="shrink-0 whitespace-nowrap">
          {puntos ?? '—'}/{total} puntos
        </span>
      </span>
    </Link>
  );
}
