const data = [
  {
    category: "Monumentos",
    points: [
      {
        name: "Marco Zero",
        image: "https://example.com/marco_zero.jpg",
        description:
          "O Marco Zero é uma praça histórica e um ponto de referência importante em Recife, onde é possível encontrar monumentos e apreciar a vista para o Rio Capibaribe.",
      },
      {
        name: "Basílica e Convento de Nossa Senhora do Carmo",
        image: "https://example.com/convento_carmo.jpg",
        description:
          "A Basílica e Convento de Nossa Senhora do Carmo é uma igreja colonial com uma fachada barroca deslumbrante, localizada no centro de Recife.",
      },
    ],
  },
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
