import React, { useDebugValue } from "react";

function Headline() {
  return (
    <div>
      <nav>
        <div className=" logo">
          <img src="\project.img\brand_logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#"> Menu </li>
          <li href="#">Location</li>
          <li href="#"> About </li>
          <li href="#"> Contact </li>
        </ul>
        <button> Login </button>
      </nav>
    </div>
  );
}
export default Headline;
