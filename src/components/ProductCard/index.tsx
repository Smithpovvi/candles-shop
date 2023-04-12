import CustomButton from "@components/CustomButton";
import type { IExampleProduct } from "@customTypes/exampleProductsDto";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

interface IProductCardProps extends IExampleProduct {}

const ProductCard: React.FC<IProductCardProps> = ({
  productName,
  image,
  description,
  id,
}) => {
  const router = useRouter();
  const clickHandler = useCallback(
    () => router.push(`/product/${id}`),
    [router, id]
  );
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg" src={image} alt="" />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {productName}
        </h5>
        <p className="mb-3 font-normal text-gray-700 text-ellipsis max-h-24 max-w-24 overflow-hidden">
          {description}
        </p>
        <CustomButton label="Read more" onClick={clickHandler} />
      </div>
    </div>
  );
};

export default ProductCard;
