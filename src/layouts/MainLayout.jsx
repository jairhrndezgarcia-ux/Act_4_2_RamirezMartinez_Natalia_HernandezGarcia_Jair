import { Outlet } from 'react-router';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { contacto, enlacesPie, enlacesPrincipales } from '../data/navegacion';
import { notificaciones } from '../data/notificaciones';

/**
 * Layout principal del portal: barra superior, contenido de la página actual y pie.
 * Las páginas se renderizan en <Outlet /> según la ruta (ver App.jsx).
 */
export function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar enlaces={enlacesPrincipales} notificaciones={notificaciones} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer enlaces={enlacesPie} contacto={contacto} />
    </div>
  );
}
