const data = {
  name: "Recife",
  images: [
    "https://images.pexels.com/photos/4009955/pexels-photo-4009955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ],
  tourism: [
    {
      category: "Monumentos",
      points: [
        {
          name: "Marco Zero",
          image: "https://example.com/marco_zero.jpg",
          description:
            "O Marco Zero é uma praça histórica e um ponto de referência importante em Recife, onde é possível encontrar monumentos e apreciar a vista para o Rio Capibaribe.",
        },
        {
          name: "Basílica e Convento de Nossa Senhora do Carmo",
          image: "https://example.com/convento_carmo.jpg",
          description:
            "A Basílica e Convento de Nossa Senhora do Carmo é uma igreja colonial com uma fachada barroca deslumbrante, localizada no centro de Recife.",
        },
      ],
    },
  ],
  commercialGuide: [
    {
      name: "Oficina do Sabor",
      description:
        "Um restaurante renomado que serve pratos tradicionais da culinária pernambucana, com uma atmosfera aconchegante e decoração rústica.",
    },
    {
      name: "Café São Bento",
      description:
        "Um charmoso café que oferece uma variedade de bebidas, lanches e sobremesas, localizado no bairro do Recife Antigo.",
    },
    {
      name: "Shopping Recife",
      description:
        "Um dos maiores shoppings da região, com uma ampla seleção de lojas de marcas nacionais e internacionais, além de opções de entretenimento.",
    },
    {
      name: "Rua do Bom Jesus",
      description:
        "Uma rua histórica no bairro do Recife Antigo, conhecida por suas lojas de artesanato, galerias de arte e cafés.",
    },
  ],
  events: [
    {
      name: "Event 1 - Recife",
      description:
        "Um restaurante especializado em culinária amazônica, oferecendo pratos típicos da região, como o tacacá e o pirarucu.",
    },
    {
      name: "Event 2 - Recife",
      description:
        "Um ponto de venda de tacacá, uma sopa quente de origem indígena, servido com camarão, jambu e tucupi, em Manaus.",
    },
    {
      name: "Event 3 - Recife",
      description:
        "Um mercado tradicional onde é possível encontrar produtos locais, como frutas, peixes, ervas medicinais, artesanato e lembranças.",
    },
    {
      name: "Event 4 - Recife",
      description:
        "Um dos principais shoppings de Manaus, com uma variedade de lojas, restaurantes e opções de entretenimento.",
    },
  ],
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
