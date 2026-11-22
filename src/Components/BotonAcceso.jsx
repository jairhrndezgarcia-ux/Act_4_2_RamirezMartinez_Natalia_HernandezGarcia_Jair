import { Link } from 'react-router';
import { Icono } from './Icono';

/**
 * Botón grande con borde, ícono y texto que lleva a una sección
 * (Figma: "Botones / Principal" en el menú de información académica).
 * Mide 250px de ancho; 56px de alto en móvil/tablet y 120px en escritorio.
 *
 * @param {Object} props
 * @param {string} props.ruta - Ruta a la que navega.
 * @param {string} props.icono - Nombre del ícono (ver Icono).
 * @param {string} props.etiqueta - Texto del botón.
 */
export function BotonAcceso({ ruta, icono, etiqueta }) {
  return (
    <Link
      to={ruta}
      className="flex h-14 w-[250px] shrink-0 items-center justify-center gap-1.5 border border-negro-fondo bg-blanco-fondo pr-[22px] pl-[14px] text-2xl whitespace-nowrap text-negro-primario hover:bg-gris-claro lg:h-[120px] dark:border-blanco-primario dark:bg-negro-fondo dark:text-blanco-primario dark:hover:bg-gris-oscuro"
    >
      <Icono nombre={icono} />
      {etiqueta}
    </Link>
  );
}
