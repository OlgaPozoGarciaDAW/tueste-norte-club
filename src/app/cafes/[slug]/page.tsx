
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cafes } from "../../data/cafes";
import EtiquetaTueste from "../../components/EtiquetaTueste";

export function generateStaticParams() {
  return cafes.map((cafe) => ({
    slug: cafe.slug,
  }));
}

export default async function CafeDetalle({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cafe = cafes.find((item) => item.slug === slug);

  if (!cafe) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <Link
        href="/cafes"
        className="text-sm font-semibold text-amber-800 hover:text-amber-950"
      >
        ← Volver al catálogo
      </Link>

      <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
        <div className="relative min-h-80 overflow-hidden rounded-2xl bg-white">
          <Image
            src={cafe.imagen}
            alt={`Café ${cafe.nombre}`}
            fill
            className="object-contain p-5"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-amber-800">
            Café de origen
          </p>

          <h1 className="mt-3 text-4xl font-bold text-stone-900">
            {cafe.nombre}
          </h1>

          <p className="mt-2 text-stone-500">
            Origen: {cafe.origen}
          </p>

          <div className="mt-5">
            <EtiquetaTueste nivel={cafe.tueste} />
          </div>

          <h2 className="mt-7 text-lg font-bold text-stone-900">
            Notas de cata
          </h2>

          <p className="mt-2 leading-7 text-stone-600">
            {cafe.notas}
          </p>

          <p className="mt-5 leading-7 text-stone-600">
            {cafe.descripcion}
          </p>

          <p className="mt-7 text-3xl font-bold text-amber-900">
            {cafe.precio.toFixed(2).replace(".", ",")} €
          </p>
        </div>
      </div>
    </main>
  );
}
