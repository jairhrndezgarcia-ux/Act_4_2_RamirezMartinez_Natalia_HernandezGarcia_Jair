import { Icono } from './Icono';

/**
 * Tarjeta con la foto y los datos del alumno (Figma: parte superior del
 * "Menú de información académica"). Se reutiliza en Información Académica,
 * Horario, Calificaciones, Cursos y Tareas.
 *
 * Tamaños: foto de 100px y texto de 10px en móvil/tablet; foto de 200px y texto de 24px en escritorio.
 *
 * @param {Object} props
 * @param {{ claveUniversitaria: string, claveFacultad: string, nombre: string, carrera: string, asesor: string, semestre: string }} props.alumno
 * @param {string} [props.foto] - URL de la foto del alumno. Si no se da, se muestra el avatar genérico.
 */
export function TarjetaAlumno({ alumno, foto }) {
  const filas = [
    ['Clave universitaria:', alumno.claveUniversitaria],
    ['Clave de facultad:', alumno.claveFacultad],
    ['Nombre:', alumno.nombre],
    ['Carrera:', alumno.carrera],
    ['Asesor:', alumno.asesor],
    ['Semestre:', alumno.semestre],
  ];

  return (
    <section
      aria-label="Datos del alumno"
      className="flex flex-wrap items-center justify-center gap-2 py-1.25"
    >
      <div className="flex size-25 shrink-0 items-center justify-center bg-gris-claro lg:size-50 dark:bg-gris-texto">
        {foto ? (
          <img src={foto} alt={`Foto de ${alumno.nombre}`} className="size-full object-cover" />
        ) : (
          <Icono nombre="avatar" className="size-full" alt="" />
        )}
      </div>

      <dl className="grid grid-cols-[68px_auto] gap-x-2 gap-y-1 text-[10px] text-negro-fondo md:grid-cols-[auto_auto] lg:text-2xl dark:text-blanco-primario">
        {filas.map(([etiqueta, valor]) => (
          <div key={etiqueta} className="contents">
            <dt className="md:whitespace-nowrap">{etiqueta}</dt>
            <dd>{valor}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
