import React, { useContext } from "react";
import { products } from "../assets/assets";
import { ShopContext } from "./context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ data }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link
      className="text-gray-700 hover:scale-110 ease-in-out duration-300 cursor-pointer"
      to={`/product/${data._id}`}
    >
      <div className="overflow-hidden">
        <img src={data.image[0]} alt="product image" />
      </div>
      <p className="pt-3 pb-1 text-sm">{data.name}</p>
      <p className="text-sm font-medium">
        {currency}
        {data.price}
      </p>
    </Link>
  );
};

export default ProductItem;
