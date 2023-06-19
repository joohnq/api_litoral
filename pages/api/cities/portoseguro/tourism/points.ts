const data = [
  {
    name: "Catedral da Sé",
    image: "https://example.com/catedral_da_se.jpg",
    description:
      "A Catedral Metropolitana de São Paulo é uma das maiores igrejas góticas do mundo, localizada no centro histórico da cidade.",
  },
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
