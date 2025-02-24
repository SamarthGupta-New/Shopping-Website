import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="site logo" />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eaque
            totam maiores eveniet recusandae fuga. Tenetur officia nostrum aut
            impedit! Ut eveniet veritatis excepturi perspiciatis tenetur odit
            ducimus iure sequi.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-647-1997-0922</li>
            <li>contact@forever21.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="text-gray-300" />
        <p className="text-center  py-5 text-sm">
          Copyright 2025@ forever.com - All Rights Reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
