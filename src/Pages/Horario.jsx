import { PestanasAcademicas } from '../Components/PestanasAcademicas';
import { TablaHorario } from '../Components/TablaHorario';
import { TarjetaAlumno } from '../Components/TarjetaAlumno';
import { alumno, seccionesAcademicas } from '../Data/alumno';
import { clases, dias, horas } from '../Data/horario';

/**
 * Página "Horario" (Figma: "Horario / Desktop 1280").
 * Tarjeta del alumno, pestañas de secciones (Horario activa) y la tabla semanal.
 */
export function Horario() {
  return (
    <div className="flex flex-col items-center gap-12.5 pt-5 pb-25 lg:gap-25 lg:pt-25">
      <div className="flex w-full flex-col items-center gap-5">
        <TarjetaAlumno alumno={alumno} />
        <PestanasAcademicas secciones={seccionesAcademicas} />
      </div>

      <section aria-labelledby="titulo-horario" className="flex w-full flex-col items-center gap-2.5">
        <h1 id="titulo-horario" className="sr-only">
          Horario
        </h1>
        <TablaHorario dias={dias} horas={horas} clases={clases} />
      </section>
    </div>
  );
}
