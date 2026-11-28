import { Link } from 'react-router';
import { Icono } from '../ui/Icono';

/**
 * Barra superior de la página de un curso (Figma: "Cursos / Menú"):
 * flecha para regresar y el nombre del curso.
 *
 * @param {Object} props
 * @param {string} props.nombre - Nombre del curso (se muestra en mayúsculas).
 * @param {string} [props.rutaRegreso] - A dónde lleva la flecha (por defecto, la lista de cursos).
 */
export function EncabezadoCurso({ nombre, rutaRegreso = '/cursos' }) {
  return (
    <div className="flex h-13 items-center gap-7.5 bg-blanco-primario py-2.5 pr-2.5 pl-3.75 dark:bg-gris-oscuro">
      <Link to={rutaRegreso} aria-label="Regresar a mis cursos" className="shrink-0">
        <Icono nombre="flecha-atras" className="size-8" />
      </Link>
      <div className="flex min-w-0 items-center gap-1.5">
        <Icono nombre="foto" className="size-8" />
        <h1 className="truncate font-mono text-xl font-bold text-negro-fondo uppercase dark:text-blanco-primario">
          {nombre}
        </h1>
      </div>
    </div>
  );
}
