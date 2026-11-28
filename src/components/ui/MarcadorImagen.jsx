import { Icono } from './Icono';

/**
 * Recuadro gris con un ícono de foto, usado mientras no hay imagen real
 * (Figma: "Imágenes / Marcador de posición").
 *
 * @param {Object} props
 * @param {string} [props.className] - Tamaño del recuadro (por defecto ocupa el ancho disponible).
 * @param {string} [props.etiqueta] - Descripción para lectores de pantalla.
 */
export function MarcadorImagen({ className = 'h-25 w-full', etiqueta = 'Imagen no disponible' }) {
  return (
    <div role="img" aria-label={etiqueta} className={`flex items-center justify-center bg-gris-primario ${className}`}>
      <Icono nombre="foto-marcador" className="h-11.5 w-13.25" />
    </div>
  );
}
