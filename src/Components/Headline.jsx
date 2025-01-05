import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";

function Headline() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* AppBar for the top navigation */}
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo Section */}
          <Box>
            <img
              src="\src\assets\brand_logo.png"
              alt="logo"
              style={{ width: "64px", height: "auto" }}
            />
          </Box>

          {/* Menu Section */}
          <Box display="flex" gap={4}>
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
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/login")}
              sx={{ marginLeft: 2 }}
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
