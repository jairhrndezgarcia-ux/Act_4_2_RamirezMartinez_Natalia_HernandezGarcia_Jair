/**
 * Tabla de calificaciones parciales del semestre (Figma: "Calificaciones / Tabla",
 * "Calificaciones / Panel" y "Calificaciones / Fila de materia").
 *
 * Tamaños: texto de 12px y columnas de 50px en móvil/tablet; texto de 16px y
 * columnas de 65px en escritorio. Ocupa todo el ancho disponible hasta 668px.
 *
 * @param {Object} props
 * @param {{ materia: string, parciales: (number|null)[], final: number|null }[]} props.materias
 *   - Una fila por materia. Usa `null` para calificaciones que aún no se capturan.
 * @param {string} [props.titulo] - Texto del encabezado de la tabla.
 * @param {string[]} [props.columnas] - Nombres de las columnas de calificación.
 */
export function TablaCalificaciones({
  materias,
  titulo = 'Calificaciones parciales del semestre',
  columnas = ['Parcial 1', 'Parcial 2', 'Parcial 3', 'Final'],
}) {
  const celda = 'border border-blanco-primario dark:border-negro-primario';
  const celdaNum = `${celda} w-12.5 text-center lg:w-16.25`;

  return (
    <div className="w-full max-w-167 bg-blanco-fondo px-2 py-2.5 sm:px-7.5 lg:p-2.5 dark:bg-negro-fondo">
      <table className="w-full border-separate border-spacing-0 text-xs lg:text-base">
        <caption className="border border-blanco-primario bg-gris-texto text-base text-negro-fondo lg:text-2xl dark:bg-gris-oscuro dark:text-blanco-primario">
          {titulo}
        </caption>
        <thead>
          <tr className="bg-negro-fondo text-blanco-primario dark:bg-blanco-fondo dark:text-negro-primario">
            <th scope="col" className={`${celda} pl-1.25 text-left font-normal`}>
              Materia
            </th>
            {columnas.map((c) => (
              <th key={c} scope="col" className={`${celdaNum} font-normal whitespace-nowrap`}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {materias.map((m) => (
            <tr key={m.materia} className="bg-gris-claro text-negro-primario dark:bg-gris-oscuro dark:text-blanco-primario">
              <th scope="row" className={`${celda} pl-1.25 text-left font-normal`}>
                {m.materia}
              </th>
              {[...m.parciales, m.final].map((valor, i) => (
                <td key={i} className={celdaNum}>
                  {valor ?? '—'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
