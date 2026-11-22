import { useSearchParams } from 'react-router';
import { FichaTarea } from '../Components/FichaTarea';
import { FiltrosTareas } from '../Components/FiltrosTareas';
import { PestanasAcademicas } from '../Components/PestanasAcademicas';
import { TarjetaAlumno } from '../Components/TarjetaAlumno';
import { alumno, seccionesAcademicas } from '../Data/alumno';
import { cursos } from '../Data/cursos';
import { filtrosTareas, formatearFecha, tareas } from '../Data/tareas';

/**
 * Página "Tareas" (Figma: "Main Tareas / Desktop 1280").
 * Tarjeta del alumno, pestañas (Tareas activa), filtro por estado y lista de tareas.
 * El filtro se guarda en la URL (?estado=vencida) para poder compartir o recargar la vista.
 */
export function Tareas() {
  const [params, setParams] = useSearchParams();
  const estado = filtrosTareas.some((f) => f.id === params.get('estado')) ? params.get('estado') : 'pendiente';
  const lista = tareas.filter((t) => t.estado === estado);
  const nombreCurso = (id) => cursos.find((c) => c.id === id)?.nombre ?? '';

  return (
    <div className="flex flex-col items-center gap-12.5 pt-5 pb-12.5 lg:pt-12.5">
      <div className="flex w-full flex-col items-center gap-5">
        <TarjetaAlumno alumno={alumno} />
        <PestanasAcademicas secciones={seccionesAcademicas} />
      </div>

      <section aria-labelledby="titulo-tareas" className="w-full max-w-215">
        <h1 id="titulo-tareas" className="sr-only">
          Mis tareas
        </h1>
        <FiltrosTareas filtros={filtrosTareas} activo={estado} onCambiar={(id) => setParams({ estado: id })} />

        <div role="tabpanel" className="bg-blanco-primario px-1.25 dark:bg-negro-fondo">
          {lista.length ? (
            <ul className="flex flex-col">
              {lista.map((t) => {
                const { fecha, dia } = formatearFecha(t.fecha);
                return (
                  <li key={t.id}>
                    <FichaTarea
                      ruta={`/tareas/${t.id}`}
                      fecha={fecha}
                      dia={dia}
                      titulo={t.titulo}
                      curso={nombreCurso(t.cursoId)}
                      puntos={t.puntos}
                      total={t.total}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p className="py-10 text-center text-sm text-gris-texto">No hay tareas en esta sección.</p>
          )}
        </div>
      </section>
    </div>
  );
}
