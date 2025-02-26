import React, { useContext } from "react";
import { ShopContext } from "./context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  // Ensure getCartAmount is callable and has a valid value
  const cartAmount = getCartAmount ? getCartAmount() : 0;

  return (
    <div className="w-full">
      {cartAmount > 0 ? (
        <>
          <div className="text-2xl">
            <Title text1={"CART"} text2={"TOTALS"} />
          </div>
          <div className="flex flex-col gap-2 mt-2 text-sm">
            <div className="flex justify-between">
              <p>SubTotal</p>
              <p>
                {currency}
                {cartAmount}
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Shipping Fee</p>
              <p>
                {currency}
                {delivery_fee}
              </p>
            </div>
            <hr />
            <div className="flex justify-between">
              <b>Total</b>
              <b>
                {currency}
                {cartAmount + delivery_fee}
              </b>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-start items-center">
          <p className="text-xl">No Items in Cart</p>
        </div>
      )}
    </div>
  );
};

export default CartTotal;
