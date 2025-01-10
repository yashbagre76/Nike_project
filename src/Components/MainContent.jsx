import React, { useState, useEffect } from "react";
import { Box, Skeleton, Button, Typography } from "@mui/material";

function MainContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main>
        <Box
          sx={{
            py: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 1280,
            mx: "auto",
            px: 4,
          }}
        >
          <Skeleton
            variant="rectangular"
            width="100%"
            height={500}
            sx={{ borderRadius: 2, mb: 4 }}
          />
        </Box>
      </main>
    );
  }

  return (
    <main>
      {/* Video Background */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <video
          src="/Untitled video - Made with Clipchamp_1736442133511.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />

        {/* Content Overlaid on Video */}
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "white",
            textAlign: "center",
            px: 4,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              marginTop: 50,
              fontSize: "1.25rem",
              paddingX: 6,
              paddingY: 2,
              borderRadius: 4,
              boxShadow: 2,
              "&:hover": {
                backgroundColor: "darkblue",
                transform: "scale(1.05)",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      {/* Additional Button Below Video */}
      <Box
        sx={{
          py: 6,

          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f5f5f5", // Light background for contrast
          textAlign: "center",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          size="large"
          sx={{
            fontSize: "1.25rem",
            paddingX: 6,
            paddingY: 2,
            borderRadius: 4,
            borderWidth: 2,
            "&:hover": {
              backgroundColor: "primary.light",
              transform: "scale(1.05)",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </main>
  );
}

export default MainContent;
