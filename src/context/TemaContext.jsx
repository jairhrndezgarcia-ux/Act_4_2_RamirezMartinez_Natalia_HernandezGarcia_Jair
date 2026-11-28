import { createContext, useContext, useEffect, useState } from 'react';

const TemaContext = createContext(null);

/**
 * Proveedor del tema (claro/oscuro) de la aplicación.
 * Guarda la preferencia en localStorage y agrega/quita la clase `dark` en <html>,
 * que es la que activa las variantes `dark:` de Tailwind.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 */
export function TemaProvider({ children }) {
  const [tema, setTema] = useState(() =>
    localStorage.getItem('tema') === 'oscuro' ? 'oscuro' : 'claro',
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', tema === 'oscuro');
    localStorage.setItem('tema', tema);
  }, [tema]);

  const alternarTema = () => setTema((t) => (t === 'oscuro' ? 'claro' : 'oscuro'));

  return (
    <TemaContext.Provider value={{ tema, alternarTema }}>{children}</TemaContext.Provider>
  );
}

/**
 * Hook para leer el tema actual y alternarlo.
 * @returns {{ tema: 'claro' | 'oscuro', alternarTema: () => void }}
 */
// eslint-disable-next-line react/only-export-components
export function useTema() {
  const ctx = useContext(TemaContext);
  if (!ctx) throw new Error('useTema debe usarse dentro de <TemaProvider>');
  return ctx;
}
