import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { CampoContrasena, CampoTexto } from '../Components/CampoTexto';
import { SelectorOpciones } from '../Components/SelectorOpciones';

/** Envuelve un campo con estado propio para poder escribir en él. */
function ConEstado({ Campo, ...props }) {
  const [valor, setValor] = useState('');
  return <Campo valor={valor} onCambiar={setValor} {...props} />;
}

describe('CampoTexto', () => {
  it('asocia la etiqueta con el campo y avisa cada cambio', async () => {
    const onCambiar = vi.fn();
    render(<CampoTexto etiqueta="Clave única" valor="" onCambiar={onCambiar} />);
    await userEvent.type(screen.getByLabelText('Clave única'), '1');
    expect(onCambiar).toHaveBeenCalledWith('1');
  });

  it('muestra el error y marca el campo como inválido', () => {
    render(<CampoTexto etiqueta="Clave única" valor="" onCambiar={() => {}} error="Campo obligatorio" />);
    const campo = screen.getByLabelText('Clave única');
    expect(campo).toHaveAttribute('aria-invalid', 'true');
    expect(campo).toHaveAccessibleDescription('Campo obligatorio');
  });
});

describe('CampoContrasena', () => {
  it('oculta la contraseña y la muestra al presionar el ojo', async () => {
    render(<ConEstado Campo={CampoContrasena} etiqueta="Contraseña" />);
    const campo = screen.getByLabelText('Contraseña');
    await userEvent.type(campo, 'secreta');
    expect(campo).toHaveAttribute('type', 'password');

    await userEvent.click(screen.getByRole('button', { name: 'Mostrar contraseña' }));
    expect(campo).toHaveAttribute('type', 'text');
    expect(campo).toHaveValue('secreta');

    await userEvent.click(screen.getByRole('button', { name: 'Ocultar contraseña' }));
    expect(campo).toHaveAttribute('type', 'password');
  });
});

describe('SelectorOpciones', () => {
  const opciones = ['2026-B', '2026-A'];

  it('abre la lista, permite elegir y se cierra', async () => {
    const onCambiar = vi.fn();
    render(<SelectorOpciones etiqueta="Selecciona tu semestre" opciones={opciones} onCambiar={onCambiar} />);

    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', { name: 'Selecciona tu semestre' }));
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button', { name: '2026-A' }));
    expect(onCambiar).toHaveBeenCalledWith('2026-A');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('muestra la opción elegida en el botón y se cierra con Escape', async () => {
    render(<SelectorOpciones etiqueta="Selecciona" opciones={opciones} valor="2026-B" onCambiar={() => {}} />);
    const boton = screen.getByRole('button', { name: '2026-B' });
    await userEvent.click(boton);
    expect(boton).toHaveAttribute('aria-expanded', 'true');
    await userEvent.keyboard('{Escape}');
    expect(boton).toHaveAttribute('aria-expanded', 'false');
  });
});
