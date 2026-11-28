import { useRef, useState } from 'react';
import { MarcadorImagen } from './MarcadorImagen';

/**
 * Carrusel de imágenes (Figma: "Imágenes / Carrusel"): la imagen actual al centro
 * y las vecinas asomándose a los lados. Se puede desplazar con el dedo/ratón o con
 * los botones de anterior y siguiente.
 *
 * @param {Object} props
 * @param {{ id: string|number, src?: string, alt: string }[]} props.imagenes
 *   - Si una imagen no tiene `src`, se muestra el marcador gris.
 * @param {string} [props.etiqueta] - Nombre accesible del carrusel.
 */
export function Carrusel({ imagenes, etiqueta = 'Galería' }) {
  const pista = useRef(null);
  const [actual, setActual] = useState(0);

  const ir = (indice) => {
    const total = imagenes.length;
    const destino = (indice + total) % total;
    const diapositiva = pista.current?.children[destino];
    diapositiva?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setActual(destino);
  };

  const alDesplazar = () => {
    const el = pista.current;
    if (!el) return;
    const centro = el.scrollLeft + el.clientWidth / 2;
    let mas = 0;
    [...el.children].forEach((hijo, i) => {
      const medio = hijo.offsetLeft + hijo.offsetWidth / 2;
      const previo = el.children[mas];
      if (Math.abs(medio - centro) < Math.abs(previo.offsetLeft + previo.offsetWidth / 2 - centro)) mas = i;
    });
    setActual(mas);
  };

  const boton =
    'absolute top-1/2 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-blanco-fondo/90 text-2xl text-negro-primario shadow hover:bg-blanco-primario dark:bg-negro-fondo/90 dark:text-blanco-primario dark:hover:bg-negro-primario';

  return (
    <section aria-roledescription="carrusel" aria-label={etiqueta} className="relative w-full bg-blanco-fondo dark:bg-negro-fondo">
      <ul
        ref={pista}
        onScroll={alDesplazar}
        className="flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-[21.5%] py-3.25 [scrollbar-width:none]"
      >
        {imagenes.map((img, i) => (
          <li
            key={img.id}
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${imagenes.length}`}
            className="h-63.5 w-full shrink-0 snap-center md:h-126.25"
          >
            {img.src ? (
              <img src={img.src} alt={img.alt} className="size-full object-cover" />
            ) : (
              <MarcadorImagen className="size-full" etiqueta={img.alt} />
            )}
          </li>
        ))}
      </ul>
      <button type="button" aria-label="Imagen anterior" onClick={() => ir(actual - 1)} className={`${boton} left-2`}>
        ‹
      </button>
      <button type="button" aria-label="Imagen siguiente" onClick={() => ir(actual + 1)} className={`${boton} right-2`}>
        ›
      </button>
    </section>
  );
}
