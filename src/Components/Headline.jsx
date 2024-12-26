import React, { useDebugValue } from "react";

function Headline() {
  return (
    <div>
      <nav className=" flex justify-between items-center p-4 bg-gray-100">
        <div className=" logo">
          <img
            src="\project.img\brand_logo.png"
            alt="logo"
            className=" w-16 h-auto"
          />
        </div>
        <ul className="flex space-x-8">
          <li href="#" className=" text-grey-700 hover:text-red-500">
            {" "}
            Menu{" "}
          </li>
          <li href="#" className=" text-grey-700 hover:text-red-500">
            Location
          </li>
          <li href="#" className=" text-grey-700 hover:text-red-500">
            {" "}
            About{" "}
          </li>
          <li href="#" className=" text-grey-700 hover:text-red-500">
            {" "}
            Contact{" "}
          </li>
        </ul>
        <button className="px-4 py-1 h- m-8  bg-orange-800 text-white font-medium">
          Login
        </button>
      </nav>
    </div>
  );
}
export default Headline;
