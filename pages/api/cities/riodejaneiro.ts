const data = {
  name: "Rio de Janeiro",
  images: [
    "https://images.pexels.com/photos/351283/pexels-photo-351283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/585758/pexels-photo-585758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1959065/pexels-photo-1959065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  tourism: [
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
  commercialGuide: [
    {
      name: "Churrascaria Carretão",
      description:
        "Um restaurante especializado em churrascos, oferecendo uma grande variedade de carnes e acompanhamentos.",
      adress: "Endereço do local - Rio de Janeiro 111",
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
      name: "Café Colombo",
      description:
        "Um tradicional café com ambiente elegante, servindo deliciosos quitutes e bebidas quentes.",
      adress: "Endereço do local - Rio de Janeiro 111",
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
      name: "Shopping Rio Sul",
      description:
        "Um shopping center moderno, com uma ampla seleção de lojas de marcas nacionais e internacionais.",
      adress: "Endereço do local - Rio de Janeiro 111",
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
      name: "Feira de Artesanato de Copacabana",
      description:
        "Uma feira popular de artesanato, onde é possível encontrar uma variedade de produtos locais e souvenirs.",
      adress: "Endereço do local - Rio de Janeiro 111",
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
      name: "Event 1 - Rio de Janeiro",
      description:
        "Um restaurante especializado em culinária amazônica, oferecendo pratos típicos da região, como o tacacá e o pirarucu.",
    },
    {
      name: "Event 2 - Rio de Janeiro",
      description:
        "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
    },
    {
      name: "Event 3 - Rio de Janeiro",
      description:
        "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
    },
    {
      name: "Event 4 - Rio de Janeiro",
      description:
        "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
