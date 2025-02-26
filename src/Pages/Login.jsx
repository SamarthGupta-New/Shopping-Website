import React from "react";
import { useState } from "react";

const Login = () => {
  function HandleSubmit(e) {
    e.preventDefault();
  }
  const [currentState, setcurrentState] = useState("Login");
  return (
    <form
      onSubmit={HandleSubmit}
      className="flex flex-col items-center w-[90%] sm:max-w-96 gap-4 text-gray-800 m-auto mt-14"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      <input
        type="text"
        className={`w-full px-3 py-2 border border-gray-800 ${
          currentState === "Login" ? "hidden" : ""
        }`}
        placeholder="Name"
        required
      />
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="E-mail"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Password"
        required
      />
      <div className="w-full  flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer hover:text-red-400">
          Forgot your password?
        </p>
        {currentState === "Login" ? (
          <p
            onClick={() => setcurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Creat account
          </p>
        ) : (
          <p
            onClick={() => setcurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white cursor-pointer px-8 font-light py-2 mt-4">
        {currentState}
      </button>
    </form>
  );
};

export default Login;
