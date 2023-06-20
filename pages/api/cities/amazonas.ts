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
      adress: "Endereço do local - Amazonas 111",
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
      name: "Tacacá da Gisela",
      description:
        "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
      adress: "Endereço do local - Amazonas 111",
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
      name: "Mercado Municipal Adolpho Lisboa",
      description:
        "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
      adress: "Endereço do local - Amazonas 111",
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
      name: "Shopping Manauara",
      description:
        "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
      adress: "Endereço do local - Amazonas 111",
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
      name: "Event 1 - Amazonia",
      description:
        "Um restaurante especializado em culinária amazônica, oferecendo pratos típicos da região, como o tacacá e o pirarucu.",
    },
    {
      name: "Event 2 - Amazonia",
      description:
        "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
    },
    {
      name: "Event 3 - Amazonia",
      description:
        "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
    },
    {
      name: "Event 4 - Amazonia",
      description:
        "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
