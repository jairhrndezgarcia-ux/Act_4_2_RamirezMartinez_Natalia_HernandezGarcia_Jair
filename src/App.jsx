import { BrowserRouter, Route, Routes } from 'react-router';
import { TemaProvider } from './context/TemaContext';
import { MainLayout } from './layouts/MainLayout';
import { Calificaciones } from './pages/Calificaciones/Calificaciones';
import { Curso } from './pages/Curso/Curso';
import { Cursos } from './pages/Cursos/Cursos';
import { EnConstruccion } from './pages/EnConstruccion/EnConstruccion';
import { Horario } from './pages/Horario/Horario';
import { Inicio } from './pages/Inicio/Inicio';
import { InfoAcademica } from './pages/InfoAcademica/InfoAcademica';
import { Login } from './pages/Login/Login';
import { Publicacion } from './pages/Publicacion/Publicacion';
import { Tarea } from './pages/Tarea/Tarea';
import { Tareas } from './pages/Tareas/Tareas';

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
