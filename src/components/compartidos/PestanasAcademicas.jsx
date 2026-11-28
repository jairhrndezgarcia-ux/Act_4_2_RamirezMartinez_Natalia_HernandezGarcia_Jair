import { NavLink } from 'react-router';
import { Icono } from '../ui/Icono';

/**
 * Pestañas para moverse entre las secciones académicas (Horario, Calificaciones,
 * Cursos y Tareas). Figma: fila de "Botones / Principal" bajo la tarjeta del alumno.
 *
 * La pestaña de la página actual se marca con fondo gris y texto/ícono en gris
 * (usa el ícono "<nombre>-activo" si existe).
 * Tamaños: 30px de alto y texto de 14px en móvil/tablet; 80px y 24px en escritorio.
 *
 * @param {Object} props
 * @param {{ id: string, etiqueta: string, ruta: string, icono: string }[]} props.secciones
 */
export function PestanasAcademicas({ secciones }) {
  return (
    <nav aria-label="Secciones académicas" className="flex w-full flex-wrap items-center justify-center gap-1 lg:gap-3.75">
      {secciones.map((s) => (
        <NavLink
          key={s.id}
          to={s.ruta}
          className={({ isActive }) =>
            `flex h-7.5 shrink-0 items-center justify-center gap-1.5 pr-5.5 pl-3.5 text-sm whitespace-nowrap lg:h-20 lg:text-2xl ${
              isActive
                ? 'bg-gris-claro text-gris-texto dark:bg-gris-oscuro'
                : 'text-negro-primario hover:bg-gris-claro dark:text-blanco-primario dark:hover:bg-gris-oscuro'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Icono nombre={isActive ? `${s.icono}-activo` : s.icono} respaldo={s.icono} />
              {s.etiqueta}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
