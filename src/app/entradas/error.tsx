
"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorProps) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-center">
      <h1 className="mb-4 text-3xl font-bold text-stone-900">
        ¡Vaya! No se han podido cargar las entradas.
      </h1>

      <p className="mb-6 text-stone-600">
        Comprueba que WordPress está funcionando e inténtalo de nuevo.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-amber-800 px-5 py-3 font-semibold text-white hover:bg-amber-900"
      >
        Volver a intentarlo
      </button>
    </main>
  );
}
