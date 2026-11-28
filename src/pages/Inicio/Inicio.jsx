import { Carrusel } from '../../components/ui/Carrusel';
import { MarcadorImagen } from '../../components/ui/MarcadorImagen';

const galeria = [
  { id: 1, alt: 'Campus de la universidad' },
  { id: 2, alt: 'Estudiantes en la biblioteca' },
  { id: 3, alt: 'Laboratorio de ingeniería' },
];

const carrusel = [
  { id: 1, alt: 'Ceremonia de graduación' },
  { id: 2, alt: 'Semana cultural' },
  { id: 3, alt: 'Torneo deportivo universitario' },
  { id: 4, alt: 'Feria de ciencias' },
];

/**
 * Página de inicio (Figma: "Home / Desktop 1280").
 * Galería de tres imágenes, imagen destacada, bloque de imagen con texto
 * y un carrusel de noticias. Las imágenes son marcadores mientras no haya fotos reales.
 */
export function Inicio() {
  return (
    <div className="flex flex-col gap-2.75 pt-2.75 pb-2.75">
      <h1 className="sr-only">Universidad Autónoma Los Búhos</h1>

      {/* Galería de tres imágenes */}
      <div className="grid grid-cols-3 gap-2.5 bg-blanco-fondo px-10 dark:bg-negro-fondo">
        {galeria.map((g) => (
          <MarcadorImagen key={g.id} className="h-40 sm:h-63.75 lg:h-102" etiqueta={g.alt} />
        ))}
      </div>

      {/* Imagen destacada */}
      <div className="flex justify-center px-10 lg:px-0">
        <MarcadorImagen className="h-63.75 w-full max-w-252.5 lg:h-118.5" etiqueta="Imagen destacada de la universidad" />
      </div>

      {/* Imagen con texto */}
      <div className="flex flex-col items-center gap-2.5 bg-blanco-fondo px-10 sm:flex-row sm:items-stretch dark:bg-negro-fondo">
        <MarcadorImagen className="h-60 w-full sm:h-auto sm:min-h-60 sm:flex-1 lg:min-h-100.75" etiqueta="Vida universitaria" />
        <p className="text-sm text-negro-primario sm:w-55 sm:self-center md:text-base lg:w-78 dark:text-blanco-primario">
          En la Universidad Autónoma Los Búhos formamos profesionistas comprometidos con su comunidad. Contamos con
          programas de licenciatura y posgrado en ingeniería, ciencias, humanidades y artes, además de laboratorios,
          bibliotecas y espacios deportivos abiertos para toda la comunidad estudiantil. Consulta la oferta educativa,
          los proyectos de investigación y las convocatorias vigentes desde este portal.
        </p>
      </div>

      <h2 className="text-center text-2xl font-bold lg:text-[33px] lg:font-normal">Noticias</h2>
      <div className="flex justify-center lg:px-35">
        <Carrusel imagenes={carrusel} etiqueta="Noticias de la universidad" />
      </div>
    </div>
  );
}
