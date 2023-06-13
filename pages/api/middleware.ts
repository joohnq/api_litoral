import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

// Configurando o CORS
const cors = Cors({
  origin: "*", // Define a origem permitida (neste exemplo, qualquer origem)
  methods: ["GET", "POST", "PUT", "DELETE"], // Define os métodos HTTP permitidos
});

// Middleware para habilitar o CORS
export default function middleware(
  req: NextApiRequest,
  res: NextApiResponse,
  next: () => void
) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  })
    .then(() => {
      next();
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Erro ao habilitar o CORS" });
    });
}
