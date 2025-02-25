import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setrelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productCopy = products.slice();
      productCopy = productCopy.filter(
        (product) => category === product.category
      );
      productCopy = productCopy.filter(
        (product) => subCategory === product.subCategory
      );
      console.log(productCopy.slice(0, 5));
    }
  }, [products]);

  return <div>RelatedProducts</div>;
};

export default RelatedProducts;
