const data = [
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
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
