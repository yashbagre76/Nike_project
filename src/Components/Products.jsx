import React from "react";
import xyz from "../../public/Img/JORDER_SE.jpg";
import QWY from "../../public/Img/JORDERN-AIR.jpg";
import ERT from "../../public/Img/JORDERN-HIGH.jpg";
import DSF from "../../public/Img/JORDERN-LOW.jpg";
import VBVF from "../../public/Img/JORDERN-LOW0.jpg";
import SVS from "../../public/Img/JORDERN-MID.jpg";
import BFBN from "../../public/Img/JORDERN-OG.jpg";
import GFDEGDF from "../../public/Img/JORDERN-SE-mid.jpg";
import SFSDV from "../../public/Img/JORDERN-SIP.jpg";
import BDGB from "../../public/Img/RETRO-LOW.jpg";
import BVDFBD from "../../public/Img/RETRO.jpg";

function Products() {
  const products = [
    {
      id: 1,
      name: "Air Jordan-SE",
      price: "$150",
      img: xyz, // Add image path here
    },
    {
      id: 2,
      name: "Air Jordan-AIR",
      price: "$180",
      img: QWY, // Add image path here
    },
    {
      id: 3,
      name: "Air Jordan-1-HIGH",
      price: "$270",
      img: ERT, // Add image path here
    },
    {
      id: 4,
      name: "Air Jordan-1-LOW",
      price: "$190",
      img: DSF, // Add image path here
    },
    {
      id: 5,
      name: "Air Jordan-1-LOW-PREM",
      price: "$189",
      img: VBVF, // Add image path here
    },
    {
      id: 6,
      name: "Air-Jordan-MID",
      price: "$150",
      img: SVS, // Add image path here
    },
    {
      id: 7,
      name: "Air-Jordan- OG",
      price: "$300",
      img: BFBN, // Add image path here
    },
    {
      id: 8,
      name: "Air-Jordan- OG",
      price: "$300",
      img: GFDEGDF, // Add image path here
    },
    {
      id: 9,
      name: "Air-Jordan- OG",
      price: "$300",
      img: SFSDV, // Add image path here
    },
    {
      id: 10,
      name: "Air-Jordan- OG",
      price: "$300",
      img: BDGB, // Add image path here
    },
    {
      id: 11,
      name: "RETRO",
      price: "$300",
      img: BVDFBD, // Add image path here
    },
    // Add more products here
  ];

  return (
    <div className="products-page p-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card border p-4 rounded-lg shadow-lg"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-lg text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
