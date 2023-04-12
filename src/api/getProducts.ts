import exampleProducts from "@static/exampleProducts";
import type { IExampleProduct } from "@customTypes/exampleProductsDto";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IExampleProduct[]>
) {
  res.status(200).json(exampleProducts);
}
