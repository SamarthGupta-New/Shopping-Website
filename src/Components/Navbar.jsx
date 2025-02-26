import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { ShopContext } from "./context/ShopContext";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isVisible, setisVisible] = useState(false);
  const [searchIcon, setsearchIcon] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const paths = ["men", "women", "kids", "collection"];
    if (paths.some((path) => location.pathname.includes(path))) {
      setsearchIcon(true);
    } else {
      setsearchIcon(false);
    }
  }, [location]);

  const { setshowSearch, showSearch, getCartCount } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link className="cursor-pointer" to="/">
        <img src={assets.logo} className="w-36" alt={"site logo"} />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to={"/"} className="flex flex-col gap-1 items-center">
          <p>Home</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        {/* <NavLink
          to={"/collection"}
          className="flex  flex-col gap-1 items-center"
        >
          <p>Collection</p>
          <hr className="w-3/4  border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> */}
        <NavLink to={"/men"} className="flex  flex-col gap-1 items-center">
          <p>Men</p>
          <hr className="w-3/4  border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/women"} className="flex  flex-col gap-1 items-center">
          <p>Women</p>
          <hr className="w-3/4  border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/kids"} className="flex  flex-col gap-1 items-center">
          <p>Kids</p>
          <hr className="w-3/4  border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/about"} className="flex flex-col gap-1 items-center">
          <p>About</p>
          <hr className="  w-3/4 hidden  border-none h-[1.5px] bg-gray-700 " />
        </NavLink>
        <NavLink to={"/contact"} className="flex flex-col gap-1 items-center">
          <p>Contact</p>
          <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        {searchIcon ? (
          <img
            onClick={() => {
              setshowSearch(!showSearch);
            }}
            src={assets.search_icon}
            alt={"search icon"}
            className="w-5 cursor-pointer"
          />
        ) : (
          ""
        )}
        <div className="group relative">
          <Link to="/login">
            <img
              className="w-5 cursor-pointer"
              src={assets.profile_icon}
              alt={"profile icon"}
            />
          </Link>
          {/* dropdown */}
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 ">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square text-[8px] rounded-full">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => {
            setisVisible(true);
          }}
          className="w-5 cursor-pointer sm:hidden"
          src={assets.menu_icon}
          alt="menu icon"
        />
      </div>
      {/* SideMenu for Small Screen */}
      <div
        className={`absolute top-0 right-0 bottom-0 duration-500 overflow-hidden ease-in-out bg-white ${
          isVisible ? "w-full" : "w-0"
        } `}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => {
              setisVisible(false);
            }}
            className="flex cursor-pointer items-center gap-4 p-3"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt="dropdownicon"
            />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setisVisible(false)}
            className="border py-2 pl-6 border-gray-200"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setisVisible(false)}
            className="border py-2 pl-6 border-gray-200"
            to={"/men"}
          >
            Men
          </NavLink>
          <NavLink
            onClick={() => setisVisible(false)}
            className="border py-2 pl-6 border-gray-200"
            to={"/women"}
          >
            Women
          </NavLink>
          <NavLink
            onClick={() => setisVisible(false)}
            className="border py-2 pl-6 border-gray-200"
            to={"/kids"}
          >
            Kids
          </NavLink>
          <NavLink
            onClick={() => setisVisible(false)}
            className="border py-2 pl-6 border-gray-200"
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setisVisible(false)}
            className="border py-2 pl-6 border-gray-200"
            to={"/contact"}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
