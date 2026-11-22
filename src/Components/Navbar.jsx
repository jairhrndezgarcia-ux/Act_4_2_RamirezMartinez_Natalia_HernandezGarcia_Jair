import { Link, NavLink } from 'react-router';
import { BotonTema } from './BotonTema';
import { Icono } from './Icono';
import { MenuMovil } from './MenuMovil';
import { PanelNotificaciones } from './PanelNotificaciones';

/**
 * Barra de navegación principal (Figma: "Navegación / Menú principal").
 *
 * - Escritorio (≥1024px): logo con nombre + enlaces + notificaciones + tema.
 * - Tablet (768–1023px): solo el ícono del logo + enlaces + notificaciones + tema.
 * - Móvil (<768px): logo, tema, notificaciones y menú hamburguesa repartidos.
 *
 * @param {Object} props
 * @param {{ id: string, etiqueta: string, ruta: string }[]} props.enlaces - Enlaces del menú.
 * @param {Array} props.notificaciones - Notificaciones para el panel de la campana.
 */
export function Navbar({ enlaces, notificaciones }) {
  return (
    <header className="sticky top-0 z-40 bg-blanco-fondo pt-3.25 dark:bg-negro-fondo">
      {/* Móvil */}
      <div className="flex h-10.5 items-center justify-between px-2.5 py-1.25 md:hidden">
        <Logo />
        <BotonTema />
        <PanelNotificaciones notificaciones={notificaciones} />
        <MenuMovil enlaces={enlaces} />
      </div>

      {/* Tablet y escritorio */}
      <div className="hidden h-12 items-center justify-between pr-2.5 pl-3.75 md:flex">
        <Logo />
        <div className="flex items-center">
          <nav aria-label="Menú principal" className="flex items-center">
            {enlaces.map((enlace) => (
              <NavLink
                key={enlace.id}
                to={enlace.ruta}
                end={enlace.ruta === '/'}
                className="flex h-12 items-center pr-5.5 pl-3.5 text-sm whitespace-nowrap text-negro-primario hover:bg-gris-claro aria-[current=page]:font-bold dark:text-blanco-primario dark:hover:bg-gris-oscuro"
              >
                {enlace.etiqueta}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2.5">
            <PanelNotificaciones notificaciones={notificaciones} />
            <BotonTema />
          </div>
        </div>
      </div>
    </header>
  );
}

/** Logo de la universidad (Figma: "Marca / Logo"). El nombre solo aparece en escritorio. */
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-px" aria-label="Universidad Autónoma Los Búhos, inicio">
      <span className="flex lg:hidden">
        <Icono nombre="logo-buho-movil" className="size-8" />
      </span>
      <span className="hidden items-center gap-px lg:flex">
        <Icono nombre="logo-buho" className="size-6.25" />
        <span className="font-mono text-sm font-bold whitespace-nowrap text-negro-primario dark:text-blanco-primario">
          Universidad Autónoma Los Búhos
        </span>
      </span>
    </Link>
  );
}
