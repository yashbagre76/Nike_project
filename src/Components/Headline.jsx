import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { keyframes } from "@mui/system";

function Headline() {
  const navigate = useNavigate();

  // Keyframes for animations
  const fadeIn = keyframes`
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `;

  const logoHover = keyframes`
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  `;

  return (
    <Box>
      {/* AppBar for the top navigation */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          animation: `${fadeIn} 1s ease-out`,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo Section */}
          <Box>
            <img
              src="\src\assets\brand_logo.png"
              alt="logo"
              style={{
                width: "64px",
                height: "auto",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </Box>

          {/* Menu Section */}
          <Box
            display="flex"
            gap={4}
            sx={{
              "& button": {
                transition: "color 0.3s ease, transform 0.3s ease",
              },
              "& button:hover": {
                color: "orange",
                transform: "scale(1.1)",
              },
            }}
          >
            <Button color="inherit" onClick={() => navigate("/menu")}>
              Menu
            </Button>
            <Button color="inherit" onClick={() => navigate("/location")}>
              Location
            </Button>
            <Button color="inherit" onClick={() => navigate("/about")}>
              About
            </Button>
            <Button color="inherit" onClick={() => navigate("/contact")}>
              Contact
            </Button>
          </Box>

          {/* Authentication Buttons */}
          <Box>
            <Button
              variant="contained"
              color="primary"
              sx={{
                animation: `${fadeIn} 1.2s ease-out`,
                transition: "transform 0.3s ease, background-color 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  backgroundColor: "darkblue",
                },
              }}
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                marginLeft: 2,
                animation: `${fadeIn} 1.4s ease-out`,
                transition: "transform 0.3s ease, color 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  color: "orange",
                  borderColor: "orange",
                },
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Headline;
