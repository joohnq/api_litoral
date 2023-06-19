const data = {
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
