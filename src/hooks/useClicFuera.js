import { useEffect } from 'react';

/**
 * Ejecuta `alSalir` cuando el usuario hace clic fuera del elemento referenciado
 * o presiona Escape. Se usa para cerrar menús desplegables.
 *
 * @param {React.RefObject<HTMLElement>} ref - Elemento que contiene el menú.
 * @param {boolean} activo - Solo escucha eventos mientras el menú está abierto.
 * @param {() => void} alSalir - Función que cierra el menú.
 */
export function useClicFuera(ref, activo, alSalir) {
  useEffect(() => {
    if (!activo) return;
    const alClic = (e) => {
      if (ref.current && !ref.current.contains(e.target)) alSalir();
    };
    const alTecla = (e) => {
      if (e.key === 'Escape') alSalir();
    };
    document.addEventListener('mousedown', alClic);
    document.addEventListener('keydown', alTecla);
    return () => {
      document.removeEventListener('mousedown', alClic);
      document.removeEventListener('keydown', alTecla);
    };
  }, [ref, activo, alSalir]);
}
