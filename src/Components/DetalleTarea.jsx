import { useId, useState } from 'react';
import { Icono } from './Icono';

/**
 * Detalle de una tarea (Figma: "Tareas / Detalle"): título, fecha de cierre, instrucciones,
 * materiales para descargar y botón para subir la entrega.
 *
 * La subida es una simulación: al elegir un archivo se muestra su nombre y se llama a `onEntregar`.
 *
 * @param {Object} props
 * @param {string} props.titulo - Título de la tarea.
 * @param {string} props.cierre - Texto de la fecha de cierre.
 * @param {string} props.descripcion - Instrucciones.
 * @param {string[]} props.materiales - Nombres de los archivos de apoyo.
 * @param {boolean} [props.permiteEntrega] - Si es false (tarea vencida o completada) no se muestra el botón de subir.
 * @param {(archivo: File) => void} [props.onEntregar] - Se llama con el archivo elegido.
 */
export function DetalleTarea({ titulo, cierre, descripcion, materiales, permiteEntrega = true, onEntregar }) {
  const [archivo, setArchivo] = useState(null);
  const idInput = useId();
  const texto = 'text-negro-fondo dark:text-blanco-primario';
  const boton =
    'flex items-center gap-1.5 border border-negro-fondo bg-blanco-fondo pr-5.5 pl-3.5 text-negro-primario dark:border-blanco-primario dark:bg-negro-fondo dark:text-blanco-primario';

  return (
    <article className="flex w-full flex-col gap-3.75 bg-blanco-fondo px-3.75 py-2.5 dark:bg-negro-fondo">
      <header className={`flex flex-col gap-3 ${texto}`}>
        <h2 className="text-2xl sm:text-[33px]">{titulo}</h2>
        <p className="text-lg sm:text-2xl">{cierre}</p>
      </header>

      <p className={`text-sm ${texto}`}>{descripcion}</p>

      {materiales.length > 0 && (
        <section aria-labelledby={`${idInput}-materiales`} className="flex flex-col gap-2.5">
          <h3 id={`${idInput}-materiales`} className={`text-base ${texto}`}>
            Materiales
          </h3>
          <ul className="flex flex-col gap-2.5">
            {materiales.map((m) => (
              <li key={m} className={`${boton} h-7 w-full text-sm`} title="Archivo de ejemplo">
                <Icono nombre="descargar" />
                <span className="truncate">{m}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {permiteEntrega ? (
        <div className="flex min-h-23 flex-col items-center justify-center gap-2 p-2.5">
          <label
            htmlFor={idInput}
            className={`${boton} h-8 cursor-pointer justify-center text-base hover:bg-gris-claro dark:hover:bg-negro-primario`}
          >
            <Icono nombre="subir" />
            Subir Tarea
          </label>
          <input
            id={idInput}
            type="file"
            className="sr-only"
            onChange={(e) => {
              const elegido = e.target.files?.[0];
              if (!elegido) return;
              setArchivo(elegido);
              onEntregar?.(elegido);
            }}
          />
          {archivo && (
            <p role="status" className="text-sm text-gris-oscuro dark:text-gris-primario">
              Archivo listo para entregar: {archivo.name}
            </p>
          )}
        </div>
      ) : (
        <p className="p-2.5 text-center text-sm text-gris-texto">Esta tarea ya no recibe entregas.</p>
      )}
    </article>
  );
}
