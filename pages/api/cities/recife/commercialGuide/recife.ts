const data = {
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
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
