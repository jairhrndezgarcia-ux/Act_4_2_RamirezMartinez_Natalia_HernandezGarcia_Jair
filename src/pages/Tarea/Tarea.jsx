import { useParams } from 'react-router';
import { DetalleTarea } from './components/DetalleTarea';
import { EncabezadoCurso } from '../../components/compartidos/EncabezadoCurso';
import { cursos } from '../../data/cursos';
import { formatearFecha, tareas } from '../../data/tareas';
import { EnConstruccion } from '../EnConstruccion/EnConstruccion';

const textoEstado = { vencida: ' (vencida)', completada: ' (entregada)', pendiente: '' };

/**
 * Página de una tarea (Figma: "Tarea / Desktop 1280").
 * Barra con el curso al que pertenece y el detalle de la tarea. Se toma de la URL: /tareas/:id.
 */
export function Tarea() {
  const { id } = useParams();
  const tarea = tareas.find((t) => t.id === id);
  if (!tarea) return <EnConstruccion titulo="Tarea no encontrada" />;

  const curso = cursos.find((c) => c.id === tarea.cursoId);
  const { fecha, dia } = formatearFecha(tarea.fecha);

  return (
    <div className="flex flex-col pb-12.5">
      <EncabezadoCurso nombre={curso?.nombre ?? 'Tarea'} rutaRegreso={curso ? `/cursos/${curso.id}` : '/tareas'} />
      <div className="mx-auto mt-12.5 w-full max-w-162.5">
        <DetalleTarea
          titulo={tarea.titulo}
          cierre={`Cierra el ${dia} ${fecha}, ${tarea.hora}${textoEstado[tarea.estado]}`}
          descripcion={tarea.descripcion}
          materiales={tarea.materiales}
          permiteEntrega={tarea.estado === 'pendiente'}
        />
      </div>
    </div>
  );
}
