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
      adress: "Endereço do local - Salvador 111",
      images: [
        "https://images.pexels.com/photos/17206891/pexels-photo-17206891/free-photo-of-floracao-florescencia-cor-pigmento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/12256804/pexels-photo-12256804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      tel: ["99999999999", "99999999999"],
      socialMedia: [
        { facebook: "https://pt-br.facebook.com/" },
        { twitter: "https://www.twitter.com" },
        { youtube: "https://www.youtube.com" },
        { pintrest: "https://www.pintrest.com" },
        { instagram: "https://www.intagram.com" },
      ],
      workHour: ["08:00 - 12:00", "13:00 - 18:00"],
      about: "About point",
      locationMap: "",
    },
    {
      name: "Restaurante Amado",
      description:
        "Um restaurante sofisticado à beira-mar, oferecendo uma fusão de culinária baiana e contemporânea.",
      adress: "Endereço do local - Salvador 111",
      images: [
        "https://images.pexels.com/photos/17206891/pexels-photo-17206891/free-photo-of-floracao-florescencia-cor-pigmento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/12256804/pexels-photo-12256804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      tel: ["99999999999", "99999999999"],
      socialMedia: [
        { facebook: "https://pt-br.facebook.com/" },
        { twitter: "https://www.twitter.com" },
        { youtube: "https://www.youtube.com" },
        { pintrest: "https://www.pintrest.com" },
        { instagram: "https://www.intagram.com" },
      ],
      workHour: ["08:00 - 12:00", "13:00 - 18:00"],
      about: "About point",
      locationMap: "",
    },
    {
      name: "Mercado Modelo",
      description:
        "Um mercado tradicional onde é possível encontrar artesanato local, roupas, souvenirs e produtos típicos da região.",
      adress: "Endereço do local - Salvador 111",
      images: [
        "https://images.pexels.com/photos/17206891/pexels-photo-17206891/free-photo-of-floracao-florescencia-cor-pigmento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/12256804/pexels-photo-12256804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      tel: ["99999999999", "99999999999"],
      socialMedia: [
        { facebook: "https://pt-br.facebook.com/" },
        { twitter: "https://www.twitter.com" },
        { youtube: "https://www.youtube.com" },
        { pintrest: "https://www.pintrest.com" },
        { instagram: "https://www.intagram.com" },
      ],
      workHour: ["08:00 - 12:00", "13:00 - 18:00"],
      about: "About point",
      locationMap: "",
    },
    {
      name: "Shopping Barra",
      description:
        "Um shopping center moderno e popular em Salvador, com uma grande variedade de lojas, restaurantes e entretenimento.",
      adress: "Endereço do local - Salvador 111",
      images: [
        "https://images.pexels.com/photos/17206891/pexels-photo-17206891/free-photo-of-floracao-florescencia-cor-pigmento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/12256804/pexels-photo-12256804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      tel: ["99999999999", "99999999999"],
      socialMedia: [
        { facebook: "https://pt-br.facebook.com/" },
        { twitter: "https://www.twitter.com" },
        { youtube: "https://www.youtube.com" },
        { pintrest: "https://www.pintrest.com" },
        { instagram: "https://www.intagram.com" },
      ],
      workHour: ["08:00 - 12:00", "13:00 - 18:00"],
      about: "About point",
      locationMap: "",
    },
  ],
  events: [
    {
      name: "Event 1 - Salvador",
      description:
        "Um restaurante especializado em culinária amazônica, oferecendo pratos típicos da região, como o tacacá e o pirarucu.",
    },
    {
      name: "Event 2 - Salvador",
      description:
        "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
    },
    {
      name: "Event 3 - Salvador",
      description:
        "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
    },
    {
      name: "Event 4 - Salvador",
      description:
        "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
