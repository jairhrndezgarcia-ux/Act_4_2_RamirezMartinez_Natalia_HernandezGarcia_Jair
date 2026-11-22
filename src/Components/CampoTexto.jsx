import { useId, useState } from 'react';
import { Icono } from './Icono';

const entrada =
  'flex w-full items-center gap-2.5 rounded-lg border bg-blanco-primario px-4 py-3 dark:bg-negro-fondo';
const textoEntrada =
  'min-w-0 flex-1 bg-transparent text-base text-gris-oscuro outline-none placeholder:text-gris-oscuro dark:text-blanco-primario dark:placeholder:text-gris-texto';

/**
 * Campo de texto con etiqueta (Figma: "Formularios / Campo de texto estándar").
 * Muestra un mensaje de error en rojo debajo si se pasa `error`.
 *
 * @param {Object} props
 * @param {string} props.etiqueta - Texto de la etiqueta.
 * @param {string} props.valor - Valor actual.
 * @param {(valor: string) => void} props.onCambiar - Se llama con el nuevo valor.
 * @param {string} [props.placeholder]
 * @param {string} [props.error] - Mensaje de error.
 * @param {string} [props.autoComplete]
 * @param {string} [props.inputMode]
 */
export function CampoTexto({ etiqueta, valor, onCambiar, placeholder, error, autoComplete, inputMode }) {
  const id = useId();
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="px-5.5 py-1 text-center text-base text-negro-primario dark:text-blanco-primario">
        {etiqueta}
      </label>
      <div className="px-2.5 py-1">
        <div className={`${entrada} ${error ? 'border-rojo-error' : 'border-gris-oscuro dark:border-gris-texto'}`}>
          <input
            id={id}
            type="text"
            value={valor}
            onChange={(e) => onCambiar(e.target.value)}
            placeholder={placeholder}
            autoComplete={autoComplete}
            inputMode={inputMode}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            className={textoEntrada}
          />
        </div>
        {error && (
          <p id={`${id}-error`} className="mt-1 text-xs text-rojo-error">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

/**
 * Campo de contraseña con botón para mostrarla u ocultarla
 * (Figma: "Formularios / Campo de contraseña estándar", íconos "Ojo abierto" y "Ojo cerrado").
 *
 * @param {Object} props - Mismas props que CampoTexto.
 */
export function CampoContrasena({ etiqueta, valor, onCambiar, placeholder, error, autoComplete = 'current-password' }) {
  const id = useId();
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex w-full flex-col gap-1">
      <label htmlFor={id} className="px-5.5 py-1 text-center text-base text-negro-primario dark:text-blanco-primario">
        {etiqueta}
      </label>
      <div className="px-2.5 py-1">
        <div className={`${entrada} ${error ? 'border-rojo-error' : 'border-gris-oscuro dark:border-blanco-primario'}`}>
          <input
            id={id}
            type={visible ? 'text' : 'password'}
            value={valor}
            onChange={(e) => onCambiar(e.target.value)}
            placeholder={placeholder}
            autoComplete={autoComplete}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${id}-error` : undefined}
            className={textoEntrada}
          />
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
            aria-pressed={visible}
            className="shrink-0 cursor-pointer"
          >
            <Icono nombre={visible ? 'ojo-cerrado' : 'ojo-abierto'} />
          </button>
        </div>
        {error && (
          <p id={`${id}-error`} className="mt-1 text-xs text-rojo-error">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
