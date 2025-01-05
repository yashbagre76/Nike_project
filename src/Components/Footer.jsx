import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

function Footer() {
  const currentDate = new Date();

  return (
    <footer className="bg-black text-white py-8">
      <Container>
        {/* Top Section */}
        <Grid container spacing={6} borderBottom="1px solid #4a4a4a" pb={6}>
          {/* Resources Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Resources
            </Typography>
            <Box>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Find A Store
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Become A Member
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Send Us Feedback
              </Link>
            </Box>
          </Grid>

          {/* Help Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Get Help
            </Typography>
            <Box>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Order Status
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Delivery
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Return
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Payment Options
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Company Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Nike
            </Typography>
            <Box>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Guides
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Terms of Sales
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Terms of Use
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Nike Privacy Policy
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box mt={6}>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Typography variant="body2" color="textSecondary" align="center">
              {currentDate.getFullYear()} Nike, Inc. All rights reserved.
            </Typography>
            <Box
              mt={{ xs: 2, md: 0 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Link href="#" color="inherit" sx={{ ml: 3 }}>
                Guides
              </Link>
              <Link href="#" color="inherit" sx={{ ml: 3 }}>
                Terms of Sales
              </Link>
              <Link href="#" color="inherit" sx={{ ml: 3 }}>
                Terms of Use
              </Link>
              <Link href="#" color="inherit" sx={{ ml: 3 }}>
                Nike Privacy Policy
              </Link>
            </Box>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
