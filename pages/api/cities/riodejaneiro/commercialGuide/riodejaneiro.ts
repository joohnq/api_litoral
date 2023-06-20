const data = [
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
];

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
