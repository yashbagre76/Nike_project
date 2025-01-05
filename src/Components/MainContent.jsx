import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Grid } from "@mui/material";

function MainContent() {
  return (
    <main>
      <Box
        sx={{
          py: 8,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          maxWidth: 1280,
          mx: "auto",
          px: 4,
        }}
      >
        {/* Text Content */}
        <Box
          sx={{
            width: "100%",
            md: { width: "50%" },
            textAlign: { xs: "center", md: "left" },
            mb: { xs: 8, md: 0 },
          }}
        >
          {/* Heading */}
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 6 }}>
            YOUR FEET DESERVE THE BEST
          </Typography>

          {/* Description */}
          <Typography
            variant="h5"
            sx={{ color: "gray", mb: 6, fontWeight: "medium" }}
          >
            YOUR FEET DESERVE THE BEST, AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES.
          </Typography>

          {/* Buttons Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
              mb: 6,
            }}
          >
            <Link to="/products">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "orange",
                  fontWeight: "medium",
                  paddingX: 6,
                  paddingY: 3,
                  fontSize: "1.125rem",
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "darkorange",
                    transform: "scale(1.05)",
                  },
                }}
              >
                Shop Now
              </Button>
            </Link>
            <Button
              variant="outlined"
              sx={{
                borderColor: "orange",
                color: "orange",
                fontWeight: "medium",
                paddingX: 6,
                paddingY: 3,
                fontSize: "1.125rem",
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "orange",
                  color: "white",
                  transform: "scale(1.05)",
                },
              }}
            >
              Category
            </Button>
          </Box>

          {/* Shopping Section (smaller size) */}
          <Box>
            <Typography variant="body2" sx={{ color: "gray", mb: 1 }}>
              Also Available On
            </Typography>
            <img
              src="/src/assets/shops.png"
              alt="Shop logos"
              style={{
                display: "block",
                margin: "0 auto",
                maxWidth: "25%",
              }}
            />
          </Box>
        </Box>

        {/* Hero Image */}
        <Box
          sx={{
            width: "100%",
            md: { width: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/src/assets/shoe_image.png"
            alt="Hero Shoe"
            style={{
              maxWidth: "800px",
              maxHeight: "800px",
              objectFit: "contain",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </main>
  );
}

export default MainContent;
