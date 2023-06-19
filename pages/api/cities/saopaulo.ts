const data = {
  name: "São Paulo",
  images: [
    "https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2065850/pexels-photo-2065850.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  tourism: [
    {
      category: "Monumentos",
      points: [
        {
          name: "Catedral da Sé",
          image: "https://example.com/catedral_da_se.jpg",
          description:
            "A Catedral Metropolitana de São Paulo é uma das maiores igrejas góticas do mundo, localizada no centro histórico da cidade.",
        },
      ],
    },
  ],
  commercialGuide: [
    {
      name: "D.O.M.",
      description:
        "Um premiado restaurante com estrelas Michelin, famoso por sua cozinha contemporânea e ingredientes brasileiros.",
    },
    {
      name: "Mercado Municipal de São Paulo",
      description:
        "Um mercado tradicional com diversos restaurantes e barracas que oferecem comida brasileira, incluindo o famoso sanduíche de mortadela.",
    },
    {
      name: "Shopping Iguatemi São Paulo",
      description:
        "Um dos shoppings mais luxuosos da cidade, com uma seleção exclusiva de lojas de marcas internacionais e nacionais.",
    },
    {
      name: "Rua 25 de Março",
      description:
        "Uma movimentada rua de comércio popular, conhecida por suas diversas lojas de roupas, acessórios e itens variados a preços acessíveis.",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}