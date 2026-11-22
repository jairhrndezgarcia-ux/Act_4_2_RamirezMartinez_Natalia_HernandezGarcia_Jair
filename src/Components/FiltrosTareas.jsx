/**
 * Selector de filtro de la lista de tareas: Pendientes, Vencidas o Completadas
 * (Figma: "Tareas / Navegación"). El filtro activo se marca con fondo gris y texto en negritas.
 *
 * @param {Object} props
 * @param {{ id: string, etiqueta: string }[]} props.filtros
 * @param {string} props.activo - id del filtro seleccionado.
 * @param {(id: string) => void} props.onCambiar - Se llama con el id del filtro elegido.
 */
export function FiltrosTareas({ filtros, activo, onCambiar }) {
  return (
    <div role="tablist" aria-label="Filtrar tareas" className="flex w-full bg-blanco-fondo dark:bg-negro-fondo">
      {filtros.map((f) => {
        const seleccionado = f.id === activo;
        return (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={seleccionado}
            onClick={() => onCambiar(f.id)}
            className={`flex h-11 min-w-0 flex-1 cursor-pointer items-center justify-center px-2 text-sm sm:px-5.5 ${
              seleccionado
                ? 'bg-gris-claro font-bold text-gris-texto dark:bg-gris-oscuro'
                : 'text-negro-primario hover:bg-gris-claro/50 dark:text-blanco-primario dark:hover:bg-negro-primario'
            }`}
          >
            {f.etiqueta}
          </button>
        );
      })}
    </div>
  );
}
