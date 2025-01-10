import React, { useState, useEffect } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import SkeletonLoader from "./SkeletonLoader"; // Adjust path to your skeleton component
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
  const [loading, setLoading] = useState(true); // Loading state
  const products = [
    {
      id: 1,
      name: "Air Jordan-SE",
      price: "$150",
      img: xyz,
    },
    {
      id: 2,
      name: "Air Jordan-AIR",
      price: "$180",
      img: QWY,
    },
    {
      id: 3,
      name: "Air Jordan-1-HIGH",
      price: "$270",
      img: ERT,
    },
    {
      id: 4,
      name: "Air Jordan-1-LOW",
      price: "$190",
      img: DSF,
    },
    {
      id: 5,
      name: "Air Jordan-1-LOW-PREM",
      price: "$189",
      img: VBVF,
    },
    {
      id: 6,
      name: "Air-Jordan-MID",
      price: "$150",
      img: SVS,
    },
    {
      id: 7,
      name: "Air-Jordan- OG",
      price: "$300",
      img: BFBN,
    },
    {
      id: 8,
      name: "Air-Jordan- OG",
      price: "$300",
      img: GFDEGDF,
    },
    {
      id: 9,
      name: "Air-Jordan- OG",
      price: "$300",
      img: SFSDV,
    },
    {
      id: 10,
      name: "Air-Jordan- OG",
      price: "$300",
      img: BDGB,
    },
    {
      id: 11,
      name: "RETRO",
      price: "$300",
      img: BVDFBD,
    },
  ];

  useEffect(() => {
    // Simulate a delay for loading
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <Box sx={{ padding: 8 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
        Products
      </Typography>
      <Grid container spacing={6}>
        {loading
          ? // Show Skeleton Loader
            Array.from({ length: 9 }).map((_, index) => (
              <Grid item xs={12} md={4} key={index}>
                <SkeletonLoader width={345} /> {/* Use your SkeletonLoader */}
              </Grid>
            ))
          : // Show Product Cards
            products.map((product) => (
              <Grid item xs={12} md={4} key={product.id}>
                <Card
                  sx={{
                    maxWidth: 345,
                    boxShadow: 5,
                    borderRadius: 2,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: 10,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt={product.name}
                    height="200"
                    image={product.img}
                    sx={{
                      objectFit: "contain",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontSize: "1rem" }}
                    >
                      {product.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      sx={{
                        fontWeight: "bold",
                        backgroundColor: "#FF5722",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "#e64a19",
                        },
                      }}
                    >
                      Buy now
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        fontWeight: "bold",
                        border: "2px solid #FF5722",
                        color: "#FF5722",
                        "&:hover": {
                          backgroundColor: "#FF5722",
                          color: "white",
                        },
                      }}
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}

export default Products;
