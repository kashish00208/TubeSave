"use client";
import React from "react";

const NavBar = () => {
  return (
    <div className="w-full p-4 flex justify-between text-white shadow-2xl">
      <h1 className="text-xl font-bold font-sans">TubeSave</h1>
      <div className="text-md ">
        <button className=" border-white border-2 rounded-lg px-2 mr-2 font-bold">Log In</button>
        <button className="bg-white text-gray-900 rounded-lg font-bold px-2 mr-2">Sign Up</button>
      </div>
    </div>
  );
};

export default NavBar;
