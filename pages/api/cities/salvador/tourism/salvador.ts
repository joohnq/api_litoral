const data = [
  {
    category: "Monumentos",
    points: [
      {
        name: "Pelourinho",
        image: "https://example.com/pelourinho.jpg",
        description:
          "O Pelourinho é um bairro histórico conhecido por suas ruas de paralelepípedos, arquitetura colonial e igrejas barrocas.",
      },
      {
        name: "Elevador Lacerda",
        image: "https://example.com/elevador_lacerda.jpg",
        description:
          "O Elevador Lacerda é um dos principais pontos turísticos de Salvador, proporcionando uma vista panorâmica da cidade alta e baixa.",
      },
    ],
  },
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
