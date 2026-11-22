import { BrowserRouter, Route, Routes } from 'react-router';
import { TemaProvider } from './Context/TemaContext';
import { MainLayout } from './Layout/MainLayout';
import { EnConstruccion } from './Pages/EnConstruccion';
import { InfoAcademica } from './Pages/InfoAcademica';

/** Rutas del portal. Cada página se monta dentro de MainLayout. */
const paginas = [
  { ruta: '/', titulo: 'Inicio' },
  { ruta: '/oferta-educativa', titulo: 'Oferta Educativa' },
  { ruta: '/universidad', titulo: 'Universidad' },
  { ruta: '/investigacion', titulo: 'Investigación' },
  { ruta: '/horario', titulo: 'Horario' },
  { ruta: '/calificaciones', titulo: 'Calificaciones' },
  { ruta: '/cursos', titulo: 'Cursos' },
  { ruta: '/tareas', titulo: 'Tareas' },
];

export default function App() {
  return (
    <TemaProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/info-academica" element={<InfoAcademica />} />
            {paginas.map((p) => (
              <Route key={p.ruta} path={p.ruta} element={<EnConstruccion titulo={p.titulo} />} />
            ))}
            <Route path="*" element={<EnConstruccion titulo="Página no encontrada" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TemaProvider>
  );
}
