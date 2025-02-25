import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setsearch, setshowSearch, showSearch } =
    useContext(ShopContext);
  const [isVisible, setisVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection", "men", "women", "kids")) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  }, [location]);

  return showSearch && isVisible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full sm:w-1/2 w-3/4">
        <input
          value={search}
          onChange={(e) => {
            setsearch(e.target.value);
          }}
          className="flex-1 outline-none bg-inherit text-sm "
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="search icon" />
      </div>
      <img
        onClick={() => {
          setshowSearch(false);
        }}
        className="inline w-3 cursor-pointer "
        src={assets.cross_icon}
        alt="close icon"
      />
    </div>
  ) : (
    ""
  );
};

export default SearchBar;
