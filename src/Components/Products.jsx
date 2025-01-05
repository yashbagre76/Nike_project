import * as React from "react";
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

  return (
    <Box sx={{ padding: 8 }}>
      <Typography variant="h3" gutterBottom>
        Our Products
      </Typography>
      <Grid container spacing={6}>
        {products.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.img}
                sx={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Buy now</Button>
                <Button size="small"> Details</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
