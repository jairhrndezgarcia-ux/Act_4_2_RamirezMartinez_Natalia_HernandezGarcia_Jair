import { Outlet } from 'react-router';
import { Footer } from '../Components/Footer';
import { Navbar } from '../Components/Navbar';
import { contacto, enlacesPie, enlacesPrincipales } from '../Data/navegacion';
import { notificaciones } from '../Data/notificaciones';

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
