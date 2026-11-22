/**
 * Página temporal para secciones que todavía no se implementan.
 * @param {Object} props
 * @param {string} props.titulo - Nombre de la sección.
 */
export function EnConstruccion({ titulo }) {
  return (
    <section className="flex flex-col items-center gap-2 px-4 py-24 text-center">
      <h1 className="text-[33px]">{titulo}</h1>
      <p className="text-gris-texto">Esta sección se está implementando.</p>
    </section>
  );
}
