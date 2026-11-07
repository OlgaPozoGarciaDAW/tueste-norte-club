
import Link from "next/link";
import SelectorBolsas from "./components/SelectorBolsas";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf8f5] px-5 py-10 md:px-10">
      <div className="mx-auto max-w-6xl">
        <section className="mb-8">
          <p className="mb-2 font-semibold uppercase tracking-widest text-amber-800">
            Club Tueste Norte
          </p>
          <h1 className="text-3xl font-bold text-stone-900 md:text-4xl">
            ¡Hola, Marta! ☕
          </h1>
          <p className="mt-2 text-stone-600">
            Este es tu espacio de socio. Aquí tienes todo preparado para tu próximo café.
          </p>
        </section>

        <section className="mb-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">Tu plan actual</p>
            <h2 className="mt-2 text-2xl font-bold text-amber-900">
              Plan Doble
            </h2>
            <p className="mt-2 text-stone-600">2 bolsas al mes</p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">Próximo envío</p>
            <h2 className="mt-2 text-2xl font-bold text-stone-900">
              15 diciembre
            </h2>
            <p className="mt-2 text-stone-600">Tu selección mensual</p>
          </article>

          <article className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm text-stone-500">Estado de tu suscripción</p>
            <h2 className="mt-2 text-2xl font-bold text-green-700">
              Activa
            </h2>
            <p className="mt-2 text-stone-600">Todo está en orden</p>
          </article>
        </section>

        <section className="mb-8">
          <SelectorBolsas />
        </section>

        <section className="rounded-2xl bg-amber-900 p-7 text-white md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Los cafés de este mes</h2>
            <p className="mt-2 text-amber-100">
              Descubre la selección que hemos preparado para nuestros socios.
            </p>
          </div>

          <Link
            href="/cafes"
            className="mt-5 inline-block rounded-xl bg-white px-5 py-3 font-semibold text-amber-900 hover:bg-amber-50 md:mt-0"
          >
            Ver mis cafés →
          </Link>
        </section>
      </div>
    </main>
  );
}
