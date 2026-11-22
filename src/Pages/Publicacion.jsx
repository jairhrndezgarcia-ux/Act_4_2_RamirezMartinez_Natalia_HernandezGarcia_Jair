import { useParams } from 'react-router';
import { EncabezadoCurso } from '../Components/EncabezadoCurso';
import { PublicacionAnuncio } from '../Components/Publicaciones';
import { anuncios, cursos } from '../Data/cursos';
import { EnConstruccion } from './EnConstruccion';

/**
 * Página de un anuncio (Figma: "Publicacion / Desktop 1280").
 * Barra del curso y el anuncio completo. Se toma de la URL: /cursos/:id/anuncios/:anuncioId.
 */
export function Publicacion() {
  const { id, anuncioId } = useParams();
  const curso = cursos.find((c) => c.id === id);
  const anuncio = anuncios.find((a) => String(a.id) === anuncioId);
  if (!curso || !anuncio) return <EnConstruccion titulo="Publicación no encontrada" />;

  return (
    <div className="flex flex-col pb-12.5">
      <EncabezadoCurso nombre={curso.nombre} rutaRegreso={`/cursos/${curso.id}`} />
      <div className="mx-auto mt-12.5 w-full max-w-175 bg-blanco-primario dark:bg-negro-primario">
        <PublicacionAnuncio profesor={curso.profesor} fecha={anuncio.fecha} texto={anuncio.texto} marcadores={anuncio.imagenes} />
      </div>
    </div>
  );
}
