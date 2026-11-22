import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { TemaProvider } from '../Context/TemaContext';

/**
 * Renderiza un elemento dentro del proveedor de tema y de un router en memoria.
 * @param {React.ReactElement} ui - Elemento a renderizar.
 * @param {Object} [opciones]
 * @param {string} [opciones.ruta] - URL inicial (por defecto "/").
 * @param {string} [opciones.patron] - Patrón de la ruta, p. ej. "/cursos/:id", para páginas que leen parámetros.
 */
export function renderConRouter(ui, { ruta = '/', patron } = {}) {
  return render(
    <TemaProvider>
      <MemoryRouter initialEntries={[ruta]}>
        {patron ? (
          <Routes>
            <Route path={patron} element={ui} />
            <Route path="*" element={<p>Otra página</p>} />
          </Routes>
        ) : (
          ui
        )}
      </MemoryRouter>
    </TemaProvider>,
  );
}
