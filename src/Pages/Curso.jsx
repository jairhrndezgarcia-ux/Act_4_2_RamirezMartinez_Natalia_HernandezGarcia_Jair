import { useParams } from 'react-router';
import { EncabezadoCurso } from '../Components/EncabezadoCurso';
import { PublicacionAnuncio, PublicacionTarea } from '../Components/Publicaciones';
import { anuncios, cursos } from '../Data/cursos';
import { formatearFecha, tareas } from '../Data/tareas';
import { EnConstruccion } from './EnConstruccion';

/**
 * Intercala las tareas y los anuncios del curso para armar el muro:
 * tarea, anuncio, tarea, anuncio… y al final lo que sobre de cualquiera de los dos.
 */
function armarMuro(tareasCurso, anunciosCurso) {
  const muro = [];
  const largo = Math.max(tareasCurso.length, anunciosCurso.length);
  for (let i = 0; i < largo; i++) {
    if (tareasCurso[i]) muro.push({ tipo: 'tarea', ...tareasCurso[i] });
    if (anunciosCurso[i]) muro.push({ tipo: 'anuncio', ...anunciosCurso[i] });
  }
  return muro;
}

/**
 * Página de un curso (Figma: "Curso / Desktop 1280").
 * Barra con el nombre del curso y el muro de publicaciones: las tareas del curso
 * (enlazan a /tareas/:id) y los anuncios del profesor (enlazan a /cursos/:id/anuncios/:anuncioId).
 */
export function Curso() {
  const { id } = useParams();
  const curso = cursos.find((c) => c.id === id);
  if (!curso) return <EnConstruccion titulo="Curso no encontrado" />;

  const muro = armarMuro(
    tareas.filter((t) => t.cursoId === curso.id),
    anuncios,
  );

  return (
    <div className="flex flex-col pb-12.5">
      <EncabezadoCurso nombre={curso.nombre} />

      <section
        aria-label={`Publicaciones de ${curso.nombre}`}
        className="mx-auto mt-12.5 flex w-full max-w-175 flex-col gap-3.75 bg-blanco-primario px-5 dark:bg-negro-primario"
      >
        {muro.map((p) => {
          if (p.tipo === 'tarea') {
            const { fecha, dia } = formatearFecha(p.fecha);
            return (
              <PublicacionTarea
                key={`t-${p.id}`}
                fecha={p.publicada}
                titulo={p.titulo}
                cierre={`Cierra el ${dia} ${fecha}, ${p.hora}`}
                ruta={`/tareas/${p.id}`}
              />
            );
          }
          return (
            <PublicacionAnuncio
              key={`a-${p.id}`}
              profesor={curso.profesor}
              fecha={p.fecha}
              texto={p.texto}
              marcadores={p.imagenes}
              ruta={`/cursos/${curso.id}/anuncios/${p.id}`}
            />
          );
        })}
      </section>
    </div>
  );
}
