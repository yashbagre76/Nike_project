import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

function LoginCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data Submitted:", formData);
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          p: 4,
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              size="small"
            />
          </Box>

          <Box mb={3}>
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
              variant="outlined"
              size="small"
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>

        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            Don't have an account?{" "}
            <Button
              variant="text"
              color="primary"
              onClick={() => navigate("/register")}
            >
              Register here
            </Button>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginCard;
