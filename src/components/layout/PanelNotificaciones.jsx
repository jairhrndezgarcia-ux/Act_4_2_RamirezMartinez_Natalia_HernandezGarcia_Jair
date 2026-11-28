import { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router';
import { useClicFuera } from '../../hooks/useClicFuera';
import { Icono } from '../ui/Icono';

/**
 * Campana de notificaciones con su menú desplegable (Figma: "Notificaciones / Panel"
 * y "Menu de notificaciones").
 *
 * - En escritorio/tablet el menú se abre hacia la izquierda, alineado a la campana.
 * - En móvil se abre centrado en la pantalla.
 * - La lista tiene scroll propio; al elegir una notificación se navega a su ruta.
 *
 * @param {Object} props
 * @param {Array<{id: number, autor: string, accion: string, fecha: string, materia: string, tipo: 'tarea'|'persona', ruta: string}>} props.notificaciones
 * @param {(id: number) => void} [props.onSeleccionar] - Se llama con el id de la notificación elegida.
 * @param {() => void} [props.onVerTodo] - Se llama al presionar "Ver Todo".
 */
export function PanelNotificaciones({ notificaciones, onSeleccionar, onVerTodo }) {
  const [abierto, setAbierto] = useState(false);
  const ref = useRef(null);
  const cerrar = useCallback(() => setAbierto(false), []);
  useClicFuera(ref, abierto, cerrar);

  return (
    <div ref={ref} className="relative flex size-6 items-start">
      <button
        type="button"
        onClick={() => setAbierto((a) => !a)}
        aria-label="Notificaciones"
        aria-expanded={abierto}
        aria-haspopup="dialog"
        className="cursor-pointer"
      >
        <Icono nombre="notificaciones" />
      </button>

      {abierto && (
        <div
          role="dialog"
          aria-label="Menú de notificaciones"
          className="fixed top-13 left-1/2 z-50 flex w-87 max-w-[calc(100vw-16px)] -translate-x-1/2 flex-col border border-negro-primario bg-blanco-fondo md:absolute md:top-full md:right-0 md:left-auto md:mt-3 md:translate-x-0 dark:border-blanco-primario dark:bg-negro-fondo"
        >
          <div className="flex items-center justify-between p-px">
            <p className="text-xs text-negro-fondo dark:text-blanco-primario">Notificaciones</p>
            <div className="flex items-center gap-2.25">
              <Icono nombre="verificacion" className="size-3" alt="Marcar como leídas" />
              <Icono nombre="configuracion" className="size-3" alt="Configuración" />
            </div>
          </div>

          <ul className="h-61.5 overflow-x-clip overflow-y-auto">
            {notificaciones.map((n) => (
              <li key={n.id}>
                <Link
                  to={n.ruta}
                  onClick={() => {
                    onSeleccionar?.(n.id);
                    cerrar();
                  }}
                  className="flex w-full items-start gap-1.75 p-1.25 hover:bg-gris-claro dark:hover:bg-gris-oscuro"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-[5px] bg-gris-primario p-1.25 dark:bg-gris-oscuro">
                    <Icono nombre={n.tipo === 'tarea' ? 'asignacion' : 'perfil'} className="size-full" />
                  </span>
                  <span className="grid min-w-0 flex-1 grid-cols-2 gap-x-1.25 gap-y-0.75 text-left">
                    <span className="col-span-2 text-xs text-negro-fondo dark:text-blanco-primario">
                      {n.autor}
                    </span>
                    <span className="text-[10px] text-negro-fondo underline dark:text-blanco-primario dark:no-underline">
                      {n.accion}
                    </span>
                    <span className="row-start-3 text-[10px] text-gris-texto">Fecha:</span>
                    <span className="row-start-3 text-center text-[10px] text-gris-texto">{n.fecha}</span>
                    <span className="row-start-4 text-[10px] text-negro-fondo underline dark:text-blanco-primario dark:no-underline">
                      {n.materia}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex h-6.25 items-center justify-center p-2.5">
            <button
              type="button"
              onClick={() => {
                onVerTodo?.();
                cerrar();
              }}
              className="cursor-pointer text-xs text-negro-fondo underline dark:text-blanco-primario"
            >
              Ver Todo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
