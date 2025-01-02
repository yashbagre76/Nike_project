import React from "react";
import JordernHigh from " ./assets/AIR+JORDAN+1+HIGH+G.png";
import AirJordernLow from ".assetsAIR+JORDAN+1+LOW.png";
import AirJordernLowPrm from ".assetsAIR+JORDAN+1+LOW+PRM.png";
import AirJordernLowSe from ".assetsAIR+JORDAN+1+LOW+SE.png";
import AirJordernMid from ".Nike_projectsrcassetsAIR+JORDAN+1+MID.png";
import AirJordernMidSe from ".Nike_projectsrcassetsAIR+JORDAN+1+MID+SE.png";
import AirJordernRetroHigh from ".Nike_projectsrcassetsAIR+JORDAN+1+RETRO+HIGH+OG.png";
import AirJorderRetroLow from ".Nike_projectsrcassetsAIR+JORDAN+1+ZM+AIR+CMFT+2.png";
import AirJordernZmAir from "Nike_projectsrcassetsJORDAN+AIR+SHIP+PE+SP.png";
import AirJordernRetroLowOg from ".Nike_projectsrcassetsWMNS+AIR+JORDAN+1+RETRO+LOW+OG.png";

function Products() {
  const shoesInfo = [
    {
      id: 1,
      name: "JordernHigh",
      img: JordernHigh,
      price: $150,
    },
    {
      id: 2,
      name: "Air+Jordern+1+Low+prm",
      img: AirJordernLowPrm,
      price: $180,
    },
    {
      id: 3,
      name: "Air+Jordern+1+Low",
      img: AirJordernLow,
      price: $160,
    },
    {
      id: 4,

      name: " Air+ordern+LowSe",
      img: AirJordernLowSe,
      price: $170,
    },
    {
      id: 5,
      name: "Air+Jordern+1+Mid",
      img: AirJordernMid,
      price: $140,
    },
    {
      id: 6,
      name: "Air+Jordern+1+Mid+Se",
      img: AirJordernMidSe,
      price: $130,
    },
    {
      id: 7,
      name: "Air+Jordern+1+RetroHigh",
      img: AirJordernRetroHigh,
      price: $190,
    },
    {
      id: 8,
      name: "Air+Jordern+1+Retro+Low",
      img: AirJorderRetroLow,
      price: $220,
    },
    {
      id: 9,
      name: "Air+Jordern+1+Retro+ZmAir",
      img: AirJordernZmAir,
      price: $145,
    },
    {
      id: 10,
      name: "Air+Jordern+1+Retro+LowOg",
      img: AirJordernRetroLowOg,
      price: $230,
    },
  ];

  return (
    <>
      <div>shoesInfo(img)</div>
    </>
  );
}

export default Products;
