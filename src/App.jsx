import { BrowserRouter, Route, Routes } from 'react-router';
import { TemaProvider } from './Context/TemaContext';
import { MainLayout } from './Layout/MainLayout';
import { Calificaciones } from './Pages/Calificaciones';
import { Curso } from './Pages/Curso';
import { Cursos } from './Pages/Cursos';
import { EnConstruccion } from './Pages/EnConstruccion';
import { Horario } from './Pages/Horario';
import { Inicio } from './Pages/Inicio';
import { InfoAcademica } from './Pages/InfoAcademica';
import { Login } from './Pages/Login';
import { Publicacion } from './Pages/Publicacion';
import { Tarea } from './Pages/Tarea';
import { Tareas } from './Pages/Tareas';

/** Rutas del portal. Cada página se monta dentro de MainLayout. */
const paginas = [
  { ruta: '/oferta-educativa', titulo: 'Oferta Educativa' },
  { ruta: '/universidad', titulo: 'Universidad' },
  { ruta: '/investigacion', titulo: 'Investigación' },
];

export default function App() {
  return (
    <TemaProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/info-academica" element={<InfoAcademica />} />
            <Route path="/calificaciones" element={<Calificaciones />} />
            <Route path="/horario" element={<Horario />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/cursos/:id" element={<Curso />} />
            <Route path="/cursos/:id/anuncios/:anuncioId" element={<Publicacion />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/tareas/:id" element={<Tarea />} />
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
