const data = {
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
};

export default function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
