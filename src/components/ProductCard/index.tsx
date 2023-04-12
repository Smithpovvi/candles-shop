import type { IExampleProduct } from "@customTypes/exampleProductsDto";
import Link from "next/link";
import React from "react";

interface IProductCardProps extends IExampleProduct {}

const ProductCard: React.FC<IProductCardProps> = ({
  productName,
  image,
  description,
  id,
}) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <img className="rounded-t-lg" src={image} alt="" />
    <div className="p-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {productName}
      </h5>
      <p className="mb-3 font-normal text-gray-700 text-ellipsis max-h-24 max-w-24 overflow-hidden">
        {description}
      </p>
      <Link
        href={`/product/${id}`}
        className="inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Read more
      </Link>
    </div>
  </div>
);

export default ProductCard;
