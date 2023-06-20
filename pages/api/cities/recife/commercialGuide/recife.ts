const data = [
  {
    name: "Oficina do Sabor",
    description:
      "Um restaurante renomado que serve pratos tradicionais da culinária pernambucana, com uma atmosfera aconchegante e decoração rústica.",
    adress: "Endereço do local - Recife 111",
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
    name: "Café São Bento",
    description:
      "Um charmoso café que oferece uma variedade de bebidas, lanches e sobremesas, localizado no bairro do Recife Antigo.",
    adress: "Endereço do local - Recife 111",
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
    name: "Shopping Recife",
    description:
      "Um dos maiores shoppings da região, com uma ampla seleção de lojas de marcas nacionais e internacionais, além de opções de entretenimento.",
    adress: "Endereço do local - Recife 111",
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
    name: "Rua do Bom Jesus",
    description:
      "Uma rua histórica no bairro do Recife Antigo, conhecida por suas lojas de artesanato, galerias de arte e cafés.",
    adress: "Endereço do local - Recife 111",
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
