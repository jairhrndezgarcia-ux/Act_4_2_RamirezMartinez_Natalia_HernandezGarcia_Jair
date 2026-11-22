import { useState } from 'react';
import { MainLayout } from './Layout/MainLayout';

export default function App() {
  const [seccion, setSeccion] = useState('inicio');

  return (
    <MainLayout seccionActiva={seccion} onCambiarSeccion={setSeccion}>
      <h1 className="text-2xl font-bold text-primario capitalize">
        Vista: {seccion}
      </h1>
      <p className="mt-2 text-gray-600">
        Aquí iremos colocando las tarjetas, gráficas y tablas del diseño asignado.
      </p>
    </MainLayout>
  );
}