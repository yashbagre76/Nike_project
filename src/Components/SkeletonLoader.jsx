// SkeletonLoader.jsx
import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const SkeletonLoader = ({ width = 300 }) => {
  return (
    <Box sx={{ width }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default SkeletonLoader;
