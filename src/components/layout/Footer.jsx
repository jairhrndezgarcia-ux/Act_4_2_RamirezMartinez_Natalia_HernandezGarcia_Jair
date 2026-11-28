import { Link } from 'react-router';
import { Icono } from '../ui/Icono';
import { RedesSociales } from './RedesSociales';

/**
 * Pie de página (Figma: "Navegación / Pie de página").
 * A la izquierda, accesos rápidos con ícono; a la derecha, redes sociales y contacto.
 * En pantallas angostas las dos columnas se acomodan una debajo de otra.
 *
 * @param {Object} props
 * @param {{ id: string, etiqueta: string, ruta: string, icono: string }[]} props.enlaces
 * @param {string[]} props.contacto - Líneas de dirección y contacto.
 */
export function Footer({ enlaces, contacto }) {
  return (
    <footer className="bg-gris-claro pt-2.5 dark:bg-gris-oscuro">
      <div className="flex flex-wrap items-end justify-between gap-y-7.5 bg-blanco-fondo px-5.25 py-8 dark:bg-negro-fondo">
        <nav aria-label="Enlaces del pie de página" className="flex w-47.25 flex-col">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.id}
              to={enlace.ruta}
              className="flex h-11 w-full items-center gap-1.5 pr-5.5 pl-3.5 text-sm whitespace-nowrap text-negro-primario hover:bg-gris-claro dark:text-blanco-primario dark:hover:bg-gris-oscuro"
            >
              <Icono nombre={enlace.icono} />
              {enlace.etiqueta}
            </Link>
          ))}
        </nav>

        <div className="flex w-47.25 flex-col items-start gap-2.25 pl-3.75">
          <RedesSociales />
          <address className="text-base text-negro-fondo not-italic dark:text-blanco-primario">
            {contacto.map((linea) => (
              <p key={linea}>{linea}</p>
            ))}
          </address>
        </div>
      </div>
    </footer>
  );
}
