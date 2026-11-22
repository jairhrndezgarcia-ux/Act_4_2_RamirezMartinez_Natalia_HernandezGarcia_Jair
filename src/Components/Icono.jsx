const claro = import.meta.glob('../assets/icons/claro/*.svg', { eager: true, import: 'default' });
const oscuro = import.meta.glob('../assets/icons/oscuro/*.svg', { eager: true, import: 'default' });

const ruta = (mapa, nombre, tema) => mapa[`../assets/icons/${tema}/${nombre}.svg`];

/**
 * Ícono del sistema de diseño con su variante para tema claro y oscuro.
 * Renderiza las dos versiones exportadas de Figma y muestra la que corresponde
 * según la clase `dark` (sin necesidad de leer el contexto).
 *
 * @param {Object} props
 * @param {string} props.nombre - Nombre del archivo en src/assets/icons/{claro,oscuro} sin extensión.
 * @param {string} [props.className] - Tamaño u otras clases del contenedor (por defecto 24×24).
 * @param {string} [props.alt] - Texto alternativo. Vacío si el ícono es decorativo.
 * @param {string} [props.respaldo] - Ícono a usar si `nombre` no existe (p. ej. la versión normal
 *   cuando todavía no se exporta la variante "-activo").
 */
export function Icono({ nombre, className = 'size-6', alt = '', respaldo }) {
  if (respaldo && !ruta(claro, nombre, 'claro')) nombre = respaldo;
  const srcClaro = ruta(claro, nombre, 'claro');
  const srcOscuro = ruta(oscuro, nombre, 'oscuro') ?? srcClaro;

  return (
    <span className={`relative inline-block shrink-0 ${className}`}>
      <img src={srcClaro} alt={alt} className="absolute inset-0 size-full dark:hidden" />
      <img src={srcOscuro} alt={alt} className="absolute inset-0 hidden size-full dark:block" />
    </span>
  );
}
