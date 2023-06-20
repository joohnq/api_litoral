const data = [
  {
    name: "Restaurante Sambass",
    description:
      "Um restaurante especializado em frutos do mar, oferecendo pratos deliciosos e uma bela vista para o mar em Porto Seguro.",
    adress: "Endereço do local - Porto Seguro 111",
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
    name: "Barramares Restaurante",
    description:
      "Um restaurante à beira-mar que serve pratos típicos da culinária baiana, com música ao vivo e um ambiente descontraído.",
    adress: "Endereço do local - Porto Seguro 111",
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
    name: "Passarela do Descobrimento",
    description:
      "Um local onde é possível encontrar lojas de artesanato, souvenirs, roupas de praia e produtos regionais em Porto Seguro.",
    adress: "Endereço do local - Porto Seguro 111",
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
    name: "Praça do Relógio",
    description:
      "Uma praça com diversas barracas de artesanato e lembranças, onde é possível encontrar produtos locais e regionais.",
    adress: "Endereço do local - Porto Seguro 111",
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
