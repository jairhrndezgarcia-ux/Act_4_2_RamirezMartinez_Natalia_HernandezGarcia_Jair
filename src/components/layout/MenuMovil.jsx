import { useCallback, useRef, useState } from 'react';
import { NavLink } from 'react-router';
import { useClicFuera } from '../../hooks/useClicFuera';
import { Icono } from '../ui/Icono';

/**
 * Botón hamburguesa y menú desplegable para móvil (Figma: "Botones / Menú móvil"
 * y "Menu desplegable"). Se cierra al elegir una opción, al hacer clic fuera o con Escape.
 *
 * @param {Object} props
 * @param {{ id: string, etiqueta: string, ruta: string }[]} props.enlaces
 */
export function MenuMovil({ enlaces }) {
  const [abierto, setAbierto] = useState(false);
  const ref = useRef(null);
  const cerrar = useCallback(() => setAbierto(false), []);
  useClicFuera(ref, abierto, cerrar);

  return (
    <div ref={ref} className="relative flex items-center">
      <button
        type="button"
        onClick={() => setAbierto((a) => !a)}
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={abierto}
        aria-controls="menu-movil"
        className="cursor-pointer"
      >
        <Icono nombre="menu-movil" className="h-7 w-8" />
      </button>

      {abierto && (
        <nav
          id="menu-movil"
          aria-label="Menú principal"
          className="absolute top-full right-0 z-50 mt-1.25 flex w-62.5 flex-col shadow-md"
        >
          {enlaces.map((enlace) => (
            <NavLink
              key={enlace.id}
              to={enlace.ruta}
              end={enlace.ruta === '/'}
              onClick={cerrar}
              className="flex h-8 w-full items-center justify-end bg-blanco-fondo pr-5.5 pl-3.5 text-sm text-negro-primario hover:bg-gris-claro aria-[current=page]:font-bold dark:bg-negro-fondo dark:text-blanco-primario dark:hover:bg-gris-oscuro"
            >
              {enlace.etiqueta}
            </NavLink>
          ))}
        </nav>
      )}
    </div>
  );
}
