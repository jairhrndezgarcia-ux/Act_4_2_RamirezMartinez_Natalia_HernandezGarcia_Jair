import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { TablaCalificaciones } from '../pages/Calificaciones/components/TablaCalificaciones';
import { TablaHorario } from '../pages/Horario/components/TablaHorario';

describe('TablaCalificaciones', () => {
  const materias = [
    { materia: 'QUIMICA I', parciales: [8, 7, 9], final: 8 },
    { materia: 'INGLES V', parciales: [10, null, null], final: null },
  ];

  it('muestra el título, los encabezados y una fila por materia', () => {
    render(<TablaCalificaciones materias={materias} />);
    const tabla = screen.getByRole('table', { name: 'Calificaciones parciales del semestre' });
    expect(within(tabla).getAllByRole('columnheader').map((c) => c.textContent)).toEqual([
      'Materia',
      'Parcial 1',
      'Parcial 2',
      'Parcial 3',
      'Final',
    ]);
    expect(within(tabla).getByRole('rowheader', { name: 'QUIMICA I' })).toBeInTheDocument();
  });

  it('muestra "—" cuando falta una calificación', () => {
    render(<TablaCalificaciones materias={materias} />);
    const fila = screen.getByRole('rowheader', { name: 'INGLES V' }).closest('tr');
    expect(within(fila).getAllByRole('cell').map((c) => c.textContent)).toEqual(['10', '—', '—', '—']);
  });
});

describe('TablaHorario', () => {
  it('coloca cada clase en su día y hora, y deja vacías las horas libres', () => {
    render(
      <TablaHorario
        dias={['Lunes', 'Martes']}
        horas={['7:00', '8:00']}
        clases={[{ dia: 'Martes', hora: '8:00', materia: 'Química I' }]}
      />,
    );
    const fila8 = screen.getByRole('rowheader', { name: '8:00' }).closest('tr');
    expect(within(fila8).getAllByRole('cell').map((c) => c.textContent)).toEqual(['', 'Química I']);
    const fila7 = screen.getByRole('rowheader', { name: '7:00' }).closest('tr');
    expect(within(fila7).getAllByRole('cell').map((c) => c.textContent)).toEqual(['', '']);
  });
});
