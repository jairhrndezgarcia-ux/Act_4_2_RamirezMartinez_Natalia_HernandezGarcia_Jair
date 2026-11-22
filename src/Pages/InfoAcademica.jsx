import { BotonAcceso } from '../Components/BotonAcceso';
import { TarjetaAlumno } from '../Components/TarjetaAlumno';
import { alumno, seccionesAcademicas } from '../Data/alumno';

/**
 * Página "Información Académica" (Figma: "Main info academica").
 * Muestra los datos del alumno y cuatro accesos: Horario, Calificaciones, Cursos y Tareas,
 * acomodados en dos filas de dos botones (se apilan si la pantalla es angosta).
 */
export function InfoAcademica() {
  const filas = [seccionesAcademicas.slice(0, 2), seccionesAcademicas.slice(2, 4)];

  return (
    <div className="flex flex-col items-center px-4 pt-[11px] pb-5 lg:px-0">
      <h1 className="text-2xl font-bold lg:text-[33px] lg:font-normal">Información Académica</h1>

      <div className="mt-[11px] flex w-full flex-col items-center gap-5 py-5 max-lg:pt-0">
        <TarjetaAlumno alumno={alumno} />

        <nav aria-label="Secciones académicas" className="flex w-full flex-col items-center gap-1 lg:gap-[50px]">
          {filas.map((fila, i) => (
            <div key={i} className="flex w-full flex-wrap items-start justify-center gap-[60px] max-sm:gap-6 py-10 max-sm:py-3">
              {fila.map((s) => (
                <BotonAcceso key={s.id} ruta={s.ruta} icono={s.icono} etiqueta={s.etiqueta} />
              ))}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
