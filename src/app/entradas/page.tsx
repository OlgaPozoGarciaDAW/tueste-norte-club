
interface Entrada {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
}

export default async function EntradasPage() {
  const res = await fetch(
    "http://localhost/tueste-norte-wp/wp-json/wp/v2/posts?per_page=5",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("No se pudieron cargar las entradas de WordPress");
  }

  const entradas: Entrada[] = await res.json();

  // La petición no aparece en Network del navegador porque el fetch
  // se ejecuta en el servidor de Next.js, no en el navegador del usuario.

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="mb-3 text-4xl font-bold text-stone-900">
        Últimas entradas del blog
      </h1>

      <p className="mb-8 text-stone-600">
        Noticias y consejos de Tueste Norte.
      </p>

      <div className="space-y-4">
        {entradas.map((entrada) => (
          <article
            key={entrada.id}
            className="rounded-xl border border-stone-200 bg-white p-5 shadow-sm"
          >
            <h2 className="text-xl font-bold text-amber-900">
              {entrada.title.rendered}
            </h2>

            <p className="mt-2 text-sm text-stone-500">
              {new Date(entrada.date).toLocaleDateString("es-ES")}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
