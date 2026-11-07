
'use client';

import { useState } from 'react';

interface BotonFavoritoProps {
  nombre: string;
}

export default function BotonFavorito({ nombre }: BotonFavoritoProps) {
  const [favorito, setFavorito] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFavorito(!favorito)}
      aria-pressed={favorito}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
        favorito
          ? 'bg-amber-100 text-amber-900'
          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
      }`}
    >
      {favorito ? '★ En favoritos' : '☆ Añadir a favoritos'}
      <span className="sr-only">: {nombre}</span>
    </button>
  );
}
