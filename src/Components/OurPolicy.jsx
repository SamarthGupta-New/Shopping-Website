import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img className="w-12 m-auto mb-5" src={assets.exchange_icon} alt="" />
        <p className="font-semibold">No exchange Policy</p>
        <p className="text-gray-400">Again No exchange Policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.quality_icon} alt="" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide paid return policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.support_img} alt="" />
        <p className="font-semibold">No Support</p>
        <p className="text-gray-400">We provide 24/7 zero support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
