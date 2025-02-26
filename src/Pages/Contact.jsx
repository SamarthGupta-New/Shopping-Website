import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import NewletterBox from "../Components/NewletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-gray-200 ">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contact_img}
          alt="contact img"
        />
        <div className="flex justify-center flex-col items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            La Citadelle,2125 Rue St Marc
            <br />
            Montreal, QC H3H 2P1,Canada
          </p>
          <p className="text-gray-500">
            Tel:(514)-1997-0922 <br />
            Email:admin@forever21.com
          </p>
          <p className="font-semibold cursor-pointer text-gray-600">Careers</p>
        </div>
      </div>
      <NewletterBox />
    </div>
  );
};

export default Contact;
