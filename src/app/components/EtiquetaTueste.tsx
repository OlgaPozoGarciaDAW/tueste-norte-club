
interface EtiquetaTuesteProps {
  nivel: 'claro' | 'medio' | 'oscuro';
}

const estilos = {
  claro: 'bg-amber-100 text-amber-900',
  medio: 'bg-orange-200 text-orange-900',
  oscuro: 'bg-stone-800 text-white',
};

const nombres = {
  claro: 'Tueste claro',
  medio: 'Tueste medio',
  oscuro: 'Tueste oscuro',
};

export default function EtiquetaTueste({ nivel }: EtiquetaTuesteProps) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${estilos[nivel]}`}>
      {nombres[nivel]}
    </span>
  );
}
