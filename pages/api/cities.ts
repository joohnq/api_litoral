const citiesData = {
  cities: [
    {
      name: "Rio de Janeiro",
      images: [
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F98%2FCidade_Maravilhosa.jpg%2F1200px-Cidade_Maravilhosa.jpg&tbnid=j57iYGMGqn2lhM&vet=12ahUKEwjo67aA8bH_AhWKNbkGHRJlDtEQMygAegUIARDeAQ..i&imgrefurl=https%3A%2F%2Fpt.wikipedia.org%2Fwiki%2FRio_de_Janeiro&docid=bXOtYyNieVabJM&w=1200&h=641&q=rio%20de%20janeiro&ved=2ahUKEwjo67aA8bH_AhWKNbkGHRJlDtEQMygAegUIARDeAQ",
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.melhoresdestinos.com.br%2Fwp-content%2Fuploads%2F2019%2F08%2Frio-de-janeiro-capa2019-01.jpg&tbnid=SdseD1cSfr9_eM&vet=12ahUKEwjo67aA8bH_AhWKNbkGHRJlDtEQMygBegUIARDgAQ..i&imgrefurl=https%3A%2F%2Fwww.melhoresdestinos.com.br%2Fo-que-fazer-no-rio-de-janeiro.html&docid=i9puac04oLqJMM&w=1640&h=860&itg=1&q=rio%20de%20janeiro&ved=2ahUKEwjo67aA8bH_AhWKNbkGHRJlDtEQMygBegUIARDgAQ",
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.mnstatic.com%2F08%2F7d%2F087dfd415e06b0651f4528fea6642818.jpg&tbnid=MLORMJLVEuAgtM&vet=12ahUKEwjo67aA8bH_AhWKNbkGHRJlDtEQMygEegUIARDmAQ..i&imgrefurl=https%3A%2F%2Fwww.minube.com.br%2Fsitio-preferido%2Frio-de-janeiro-a151&docid=xR41ftcjkyq1aM&w=1024&h=768&q=rio%20de%20janeiro&ved=2ahUKEwjo67aA8bH_AhWKNbkGHRJlDtEQMygEegUIARDmAQ",
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
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.visitbrasil.com%2Fwp-content%2Fuploads%2F2021%2F06%2FGettyImages-1166728645-1.jpg&tbnid=jOGQ4zszgGumWM&vet=12ahUKEwiyy4yS8bH_AhUPOLkGHVhBBWIQMygAegUIARDhAQ..i&imgrefurl=https%3A%2F%2Fwww.visitbrasil.com%2Fpt%2Fdestino-sao-paulo-sp-2%2F&docid=d_8nc7iOv61WrM&w=2000&h=1499&q=sao%20paulo&ved=2ahUKEwiyy4yS8bH_AhUPOLkGHVhBBWIQMygAegUIARDhAQ",
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.nationalgeographicbrasil.com%2Ffiles%2Fstyles%2Fimage_3200%2Fpublic%2Fnationalgeographic2755922.jpg%3Fw%3D1900%26h%3D1268&tbnid=u2j9Yfg8nJUjoM&vet=12ahUKEwiyy4yS8bH_AhUPOLkGHVhBBWIQMygKegUIARD4AQ..i&imgrefurl=https%3A%2F%2Fwww.nationalgeographicbrasil.com%2Fcultura%2F2023%2F01%2Faniversario-de-sao-paulo-veja-10-curiosidades-sobre-a-maior-metropole-brasileira&docid=xH7jlcfjFQ70BM&w=1900&h=1268&q=sao%20paulo&ved=2ahUKEwiyy4yS8bH_AhUPOLkGHVhBBWIQMygKegUIARD4AQ",
        "https://www.google.com/imgres?imgurl=https%3A%2F%2Fblog.123milhas.com%2Fwp-content%2Fuploads%2F2022%2F04%2Fconheca-estado-sao-paulo-conexao123-3.jpg&tbnid=trBkDA88Gw3HjM&vet=12ahUKEwiyy4yS8bH_AhUPOLkGHVhBBWIQMygMegUIARD8AQ..i&imgrefurl=https%3A%2F%2Fblog.123milhas.com%2Fsao-paulo%2F&docid=acH2ODlJG5a8JM&w=1920&h=1077&q=sao%20paulo&ved=2ahUKEwiyy4yS8bH_AhUPOLkGHVhBBWIQMygMegUIARD8AQ",
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
