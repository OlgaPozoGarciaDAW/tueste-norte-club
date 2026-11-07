
import Link from "next/link";
import { notFound } from "next/navigation";
import { cafes } from "../../data/cafes";
import EtiquetaTueste from "@/app/components/EtiquetaTueste";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function DetalleCafe({ params }: Props) {
  const { slug } = await params;
  const cafe = cafes.find((item) => item.slug === slug);

  if (!cafe) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf8f5] px-5 py-12 md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/cafes"
          className="mb-8 inline-block font-semibold text-amber-800 hover:underline"
        >
          ← Volver a los cafés
        </Link>

        <article className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
          <p className="font-semibold uppercase tracking-widest text-amber-800">
            {cafe.origen}
          </p>

          <h1 className="mb-5 mt-2 text-4xl font-bold text-stone-900">
            Café {cafe.nombre}
          </h1>

          <EtiquetaTueste nivel={cafe.tueste} />

          <div className="my-7 rounded-xl bg-amber-50 p-5">
            <p className="font-semibold text-amber-900">
              Notas de cata
            </p>
            <p className="mt-2 text-stone-700">{cafe.notas}</p>
          </div>

          <h2 className="mb-3 text-2xl font-bold text-stone-900">
            Sobre este café
          </h2>

          <p className="leading-7 text-stone-600">
            {cafe.descripcion}
          </p>

          <p className="mt-8 text-2xl font-bold text-amber-900">
            {cafe.precio.toFixed(2).replace(".", ",")} €
          </p>
        </article>
      </div>
    </main>
  );
}
