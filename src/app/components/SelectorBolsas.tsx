
"use client";

import { useState } from "react";

export default function SelectorBolsas() {
  const [bolsas, setBolsas] = useState(2);

  const precios: Record<number, number> = {
    1: 14.9,
    2: 27.9,
    3: 39.9,
    4: 49.9,
  };

  return (
    <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-bold text-stone-900">
        Personaliza tu plan
      </h2>

      <p className="mb-5 text-stone-600">
        Elige cuántas bolsas de café quieres recibir cada mes.
      </p>

      <div className="flex flex-wrap gap-3">
        {[1, 2, 3, 4].map((cantidad) => (
          <button
            key={cantidad}
            onClick={() => setBolsas(cantidad)}
            className={`rounded-xl px-5 py-3 font-semibold transition ${
              bolsas === cantidad
                ? "bg-amber-800 text-white"
                : "border border-stone-300 bg-stone-50 text-stone-800 hover:bg-amber-50"
            }`}
          >
            {cantidad} {cantidad === 1 ? "bolsa" : "bolsas"}
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-amber-50 p-4">
        <p className="text-sm text-amber-900">Tu cuota mensual</p>
        <p className="mt-1 text-3xl font-bold text-amber-950">
          {precios[bolsas].toFixed(2).replace(".", ",")} €
        </p>
      </div>

      <p className="mt-4 text-sm text-stone-500">
        Esta es una demostración. Los cambios no se guardan.
      </p>
    </section>
  );
}
