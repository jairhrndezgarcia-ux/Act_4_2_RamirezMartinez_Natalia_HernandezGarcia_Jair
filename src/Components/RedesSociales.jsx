import { Icono } from './Icono';

import fbFondoClaro from '../assets/icons/claro/facebook-fondo.svg';
import fbLetraClaro from '../assets/icons/claro/facebook-f.svg';
import fbFondoOscuro from '../assets/icons/oscuro/facebook-fondo.svg';
import fbLetraOscuro from '../assets/icons/oscuro/facebook-f.svg';

/**
 * Íconos de redes sociales del pie de página (Figma: "redes").
 * Cada ícono abre la red en una pestaña nueva.
 *
 * @param {Object} props
 * @param {string} [props.facebook] - URL de Facebook.
 * @param {string} [props.instagram] - URL de Instagram.
 * @param {string} [props.youtube] - URL de YouTube.
 */
export function RedesSociales({
  facebook = 'https://www.facebook.com/',
  instagram = 'https://www.instagram.com/',
  youtube = 'https://www.youtube.com/',
}) {
  const enlace = 'block h-[26px] w-[30px] shrink-0 overflow-clip';

  return (
    <div className="flex items-start gap-[11px] self-stretch">
      <a href={facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className={`relative bg-negro-primario dark:bg-blanco-primario ${enlace}`}>
        <IconoFacebook fondo={fbFondoClaro} letra={fbLetraClaro} className="dark:hidden" />
        <IconoFacebook fondo={fbFondoOscuro} letra={fbLetraOscuro} className="hidden dark:block" />
      </a>
      <a href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className={enlace}>
        <Icono nombre="instagram" className="size-full" />
      </a>
      <a href={youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className={enlace}>
        <Icono nombre="youtube" className="size-full" />
      </a>
    </div>
  );
}

/** Ícono de Facebook armado con las dos capas exportadas de Figma (fondo y letra "f"). */
function IconoFacebook({ fondo, letra, className }) {
  return (
    <span className={`absolute inset-0 ${className}`}>
      <img src={fondo} alt="" className="absolute inset-[0_0_0.37%_0] size-full -scale-y-100" />
      <img
        src={letra}
        alt=""
        className="absolute top-[18.51%] right-[26.8%] bottom-0 left-[27.61%] -scale-y-100"
      />
    </span>
  );
}
