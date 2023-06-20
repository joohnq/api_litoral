const data = {
  name: "Porto Seguro",
  images: [
    "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  tourism: [
    {
      category: "Monumentos",
      points: [
        {
          name: "Centro Histórico de Porto Seguro",
          image: "https://example.com/centro_historico.jpg",
          description:
            "O Centro Histórico de Porto Seguro é uma área preservada que abriga construções antigas, como a Igreja de Nossa Senhora da Pena e a Casa de Câmara e Cadeia.",
        },
        {
          name: "Passarela do Descobrimento",
          image: "https://example.com/passarela_descobrimento.jpg",
          description:
            "A Passarela do Descobrimento é um calçadão movimentado com lojas, bares e restaurantes, além de ser um ponto de partida para passeios de barco e visitas às praias próximas.",
        },
      ],
    },
  ],
  commercialGuide: [
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
  ],
  events: [
    {
      name: "Event 1 - Porto Seguro",
      description:
        "Um restaurante especializado em culinária amazônica, oferecendo pratos típicos da região, como o tacacá e o pirarucu.",
    },
    {
      name: "Event 2 - Porto Seguro",
      description:
        "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
    },
    {
      name: "Event 3 - Porto Seguro",
      description:
        "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
    },
    {
      name: "Event 4 - Porto Seguro",
      description:
        "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
