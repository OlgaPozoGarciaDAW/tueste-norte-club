
import Link from "next/link";
import { cafes } from "../data/cafes";
import EtiquetaTueste from "../components/EtiquetaTueste";

export default function CafesPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="font-semibold uppercase tracking-widest text-amber-800">
          Club Tueste Norte
        </p>

        <h1 className="mt-2 text-3xl font-bold text-stone-900">
          Los cafés del mes
        </h1>

        <p className="mb-8 mt-2 text-stone-600">
          Una selección especial preparada para nuestros socios.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cafes.map((cafe) => (
            <article
              key={cafe.slug}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-amber-800">
                {cafe.origen}
              </p>

              <h2 className="mb-3 mt-2 text-2xl font-bold text-stone-900">
                {cafe.nombre}
              </h2>

              <p className="mb-5 min-h-12 text-stone-600">
                {cafe.notas}
              </p>

              <EtiquetaTueste nivel={cafe.tueste} />

              <div className="mt-6 flex items-center justify-between gap-3">
                <span className="font-bold text-amber-900">
                  {cafe.precio.toFixed(2).replace(".", ",")} €
                </span>

                <Link
                  href={`/cafes/${cafe.slug}`}
                  className="font-semibold text-amber-800 hover:underline"
                >
                  Ver café →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
