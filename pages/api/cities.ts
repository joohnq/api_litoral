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
      guia_comercial: [
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
    {
      name: "Salvador",
      images: [
        "https://images.pexels.com/photos/12989844/pexels-photo-12989844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      turism: [
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
      ],
      guia_comercial: [
        {
          category: "Restaurantes",
          places: [
            {
              name: "Acarajé da Dinha",
              description:
                "Um famoso ponto de venda de acarajé, um quitute típico da Bahia, localizado em Salvador.",
            },
            {
              name: "Restaurante Amado",
              description:
                "Um restaurante sofisticado à beira-mar, oferecendo uma fusão de culinária baiana e contemporânea.",
            },
          ],
        },
        {
          category: "Compras",
          places: [
            {
              name: "Mercado Modelo",
              description:
                "Um mercado tradicional onde é possível encontrar artesanato local, roupas, souvenirs e produtos típicos da região.",
            },
            {
              name: "Shopping Barra",
              description:
                "Um shopping center moderno e popular em Salvador, com uma grande variedade de lojas, restaurantes e entretenimento.",
            },
          ],
        },
      ],
    },

    {
      name: "Recife",
      images: [
        "https://images.pexels.com/photos/4009955/pexels-photo-4009955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      turism: [
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
      ],
      guia_comercial: [
        {
          category: "Restaurantes",
          places: [
            {
              name: "Oficina do Sabor",
              description:
                "Um restaurante renomado que serve pratos tradicionais da culinária pernambucana, com uma atmosfera aconchegante e decoração rústica.",
            },
            {
              name: "Café São Bento",
              description:
                "Um charmoso café que oferece uma variedade de bebidas, lanches e sobremesas, localizado no bairro do Recife Antigo.",
            },
          ],
        },
        {
          category: "Compras",
          places: [
            {
              name: "Shopping Recife",
              description:
                "Um dos maiores shoppings da região, com uma ampla seleção de lojas de marcas nacionais e internacionais, além de opções de entretenimento.",
            },
            {
              name: "Rua do Bom Jesus",
              description:
                "Uma rua histórica no bairro do Recife Antigo, conhecida por suas lojas de artesanato, galerias de arte e cafés.",
            },
          ],
        },
      ],
    },

    {
      name: "Porto Seguro",
      images: [
        "https://images.pexels.com/photos/2611070/pexels-photo-2611070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      turism: [
        {
          category: "Monumentos",
          points: [
            {
              name: "Centro Histórico de Porto Seguro",
              image: "https://example.com/centro_historico.jpg",
              description:
                "O Centro Histórico de Porto Seguro é uma área preservada que abriga construções antigas, como a Igreja de Nossa Senhora da Pena e a Casa de Câmara e Cadeia.",
            },
            {
              name: "Passarela do Descobrimento",
              image: "https://example.com/passarela_descobrimento.jpg",
              description:
                "A Passarela do Descobrimento é um calçadão movimentado com lojas, bares e restaurantes, além de ser um ponto de partida para passeios de barco e visitas às praias próximas.",
            },
          ],
        },
      ],
      guia_comercial: [
        {
          category: "Restaurantes",
          places: [
            {
              name: "Restaurante Sambass",
              description:
                "Um restaurante especializado em frutos do mar, oferecendo pratos deliciosos e uma bela vista para o mar em Porto Seguro.",
            },
            {
              name: "Barramares Restaurante",
              description:
                "Um restaurante à beira-mar que serve pratos típicos da culinária baiana, com música ao vivo e um ambiente descontraído.",
            },
          ],
        },
        {
          category: "Compras",
          places: [
            {
              name: "Passarela do Descobrimento",
              description:
                "Um local onde é possível encontrar lojas de artesanato, souvenirs, roupas de praia e produtos regionais em Porto Seguro.",
            },
            {
              name: "Praça do Relógio",
              description:
                "Uma praça com diversas barracas de artesanato e lembranças, onde é possível encontrar produtos locais e regionais.",
            },
          ],
        },
      ],
    },

    {
      name: "Amazonas",
      images: [
        "https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      turism: [
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
      guia_comercial: [
        {
          category: "Restaurantes",
          places: [
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
          ],
        },
        {
          category: "Compras",
          places: [
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
        },
      ],
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(citiesData);
}
