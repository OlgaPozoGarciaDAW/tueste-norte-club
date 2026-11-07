
import Link from "next/link";

const metodos = [
  {
    slug: "v60",
    nombre: "V60",
    descripcion: "Un café limpio, aromático y lleno de matices.",
    tiempo: "3-4 minutos",
  },
  {
    slug: "prensa-francesa",
    nombre: "Prensa francesa",
    descripcion: "Un café con cuerpo, intenso y con textura.",
    tiempo: "4 minutos",
  },
  {
    slug: "espresso",
    nombre: "Espresso",
    descripcion: "Un café concentrado, intenso y equilibrado.",
    tiempo: "25-30 segundos",
  },
  {
    slug: "aeropress",
    nombre: "Aeropress",
    descripcion: "Un método versátil para preparar un café suave.",
    tiempo: "2 minutos",
  },
];

export default function MetodosPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="mb-3 text-4xl font-bold text-stone-900">
        Métodos de preparación
      </h1>

      <p className="mb-10 text-stone-600">
        Descubre diferentes formas de preparar tu café favorito.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metodos.map((metodo) => (
          <article
            key={metodo.slug}
            className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
          >
            <h2 className="mb-3 text-xl font-bold text-amber-900">
              {metodo.nombre}
            </h2>

            <p className="mb-4 text-sm leading-6 text-stone-600">
              {metodo.descripcion}
            </p>

            <p className="mb-5 text-sm font-medium text-stone-500">
              Tiempo: {metodo.tiempo}
            </p>

            <Link
              href={`/metodos/${metodo.slug}`}
              className="font-semibold text-amber-800 hover:underline"
            >
              Ver método →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
