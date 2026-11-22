import { BrowserRouter, Route, Routes } from 'react-router';
import { TemaProvider } from './Context/TemaContext';
import { MainLayout } from './Layout/MainLayout';
import { Calificaciones } from './Pages/Calificaciones';
import { EnConstruccion } from './Pages/EnConstruccion';
import { InfoAcademica } from './Pages/InfoAcademica';

/** Rutas del portal. Cada página se monta dentro de MainLayout. */
const paginas = [
  { ruta: '/', titulo: 'Inicio' },
  { ruta: '/oferta-educativa', titulo: 'Oferta Educativa' },
  { ruta: '/universidad', titulo: 'Universidad' },
  { ruta: '/investigacion', titulo: 'Investigación' },
  { ruta: '/horario', titulo: 'Horario' },
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
            <Route path="/calificaciones" element={<Calificaciones />} />
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
