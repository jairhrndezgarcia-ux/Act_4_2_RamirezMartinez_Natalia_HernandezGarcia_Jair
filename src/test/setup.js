import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// Limpia el DOM, el tema guardado y la clase `dark` entre pruebas.
afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.classList.remove('dark');
});

// jsdom no implementa scrollIntoView (lo usa el carrusel).
Element.prototype.scrollIntoView ??= function scrollIntoView() {};
