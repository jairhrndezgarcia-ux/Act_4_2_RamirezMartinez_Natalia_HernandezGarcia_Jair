import { Link } from 'react-router';
import { Icono } from './Icono';
import { MarcadorImagen } from './MarcadorImagen';

/**
 * Encabezado común de una publicación: ícono o avatar, título y fecha
 * (Figma: "header de publicacion de tarea" y "Publicaciones / Encabezado de anuncio").
 */
function EncabezadoPublicacion({ icono, titulo, fecha }) {
  return (
    <header className="flex h-16.25 items-center gap-1.25 border-b border-gris-claro py-1">
      <Icono nombre={icono} className="size-15" />
      <div className="flex min-w-0 flex-1 flex-col gap-1.25">
        <p className="text-sm text-negro-fondo dark:text-blanco-primario">{titulo}</p>
        <p className="text-[10px] text-negro-fondo dark:text-gris-primario">{fecha}</p>
      </div>
    </header>
  );
}

/**
 * Publicación de una tarea en el muro del curso (Figma: "Publicaciones / Tarea").
 *
 * @param {Object} props
 * @param {string} props.fecha - Fecha y hora de publicación.
 * @param {string} props.titulo - Título de la tarea.
 * @param {string} props.cierre - Texto con la fecha de cierre.
 * @param {string} props.ruta - Ruta del detalle de la tarea (botón "Ver tarea").
 */
export function PublicacionTarea({ fecha, titulo, cierre, ruta }) {
  return (
    <article className="flex w-full flex-col gap-3.5 px-1.25 pb-2.5">
      <EncabezadoPublicacion icono="tarea-publicacion" titulo="Tarea" fecha={fecha} />
      <div className="flex w-71 max-w-full flex-col items-start gap-1.25 rounded-[5px] border border-gris-oscuro bg-gris-claro p-1.25 text-negro-fondo dark:bg-gris-oscuro dark:text-blanco-primario">
        <div className="flex flex-col gap-2">
          <h2 className="text-xs">{titulo}</h2>
          <p className="text-[10px] underline">{cierre}</p>
        </div>
        <Link
          to={ruta}
          className="flex h-6.75 items-center justify-center border border-negro-fondo bg-blanco-fondo px-3.5 text-sm text-negro-primario hover:bg-gris-claro dark:border-blanco-primario dark:bg-negro-fondo dark:text-blanco-primario dark:hover:bg-negro-primario"
        >
          Ver tarea
        </Link>
      </div>
    </article>
  );
}

/**
 * Anuncio del profesor en el muro del curso (Figma: "Publicaciones / Anuncio").
 *
 * @param {Object} props
 * @param {string} props.profesor - Nombre de quien publica.
 * @param {string} props.fecha - Fecha y hora de publicación.
 * @param {string} props.texto - Contenido del anuncio.
 * @param {string[]} [props.imagenes] - URLs de imágenes adjuntas.
 * @param {number} [props.marcadores] - Cantidad de imágenes de ejemplo a mostrar si no hay URLs.
 */
export function PublicacionAnuncio({ profesor, fecha, texto, imagenes = [], marcadores = 0 }) {
  const total = imagenes.length || marcadores;

  return (
    <article className="flex w-full flex-col gap-3.5 px-2.5 py-1.25">
      <EncabezadoPublicacion icono="avatar-profesor" titulo={profesor} fecha={fecha} />
      <p className="text-xs text-negro-fondo dark:text-blanco-primario">{texto}</p>
      {total > 0 && (
        <div className="flex h-34.25 gap-2.5 py-1.25">
          {imagenes.length
            ? imagenes.map((src) => <img key={src} src={src} alt="" className="min-w-0 flex-1 object-cover" />)
            : Array.from({ length: total }, (_, i) => (
                <MarcadorImagen key={i} className="h-full min-w-0 flex-1" etiqueta={`Imagen adjunta ${i + 1}`} />
              ))}
        </div>
      )}
    </article>
  );
}
