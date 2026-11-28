import { useState } from 'react';
import { useNavigate } from 'react-router';
import { CampoContrasena, CampoTexto } from '../../components/ui/CampoTexto';
import { Icono } from '../../components/ui/Icono';
import { SelectorOpciones } from '../../components/ui/SelectorOpciones';

const semestres = ['2026-B', '2026-A', '2025-B', '2025-A'];

/**
 * Página "Inicio de sesión" (Figma: "Login / Desktop 1280" y "Pantallas / Inicio de sesión").
 * Selector de semestre, clave única y contraseña. Es una simulación: valida que los
 * campos no estén vacíos y lleva a Información Académica (no hay servidor real).
 */
export function Login() {
  const navegar = useNavigate();
  const [semestre, setSemestre] = useState();
  const [clave, setClave] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({});

  const enviar = (e) => {
    e.preventDefault();
    const nuevos = {};
    if (!semestre) nuevos.semestre = 'Selecciona tu semestre.';
    if (!/^\d{6,}$/.test(clave.trim())) nuevos.clave = 'Escribe tu clave única (solo números).';
    if (!contrasena) nuevos.contrasena = 'Escribe tu contraseña.';
    setErrores(nuevos);
    if (Object.keys(nuevos).length === 0) navegar('/info-academica');
  };

  return (
    <div className="flex flex-col items-center gap-2.75 px-4 pt-2.75 pb-2.75">
      <h1 className="text-2xl font-bold lg:text-[33px] lg:font-normal">Inicio de sesión</h1>

      <form
        onSubmit={enviar}
        noValidate
        className="flex min-h-92.5 w-full max-w-156 flex-wrap content-center items-center justify-center p-2.5"
      >
        <div className="flex w-58 flex-col items-center p-2.5 md:h-48.75">
          <SelectorOpciones
            etiqueta="Selecciona tu semestre"
            opciones={semestres}
            valor={semestre}
            onCambiar={setSemestre}
          />
          {errores.semestre && <p className="mt-1 text-xs text-rojo-error">{errores.semestre}</p>}
        </div>

        <div className="flex w-75.75 flex-col items-center justify-center gap-4">
          <CampoTexto
            etiqueta="Clave única"
            valor={clave}
            onCambiar={setClave}
            placeholder="Inserta tu clave única..."
            autoComplete="username"
            inputMode="numeric"
            error={errores.clave}
          />
          <CampoContrasena
            etiqueta="Contraseña"
            valor={contrasena}
            onCambiar={setContrasena}
            placeholder="Ingresa tu contraseña..."
            error={errores.contrasena}
          />
          <button
            type="submit"
            className="flex h-11 cursor-pointer items-center gap-1.5 border border-negro-primario bg-blanco-fondo pr-5.5 pl-3.5 text-sm text-negro-primario hover:bg-gris-claro dark:border-blanco-primario dark:bg-negro-fondo dark:text-blanco-primario dark:hover:bg-gris-oscuro"
          >
            <Icono nombre="informacion" />
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}
