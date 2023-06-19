const data = [
  {
    name: "Restaurante Sambass",
    description:
      "Um restaurante especializado em frutos do mar, oferecendo pratos deliciosos e uma bela vista para o mar em Porto Seguro.",
  },
  {
    name: "Barramares Restaurante",
    description:
      "Um restaurante à beira-mar que serve pratos típicos da culinária baiana, com música ao vivo e um ambiente descontraído.",
  },
  {
    name: "Passarela do Descobrimento",
    description:
      "Um local onde é possível encontrar lojas de artesanato, souvenirs, roupas de praia e produtos regionais em Porto Seguro.",
  },
  {
    name: "Praça do Relógio",
    description:
      "Uma praça com diversas barracas de artesanato e lembranças, onde é possível encontrar produtos locais e regionais.",
  },
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
