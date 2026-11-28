import { useCallback, useRef, useState } from 'react';
import { useClicFuera } from '../../hooks/useClicFuera';
import { Icono } from './Icono';

/**
 * Botón con lista desplegable de opciones (Figma: "Botones / Selección", variantes cerrada y abierta).
 * Muestra la opción elegida o el texto de ayuda, y se cierra al elegir, al hacer clic fuera o con Escape.
 *
 * @param {Object} props
 * @param {string} props.etiqueta - Texto que se muestra cuando no hay opción elegida.
 * @param {string[]} props.opciones - Opciones disponibles.
 * @param {string} [props.valor] - Opción elegida.
 * @param {(opcion: string) => void} props.onCambiar - Se llama con la opción elegida.
 */
export function SelectorOpciones({ etiqueta, opciones, valor, onCambiar }) {
  const [abierto, setAbierto] = useState(false);
  const ref = useRef(null);
  const cerrar = useCallback(() => setAbierto(false), []);
  useClicFuera(ref, abierto, cerrar);

  const caja =
    'border border-negro-fondo bg-blanco-fondo text-sm text-negro-primario dark:border-blanco-primario dark:bg-negro-fondo dark:text-blanco-primario';

  return (
    <div ref={ref} className="relative inline-flex flex-col">
      <button
        type="button"
        onClick={() => setAbierto((a) => !a)}
        aria-haspopup="listbox"
        aria-expanded={abierto}
        className={`${caja} flex h-7.25 cursor-pointer items-center gap-1.5 pr-5.5 pl-3.5 whitespace-nowrap`}
      >
        <Icono nombre={abierto ? 'flecha-arriba' : 'flecha-abajo'} />
        {valor ?? etiqueta}
      </button>

      {abierto && (
        <ul role="listbox" aria-label={etiqueta} className={`${caja} absolute top-full z-30 mt-px max-h-36.25 w-full overflow-y-auto`}>
          {opciones.map((o) => (
            <li key={o} role="option" aria-selected={o === valor}>
              <button
                type="button"
                onClick={() => {
                  onCambiar(o);
                  cerrar();
                }}
                className={`w-full cursor-pointer px-3.5 py-2.5 text-center hover:bg-gris-claro dark:hover:bg-gris-oscuro ${
                  o === valor ? 'font-bold' : ''
                }`}
              >
                {o}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
