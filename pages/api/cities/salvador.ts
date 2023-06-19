const data = {
  name: "Salvador",
  images: [
    "https://images.pexels.com/photos/12989844/pexels-photo-12989844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  tourism: [
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
  commercialGuide: [
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
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
