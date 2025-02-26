import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Components/context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setproductData] = useState(false);
  const [image, setimage] = useState("");
  const [size, setsize] = useState("");
  const [selectSize, setselectSize] = useState(false);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setproductData(item);
        setimage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Product images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-row sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((imageX, ind) => (
              <img
                onClick={() => setimage(imageX)}
                src={imageX}
                key={ind}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer "
                alt="product image"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img
              onMouseOver={() => {
                console.log("hello");
              }}
              className="w-full h-auto"
              src={image}
              alt="product image"
            />
          </div>
        </div>
        {/*-------Product Info------------ */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center mt-2 gap-1">
            <img src={assets.star_icon} alt="star" className="w-3 5" />
            <img src={assets.star_icon} alt="star" className="w-3 5" />
            <img src={assets.star_icon} alt="star" className="w-3 5" />
            <img src={assets.star_icon} alt="star" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="star" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8 ">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, ind) => {
                return (
                  <button
                    onClick={() => {
                      setsize(item);
                      setselectSize(true);
                    }}
                    className={`border py-2 px-4 ${
                      item === size ? "border-orange-500" : "border-gray-200"
                    } bg-gray-100 cursor-pointer`}
                    key={ind}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          {selectSize ? "" : <h1 className="mb-3">Choose Size</h1>}
          <button
            onClick={() => {
              selectSize ? addToCart(productData._id, size) : "";
            }}
            className="bg-black cursor-pointer text-white px-8 py-3 text-sm active:bg-gray-700 "
          >
            ADD TO CART
          </button>
          <hr className="mt-8 text-gray-300 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product</p>
            <p>COD is avilable on this product</p>
            <p>Easy Return and Exchange policy within 7 days </p>
          </div>
        </div>
      </div>
      {/* ---------Description & Review Section----------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-5 py-3 text-sm">
            Description
          </b>
          <p className="border border-gray-300 px-5 py-3 text-sm">
            Reviews(122)
          </p>
        </div>
        <div className="flex flex-col border-gray-300 gap-4 border p-6 text-sm text-gray-500">
          <p>
            bhai bhot mast mall hai apne bol rha hai lelo bus jada sochna ka
            nahi aur return bhi nahi ho to bus lelo
          </p>
          <p>
            east or west yo india is the best yo east or west yo india is the
            best you east or west yo india is the best you east or west yo india
            is the best you
          </p>
        </div>
      </div>
      {/* ------------display related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
