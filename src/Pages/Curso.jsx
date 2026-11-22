import { useParams } from 'react-router';
import { EncabezadoCurso } from '../Components/EncabezadoCurso';
import { PublicacionAnuncio, PublicacionTarea } from '../Components/Publicaciones';
import { cursos, publicacionesDeEjemplo } from '../Data/cursos';
import { EnConstruccion } from './EnConstruccion';

/**
 * Página de un curso (Figma: "Curso / Desktop 1280").
 * Barra con el nombre del curso y el muro de publicaciones (tareas y anuncios).
 * El curso se toma de la URL: /cursos/:id.
 */
export function Curso() {
  const { id } = useParams();
  const curso = cursos.find((c) => c.id === id);

  if (!curso) return <EnConstruccion titulo="Curso no encontrado" />;

  return (
    <div className="flex flex-col pb-12.5">
      <EncabezadoCurso nombre={curso.nombre} />

      <section
        aria-label={`Publicaciones de ${curso.nombre}`}
        className="mx-auto mt-12.5 flex w-full max-w-175 flex-col gap-3.75 bg-blanco-primario px-5 dark:bg-negro-primario"
      >
        {publicacionesDeEjemplo.map((p) =>
          p.tipo === 'tarea' ? (
            <PublicacionTarea key={p.id} fecha={p.fecha} titulo={p.titulo} cierre={p.cierre} ruta="/tareas" />
          ) : (
            <PublicacionAnuncio key={p.id} profesor={curso.profesor} fecha={p.fecha} texto={p.texto} marcadores={p.imagenes} />
          ),
        )}
      </section>
    </div>
  );
}
