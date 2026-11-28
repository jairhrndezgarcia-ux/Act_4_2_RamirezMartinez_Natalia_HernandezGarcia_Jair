import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Curso } from '../pages/Curso/Curso';
import { Login } from '../pages/Login/Login';
import { Tarea } from '../pages/Tarea/Tarea';
import { Tareas } from '../pages/Tareas/Tareas';
import { tareas } from '../data/tareas';
import { renderConRouter } from './utils';

describe('Página Login', () => {
  it('muestra los errores si se envía vacío', async () => {
    renderConRouter(<Login />, { ruta: '/login', patron: '/login' });
    await userEvent.click(screen.getByRole('button', { name: 'Iniciar Sesión' }));
    expect(screen.getByText('Selecciona tu semestre.')).toBeInTheDocument();
    expect(screen.getByLabelText('Clave única')).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByLabelText('Contraseña')).toHaveAttribute('aria-invalid', 'true');
  });

  it('con datos válidos lleva a otra página', async () => {
    renderConRouter(<Login />, { ruta: '/login', patron: '/login' });
    await userEvent.click(screen.getByRole('button', { name: 'Selecciona tu semestre' }));
    await userEvent.click(screen.getByRole('button', { name: '2026-B' }));
    await userEvent.type(screen.getByLabelText('Clave única'), '0783421');
    await userEvent.type(screen.getByLabelText('Contraseña'), 'prueba');
    await userEvent.click(screen.getByRole('button', { name: 'Iniciar Sesión' }));
    expect(screen.getByText('Otra página')).toBeInTheDocument();
  });
});

describe('Página Tareas', () => {
  const pendientes = tareas.filter((t) => t.estado === 'pendiente');
  const vencidas = tareas.filter((t) => t.estado === 'vencida');

  it('muestra las pendientes por defecto y cambia al elegir otro filtro', async () => {
    renderConRouter(<Tareas />, { ruta: '/tareas', patron: '/tareas' });
    const panel = screen.getByRole('tabpanel');
    expect(within(panel).getAllByRole('link')).toHaveLength(pendientes.length);

    await userEvent.click(screen.getByRole('tab', { name: 'Vencidas' }));
    expect(screen.getByRole('tab', { name: 'Vencidas' })).toHaveAttribute('aria-selected', 'true');
    expect(within(panel).getAllByRole('link')).toHaveLength(vencidas.length);
    expect(within(panel).getByText(vencidas[0].titulo)).toBeInTheDocument();
  });

  it('lee el filtro desde la URL', () => {
    renderConRouter(<Tareas />, { ruta: '/tareas?estado=completada', patron: '/tareas' });
    expect(screen.getByRole('tab', { name: 'Completadas' })).toHaveAttribute('aria-selected', 'true');
  });
});

describe('Página Tarea', () => {
  it('permite subir archivo si la tarea está pendiente', async () => {
    renderConRouter(<Tarea />, { ruta: '/tareas/reporte-practica-4', patron: '/tareas/:id' });
    const archivo = new File(['contenido'], 'mi-reporte.pdf', { type: 'application/pdf' });
    await userEvent.upload(screen.getByLabelText('Subir Tarea'), archivo);
    expect(screen.getByRole('status')).toHaveTextContent('mi-reporte.pdf');
  });

  it('no permite subir si la tarea está vencida', () => {
    renderConRouter(<Tarea />, { ruta: '/tareas/laboratorio-3', patron: '/tareas/:id' });
    expect(screen.queryByLabelText('Subir Tarea')).not.toBeInTheDocument();
    expect(screen.getByText('Esta tarea ya no recibe entregas.')).toBeInTheDocument();
  });
});

describe('Página Curso', () => {
  it('muestra el nombre del curso y enlaza sus tareas al detalle', () => {
    renderConRouter(<Curso />, { ruta: '/cursos/algoritmos', patron: '/cursos/:id' });
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Algoritmos y Complejidad Avanzada');
    const enlaces = screen.getAllByRole('link', { name: 'Ver tarea' }).map((a) => a.getAttribute('href'));
    expect(enlaces).toContain('/tareas/reporte-practica-4');
  });

  it('avisa si el curso no existe', () => {
    renderConRouter(<Curso />, { ruta: '/cursos/no-existe', patron: '/cursos/:id' });
    expect(screen.getByText('Curso no encontrado')).toBeInTheDocument();
  });
});
