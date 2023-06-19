const data = {
  commercialGuide: [
    {
      name: "Banzeiro",
      description:
        "Um restaurante especializado em culinária amazônica, oferecendo pratos típicos da região, como o tacacá e o pirarucu.",
    },
    {
      name: "Tacacá da Gisela",
      description:
        "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
    },
    {
      name: "Mercado Municipal Adolpho Lisboa",
      description:
        "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
    },
    {
      name: "Shopping Manauara",
      description:
        "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
