import { useTema } from '../../context/TemaContext';
import { Icono } from './Icono';

/**
 * Botón para alternar entre modo claro y oscuro (Figma: "Iconos / Tema").
 * Muestra una luna en modo claro y un sol en modo oscuro.
 */
export function BotonTema() {
  const { tema, alternarTema } = useTema();
  const etiqueta = tema === 'oscuro' ? 'Activar modo claro' : 'Activar modo oscuro';

  return (
    <button
      type="button"
      onClick={alternarTema}
      aria-label={etiqueta}
      title={etiqueta}
      className="flex size-6 cursor-pointer items-center justify-center"
    >
      <Icono nombre="tema" />
    </button>
  );
}
