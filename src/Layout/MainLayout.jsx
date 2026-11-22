/**
 Layout principal del Dashboard de monitoreo de cursos.
  Adapta la navegación entre menú lateral (escritorio/tableta) y barra inferior (móvil).
 
 @param {Object} props
 @param {React.ReactNode} props.children - Contenido dinámico de la vista actual.
 @param {string} props.seccionActiva - Identificador de la pestaña seleccionada.
 @param {Function} props.onCambiarSeccion - Función para navegar entre vistas.
 */
export function MainLayout({ children, seccionActiva, onCambiarSeccion }) {
  const menuItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'cursos', label: 'Cursos' },
    { id: 'avisos', label: 'Avisos' },
  ];

  return (
    <div className="min-h-screen bg-fondo text-texto flex flex-col md:flex-row">
      {/* Menú Lateral (Visible en Tablet y Escritorio) */}
      <aside className="hidden md:flex md:w-64 bg-primario text-white flex-col p-6 shrink-0">
        <h2 className="text-xl font-bold mb-8">Portal Docente</h2>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onCambiarSeccion(item.id)}
              className={`text-left px-4 py-2.5 rounded-lg transition cursor-pointer ${
                seccionActiva === item.id
                  ? 'bg-secundario font-semibold'
                  : 'hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Área de Contenido Principal */}
      <main className="flex-1 p-4 md:p-8 pb-20 md:pb-8 overflow-y-auto">
        {children}
      </main>

      {/* Barra de Navegación Inferior (Visible solo en Móvil) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-primario text-white flex justify-around py-3 border-t border-white/10">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onCambiarSeccion(item.id)}
            className={`text-xs font-medium px-3 py-1 rounded ${
              seccionActiva === item.id ? 'text-secundario font-bold' : 'text-white/80'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}