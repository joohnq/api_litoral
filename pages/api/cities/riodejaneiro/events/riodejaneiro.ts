const data = [
  {
    name: "Event 1 - Rio de Janeiro",
    description:
      "Um restaurante especializado em culinária amazônica, oferecendo pratos típicos da região, como o tacacá e o pirarucu.",
  },
  {
    name: "Event 2 - Rio de Janeiro",
    description:
      "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
  },
  {
    name: "Event 3 - Rio de Janeiro",
    description:
      "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
  },
  {
    name: "Event 4 - Rio de Janeiro",
    description:
      "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
  },
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
