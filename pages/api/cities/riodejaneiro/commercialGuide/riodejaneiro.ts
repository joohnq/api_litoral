const data = [
  {
    name: "Churrascaria Carretão",
    description:
      "Um restaurante especializado em churrascos, oferecendo uma grande variedade de carnes e acompanhamentos.",
  },
  {
    name: "Café Colombo",
    description:
      "Um tradicional café com ambiente elegante, servindo deliciosos quitutes e bebidas quentes.",
  },
  {
    name: "Shopping Rio Sul",
    description:
      "Um shopping center moderno, com uma ampla seleção de lojas de marcas nacionais e internacionais.",
  },
  {
    name: "Feira de Artesanato de Copacabana",
    description:
      "Uma feira popular de artesanato, onde é possível encontrar uma variedade de produtos locais e souvenirs.",
  },
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
