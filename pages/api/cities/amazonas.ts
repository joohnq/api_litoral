const data = {
  name: "Amazonas",
  images: [
    "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  tourism: [
    {
      category: "Monumentos",
      points: [
        {
          name: "Teatro Amazonas",
          image: "https://example.com/teatro_amazonas.jpg",
          description:
            "O Teatro Amazonas é um icônico teatro de ópera localizado no coração de Manaus, conhecido por sua arquitetura neoclássica e sua cúpula coberta de azulejos.",
        },
        {
          name: "Encontro das Águas",
          image: "https://example.com/encontro_aguas.jpg",
          description:
            "O Encontro das Águas é um fenômeno natural onde os rios Negro e Solimões se encontram, formando uma impressionante divisão de águas com diferentes cores.",
        },
      ],
    },
  ],
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
  events: [
    {
      name: "Event 1 - Amazonas",
      description:
        "Um restaurante especializado em culinária amazônica, oferecendo pratos típicos da região, como o tacacá e o pirarucu.",
    },
    {
      name: "Event 2 - Amazonas",
      description:
        "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
    },
    {
      name: "Event 3 - Amazonas",
      description:
        "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
    },
    {
      name: "Event 4 - Amazonas",
      description:
        "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
