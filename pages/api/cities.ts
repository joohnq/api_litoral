const citiesData = {
  cities: [
    {
      name: "Rio de Janeiro",
      images: [
        "https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/585758/pexels-photo-585758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1959065/pexels-photo-1959065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      turism: [
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
      ],
      guiaComercial: [
        {
          category: "Restaurantes",
          places: [
            {
              name: "Churrascaria Carretão",
              description:
                "Um restaurante especializado em churrascos, oferecendo uma grande variedade de carnes e acompanhamentos.",
            },
            {
              name: "Café Colombo",
              description:
                "Um tradicional café com ambiente elegante, servindo deliciosos quitutes e bebidas quentes.",
            },
          ],
        },
        {
          category: "Lojas",
          places: [
            {
              name: "Shopping Rio Sul",
              description:
                "Um shopping center moderno, com uma ampla seleção de lojas de marcas nacionais e internacionais.",
            },
            {
              name: "Feira de Artesanato de Copacabana",
              description:
                "Uma feira popular de artesanato, onde é possível encontrar uma variedade de produtos locais e souvenirs.",
            },
          ],
        },
      ],
    },
    {
      name: "São Paulo",
      images: [
        "https://images.pexels.com/photos/97906/pexels-photo-97906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2065850/pexels-photo-2065850.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/45917/pexels-photo-45917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      turism: [
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
      guia_comercial_list: [
        {
          category: "Restaurantes",
          places: [
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
          ],
        },
        {
          category: "Compras",
          places: [
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
        },
      ],
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(citiesData);
}
