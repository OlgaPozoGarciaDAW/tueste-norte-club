
import Link from "next/link";
import { notFound } from "next/navigation";

const metodos = [
  {
    slug: "v60",
    nombre: "V60",
    descripcion: "Un café limpio, aromático y lleno de matices.",
    tiempo: "3-4 minutos",
    preparacion: "Coloca un filtro de papel, añade el café molido y vierte el agua caliente poco a poco con movimientos circulares.",
  },
  {
    slug: "prensa-francesa",
    nombre: "Prensa francesa",
    descripcion: "Un café con cuerpo, intenso y con textura.",
    tiempo: "4 minutos",
    preparacion: "Añade el café molido grueso, vierte agua caliente, deja reposar cuatro minutos y baja lentamente el émbolo.",
  },
  {
    slug: "espresso",
    nombre: "Espresso",
    descripcion: "Un café concentrado, intenso y equilibrado.",
    tiempo: "25-30 segundos",
    preparacion: "Utiliza café molido fino, distribúyelo en el portafiltro y extrae el café con una máquina espresso.",
  },
  {
    slug: "aeropress",
    nombre: "Aeropress",
    descripcion: "Un método versátil para preparar un café suave.",
    tiempo: "2 minutos",
    preparacion: "Coloca el café y el agua caliente en la Aeropress, remueve y presiona suavemente para extraer el café.",
  },
];

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DetalleMetodo({ params }: Props) {
  const { slug } = await params;

  const metodo = metodos.find((item) => item.slug === slug);

  if (!metodo) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/metodos"
        className="mb-8 inline-block font-semibold text-amber-800 hover:underline"
      >
        ← Volver a los métodos
      </Link>

      <article className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-bold uppercase tracking-widest text-amber-800">
          Método de preparación
        </p>

        <h1 className="mb-6 text-4xl font-bold text-stone-900">
          {metodo.nombre}
        </h1>

        <p className="mb-6 text-lg text-stone-600">
          {metodo.descripcion}
        </p>

        <div className="mb-6 rounded-xl bg-amber-50 p-5">
          <p className="font-semibold text-amber-900">
            Tiempo de preparación: {metodo.tiempo}
          </p>
        </div>

        <h2 className="mb-3 text-2xl font-bold text-stone-900">
          Cómo prepararlo
        </h2>

        <p className="leading-7 text-stone-600">
          {metodo.preparacion}
        </p>
      </article>
    </main>
  );
}
