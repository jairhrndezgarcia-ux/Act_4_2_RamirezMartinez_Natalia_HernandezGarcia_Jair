# Portal académico — Universidad Autónoma Los Búhos

Actividad 4.2 de **Diseño de Interfaces**: convertir en código el diseño de Figma de otro equipo
(*Act_3_2_LópezMartínez_JoséEduardo_DeLaCruzMendoza_Israel*). Es el portal del alumno, donde consulta
su información académica, sus calificaciones, su horario, sus cursos y sus tareas.

- **Equipo:** Natalia Ramírez Martínez y Jair Hernández García
- **Diseño original:** [Figma](https://www.figma.com/design/hjklgkx6jUp8EksHnnO9RT)

## Tecnologías

| Herramienta | Para qué |
|---|---|
| [React 19](https://react.dev) | Componentes de la interfaz |
| [Vite 8](https://vite.dev) | Servidor de desarrollo y compilación |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilos, con la paleta y las fuentes del Figma como tema |
| [React Router 7](https://reactrouter.com) | Navegación entre páginas |
| [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com) | Pruebas de componentes |
| [Oxlint](https://oxc.rs) | Revisión de código |


## Cómo correr el proyecto

```bash
npm install        # instala dependencias
npm run dev        # abre el portal en http://localhost:5173
npm test           # corre las pruebas
npm run lint       # revisa el código
npm run build      # genera la versión de producción en dist/
```

## Páginas

| Ruta | Página | Figma |
|---|---|---|
| `/` | Inicio: galería, imagen destacada, texto y carrusel de noticias | Home |
| `/login` | Inicio de sesión (simulado: valida campos y entra) | Login |
| `/info-academica` | Datos del alumno y accesos a sus secciones | Main info académica |
| `/calificaciones` | Tabla de parciales y final por materia | Calificaciones |
| `/horario` | Horario semanal | Horario |
| `/cursos` | Lista de cursos | Main Cursos |
| `/cursos/:id` | Muro del curso con tareas y anuncios | Curso |
| `/cursos/:id/anuncios/:anuncioId` | Un anuncio completo | Publicación |
| `/tareas` | Tareas pendientes, vencidas y completadas (`?estado=`) | Main Tareas |
| `/tareas/:id` | Detalle de una tarea con materiales y entrega | Tarea |

Todas las páginas tienen **modo claro y oscuro** y se adaptan a **móvil, tablet y escritorio**,
siguiendo las tres vistas del Figma (660, 980 y 1280 px).

## Estructura

```
src/
├── main.jsx            Punto de entrada
├── App.jsx             Rutas
├── index.css           Tema de Tailwind
├── components/         SOLO componentes reutilizables
│   ├── ui/             Piezas básicas (Icono, CampoTexto, Carrusel…)
│   ├── layout/         Navbar, Footer, MenuMovil…
│   └── compartidos/    Usados en 2+ páginas (TarjetaAlumno…)
├── pages/              Una carpeta por pantalla
│   └── Tareas/         Tareas.jsx + components/ propios de esa página
├── layouts/            MainLayout
├── context/            TemaContext
├── hooks/              useClicFuera
├── data/               Datos de ejemplo
├── assets/icons/       Íconos de Figma
└── test/               Pruebas con Vitest        Pruebas con Vitest y Testing Library
```


### Sistema de diseño

La paleta y las fuentes del Figma están definidas como tema de Tailwind en [`src/index.css`](src/index.css),
así que se usan con clases como `bg-negro-fondo`, `text-gris-texto` o `font-mono`:

| Color | Valor | Clase |
|---|---|---|
| Negro Fondo | `#121212` | `negro-fondo` |
| Negro Primario | `#171717` | `negro-primario` |
| Blanco Primario | `#FFFFFF` | `blanco-primario` |
| Blanco Fondo | `#FAFAFA` | `blanco-fondo` |
| Gris Oscuro | `#333333` | `gris-oscuro` |
| Gris para Texto | `#9CA3AF` | `gris-texto` |
| Gris Primario | `#D1D5DB` | `gris-primario` |
| Gris Claro | `#E5E7EB` | `gris-claro` |
| Rojo Error | `#B91C1C` | `rojo-error` |
| Azul Enlace | `#1C77C3` | `azul-enlace` |

Fuentes: **Roboto** (textos) y **Roboto Mono** (logo y nombre del curso).
El modo oscuro se activa con la clase `dark` en `<html>` y se aplica con la variante `dark:` de Tailwind.

## Componentes
Los componentes reutilizables están en `src/components` (ui, layout y compartidos). Los que solo usa una página viven en `src/pages/<Página>/components`, junto a esa página.

Cada componente está documentado con **JSDoc** en su archivo (propósito, props y comportamiento).
Este es el resumen:

### Estructura y navegación

| Componente | Propósito | Props principales |
|---|---|---|
| `Navbar` | Barra superior. En escritorio muestra el logo con nombre y los enlaces; en tablet solo el ícono; en móvil, el menú hamburguesa. | `enlaces`, `notificaciones` |
| `MenuMovil` | Botón hamburguesa con menú desplegable. | `enlaces` |
| `PanelNotificaciones` | Campana con la lista de notificaciones (con scroll). | `notificaciones`, `onSeleccionar`, `onVerTodo` |
| `BotonTema` | Cambia entre modo claro y oscuro (luna/sol). | — (usa `TemaContext`) |
| `Footer` | Pie con accesos rápidos, redes y contacto. | `enlaces`, `contacto` |
| `RedesSociales` | Íconos de Facebook, Instagram y YouTube. | `facebook`, `instagram`, `youtube` |
| `PestanasAcademicas` | Pestañas Horario / Calificaciones / Cursos / Tareas; resalta la actual. | `secciones` |
| `EncabezadoCurso` | Barra con flecha de regreso y nombre del curso. | `nombre`, `rutaRegreso` |

### Contenido

| Componente | Propósito | Props principales |
|---|---|---|
| `Icono` | Muestra un ícono de Figma en su versión clara u oscura según el tema. | `nombre`, `className`, `alt`, `respaldo` |
| `TarjetaAlumno` | Foto y datos del alumno. | `alumno`, `foto` |
| `BotonAcceso` | Botón grande con ícono hacia una sección. | `ruta`, `icono`, `etiqueta` |
| `TablaCalificaciones` | Parciales y calificación final por materia. | `materias`, `titulo`, `columnas` |
| `TablaHorario` | Horario semanal (horas × días). | `dias`, `horas`, `clases` |
| `TarjetaCurso` | Ficha de un curso con portada, nombre y profesor. | `ruta`, `nombre`, `profesor`, `portada` |
| `PublicacionTarea` / `PublicacionAnuncio` | Publicaciones del muro de un curso. | `titulo`, `fecha`, `ruta`, `texto`, `marcadores` |
| `FiltrosTareas` | Pestañas Pendientes / Vencidas / Completadas. | `filtros`, `activo`, `onCambiar` |
| `FichaTarea` | Tarea en la lista: fecha, título, curso y puntaje. | `ruta`, `fecha`, `dia`, `titulo`, `curso`, `puntos`, `total` |
| `DetalleTarea` | Instrucciones, materiales y botón para subir la tarea. | `titulo`, `cierre`, `descripcion`, `materiales`, `permiteEntrega`, `onEntregar` |
| `MarcadorImagen` | Recuadro gris con ícono de foto mientras no hay imagen. | `className`, `etiqueta` |
| `Carrusel` | Imágenes con desplazamiento y botones anterior/siguiente. | `imagenes`, `etiqueta` |

### Formularios

| Componente | Propósito | Props principales |
|---|---|---|
| `CampoTexto` | Campo con etiqueta y mensaje de error. | `etiqueta`, `valor`, `onCambiar`, `error` |
| `CampoContrasena` | Campo de contraseña con botón para mostrarla u ocultarla. | igual que `CampoTexto` |
| `SelectorOpciones` | Botón con lista desplegable de opciones. | `etiqueta`, `opciones`, `valor`, `onCambiar` |

### Cómo se integran

Las **páginas** (`pages`) toman los datos de `src/data` y se los pasan a los componentes por *props*.
`MainLayout` envuelve todas las páginas con `Navbar` y `Footer`, y `App.jsx` define las rutas. Por ejemplo,
la página de Calificaciones es:

```jsx
<TarjetaAlumno alumno={alumno} />
<PestanasAcademicas secciones={seccionesAcademicas} />
<TablaCalificaciones materias={calificaciones} />
```

Para conectar el portal a un servidor real solo habría que reemplazar los archivos de `src/data`
por llamadas a una API; los componentes no cambian.

## Pruebas

Las pruebas están en `src/test` y se corren con `npm test`. Prueban el comportamiento como lo usaría
una persona (escribir, hacer clic, leer lo que aparece en pantalla):

| Archivo | Qué prueba |
|---|---|
| `formularios.test.jsx` | Campos de texto, mostrar/ocultar contraseña, errores y selector de opciones |
| `tablas.test.jsx` | Encabezados y filas de calificaciones, "—" cuando falta una calificación, celdas del horario |
| `navegacion.test.jsx` | Modo oscuro (y que se recuerde), menú móvil, panel de notificaciones, pestaña activa |
| `paginas.test.jsx` | Validación y envío del Login, filtros de Tareas (y desde la URL), subir tarea, muro del curso y curso inexistente |

El diseño responsivo y el modo oscuro también se revisaron manualmente en el navegador a 390, 768, 980 y 1280 px.

## Flujo de trabajo

Cada paquete de cambios se trabajó en su propia rama y se integró a `main` con un *merge*:
`pagina-calificaciones`, `pagina-horario`, `pagina-cursos`, `pagina-tareas`, `pagina-login-inicio`
y `pruebas-y-documentacion`.
