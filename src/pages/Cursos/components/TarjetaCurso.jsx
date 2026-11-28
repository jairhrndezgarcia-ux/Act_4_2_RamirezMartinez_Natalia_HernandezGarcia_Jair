import { Link } from 'react-router';
import { MarcadorImagen } from '../../../components/ui/MarcadorImagen';

/**
 * Ficha de un curso en la lista de cursos (Figma: "Cursos / Ficha").
 * Muestra la portada, el nombre y el profesor, y lleva a la página del curso.
 *
 * @param {Object} props
 * @param {string} props.ruta - Ruta de la página del curso.
 * @param {string} props.nombre - Nombre del curso.
 * @param {string} props.profesor - Nombre del profesor.
 * @param {string} [props.portada] - URL de la imagen de portada. Si falta, se muestra un marcador.
 */
export function TarjetaCurso({ ruta, nombre, profesor, portada }) {
  return (
    <Link
      to={ruta}
      className="flex w-full flex-col gap-2.5 border border-gris-primario bg-blanco-fondo pb-2.5 drop-shadow-[0_4px_2px_#d9d9d9] hover:bg-gris-claro dark:border-transparent dark:bg-negro-fondo dark:drop-shadow-[0_4px_2px_rgba(201,196,196,0.8)] dark:hover:bg-gris-oscuro"
    >
      {portada ? (
        <img src={portada} alt="" className="h-25 w-full object-cover" />
      ) : (
        <MarcadorImagen etiqueta={`Portada de ${nombre}`} />
      )}
      <span className="flex flex-col gap-2.5 px-2.5 text-base leading-tight">
        <span className="text-negro-fondo dark:text-blanco-primario">{nombre}</span>
        <span className="text-gris-texto dark:text-gris-primario">{profesor}</span>
      </span>
    </Link>
  );
}
