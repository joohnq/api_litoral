const data = [
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
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
