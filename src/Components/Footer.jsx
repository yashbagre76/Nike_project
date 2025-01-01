import { current } from "@reduxjs/toolkit";
import React from "react";

let currentDate = new Date();

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto grid grid-col-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
          <div className="">
            <h4 className=" text-lg font-semibold uppercase mb-4 ">
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:underline text-sm">
                  {" "}
                  Find A store
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline text-sm">
                  Become A Member
                </a>{" "}
              </li>
              <li>
                <a href="#" className=" hover:underline text-sm">
                  {" "}
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>
          {/* Help Section */}
          <div>
            <h4 className="text-lg font-semibold uppercase mb-4">Get Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:underline text-sm">
                  {" "}
                  Order Status
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline text-sm"></a> Delivery
              </li>
              <li>
                <a href="#" className=" hover:underline text-sm"></a> Return{" "}
              </li>
              <li>
                <a href="#" className=" hover:underline text-sm"></a> Payment
                Options
              </li>
              <li>
                <a href="#" className=" hover:underline text-sm"></a> Contact Us{" "}
              </li>
            </ul>
          </div>
          {/* Company Section  */}
          <div>
            <h4>About Nike</h4>
            <ul>
              <li>
                <a href="#" className=" hover:underline text-sm">
                  {" "}
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline text-sm">
                  {" "}
                  Terms pf Sales
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline text-sm">
                  {" "}
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline text-sm">
                  {" "}
                  Nike Privacy Policy{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/*Footer Bootam Section */}
        <div className=" container mx-auto flex flex-col md:flex-row jutify-between  items-center mt-6 text-sm">
          <p className=" text-gray-400">
            2025 Nike , Inc . All rights reserved{" "}
          </p>
          <ul className="flex space-x-4 mt-4 md:mt-0">
            <li>
              <a href="#" className=" hover:underline text-sm">
                {" "}
                Guides
              </a>
            </li>
            <li>
              <a href="# " className=" hover:underline text-sm">
                {" "}
                Terms of Sales
              </a>
            </li>
            <li>
              <a href="#" className=" hover:underline text-sm">
                {" "}
                Terms of Use
              </a>
            </li>
            <li>
              <a href=" #" className=" hover:underline text-sm">
                {" "}
                Nike Privacy Policy{" "}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
