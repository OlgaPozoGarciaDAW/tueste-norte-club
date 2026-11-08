
export interface Cafe {
  slug: string;
  nombre: string;
  origen: string;
  tueste: "claro" | "medio" | "oscuro";
  notas: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

export const cafes: Cafe[] = [
  {
    slug: "guatemala",
    nombre: "Guatemala",
    origen: "Guatemala",
    tueste: "medio",
    notas: "Cacao, naranja y especias suaves.",
    descripcion:
      "Un café equilibrado y aromático, con notas de cacao y cítricos. Ideal para disfrutar de una taza dulce y agradable.",
    precio: 12.2,
    imagen: "/images/Guatemala.png",
  },
  {
    slug: "brasil",
    nombre: "Brasil",
    origen: "Brasil",
    tueste: "oscuro",
    notas: "Chocolate con leche, avellana y caramelo.",
    descripcion:
      "Un café de cuerpo intenso y sabor dulce, con matices de chocolate y frutos secos.",
    precio: 10.9,
    imagen: "/images/Brasil.png",
  },
  {
    slug: "colombia",
    nombre: "Colombia",
    origen: "Colombia",
    tueste: "medio",
    notas: "Chocolate, caramelo y frutos secos.",
    descripcion:
      "Un café redondo y equilibrado, con dulzor de caramelo y notas de chocolate.",
    precio: 11.9,
    imagen: "/images/Colombia.png",
  },
  {
    slug: "etiopia",
    nombre: "Etiopía",
    origen: "Etiopía",
    tueste: "claro",
    notas: "Frutos rojos, jazmín y cítricos.",
    descripcion:
      "Un café floral y afrutado, con una taza delicada y aromas cítricos.",
    precio: 12.5,
    imagen: "/images/Etiopia.png",
  },
];
