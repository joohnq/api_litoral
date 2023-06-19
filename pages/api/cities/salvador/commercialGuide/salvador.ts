const data = [
  {
    name: "Acarajé da Dinha",
    description:
      "Um famoso ponto de venda de acarajé, um quitute típico da Bahia, localizado em Salvador.",
  },
  {
    name: "Restaurante Amado",
    description:
      "Um restaurante sofisticado à beira-mar, oferecendo uma fusão de culinária baiana e contemporânea.",
  },
  {
    name: "Mercado Modelo",
    description:
      "Um mercado tradicional onde é possível encontrar artesanato local, roupas, souvenirs e produtos típicos da região.",
  },
  {
    name: "Shopping Barra",
    description:
      "Um shopping center moderno e popular em Salvador, com uma grande variedade de lojas, restaurantes e entretenimento.",
  },
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
