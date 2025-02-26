import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Components/context/ShopContext";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";

import { ImBin } from "react-icons/im";

const Cart = () => {
  const { products, currency, cartItems, navigate, updateQuantity } =
    useContext(ShopContext);

  const [cartData, setcartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setcartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14 ">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, ind) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={ind}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt="product image"
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency} {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border border-gray-200 bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => {
                  updateQuantity(
                    item._id,
                    item.size,
                    Math.floor(e.target.value)
                  );
                }}
                className="max-w-10 border border-gray-200 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <ImBin
                onClick={() => {
                  updateQuantity(item._id, item.size, 0);
                }}
                className=" mr-4 sm:w-5 sm:h-5 w-4 h-4 hover:text-red-600 cursor-pointer"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black cursor-pointer text-white text-sm my-8 py-3 px-8"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
