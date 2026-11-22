import { PestanasAcademicas } from '../Components/PestanasAcademicas';
import { TarjetaAlumno } from '../Components/TarjetaAlumno';
import { TarjetaCurso } from '../Components/TarjetaCurso';
import { alumno, seccionesAcademicas } from '../Data/alumno';
import { cursos } from '../Data/cursos';

/**
 * Página "Cursos" (Figma: "Main Cursos / Desktop 1280").
 * Tarjeta del alumno, pestañas (Cursos activa) y la lista de cursos inscritos.
 */
export function Cursos() {
  return (
    <div className="flex flex-col items-center gap-12.5 pt-5 pb-12.5 lg:pt-12.5">
      <div className="flex w-full flex-col items-center gap-5">
        <TarjetaAlumno alumno={alumno} />
        <PestanasAcademicas secciones={seccionesAcademicas} />
      </div>

      <section aria-labelledby="titulo-cursos" className="w-full max-w-175 bg-blanco-fondo px-5 dark:bg-negro-fondo">
        <h1 id="titulo-cursos" className="sr-only">
          Mis cursos
        </h1>
        <ul className="flex flex-col gap-4.25 bg-blanco-primario p-2.5 dark:bg-negro-fondo">
          {cursos.map((c) => (
            <li key={c.id}>
              <TarjetaCurso ruta={`/cursos/${c.id}`} nombre={c.nombre} profesor={c.profesor} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
