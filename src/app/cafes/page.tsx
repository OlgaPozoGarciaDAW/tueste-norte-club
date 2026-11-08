
import Image from "next/image";
import Link from "next/link";
import { cafes } from "../data/cafes";
import EtiquetaTueste from "../components/EtiquetaTueste";

export default function CafesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-10">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-amber-800">
          Selección mensual
        </p>

        <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
          Nuestros cafés de origen
        </h1>

        <p className="mt-3 max-w-2xl text-stone-600">
          Descubre los cafés que hemos seleccionado este mes para los socios
          de TuesteNorte.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {cafes.map((cafe) => (
          <article
            key={cafe.slug}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="relative h-52 bg-stone-100">
              <Image
                src={cafe.imagen}
                alt={`Café de origen ${cafe.nombre}`}
                fill
                className="object-contain p-3"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            <div className="p-5">
              <p className="text-sm text-stone-500">{cafe.origen}</p>

              <h2 className="mt-1 text-xl font-bold text-stone-900">
                {cafe.nombre}
              </h2>

              <div className="mt-3">
                <EtiquetaTueste nivel={cafe.tueste} />
              </div>

              <p className="mt-4 text-sm leading-6 text-stone-600">
                {cafe.notas}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-lg font-bold text-amber-900">
                  {cafe.precio.toFixed(2).replace(".", ",")} €
                </span>

                <Link
                  href={`/cafes/${cafe.slug}`}
                  className="text-sm font-semibold text-amber-800 hover:text-amber-950"
                >
                  Ver café →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
