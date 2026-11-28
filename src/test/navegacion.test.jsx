import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { BotonTema } from '../components/ui/BotonTema';
import { MenuMovil } from '../components/layout/MenuMovil';
import { PanelNotificaciones } from '../components/layout/PanelNotificaciones';
import { PestanasAcademicas } from '../components/compartidos/PestanasAcademicas';
import { enlacesPrincipales } from '../data/navegacion';
import { notificaciones } from '../data/notificaciones';
import { seccionesAcademicas } from '../data/alumno';
import { renderConRouter } from './utils';

describe('BotonTema', () => {
  it('cambia entre modo claro y oscuro y lo recuerda', async () => {
    renderConRouter(<BotonTema />);
    await userEvent.click(screen.getByRole('button', { name: 'Activar modo oscuro' }));
    expect(document.documentElement).toHaveClass('dark');
    expect(localStorage.getItem('tema')).toBe('oscuro');

    await userEvent.click(screen.getByRole('button', { name: 'Activar modo claro' }));
    expect(document.documentElement).not.toHaveClass('dark');
    expect(localStorage.getItem('tema')).toBe('claro');
  });
});

describe('MenuMovil', () => {
  it('abre el menú con todos los enlaces y lo cierra al elegir uno', async () => {
    renderConRouter(<MenuMovil enlaces={enlacesPrincipales} />);
    await userEvent.click(screen.getByRole('button', { name: 'Abrir menú' }));
    const menu = screen.getByRole('navigation', { name: 'Menú principal' });
    expect(menu.querySelectorAll('a')).toHaveLength(enlacesPrincipales.length);

    await userEvent.click(screen.getByRole('link', { name: 'Universidad' }));
    expect(screen.queryByRole('navigation', { name: 'Menú principal' })).not.toBeInTheDocument();
  });
});

describe('PanelNotificaciones', () => {
  it('muestra la lista al presionar la campana y se cierra con Escape', async () => {
    renderConRouter(<PanelNotificaciones notificaciones={notificaciones} />);
    const campana = screen.getByRole('button', { name: 'Notificaciones' });
    await userEvent.click(campana);
    expect(screen.getByRole('dialog', { name: 'Menú de notificaciones' })).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(notificaciones.length);

    await userEvent.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(campana).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('PestanasAcademicas', () => {
  it('marca como activa la pestaña de la página actual', () => {
    renderConRouter(<PestanasAcademicas secciones={seccionesAcademicas} />, { ruta: '/calificaciones' });
    expect(screen.getByRole('link', { name: 'Calificaciones' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('link', { name: 'Cursos' })).not.toHaveAttribute('aria-current');
  });
});
