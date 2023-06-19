const data = [
  {
    category: "Monumentos",
    points: [
      {
        name: "Cristo Redentor",
        image: "https://example.com/cristo_redentor.jpg",
        description:
          "Uma das Sete Maravilhas do Mundo Moderno, o Cristo Redentor é um famoso monumento no topo do morro do Corcovado, no Rio de Janeiro.",
      },
    ],
  },
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
