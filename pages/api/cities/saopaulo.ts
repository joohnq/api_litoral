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
      adress: "Endereço do local - São Paulo 111",
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
      name: "Mercado Municipal de São Paulo",
      description:
        "Um mercado tradicional com diversos restaurantes e barracas que oferecem comida brasileira, incluindo o famoso sanduíche de mortadela.",
      adress: "Endereço do local - São Paulo 111",
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
      name: "Shopping Iguatemi São Paulo",
      description:
        "Um dos shoppings mais luxuosos da cidade, com uma seleção exclusiva de lojas de marcas internacionais e nacionais.",
      adress: "Endereço do local - São Paulo 111",
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
      name: "Rua 25 de Março",
      description:
        "Uma movimentada rua de comércio popular, conhecida por suas diversas lojas de roupas, acessórios e itens variados a preços acessíveis.",
      adress: "Endereço do local - São Paulo 111",
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
      name: "Event 1 - São Paulo",
      description:
        "Um restaurante especializado em culinária amazônica, oferecendo pratos típicos da região, como o tacacá e o pirarucu.",
    },
    {
      name: "Event 2 - São Paulo",
      description:
        "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
    },
    {
      name: "Event 3 - São Paulo",
      description:
        "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
    },
    {
      name: "Event 4 - São Paulo",
      description:
        "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
