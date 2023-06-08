import React from "react";

import Logo from "../assets/logo.svg";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <h1 className="text-3xl font-black">W</h1>

          <button className="btn btn-sm">
            {" "}
            <a href="#contact"> Work with me</a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
