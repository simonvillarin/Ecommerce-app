import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import error from "../assets/images/error.png";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Box sx={{ padding: "5rem" }}>
      <Stack justifyContent="center" alignItems="center">
        <Typography variant="h1" align="center">
          Uh-oh...
        </Typography>
        <Typography variant="h5" align="center">
          The page you are looking for may have been removed, deleted or
          possibly never existed
        </Typography>
        <img src={error} alt="no img" />
        <Button variant="contained">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Back to Homepage
          </Link>
        </Button>
      </Stack>
    </Box>
  );
}

export default Error;
