import { PestanasAcademicas } from '../Components/PestanasAcademicas';
import { TablaCalificaciones } from '../Components/TablaCalificaciones';
import { TarjetaAlumno } from '../Components/TarjetaAlumno';
import { alumno, seccionesAcademicas } from '../Data/alumno';
import { calificaciones } from '../Data/calificaciones';

/**
 * Página "Calificaciones" (Figma: "Calificaciones / Desktop 1280").
 * Tarjeta del alumno, pestañas de secciones (Calificaciones activa) y la tabla de parciales.
 */
export function Calificaciones() {
  return (
    <div className="flex flex-col items-center gap-25 px-0 pt-5 pb-25 lg:pt-25">
      <div className="flex w-full flex-col items-center gap-5">
        <TarjetaAlumno alumno={alumno} />
        <PestanasAcademicas secciones={seccionesAcademicas} />
      </div>

      <section aria-labelledby="titulo-calificaciones" className="flex w-full flex-col items-center gap-2.5">
        <h1 id="titulo-calificaciones" className="text-2xl font-bold">
          Calificaciones
        </h1>
        <TablaCalificaciones materias={calificaciones} />
      </section>
    </div>
  );
}
