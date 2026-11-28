/**
 * Horario semanal del alumno (Figma: "Horario / Estándar", "Horario / Columna de horas",
 * "Horario / Columna de materia" y "Horario / Celda").
 *
 * Primera columna con las horas, una columna por día y una celda por bloque.
 * Las celdas miden 123px de ancho; en pantallas angostas la tabla se desplaza
 * horizontalmente para no aplastar las celdas (igual que en el diseño móvil).
 *
 * @param {Object} props
 * @param {string[]} props.dias - Encabezados de las columnas.
 * @param {string[]} props.horas - Encabezados de las filas.
 * @param {{ dia: string, hora: string, materia: string }[]} props.clases - Clases a mostrar.
 * @param {string} [props.textoVacio] - Texto para las horas libres.
 */
export function TablaHorario({ dias, horas, clases, textoVacio = '' }) {
  const buscar = (dia, hora) => clases.find((c) => c.dia === dia && c.hora === hora)?.materia;
  const celda = 'h-12 w-30.75 px-1 text-center text-base leading-tight font-normal break-words';

  return (
    <div className="w-full overflow-x-auto px-4">
      <table className="mx-auto w-221.25 table-fixed border-separate border-spacing-0.75 text-negro-primario dark:text-blanco-primario">
        <caption className="sr-only">Horario semanal</caption>
        <thead>
          <tr>
            <td className={celda} />
            {dias.map((d) => (
              <th key={d} scope="col" className={celda}>
                {d}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horas.map((h) => (
            <tr key={h}>
              <th scope="row" className={celda}>
                {h}
              </th>
              {dias.map((d) => {
                const materia = buscar(d, h);
                return (
                  <td
                    key={d}
                    className={`${celda} border border-gris-texto bg-blanco-primario dark:bg-transparent ${
                      materia ? '' : 'text-gris-texto'
                    }`}
                  >
                    {materia ?? textoVacio}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
